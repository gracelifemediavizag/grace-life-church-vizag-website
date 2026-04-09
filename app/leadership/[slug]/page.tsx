import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import { leaders, getLeaderBySlug } from '@/lib/leaders';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return leaders.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);
  if (!leader) return { title: 'Leader Not Found' };
  return {
    title: leader.name,
    description: `${leader.role} at Grace Life Church Vizag. ${leader.bio.slice(0, 160)}...`,
  };
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

const categoryLabels: Record<string, string> = {
  pastor: 'Pastoral Ministry',
  elder: 'Elder Leadership',
  deacon: 'Deacon Ministry',
  worship: 'Worship Ministry',
  youth: 'Youth Ministry',
  'women-children': "Women's & Children's Ministry",
  media: 'Media Ministry',
};

export default async function LeaderPage({ params }: Props) {
  const { slug } = await params;
  const leader = getLeaderBySlug(slug);

  if (!leader) notFound();

  const paragraphs = leader.bio.split('\n').filter(Boolean);
  const [lede, ...rest] = paragraphs;

  return (
    <>
      <NavBar />
      <main>

        {/* ── Full split ── */}
        <div className="flex flex-col md:flex-row min-h-screen">

          {/* Left — dark panel: monogram + name + role */}
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
            <div className="flex flex-col justify-center flex-1 py-16">
              {/* Monogram */}
              <div
                className="mb-10 flex items-center justify-center"
                style={{
                  width: 140,
                  height: 140,
                  border: '1px solid rgba(239,191,4,0.3)',
                  position: 'relative',
                }}
              >
                {/* Corner accents */}
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
                  {getInitials(leader.name)}
                </span>
              </div>

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
                {leader.name}
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
                {leader.role}
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
                {categoryLabels[leader.category] ?? 'Ministry Team'}
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

          {/* Right — light panel: testimony / bio */}
          <div
            className="flex flex-col justify-center md:w-[55%] px-10 md:px-16 lg:px-24 pt-24 md:pt-36 pb-20"
            style={{ background: '#F8F8F8' }}
          >
            {/* Lede */}
            {lede && (
              <p
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  fontSize: '1.125rem',
                  color: '#1A1A1A',
                  lineHeight: 1.85,
                }}
              >
                {lede}
              </p>
            )}

            {/* Body */}
            {rest.length > 0 && (
              <div className="space-y-6">
                {rest.map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 300,
                      fontSize: '1rem',
                      color: '#1A1A1A',
                      lineHeight: 1.9,
                      opacity: 0.72,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            )}

            {/* Back link at bottom of bio */}
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
