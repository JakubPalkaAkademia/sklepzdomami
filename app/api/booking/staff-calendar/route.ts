import { buildIcsFeedContent } from "@/lib/booking";
import { listCalendarEventsForFeed } from "@/lib/google-calendar";

function isAuthorized(request: Request): boolean {
  const token = process.env.BOOKING_CALENDAR_ICS_TOKEN;
  if (!token) {
    return false;
  }

  const url = new URL(request.url);
  const queryToken = url.searchParams.get("token");
  const headerToken = request.headers.get("x-calendar-token");

  return queryToken === token || headerToken === token;
}

export async function GET(request: Request) {
  if (!isAuthorized(request)) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    const events = await listCalendarEventsForFeed();
    const body = buildIcsFeedContent(events);

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "text/calendar; charset=utf-8",
        "Content-Disposition": 'inline; filename="wizyty-szmaragdowa-7.ics"',
        "Cache-Control": "public, max-age=900",
      },
    });
  } catch {
    return new Response("Calendar feed unavailable", { status: 503 });
  }
}
