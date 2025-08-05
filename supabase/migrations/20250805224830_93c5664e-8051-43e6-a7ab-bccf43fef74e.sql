-- Enable Row Level Security on lead_captures table  
ALTER TABLE public.lead_captures ENABLE ROW LEVEL SECURITY;

-- Since this is a lead capture table that doesn't require user authentication,
-- we'll allow anyone to insert leads but prevent reading/updating by unauthorized users
CREATE POLICY "Anyone can insert leads" 
ON public.lead_captures 
FOR INSERT 
WITH CHECK (true);

-- Fix the search path for the update function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER 
LANGUAGE plpgsql
SECURITY DEFINER 
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;