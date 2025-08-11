-- Secure SELECT access for ea_intake_submissions and add role-based access

-- 1) Create enum for roles if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'app_role') THEN
    CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');
  END IF;
END
$$;

-- 2) Create user_roles table (to assign roles to users)
CREATE TABLE IF NOT EXISTS public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Minimal policy so users can see their own roles (optional, does not affect security definer checks)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies WHERE polname = 'Users can view own roles' AND schemaname = 'public' AND tablename = 'user_roles'
  ) THEN
    CREATE POLICY "Users can view own roles"
    ON public.user_roles
    FOR SELECT
    TO authenticated
    USING (user_id = auth.uid());
  END IF;
END
$$;

-- 3) Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  );
$$;

-- 4) Restrict SELECT on ea_intake_submissions to authenticated admins only
-- Ensure RLS is enabled (it already is, but this is safe)
ALTER TABLE public.ea_intake_submissions ENABLE ROW LEVEL SECURITY;

-- Drop overly-permissive SELECT policy if it exists
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE schemaname = 'public' AND tablename = 'ea_intake_submissions' 
      AND polname = 'Admins can view EA intake submissions'
  ) THEN
    DROP POLICY "Admins can view EA intake submissions" ON public.ea_intake_submissions;
  END IF;
END
$$;

-- Create secure SELECT policy for admins only
CREATE POLICY "Admins can view EA intake submissions"
ON public.ea_intake_submissions
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Keep existing public INSERT policy as-is to avoid breaking the intake form
-- (No changes made to INSERT policies) 
