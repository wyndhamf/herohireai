-- Create new intake form submissions table
CREATE TABLE public.new_intake_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Contact Information
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT NOT NULL,
  job_title TEXT NOT NULL,
  
  -- Company Details
  company_size TEXT NOT NULL,
  industry TEXT NOT NULL,
  annual_revenue TEXT NOT NULL,
  website_url TEXT,
  
  -- Project Information
  project_type TEXT NOT NULL,
  project_budget TEXT NOT NULL,
  project_timeline TEXT NOT NULL,
  project_description TEXT NOT NULL,
  
  -- Requirements
  required_skills TEXT[] NOT NULL DEFAULT '{}',
  team_size_needed TEXT NOT NULL,
  work_arrangement TEXT NOT NULL,
  start_date TEXT NOT NULL,
  
  -- Additional Information
  previous_experience TEXT,
  specific_requirements TEXT,
  how_did_you_hear TEXT,
  
  -- System fields
  lead_status TEXT DEFAULT 'new',
  priority_level TEXT DEFAULT 'medium',
  assigned_to TEXT,
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.new_intake_submissions ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Anyone can submit new intake forms" 
ON public.new_intake_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins can view new intake submissions" 
ON public.new_intake_submissions 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admins can update new intake submissions" 
ON public.new_intake_submissions 
FOR UPDATE 
USING (has_role(auth.uid(), 'admin'::app_role));

-- Create updated_at trigger
CREATE TRIGGER update_new_intake_submissions_updated_at
BEFORE UPDATE ON public.new_intake_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();