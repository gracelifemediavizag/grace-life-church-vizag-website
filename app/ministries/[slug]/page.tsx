import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import { notFound } from 'next/navigation';

const ministryMeta: Record<string, { title: string; category: string; description: string }> = {
  'telugu-service':       { title: 'Telugu Service',       category: 'Worship',             description: 'Our Telugu-medium corporate worship service.' },
  'english-service':      { title: 'English Service',      category: 'Worship',             description: 'Our English-medium corporate worship service.' },
  'kids':                 { title: 'Kids Ministry',        category: 'Ministry',            description: 'Nurturing the faith of the next generation.' },
  'youth':                { title: 'Youth Ministry',       category: 'Ministry',            description: 'Equipping young people with the Word of God.' },
  'media':                { title: 'Media Ministry',       category: 'Ministry',            description: 'Extending the ministry of the Word beyond our walls.' },
  'print':                { title: 'Print Ministry',       category: 'Ministry',            description: 'Distributing biblical resources to the congregation.' },
  'membership':           { title: 'Membership',           category: 'Membership Services', description: 'What it means to be a covenantal member of Grace Life Church.' },
  'serving':              { title: 'Serving',              category: 'Membership Services', description: 'Every believer faithfully serving in the body of Christ.' },
  'counselling':          { title: 'Counselling',          category: 'Membership Services', description: 'Biblical counselling grounded in the whole counsel of God.' },
  'congregational-care':  { title: 'Congregational Care', category: 'Membership Services', description: 'Shepherding and caring for one another within the local body.' },
  'prayer':               { title: 'Prayer',               category: 'Membership Services', description: 'Corporate and personal prayer as the engine of our ministry.' },
  'weddings':             { title: 'Weddings',             category: 'Membership Services', description: 'Celebrating and honouring the covenant of marriage.' },
};

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(ministryMeta).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = ministryMeta[slug];
  if (!meta) return { title: 'Not Found' };
  return { title: meta.title, description: meta.description };
}

export default async function MinistryPage({ params }: Props) {
  const { slug } = await params;
  const meta = ministryMeta[slug];
  if (!meta) notFound();

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
                {meta.category}
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
                {meta.title}
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
                {meta.description}
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
