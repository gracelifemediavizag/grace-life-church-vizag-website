import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';

export const metadata: Metadata = {
  title: 'Sermons',
  description:
    'Listen to sermons from Grace Life Church Vizag. Audio and video messages from the pulpit, covering the whole counsel of God.',
};

const series = [
  {
    name: '1 Peter',
    description:
      'A verse-by-verse exposition of the letter of 1 Peter, exploring themes of suffering, holiness, and hope in Christ.',
    reference: '1 Peter 1:1 – 5:14',
    status: 'Current',
  },
  {
    name: 'Colossians 1',
    description:
      "An expository series through the first chapter of Colossians, unpacking the supremacy and sufficiency of Christ.",
    reference: 'Colossians 1:1 – 1:29',
    status: 'Recent',
  },
];

export default function SermonsPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '7rem' }} className="px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
            <div className="md:pl-[20%]">
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
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
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
                  maxWidth: '30rem',
                }}
              >
                Preaching the whole counsel of God — all books, all chapters, all verses.
              </p>
            </div>

            {/* Pull quote */}
            <div className="md:pr-[10%]">
              <div className="border-l-4 pl-6" style={{ borderColor: '#EFBF04' }}>
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.0625rem',
                    color: 'rgba(255,255,255,0.75)',
                    lineHeight: 1.85,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;For I did not shrink from declaring to you the whole counsel of God.&rdquo;
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#EFBF04',
                    opacity: 0.8,
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
