const ISO = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/;

const SHORT_MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const LONG_MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

/**
 * Parsed by hand rather than with `new Date()` on purpose: `new Date("2025-12-01")`
 * is UTC midnight, so a browser behind UTC renders "Nov 2025" while the server
 * renders "Dec 2025" — a hydration mismatch. String parsing is timezone- and
 * locale-independent, so server and client always agree.
 */
function part(value: string | undefined, months: string[]): string {
  if (!value) return "";
  if (/^\d{4}$/.test(value)) return value;

  const match = ISO.exec(value);
  if (!match) return value;

  return `${months[Number(match[2]) - 1]} ${match[1]}`;
}

/** "2021-02-01" + "2025-11-01" -> "Feb 2021 — Nov 2025"; bare years pass through. */
export function formatDateRange(start?: string, end?: string): string {
  const from = part(start, SHORT_MONTHS);
  const to = part(end, SHORT_MONTHS);

  if (from && to) return `${from} — ${to}`;
  return from || to || "";
}

/** "2026-08-28" -> "28 August 2026" */
export function formatPostDate(value?: string): string {
  if (!value) return "";

  const match = ISO.exec(value);
  if (!match) return value;

  const month = LONG_MONTHS[Number(match[2]) - 1];
  return match[3] ? `${Number(match[3])} ${month} ${match[1]}` : `${month} ${match[1]}`;
}
