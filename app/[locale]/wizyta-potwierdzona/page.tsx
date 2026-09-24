import type { Metadata } from "next";
import { BookingConfirmationGate } from "@/components/BookingConfirmationGate";
import { getDictionary } from "@/lib/i18n";
import { resolveLocale } from "@/lib/i18n/params";
import { pageMetadata } from "@/lib/i18n/seo";
import { BOOKING_CONFIRMATION_PATH } from "@/lib/booking-confirmation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const locale = await resolveLocale(params);
  const dict = getDictionary(locale);
  return pageMetadata(
    locale,
    BOOKING_CONFIRMATION_PATH,
    dict.metadata.bookingConfirmationTitle,
    dict.metadata.bookingConfirmationDescription,
    { noIndex: true },
  );
}

export default function BookingConfirmationPage() {
  return (
    <div className="page page--booking-confirmation">
      <BookingConfirmationGate />
    </div>
  );
}
