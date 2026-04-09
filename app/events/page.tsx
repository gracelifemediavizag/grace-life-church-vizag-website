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

export default async function EventsPage() {
  const reader = createReader(process.cwd(), config);
  const allEntries = await reader.collections.events.all();
  const events: ChurchEvent[] = allEntries
    .map(({ slug, entry }, id) => ({
      id,
      title: entry.title,
      date: entry.date ?? '',
      time: entry.time ?? '',
      location: entry.location ?? '',
      description: entry.description ?? '',
      isPast: entry.isPast ?? false,
    }))
    .sort((a, b) => (a.date > b.date ? 1 : -1));
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
