-- Add contact information fields to ea_intake_submissions table
ALTER TABLE public.ea_intake_submissions 
ADD COLUMN name text NOT NULL DEFAULT '',
ADD COLUMN email text NOT NULL DEFAULT '',
ADD COLUMN phone text;