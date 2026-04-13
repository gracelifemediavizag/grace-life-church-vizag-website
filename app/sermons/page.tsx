import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const metadata: Metadata = {
  title: 'Sermons',
  description:
    'Listen to sermons from Grace Life Church Vizag. Audio and video messages from the pulpit, covering the whole counsel of God.',
};

export default async function SermonsPage() {
  const reader = createReader(process.cwd(), config);
  const allEntries = await reader.collections.sermonSeries.all();
  const series = allEntries
    .map(({ entry }) => ({
      name: entry.name,
      description: entry.description ?? '',
      reference: entry.reference ?? '',
      status: entry.status ?? 'Past',
    }))
    .sort((a) => (a.status === 'Current' ? -1 : a.status === 'Recent' ? 0 : 1));
  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ── */}
        {/* Mobile: full image bg with overlay. Desktop: split panels. */}
        <section className="relative md:flex md:flex-row" style={{ minHeight: '75vh' }}>

          {/* Image — full bg on mobile, left panel on desktop */}
          <div className="absolute inset-0 md:relative md:inset-auto md:w-1/2">
            <Image
              src="/images/heroes/sermonspage.jpeg"
              alt="Pastor preaching at the pulpit of Grace Life Church"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: 'center 65%' }}
              priority
            />
            {/* Mobile-only dark overlay for text legibility */}
            <div
              className="absolute inset-0 md:hidden"
              style={{ backgroundColor: 'rgba(0,0,0,0.58)' }}
            />
          </div>

          {/* Right — dark panel (desktop) / overlay content (mobile) */}
          <div
            className="relative z-10 flex items-end w-full md:w-1/2 px-8 md:px-16 md:bg-[#1A1A1A]"
            style={{ paddingTop: '10rem', paddingBottom: '5rem' }}
          >
            <div className="max-w-lg md:pr-[15%]">
              <p
                className="mb-6"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: '#EFBF04',
                }}
              >
                Messages
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem, 4vw, 4.5rem)',
                  color: '#ffffff',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                  marginBottom: '1.5rem',
                }}
              >
                Sermons &amp;<br />Messages
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.8,
                  maxWidth: '28rem',
                  marginBottom: '2.5rem',
                }}
              >
                Preaching the whole counsel of God — all books, all chapters, all verses.
              </p>

              {/* Pull quote */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#EFBF04' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.85,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;For I did not shrink from declaring to you the whole counsel of God.&rdquo;
                </p>
                <p
                  className="mt-3"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#EFBF04',
                  }}
                >
                  Acts 20:27
                </p>
              </div>
            </div>
          </div>

        </section>

        {/* ── Listen / Watch ── */}
        <section className="px-6 md:px-8 py-20" style={{ background: '#F8F8F8' }}>
          <div className="max-w-screen-2xl mx-auto">
            <p
              className="mb-10"
              style={{
                fontFamily: 'var(--font-lato)',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1A1A1A',
                opacity: 0.3,
              }}
            >
              Access Sermons
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Sermon Archive */}
              <div
                style={{
                  background: '#1A1A1A',
                  borderTop: '3px solid #EFBF04',
                  padding: '2.5rem',
                }}
              >
                <p
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#EFBF04',
                    opacity: 0.8,
                  }}
                >
                  Sermon Archive
                </p>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.5rem',
                    color: '#ffffff',
                    lineHeight: 1.2,
                  }}
                >
                  Audio &amp; Video Messages
                </h2>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.75,
                  }}
                >
                  Full archive of sermons preached from the pulpit of Grace Life Church,
                  available on the Daniel Surya Avula website.
                </p>
                <a
                  href="https://www.danielsurya.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#EFBF04',
                    borderBottom: '1px solid rgba(239,191,4,0.4)',
                    paddingBottom: '2px',
                  }}
                >
                  Visit Website →
                </a>
              </div>

              {/* YouTube */}
              <div
                style={{
                  background: '#3399CC',
                  borderTop: '3px solid #EFBF04',
                  padding: '2.5rem',
                }}
              >
                <p
                  className="mb-3"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.7)',
                  }}
                >
                  Online
                </p>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.5rem',
                    color: '#ffffff',
                    lineHeight: 1.2,
                  }}
                >
                  YouTube Channel
                </h2>
                <p
                  className="mb-6"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '0.9375rem',
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: 1.75,
                  }}
                >
                  Some messages are also available on our YouTube channel. Check back
                  regularly as we continue to upload sermons from Sunday services.
                </p>
                <a
                  href="https://www.youtube.com/@DanielSuryaAvula"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-block',
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    borderBottom: '1px solid rgba(255,255,255,0.4)',
                    paddingBottom: '2px',
                  }}
                >
                  Visit Channel →
                </a>
              </div>

            </div>
          </div>
        </section>

        {/* ── Current Series ── */}
        <section className="px-6 md:px-8 py-20" style={{ background: '#ffffff' }}>
          <div className="max-w-screen-2xl mx-auto">
            <p
              className="mb-10"
              style={{
                fontFamily: 'var(--font-lato)',
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#1A1A1A',
                opacity: 0.3,
              }}
            >
              Expository Series
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {series.map((s, i) => (
                <div
                  key={s.name}
                  style={{
                    background: '#F8F8F8',
                    borderTop: `3px solid ${i === 0 ? '#3399CC' : '#EFBF04'}`,
                    padding: '2rem',
                  }}
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <p
                        style={{
                          fontFamily: 'var(--font-lato)',
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: i === 0 ? '#3399CC' : '#EFBF04',
                        }}
                      >
                        {s.status}
                      </p>
                    </div>
                    <h3
                      className="mb-3"
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 300,
                        fontSize: '1.75rem',
                        color: '#1A1A1A',
                        lineHeight: 1.1,
                      }}
                    >
                      {s.name}
                    </h3>
                    <p
                      className="mb-4"
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 300,
                        fontSize: '0.9rem',
                        color: '#1A1A1A',
                        opacity: 0.6,
                        lineHeight: 1.75,
                        maxWidth: '28rem',
                      }}
                    >
                      {s.description}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-lato)',
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#1A1A1A',
                        opacity: 0.35,
                      }}
                    >
                      {s.reference}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
