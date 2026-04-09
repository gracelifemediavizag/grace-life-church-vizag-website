import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import LeadershipTabs from '@/components/church/LeadershipTabs';
import { leaders } from '@/lib/leaders';

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Meet the pastors, elders, deacons, and ministry leaders of Grace Life Church Vizag.',
};

export default function LeadershipPage() {
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
