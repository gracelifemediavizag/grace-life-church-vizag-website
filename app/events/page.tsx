import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import EventsList, { type ChurchEvent } from './EventsList';
import EventsHero from './EventsHero';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming events and gatherings at Grace Life Church Vizag — worship services, prayer meetings, youth fellowship, and more.',
};

/* ── Recurring event expansion ─────────────────────────────────────────────── */

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function toISODate(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

/** Return the Nth occurrence (1-based) of a given weekday in a given month/year. */
function nthDayOfMonth(year: number, month: number, weekday: number, n: number): Date | null {
  const first = new Date(year, month, 1);
  const offset = (weekday - first.getDay() + 7) % 7;
  const day = 1 + offset + (n - 1) * 7;
  if (day > new Date(year, month + 1, 0).getDate()) return null;
  return new Date(year, month, day);
}

/**
 * Given a recurrenceDay string, return the next `count` ISO date strings from today.
 * Supported formats:
 *   "Sunday"              — every week on that day
 *   "2nd Friday"          — single nth occurrence per month
 *   "1st & 3rd Thursday"  — two nth occurrences per month
 */
function getNextOccurrences(recurrenceDay: string, count: number): string[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dates: string[] = [];

  // "1st & 3rd Thursday" — multiple nth occurrences per month
  const multiNthMatch = recurrenceDay.match(
    /^(\d+)(st|nd|rd|th)\s*&\s*(\d+)(st|nd|rd|th)\s+(.+)$/i
  );
  if (multiNthMatch) {
    const nth1 = parseInt(multiNthMatch[1], 10);
    const nth2 = parseInt(multiNthMatch[3], 10);
    const dayName = multiNthMatch[5].trim();
    const weekday = DAY_NAMES.indexOf(dayName);
    if (weekday === -1) return [];

    let year = today.getFullYear();
    let month = today.getMonth();
    while (dates.length < count) {
      const d1 = nthDayOfMonth(year, month, weekday, nth1);
      const d2 = nthDayOfMonth(year, month, weekday, nth2);
      const candidates = [d1, d2]
        .filter((d): d is Date => d !== null && d >= today)
        .map(toISODate)
        .sort();
      for (const iso of candidates) {
        if (dates.length < count) dates.push(iso);
      }
      month++;
      if (month > 11) { month = 0; year++; }
      if (year > today.getFullYear() + 2) break;
    }
    return dates;
  }

  // "2nd Friday" — single nth occurrence per month
  const nthMatch = recurrenceDay.match(/^(\d+)(st|nd|rd|th)\s+(.+)$/i);
  if (nthMatch) {
    const nth = parseInt(nthMatch[1], 10);
    const dayName = nthMatch[3].trim();
    const weekday = DAY_NAMES.indexOf(dayName);
    if (weekday === -1) return [];

    let year = today.getFullYear();
    let month = today.getMonth();
    while (dates.length < count) {
      const d = nthDayOfMonth(year, month, weekday, nth);
      if (d && d >= today) dates.push(toISODate(d));
      month++;
      if (month > 11) { month = 0; year++; }
      if (year > today.getFullYear() + 2) break;
    }
    return dates;
  }

  // "Sunday", "Wednesday" etc. — every week
  const weekday = DAY_NAMES.indexOf(recurrenceDay.trim());
  if (weekday === -1) return [];

  const d = new Date(today);
  const daysUntil = (weekday - d.getDay() + 7) % 7;
  d.setDate(d.getDate() + daysUntil);
  while (dates.length < count) {
    dates.push(toISODate(new Date(d)));
    d.setDate(d.getDate() + 7);
  }

  return dates;
}

/* ─────────────────────────────────────────────────────────────────────────── */

export default async function EventsPage() {
  const reader = createReader(process.cwd(), config);
  const allEntries = await reader.collections.events.all();

  let idCounter = 0;
  const events: ChurchEvent[] = [];

  for (const { entry } of allEntries) {
    if (entry.isRecurring && entry.recurrenceDay) {
      // Expand into the next 8 occurrences
      const dates = getNextOccurrences(entry.recurrenceDay, 8);
      for (const date of dates) {
        events.push({
          id: idCounter++,
          title: entry.title,
          date,
          time: entry.time ?? '',
          location: entry.location ?? '',
          description: entry.description ?? '',
          isPast: false,
        });
      }
    } else {
      events.push({
        id: idCounter++,
        title: entry.title,
        date: entry.date ?? '',
        time: entry.time ?? '',
        location: entry.location ?? '',
        description: entry.description ?? '',
        isPast: entry.isPast ?? false,
      });
    }
  }

  events.sort((a, b) => (a.date > b.date ? 1 : -1));

  return (
    <>
      <NavBar />
      <main>
        <EventsHero />

        {/* Client component handles toggle + list */}
        <EventsList events={events} />

        {/* CTA */}
        <section className="py-20 px-6 md:px-10 bg-[#3399CC]">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2
                className="text-3xl text-white mb-3"
                style={{ fontWeight: 400, fontFamily: 'var(--font-poppins)' }}
              >
                Join us this Sunday
              </h2>
              <p
                className="text-white/75 text-lg"
                style={{ fontWeight: 300, fontFamily: 'var(--font-poppins)' }}
              >
                All are welcome. We would love to have you worship with us.
              </p>
            </div>
            <a
              href="/im-new"
              className="shrink-0 px-10 py-4 bg-white hover:bg-[#E0E0E0] transition-colors text-[0.75rem] uppercase tracking-widest"
              style={{
                color: '#3399CC',
                fontFamily: 'var(--font-lato)',
                fontWeight: 700,
                borderRadius: 4,
                textDecoration: 'none',
              }}
            >
              Plan Your Visit
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
