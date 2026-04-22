import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import { createReader } from '@keystatic/core/reader';
import { DocumentRenderer } from '@keystatic/core/renderer';
import config from '@/keystatic.config';

interface Props {
  params: Promise<{ slug: string }>;
}

const reader = createReader(process.cwd(), config);

export async function generateStaticParams() {
  const slugs = await reader.collections.leadership.list();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await reader.collections.leadership.read(slug);
  if (!entry) return { title: 'Leader Not Found' };
  return {
    title: entry.name,
    description: `${entry.title ?? ''} at Grace Life Church Vizag.`,
  };
}

function getInitials(name: string): string {
  return name.split(' ').filter(Boolean).map((n) => n[0]).join('').toUpperCase().slice(0, 2);
}

const categoryLabels: Record<string, string> = {
  pastor:          'Pastoral Ministry',
  elder:           'Elder Leadership',
  deacon:          'Deacon Ministry',
  worship:         'Worship Ministry',
  youth:           'Youth Ministry',
  'women-children': "Women's & Children's Ministry",
  media:           'Media Ministry',
  staff:           'Ministry Staff',
};

export default async function LeaderPage({ params }: Props) {
  const { slug } = await params;
  const entry = await reader.collections.leadership.read(slug, { resolveLinkedFiles: true });

  if (!entry) notFound();

  return (
    <>
      <NavBar />
      <main>

        {/* ── Full split ── */}
        <div className="flex flex-col md:flex-row min-h-screen">

          {/* Left — dark panel */}
          <div
            className="flex flex-col justify-between md:w-[45%] shrink-0 px-10 md:px-16 pt-36 pb-14"
            style={{ background: '#111111' }}
          >
            {/* Back link */}
            <Link
              href="/leadership"
              className="hover:opacity-50 transition-opacity self-start"
              style={{
                fontFamily: 'var(--font-lato)',
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              ← Leadership
            </Link>

            {/* Centre content */}
            <div className="flex flex-col items-center justify-center flex-1 py-16">
              {/* Photo or monogram */}
              {entry.photo ? (
                <div
                  className="mb-10 w-full"
                  style={{
                    position: 'relative',
                    aspectRatio: '3 / 4',
                    overflow: 'hidden',
                    border: '1px solid rgba(239,191,4,0.3)',
                    maxWidth: 360,
                  }}
                >
                  <Image
                    src={entry.photo}
                    alt={entry.name}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                    sizes="(max-width: 768px) 90vw, 360px"
                    priority
                  />
                </div>
              ) : (
                <div
                  className="mb-10 flex items-center justify-center"
                  style={{
                    width: 180,
                    height: 180,
                    border: '1px solid rgba(239,191,4,0.3)',
                    position: 'relative',
                  }}
                >
                  {[
                    { top: -2, left: -2, borderTop: '2px solid #EFBF04', borderLeft: '2px solid #EFBF04' },
                    { top: -2, right: -2, borderTop: '2px solid #EFBF04', borderRight: '2px solid #EFBF04' },
                    { bottom: -2, left: -2, borderBottom: '2px solid #EFBF04', borderLeft: '2px solid #EFBF04' },
                    { bottom: -2, right: -2, borderBottom: '2px solid #EFBF04', borderRight: '2px solid #EFBF04' },
                  ].map((style, i) => (
                    <span key={i} style={{ position: 'absolute', width: 14, height: 14, ...style }} />
                  ))}
                  <span
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontSize: '2.75rem',
                      fontWeight: 300,
                      color: '#ffffff',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {getInitials(entry.name)}
                  </span>
                </div>
              )}

              {/* Name */}
              <h1
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  color: '#ffffff',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '1rem',
                }}
              >
                {entry.name}
              </h1>

              {/* Gold rule */}
              <div style={{ width: 36, height: 2, background: '#EFBF04', marginBottom: '1rem' }} />

              {/* Role */}
              <p
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                  marginBottom: '0.5rem',
                }}
              >
                {entry.title ?? ''}
              </p>

              {/* Category */}
              <p
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#EFBF04',
                  opacity: 0.75,
                }}
              >
                {categoryLabels[entry.category ?? ''] ?? 'Ministry Team'}
              </p>
            </div>

            {/* Bottom: Grace Life label */}
            <p
              style={{
                fontFamily: 'var(--font-lato)',
                fontSize: '0.55rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.15)',
              }}
            >
              Grace Life Church Vizag
            </p>
          </div>

          {/* Right — light panel: bio */}
          <div
            className="flex flex-col justify-center md:w-[55%] px-10 md:px-16 lg:px-24 pt-24 md:pt-36 pb-20"
            style={{ background: '#F8F8F8' }}
          >
            <DocumentRenderer
              document={entry.bio}
              renderers={{
                block: {
                  paragraph: ({ children }) => (
                    <p
                      className="mb-6"
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 300,
                        fontSize: '1rem',
                        color: '#1A1A1A',
                        lineHeight: 1.9,
                        opacity: 0.82,
                        textAlign: 'justify',
                      }}
                    >
                      {children}
                    </p>
                  ),
                  heading: ({ level, children }) => {
                    const style = {
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 400,
                      fontSize: level === 2 ? '1.25rem' : '1.05rem',
                      color: '#1A1A1A',
                      borderLeft: '3px solid #EFBF04',
                      paddingLeft: '1rem',
                    };
                    return level === 2
                      ? <h2 className="mb-4 mt-8" style={style}>{children}</h2>
                      : <h3 className="mb-4 mt-8" style={style}>{children}</h3>;
                  },
                },
                inline: {
                  bold: ({ children }) => <strong style={{ fontWeight: 600 }}>{children}</strong>,
                  italic: ({ children }) => <em>{children}</em>,
                },
              }}
            />

            {/* Back link */}
            <div className="mt-14 pt-10 border-t border-[#E0E0E0]">
              <Link
                href="/leadership"
                className="hover:opacity-40 transition-opacity"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#1A1A1A',
                  borderBottom: '2px solid #1A1A1A',
                  paddingBottom: '2px',
                }}
              >
                ← Back to Leadership
              </Link>
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </>
  );
}
