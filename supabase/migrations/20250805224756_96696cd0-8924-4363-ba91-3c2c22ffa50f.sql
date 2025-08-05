-- Create a table for email captures/leads
CREATE TABLE public.lead_captures (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  source TEXT DEFAULT 'email_capture',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create an index for email lookups
CREATE INDEX idx_lead_captures_email ON public.lead_captures(email);

-- Create an index for created_at for sorting
CREATE INDEX idx_lead_captures_created_at ON public.lead_captures(created_at DESC);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_lead_captures_updated_at
  BEFORE UPDATE ON public.lead_captures
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();