-- Create newsletter signups table
CREATE TABLE public.newsletter_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public signup form)
CREATE POLICY "Anyone can signup for newsletter" 
ON public.newsletter_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reading (admin only)
CREATE POLICY "No public access to newsletter signups" 
ON public.newsletter_signups 
FOR SELECT 
USING (false);