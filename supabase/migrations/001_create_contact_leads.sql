-- Migration: Create contact_leads table for capturing form submissions
-- Run this in your Supabase SQL Editor

-- Create contact_leads table
CREATE TABLE IF NOT EXISTS contact_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  engagement_type TEXT, -- e.g., 'strategy_call', 'advisory', 'architecture_review'
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_contact_leads_email ON contact_leads(email);
CREATE INDEX IF NOT EXISTS idx_contact_leads_created_at ON contact_leads(created_at DESC);

-- Enable Row Level Security
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert (for form submissions)
CREATE POLICY "Allow public inserts" ON contact_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Policy: Only authenticated users can read (you'll need to add auth later if needed)
-- For now, we'll use service role key for reading in admin contexts
CREATE POLICY "Allow authenticated reads" ON contact_leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Add updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updated_at
CREATE TRIGGER update_contact_leads_updated_at
  BEFORE UPDATE ON contact_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();
