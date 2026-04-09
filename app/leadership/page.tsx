import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import LeadershipTabs from '@/components/church/LeadershipTabs';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Meet the pastors, elders, deacons, and ministry leaders of Grace Life Church Vizag.',
};

export default async function LeadershipPage() {
  const reader = createReader(process.cwd(), config);
  const allEntries = await reader.collections.leadership.all();
  const leaders = allEntries
    .map(({ slug, entry }) => ({
      slug,
      name: entry.name,
      role: entry.title ?? '',
      category: (entry.category ?? 'elder') as 'pastor' | 'elder' | 'deacon' | 'worship' | 'youth' | 'women-children' | 'media',
      bio: '',
      photo: entry.photo ?? null,
    }))
    .sort((a, b) => {
      const orderA = allEntries.find(e => e.slug === a.slug)?.entry.order ?? 99;
      const orderB = allEntries.find(e => e.slug === b.slug)?.entry.order ?? 99;
      return orderA - orderB;
    });
  return (
    <>
      <NavBar />
      <main>

        {/* Hero */}
        <section style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '3.5rem' }} className="px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="md:pl-[15%]">
              <p
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#EFBF04',
                }}
              >
                Our People
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                  color: '#ffffff',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem',
                }}
              >
                Our Leadership
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.5)',
                  maxWidth: '36rem',
                  lineHeight: 1.75,
                  fontStyle: 'italic',
                }}
              >
                Governed by the Word, guided by the Spirit, and dedicated to the
                preservation of eternal truths.
              </p>
            </div>
          </div>
        </section>

        <LeadershipTabs leaders={leaders} />

      </main>
      <Footer />
    </>
  );
}
