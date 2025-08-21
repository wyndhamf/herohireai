-- Add SELECT policy for lead_captures table to restrict access to admins only
CREATE POLICY "Admins can view lead captures" 
ON public.lead_captures 
FOR SELECT 
USING (has_role(auth.uid(), 'admin'::app_role));