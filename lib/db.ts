import { neon } from "@neondatabase/serverless";

export type BookingRow = {
  id: string;
  date: string;
  time: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  locale: string;
  google_event_id: string | null;
  status: string;
  created_at: string;
};

export type NewBooking = {
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  locale: string;
};

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }
  return neon(databaseUrl);
}

export async function insertBooking(booking: NewBooking): Promise<BookingRow> {
  const sql = getSql();
  const rows = await sql`
    INSERT INTO bookings (date, time, first_name, last_name, email, phone, locale)
    VALUES (
      ${booking.date},
      ${booking.time},
      ${booking.firstName},
      ${booking.lastName},
      ${booking.email},
      ${booking.phone},
      ${booking.locale}
    )
    RETURNING *
  `;
  const row = rows[0] as BookingRow | undefined;
  if (!row) {
    throw new Error("Failed to insert booking");
  }
  return row;
}

export async function updateBookingGoogleEventId(
  id: string,
  googleEventId: string,
): Promise<void> {
  const sql = getSql();
  await sql`
    UPDATE bookings
    SET google_event_id = ${googleEventId}
    WHERE id = ${id}
  `;
}

export async function getConfirmedBookingsInRange(
  from: string,
  to: string,
): Promise<Pick<BookingRow, "date" | "time">[]> {
  const sql = getSql();
  const rows = await sql`
    SELECT date::text AS date, time
    FROM bookings
    WHERE status = 'confirmed'
      AND date >= ${from}::date
      AND date <= ${to}::date
  `;
  return rows as Pick<BookingRow, "date" | "time">[];
}

export function isDatabaseConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}
