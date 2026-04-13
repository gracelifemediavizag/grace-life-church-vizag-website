import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { createReader } from '@keystatic/core/reader';
import { DocumentRenderer } from '@keystatic/core/renderer';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import config from '@/keystatic.config';

const ministryMeta: Record<string, { title: string; category: string; description: string }> = {
  'telugu-service':       { title: 'Telugu Service',       category: 'Worship',             description: 'Our Telugu-medium corporate worship service.' },
  'english-service':      { title: 'English Service',      category: 'Worship',             description: 'Our English-medium corporate worship service.' },
  'kids':                 { title: 'Kids Ministry',        category: 'Ministry',            description: 'Nurturing the faith of the next generation.' },
  'children':             { title: "Children's Ministry",  category: 'Ministry',            description: 'Nurturing the faith of the next generation in the Word of God.' },
  'women':                { title: "Women's Ministry",     category: 'Ministry',            description: 'Equipping and discipling women in the grace and knowledge of Christ.' },
  'youth':                { title: 'Youth Ministry',       category: 'Ministry',            description: 'Equipping young people with the Word of God.' },
  'media':                { title: 'Media Ministry',       category: 'Ministry',            description: 'Extending the ministry of the Word beyond our walls.' },
  'print':                { title: 'Print Ministry',       category: 'Ministry',            description: 'Distributing biblical resources to the congregation.' },
  'membership':           { title: 'Membership',           category: 'Membership Services', description: 'What it means to be a covenantal member of Grace Life Church.' },
  'serving':              { title: 'Serving',              category: 'Membership Services', description: 'Every believer faithfully serving in the body of Christ.' },
  'counseling':          { title: 'Counselling',          category: 'Membership Services', description: 'Biblical counseling grounded in the whole counsel of God.' },
  'congregational-care':  { title: 'Congregational Care', category: 'Membership Services', description: 'Shepherding and caring for one another within the local body.' },
  'prayer':               { title: 'Prayer',               category: 'Membership Services', description: 'Corporate and personal prayer as the engine of our ministry.' },
  'weddings':             { title: 'Weddings',             category: 'Membership Services', description: 'Celebrating and honouring the covenant of marriage.' },
};

const ministryEnhancements = {
  membership: {
    sectionTitle: 'Becoming a Member',
    sectionSummary:
      'If you have any questions about the membership process, please ask a staff member at Church.',
    sidebarLabel: 'Membership Staff',
    sidebarTitle: 'Talk to Our Team',
    sidebarText:
      'Questions about membership? Speak with Daniel or Eliazer after a Sunday service, or reach out through the contact page and we will help you take the next step.',
    steps: [
      'Begin the conversation',
      'Review doctrine and commitment',
      'Attend the class cycle',
      'Meet with a pastor or elder',
      'Be welcomed into membership',
    ],
    leaders: ['daniel-surya-avula', 'eliazer-naik'],
  },
} as const;

const reader = createReader(process.cwd(), config);

interface Props {
  params: Promise<{ slug: string }>;
}

interface RelatedLeader {
  slug: string;
  name: string;
  title: string;
  photo: string | null;
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

async function loadRelatedLeaders(slugs: readonly string[]): Promise<RelatedLeader[]> {
  const leaders = await Promise.all(
    slugs.map(async (leaderSlug) => {
      const entry = await reader.collections.leadership.read(leaderSlug, { resolveLinkedFiles: true });
      if (!entry) return null;

      return {
        slug: leaderSlug,
        name: entry.name,
        title: entry.title ?? 'Leadership',
        photo: entry.photo ?? null,
      };
    }),
  );

  return leaders.filter((leader): leader is RelatedLeader => leader !== null);
}

function RelatedLeaderCard({ leader }: { leader: RelatedLeader }) {
  return (
    <Link
      href={`/leadership/${leader.slug}`}
      className="group flex items-center gap-4 border border-[#E4E4E4] bg-white px-5 py-4 transition-all hover:border-[#EFBF04] hover:-translate-y-0.5"
    >
      <div
        className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full"
        style={{ background: '#1A1A1A', border: '1px solid rgba(239,191,4,0.35)' }}
      >
        {leader.photo ? (
          <Image
            src={leader.photo}
            alt={leader.name}
            fill
            sizes="56px"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        ) : (
          <span
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 500,
              fontSize: '0.85rem',
              color: '#ffffff',
              letterSpacing: '0.08em',
            }}
          >
            {getInitials(leader.name)}
          </span>
        )}
      </div>
      <div>
        <p
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 400,
            fontSize: '0.95rem',
            color: '#1A1A1A',
            lineHeight: 1.3,
            marginBottom: '0.3rem',
          }}
        >
          {leader.name}
        </p>
        <p
          style={{
            fontFamily: 'var(--font-lato)',
            fontSize: '0.62rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: '#EFBF04',
            opacity: 0.8,
          }}
        >
          {leader.title}
        </p>
      </div>
    </Link>
  );
}

