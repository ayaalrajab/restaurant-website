CREATE TABLE reservations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  guests INTEGER NOT NULL DEFAULT 2,
  date DATE NOT NULL,
  time TEXT NOT NULL DEFAULT '19:00',
  created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (since this is a restaurant booking form)
CREATE POLICY "Anyone can insert reservations" ON reservations
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Reservations are readable by authenticated users only" ON reservations
  FOR SELECT TO authenticated
  USING (true);

-- Create index for faster queries
CREATE INDEX reservations_date_idx ON reservations(date);
