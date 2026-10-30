CREATE TABLE public.appointments (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  department TEXT NOT NULL,
  doctor TEXT,
  preferred_at TIMESTAMPTZ NOT NULL,
  message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  CONSTRAINT appointments_phone_e164_check CHECK (phone ~ '^[+][1-9][0-9]{1,14}$')
);
