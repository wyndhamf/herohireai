-- Update the existing tables to support the new conditional logic requirements

-- Add new columns to ea_intake_submissions table for conditional logic
ALTER TABLE public.ea_intake_submissions 
ADD COLUMN looking_for_ea TEXT,
ADD COLUMN location_country TEXT,
ADD COLUMN lead_status TEXT DEFAULT 'nurture_no_link',
ADD COLUMN market TEXT;

-- Add new columns to lead_captures table for conditional logic  
ALTER TABLE public.lead_captures
ADD COLUMN company_name TEXT,
ADD COLUMN company_size TEXT,
ADD COLUMN current_revenue TEXT,
ADD COLUMN looking_for_ea TEXT,
ADD COLUMN location_country TEXT,
ADD COLUMN lead_status TEXT DEFAULT 'nurture_no_link',
ADD COLUMN market TEXT;

-- Create a table for tracking Google Calendar bookings
CREATE TABLE IF NOT EXISTS public.calendar_bookings (
    id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    company_name TEXT,
    phone TEXT,
    booking_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on calendar_bookings
ALTER TABLE public.calendar_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for calendar_bookings
CREATE POLICY "Admins can view calendar bookings" 
ON public.calendar_bookings 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Anyone can insert calendar bookings" 
ON public.calendar_bookings 
FOR INSERT 
WITH CHECK (true);

-- Add trigger for calendar_bookings timestamps
CREATE TRIGGER update_calendar_bookings_updated_at
BEFORE UPDATE ON public.calendar_bookings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();