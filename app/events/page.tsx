import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import EventsList, { type ChurchEvent } from './EventsList';

export const metadata: Metadata = {
  title: 'Events',
  description:
    'Upcoming events and gatherings at Grace Life Church Vizag — worship services, prayer meetings, youth fellowship, and more.',
};

/* ─── Events data — replace with Keystatic CMS queries when configured ────── */
const events: ChurchEvent[] = [
  {
    id: 1,
    title: 'English Worship Service',
    date: '2026-04-12',
    time: '8:30 AM – 10:00 AM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Weekly English-medium corporate worship with expository preaching.',
  },
  {
    id: 2,
    title: 'Sunday School',
    date: '2026-04-12',
    time: '10:30 AM – 12:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Age-appropriate Bible instruction for children, based on the Generations of Grace curriculum.',
  },
  {
    id: 3,
    title: 'Telugu Worship Service',
    date: '2026-04-12',
    time: '10:30 AM – 12:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Telugu-medium corporate worship and preaching.',
  },
  {
    id: 4,
    title: 'Telugu Evening Worship',
    date: '2026-04-12',
    time: '6:00 PM – 8:00 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Evening Telugu worship gathering.',
  },
  {
    id: 5,
    title: 'Congregational Prayer',
    date: '2026-04-15',
    time: '7:00 PM – 8:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Midweek corporate prayer meeting. All members are encouraged to attend.',
  },
  {
    id: 6,
    title: 'Youth Fellowship',
    date: '2026-04-18',
    time: '7:00 PM – 8:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Saturday evening youth gathering — Bible study, fellowship, and prayer.',
  },
  {
    id: 7,
    title: 'English Worship Service',
    date: '2026-04-19',
    time: '8:30 AM – 10:00 AM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Weekly English-medium corporate worship with expository preaching.',
  },
  {
    id: 8,
    title: 'Sunday School',
    date: '2026-04-19',
    time: '10:30 AM – 12:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Age-appropriate Bible instruction for children.',
  },
  {
    id: 9,
    title: 'Telugu Worship Service',
    date: '2026-04-19',
    time: '10:30 AM – 12:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Telugu-medium corporate worship and preaching.',
  },
  {
    id: 10,
    title: 'Congregational Prayer',
    date: '2026-04-22',
    time: '7:00 PM – 8:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Midweek corporate prayer meeting.',
  },
  {
    id: 11,
    title: 'Whole Night Prayer',
    date: '2026-04-10',
    time: '8:00 PM – 12:00 AM',
    location: 'Grace Life Church, Seethammadhara',
    description: '2nd Friday of each month. Whole-church overnight prayer vigil.',
    isPast: true,
  },
  {
    id: 12,
    title: 'English Worship Service',
    date: '2026-05-03',
    time: '8:30 AM – 10:00 AM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Weekly English-medium corporate worship with expository preaching.',
  },
  {
    id: 13,
    title: 'Sunday School',
    date: '2026-05-03',
    time: '10:30 AM – 12:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Age-appropriate Bible instruction for children.',
  },
  {
    id: 14,
    title: 'Telugu Worship Service',
    date: '2026-05-03',
    time: '10:30 AM – 12:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Telugu-medium corporate worship and preaching.',
  },
  {
    id: 15,
    title: 'Youth Fellowship',
    date: '2026-05-02',
    time: '7:00 PM – 8:30 PM',
    location: 'Grace Life Church, Seethammadhara',
    description: 'Saturday evening youth gathering.',
  },
];

export default function EventsPage() {
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
