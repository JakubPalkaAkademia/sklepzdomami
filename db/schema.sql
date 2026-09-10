CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  date DATE NOT NULL,
  time VARCHAR(5) NOT NULL,
  first_name VARCHAR(120) NOT NULL,
  last_name VARCHAR(120) NOT NULL,
  email VARCHAR(254) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  locale VARCHAR(5) NOT NULL DEFAULT 'pl',
  google_event_id VARCHAR(255),
  status VARCHAR(20) NOT NULL DEFAULT 'confirmed',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE UNIQUE INDEX IF NOT EXISTS bookings_date_time_confirmed_idx
  ON bookings (date, time)
  WHERE status = 'confirmed';

CREATE INDEX IF NOT EXISTS bookings_date_idx ON bookings (date);
