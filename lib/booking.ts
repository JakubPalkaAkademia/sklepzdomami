const MONTHS_PL = [
  "styczeń",
  "luty",
  "marzec",
  "kwiecień",
  "maj",
  "czerwiec",
  "lipiec",
  "sierpień",
  "wrzesień",
  "październik",
  "listopad",
  "grudzień",
] as const;

export function getWeekdayLabels(): readonly string[] {
  return ["P", "W", "Ś", "C", "P", "S", "N"];
}

export function getMonthLabel(year: number, month: number): string {
  return `${MONTHS_PL[month]} ${year}`;
}

export function startOfDay(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function isBeforeDay(a: Date, b: Date): boolean {
  return startOfDay(a).getTime() < startOfDay(b).getTime();
}

export function addMonths(date: Date, delta: number): Date {
  return new Date(date.getFullYear(), date.getMonth() + delta, 1);
}

/** Monday-first grid cells for a month view. Leading/trailing cells are null. */
export function getMonthGrid(year: number, month: number): (Date | null)[] {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: (Date | null)[] = [];

  for (let i = 0; i < startOffset; i += 1) cells.push(null);
  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(new Date(year, month, day));
  }
  while (cells.length % 7 !== 0) cells.push(null);

  return cells;
}

export function formatVisitDate(date: Date): string {
  return new Intl.DateTimeFormat("pl-PL", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatVisitDateShort(date: Date): string {
  return new Intl.DateTimeFormat("pl-PL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(date);
}

export function buildVisitMailto(params: {
  email: string;
  subject: string;
  date: Date;
  time: string;
  locationLine: string;
  phone: string;
}): string {
  const { email, subject, date, time, locationLine, phone } = params;
  const body = [
    "Dzień dobry,",
    "",
    "Chciałbym/chciałabym umówić wizytę / oględziny obiektu:",
    locationLine,
    "",
    `Preferowany termin: ${formatVisitDate(date)} o ${time}`,
    "",
    "Proszę o potwierdzenie lub propozycję innego terminu.",
    "",
    `Telefon kontaktowy: ${phone}`,
  ].join("\n");

  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
