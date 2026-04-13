import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import EventsList, { type ChurchEvent } from './EventsList';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

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
 * Given a recurrenceDay string (e.g. "Sunday", "Wednesday", "2nd Friday"),
 * return the next `count` ISO date strings starting from today.
 */
function getNextOccurrences(recurrenceDay: string, count: number): string[] {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dates: string[] = [];

  const nthMatch = recurrenceDay.match(/^(\d+)(st|nd|rd|th)\s+(.+)$/i);

  if (nthMatch) {
    // "2nd Friday" style
    const nth = parseInt(nthMatch[1], 10);
    const dayName = nthMatch[3];
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
  } else {
    // "Sunday", "Wednesday" etc. — every week
    const weekday = DAY_NAMES.indexOf(recurrenceDay);
    if (weekday === -1) return [];

    const d = new Date(today);
    const daysUntil = (weekday - d.getDay() + 7) % 7;
    d.setDate(d.getDate() + daysUntil);

    while (dates.length < count) {
      dates.push(toISODate(new Date(d)));
      d.setDate(d.getDate() + 7);
    }
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
        {/* Page hero */}
        <section
          className="flex items-end pb-16 px-6 md:px-10"
          style={{ background: '#1A1A1A', paddingTop: '10rem', minHeight: '36vh' }}
        >
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="md:pl-[15%]">
            <p
              className="mb-5"
              style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EFBF04' }}
            >
              Calendar
            </p>
            <h1
              className="mb-4"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em' }}
            >
              Events
            </h1>
            <p
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '34rem' }}
            >
              Gather with us — worship, prayer, and community.
            </p>
            </div>
          </div>
        </section>

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
