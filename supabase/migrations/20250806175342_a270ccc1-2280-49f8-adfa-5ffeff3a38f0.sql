-- Create a table for EA intake form submissions
CREATE TABLE public.ea_intake_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Section 1: Goals & Needs
  outcomes TEXT NOT NULL,
  time_wasters TEXT NOT NULL,
  hours_and_timezone TEXT NOT NULL,
  
  -- Section 2: Role & Fit
  remote_ea TEXT NOT NULL CHECK (remote_ea IN ('yes', 'no')),
  budget TEXT NOT NULL,
  focus TEXT NOT NULL CHECK (focus IN ('business', 'personal', 'both')),
  tools TEXT[] NOT NULL,
  
  -- Section 3: Working Style
  previous_experience TEXT NOT NULL,
  communication_preferences TEXT[] NOT NULL,
  leadership_style TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.ea_intake_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert submissions (public form)
CREATE POLICY "Anyone can submit EA intake forms" 
ON public.ea_intake_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow admins to view all submissions
CREATE POLICY "Admins can view EA intake submissions" 
ON public.ea_intake_submissions 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_ea_intake_submissions_updated_at
BEFORE UPDATE ON public.ea_intake_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();