BEGIN;
CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  department TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT contact_messages_phone_e164_check CHECK (phone ~ '^[+][1-9][0-9]{1,14}$')
);
CREATE INDEX IF NOT EXISTS contact_messages_created_at_idx ON contact_messages (created_at);
COMMIT;
