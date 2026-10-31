CREATE TABLE public.inquiries (
  id text PRIMARY KEY,
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  website text,
  services text[] NOT NULL DEFAULT '{}',
  budget text,
  timeline text,
  message text,
  hear_about text,
  source text NOT NULL DEFAULT '/contact',
  status text NOT NULL DEFAULT 'new',
  notes text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.inquiries TO service_role;
ALTER TABLE public.inquiries ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.admin_sessions (
  token_hash text PRIMARY KEY,
  username text NOT NULL,
  expires_at timestamptz NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.admin_sessions TO service_role;
ALTER TABLE public.admin_sessions ENABLE ROW LEVEL SECURITY;

CREATE INDEX inquiries_created_at_idx ON public.inquiries (created_at DESC);