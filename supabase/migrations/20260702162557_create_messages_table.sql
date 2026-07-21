/*
# Create messages table for portfolio contact form

1. New Tables
- `messages`
- `id` (uuid, primary key)
- `name` (text, not null) - sender's name
- `email` (text, not null) - sender's email
- `message` (text, not null) - the message content
- `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `messages`.
- Allow anon + authenticated INSERT (anyone can send a message).
- No SELECT/UPDATE/DELETE for anon (only admin can view via Supabase dashboard).
*/

CREATE TABLE IF NOT EXISTS messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_messages" ON messages;
CREATE POLICY "anon_insert_messages" ON messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);