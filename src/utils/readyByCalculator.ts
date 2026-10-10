/**
 * Ready By / Estimated Delivery Date (EDD) Calculator
 * Implements the exact business rules from Section 13 of the Lilies of the Field Playbook:
 * - Standard turnaround in business days (Monday-Friday only; weekends never count)
 * - 6:00 PM ET cutoff. Before 6 PM, that day is Day 1. After 6 PM, next business day is Day 1.
 * - Saturday / Sunday orders: Monday is Day 1.
 * - Closures and official holidays do not count.
 */

export const CUTOFF_HOUR = 18; // 6:00 PM ET

export const DEFAULT_CLOSURE_DATES = [
  '2026-11-26', // Thanksgiving
  '2026-11-27', // Day after Thanksgiving
  '2026-12-25', // Christmas Day
  '2027-01-01', // New Year's Day
  '2027-01-18', // Martin Luther King Jr. Day
  '2027-05-31', // Memorial Day
  '2027-07-04', // Independence Day
  '2027-09-06', // Labor Day
];

function etParts(date: Date) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour12: false,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
  }).formatToParts(date);

  const p: Record<string, string> = {};
  parts.forEach((x) => {
    p[x.type] = x.value;
  });

  return {
    y: Number(p.year),
    m: Number(p.month),
    d: Number(p.day),
    hour: Number(p.hour) % 24,
  };
}

const pad = (n: number) => String(n).padStart(2, '0');
const keyOf = (d: Date) => `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}`;

export function getReadyBy(orderTime: Date, businessDays: number, closures: string[] = DEFAULT_CLOSURE_DATES): Date {
  const closed = new Set(closures);
  const isOpen = (d: Date) => d.getUTCDay() !== 0 && d.getUTCDay() !== 6 && !closed.has(keyOf(d));
  
  const nextOpen = (d: Date) => {
    do {
      d.setUTCDate(d.getUTCDate() + 1);
    } while (!isOpen(d));
  };

  const t = etParts(orderTime);
  const day = new Date(Date.UTC(t.y, t.m - 1, t.d)); // calendar date in ET

  // If order was placed on an open day before 6:00 PM ET, that day is Day 1.
  // Otherwise, move to the next open business day as Day 1.
  if (!(isOpen(day) && t.hour < CUTOFF_HOUR)) {
    nextOpen(day);
  }

  // Day 1 is counted, iterate for remaining days
  for (let n = 1; n < businessDays; n++) {
    nextOpen(day);
  }

  return day;
}

export function formatReadyBy(day: Date): string {
  return day.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