export async function generateStaticParams() {
  const contentSlugs = await reader.collections.ministries.list();
  return Array.from(new Set([...Object.keys(ministryMeta), ...contentSlugs])).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await reader.collections.ministries.read(slug);
  const meta = ministryMeta[slug];
  if (!entry && !meta) return { title: 'Not Found' };
  return {
    title: entry?.name ?? meta?.title ?? 'Ministry',
    description: entry?.subtitle ?? meta?.description ?? '',
  };
}

export default async function MinistryPage({ params }: Props) {
  const { slug } = await params;
  const meta = ministryMeta[slug];
  const entry = await reader.collections.ministries.read(slug, { resolveLinkedFiles: true });
  const enhancement = ministryEnhancements[slug as keyof typeof ministryEnhancements];

  if (!entry && !meta) notFound();

  if (!entry) {
    return (
      <>
        <NavBar />
        <main>
          {/* Hero */}
          <section className="bg-[#1A1A1A] pt-40 pb-28 px-6 md:px-8">
            <div className="max-w-screen-2xl mx-auto">
              <div className="md:pl-[15%]">
                <p
                  className="mb-5"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#EFBF04',
                  }}
                >
                  {meta?.category}
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
                  {meta?.title}
                </h1>
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.125rem',
                    color: 'rgba(255,255,255,0.55)',
                    maxWidth: '32rem',
                    lineHeight: 1.75,
                  }}
                >
                  {meta?.description}
                </p>
              </div>
            </div>
          </section>

          {/* Coming soon */}
          <section className="py-28 px-6 md:px-8 bg-[#F8F8F8]">
            <div className="max-w-screen-2xl mx-auto md:pl-[15%]">
              <div className="max-w-lg">
                <div
                  className="w-10 h-0.5 mb-8"
                  style={{ background: '#EFBF04' }}
                />
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.0625rem',
                    color: '#1A1A1A',
                    lineHeight: 1.85,
                    opacity: 0.6,
                  }}
                >
                  This page is currently being developed. Please check back soon, or{' '}
                  <a
                    href="/contact"
                    style={{ color: '#3399CC', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                  >
                    contact us
                  </a>{' '}
                  for more information about this ministry.
                </p>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  const relatedLeaders = enhancement ? await loadRelatedLeaders(enhancement.leaders) : [];
  const hasSidebar = Boolean(enhancement);

  return (
    <>
      <NavBar />
      <main>
        <section className="bg-[#1A1A1A] pt-40 pb-24 px-6 md:px-8">
          <div
            className={`max-w-screen-2xl mx-auto grid gap-12 ${hasSidebar ? 'lg:grid-cols-[minmax(0,1fr)_21rem]' : ''}`}
          >
            <div className="md:pl-[12%]">
              <p
                className="mb-5"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#EFBF04',
                }}
              >
                {meta?.category ?? 'Ministry'}
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
                {entry.name}
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.125rem',
                  color: 'rgba(255,255,255,0.55)',
                  maxWidth: '32rem',
                  lineHeight: 1.75,
                }}
              >
                {entry.subtitle || meta?.description}
              </p>
            </div>
            {enhancement ? (
              <div
                className="self-end p-6 lg:mr-2"
                style={{ border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
              >
                <p
                  className="mb-5"
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
                  Process Overview
                </p>
                <div className="space-y-4">
                  {enhancement.steps.map((step, index) => (
                    <div key={step} className="flex items-start gap-4">
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                        style={{
                          border: '1px solid rgba(239,191,4,0.35)',
                          color: '#EFBF04',
                          fontFamily: 'var(--font-lato)',
                          fontSize: '0.72rem',
                          fontWeight: 700,
                        }}
                      >
                        {index + 1}
                      </span>
                      <p
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: 300,
                          fontSize: '0.98rem',
                          color: 'rgba(255,255,255,0.78)',
                          lineHeight: 1.6,
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="bg-[#F8F8F8] py-20 px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div
              className={`grid gap-14 ${hasSidebar ? 'xl:grid-cols-[16rem_minmax(0,1fr)_20rem]' : 'xl:grid-cols-[16rem_minmax(0,1fr)]'}`}
            >
              <div className="xl:pl-[20%]">
                <p
                  className="mb-4"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: '#EFBF04',
                  }}
                >
                  Grace Life Church
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.9rem)',
                    color: '#1A1A1A',
                    lineHeight: 1.1,
                    borderLeft: '4px solid #EFBF04',
                    paddingLeft: '1.1rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {enhancement?.sectionTitle ?? entry.name}
                </h2>
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '0.95rem',
                    color: '#1A1A1A',
                    lineHeight: 1.8,
                    opacity: 0.62,
                  }}
                >
                  {enhancement?.sectionSummary ?? entry.subtitle}
                </p>
              </div>

              <article className="max-w-3xl">
                <DocumentRenderer
                  document={entry.content}
                  renderers={{
                    block: {
                      heading: ({ level, children }) =>
                        level === 2 ? (
                          <h2
                            style={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 400,
                              fontSize: 'clamp(1.25rem, 2.2vw, 1.55rem)',
                              color: '#1A1A1A',
                              lineHeight: 1.3,
                              marginTop: '2.75rem',
                              marginBottom: '1rem',
                              paddingLeft: '1rem',
                              borderLeft: '3px solid #EFBF04',
                            }}
                          >
                            {children}
                          </h2>
                        ) : (
                          <h3
                            style={{
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 400,
                              fontSize: '1.08rem',
                              color: '#1A1A1A',
                              lineHeight: 1.35,
                              marginTop: '1.75rem',
                              marginBottom: '0.85rem',
                            }}
                          >
                            {children}
                          </h3>
                        ),
                      paragraph: ({ children }) => (
                        <p
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontWeight: 300,
                            fontSize: '1rem',
                            color: '#1A1A1A',
                            lineHeight: 1.9,
                            opacity: 0.78,
                            marginBottom: '1.25rem',
                          }}
                        >
                          {children}
                        </p>
                      ),
                      list: ({ type, children }) =>
                        type === 'ordered' ? (
                          <ol
                            style={{
                              paddingLeft: '1.35rem',
                              marginBottom: '1.5rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.65rem',
                              listStyleType: 'decimal',
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 300,
                              fontSize: '1rem',
                              color: '#1A1A1A',
                              lineHeight: 1.9,
                              opacity: 0.78,
                            }}
                          >
                            {children}
                          </ol>
                        ) : (
                          <ul
                            style={{
                              paddingLeft: '1.35rem',
                              marginBottom: '1.5rem',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '0.65rem',
                              listStyleType: 'disc',
                              fontFamily: 'var(--font-poppins)',
                              fontWeight: 300,
                              fontSize: '1rem',
                              color: '#1A1A1A',
                              lineHeight: 1.9,
                              opacity: 0.78,
                            }}
                          >
                            {children}
                          </ul>
                        ),
                      divider: () => (
                        <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: '2rem 0' }} />
                      ),
                      blockquote: ({ children }) => (
                        <blockquote style={{ borderLeft: '4px solid #EFBF04', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                          {children}
                        </blockquote>
                      ),
                    },
                    inline: {
                      bold: ({ children }) => <strong style={{ fontWeight: 600, color: '#1A1A1A', opacity: 1 }}>{children}</strong>,
                      italic: ({ children }) => <em>{children}</em>,
                      link: ({ href, children }) => (
                        <a href={href} style={{ color: '#3399CC', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
                          {children}
                        </a>
                      ),
                    },
                  }}
                />
              </article>

              {enhancement ? (
                <aside className="xl:pt-2">
                  <div className="space-y-4 xl:sticky xl:top-32">
                    <div className="p-6" style={{ background: '#1A1A1A' }}>
                      <p
                        className="mb-3"
                        style={{
                          fontFamily: 'var(--font-lato)',
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.16em',
                          textTransform: 'uppercase',
                          color: '#EFBF04',
                        }}
                      >
                        {enhancement.sidebarLabel}
                      </p>
                      <h3
                        className="mb-4"
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: 300,
                          fontSize: '1.5rem',
                          color: '#ffffff',
                          lineHeight: 1.15,
                        }}
                      >
                        {enhancement.sidebarTitle}
                      </h3>
                      <p
                        className="mb-6"
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: 300,
                          fontSize: '0.95rem',
                          color: 'rgba(255,255,255,0.62)',
                          lineHeight: 1.8,
                        }}
                      >
                        {enhancement.sidebarText}
                      </p>
                      <Link
                        href="/contact"
                        style={{
                          fontFamily: 'var(--font-lato)',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: '#EFBF04',
                          borderBottom: '2px solid #EFBF04',
                          paddingBottom: '0.2rem',
                        }}
                      >
                        Contact the Church
                      </Link>
                    </div>

                    {relatedLeaders.map((leader) => (
                      <RelatedLeaderCard key={leader.slug} leader={leader} />
                    ))}
                  </div>
                </aside>
              ) : null}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
