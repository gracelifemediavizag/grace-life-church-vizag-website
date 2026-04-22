import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import ImNewFAQ from '@/components/church/ImNewFAQ';
import ServiceTimesCards from '@/components/church/ServiceTimesCards';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const metadata: Metadata = {
  title: "I'm New Here",
  description:
    'Everything you need to know about visiting Grace Life Church Vizag for the first time — service times, location, what to expect, and how to find us.',
};

const pillars = [
  {
    label: 'The Word',
    heading: 'Expository Preaching',
    body: 'Every sermon works through books of the Bible verse by verse — trusting God\'s Word to do what no programme can.',
  },
  {
    label: 'Community',
    heading: 'Genuine Fellowship',
    body: 'Small groups, prayer gatherings, and a congregation that knows one another by name. This is a family, not an audience.',
  },
  {
    label: 'Prayer',
    heading: 'A Praying Church',
    body: 'Prayer is the visible engine of everything we do. We gather mid-week, early morning, and overnight to seek the face of God.',
  },
];

export default async function ImNewPage() {
  const reader = createReader(process.cwd(), config);
  const faqEntry = await reader.singletons.faqs.read();
  const faqs = (faqEntry?.items ?? []).map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ── */}
        <section
          className="relative pt-40 pb-28 px-6 md:px-8"
          style={{
            backgroundImage: "url('/images/heroes/vizag.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 40%',
          }}
        >
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 55%, rgba(0,0,0,0.45))' }} />
          <div className="relative z-10 max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
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
                First Time Visiting?
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
                Welcome to<br />Grace Life Church
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                  maxWidth: '30rem',
                }}
              >
                We are glad you are here. This page has everything you need to know
                before your first Sunday with us.
              </p>
            </div>

            {/* Anchor verse */}
            <div
              className="border-l-4 pl-6 md:pr-[10%]"
              style={{ borderColor: '#EFBF04' }}
            >
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
                &ldquo;And day by day, attending the temple together and breaking bread in
                their homes, they received their food with glad and generous hearts,
                praising God and having favor with all the people.&rdquo;
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
                Acts 2:46–47
              </p>
            </div>
          </div>
        </section>

        {/* ── About the church ── */}
        <section className="py-24 px-6 md:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
            <div className="md:pl-[20%]">
              <p
                className="mb-4"
                style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#EFBF04' }}
              >
                Who We Are
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: '#1A1A1A',
                  lineHeight: 1.15,
                  borderLeft: '4px solid #EFBF04',
                  paddingLeft: '1.25rem',
                }}
              >
                Grace Life<br />Church
              </h2>
            </div>
            <div className="space-y-6 max-w-2xl">
              {[
                'Grace Life Church was planted on 12th March, 2017, in Visakhapatnam — the beautiful city nestled among the hills. Our pastor\'s family, having studied at The Master\'s Seminary in Los Angeles, returned to Vizag with a deep conviction to plant a church committed to expository preaching and sound doctrine.',
                'We saw the need for a church focused on the whole counsel of God, genuine gospel ministry, and discipleship-centred community. By God\'s sovereign grace, He brought like-minded families together and Grace Life Church was born.',
                'We are committed to the five solas of the Reformation — Sola Scriptura, Sola Fide, Sola Gratia, Solus Christus, and Soli Deo Gloria. All glory and praise be to our triune God.',
              ].map((para, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: i === 0 ? 400 : 300,
                    fontSize: '1.0625rem',
                    color: '#1A1A1A',
                    lineHeight: 1.9,
                    opacity: i === 0 ? 0.85 : 0.65,
                    textAlign: 'justify',
                  }}
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ── Three pillars ── */}
        <section className="py-20 px-6 md:px-8 bg-[#F8F8F8]">
          <div className="max-w-screen-2xl mx-auto">
            <p
              className="text-center mb-12"
              style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#1A1A1A', opacity: 0.35 }}
            >
              What to Expect
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="p-8"
                  style={{ background: '#1A1A1A', borderRadius: 6, borderTop: '3px solid #EFBF04' }}
                >
                  <p
                    className="mb-3"
                    style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#EFBF04', opacity: 0.75 }}
                  >
                    {p.label}
                  </p>
                  <h3
                    className="mb-4"
                    style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, fontSize: '1.125rem', color: '#ffffff', lineHeight: 1.3 }}
                  >
                    {p.heading}
                  </h3>
                  <p
                    style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.875rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, textAlign: 'justify' }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service Times ── */}
        <section className="py-24 px-6 md:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
              <div className="md:pl-[20%]">
                <p
                  className="mb-4"
                  style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#EFBF04' }}
                >
                  When We Meet
                </p>
                <h2
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    color: '#1A1A1A',
                    lineHeight: 1.15,
                    borderLeft: '4px solid #EFBF04',
                    paddingLeft: '1.25rem',
                  }}
                >
                  Service<br />Times
                </h2>
              </div>
              <ServiceTimesCards />
            </div>
          </div>
        </section>

        {/* ── Location ── */}
        <section className="py-24 px-6 md:px-8 bg-[#1A1A1A]">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="md:pl-[20%]">
              <p
                className="mb-4"
                style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#EFBF04' }}
              >
                Find Us
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '1.5rem',
                  borderLeft: '4px solid #EFBF04',
                  paddingLeft: '1.25rem',
                }}
              >
                Location &amp;<br />Directions
              </h2>
              <div className="pl-5 space-y-3">
                <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>
                  50-1-43, ASR Nagar<br />
                  Seethammadhara, Visakhapatnam<br />
                  Andhra Pradesh — 530013
                </p>
                <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.875rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>
                  On the road opposite Little Giggles Playschool, up the road from Alluri Seetharamaraju Statue Junction towards the mountain.
                </p>
                <a
                  href="https://www.google.com/maps/place/Grace+Life+Church,+Vizag/@17.7456557,83.312457,99m/data=!3m1!1e3!4m6!3m5!1s0x3a395d7a60e10f17:0x23137b54b808f3b2!8m2!3d17.745603!4d83.312793!16s%2Fg%2F11ghpmzkvl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#EFBF04',
                    borderBottom: '1px solid rgba(239,191,4,0.4)',
                    paddingBottom: '2px',
                  }}
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            {/* Contact detail */}
            <div className="space-y-8 md:pr-[10%]">
              <div>
                <p
                  className="mb-3"
                  style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}
                >
                  Contact
                </p>
                <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, fontSize: '0.9375rem', color: '#ffffff', marginBottom: '0.25rem' }}>Mohan Nitta</p>
                <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>(+91) 91829 49644</p>
                <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>(+91) 95025 42648</p>
              </div>
              <div
                className="p-6"
                style={{ background: 'rgba(255,255,255,0.04)', borderRadius: 6, border: '1px solid rgba(255,255,255,0.07)' }}
              >
                <p
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#EFBF04', opacity: 0.7 }}
                >
                  Parking
                </p>
                <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.75 }}>
                  Bike and scooter parking in front of the building. Cars on the main street or the street opposite the church.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-24 px-6 md:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
            <div className="md:pl-[20%]">
              <p
                className="mb-4"
                style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#EFBF04' }}
              >
                Before You Come
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: '#1A1A1A',
                  lineHeight: 1.15,
                  borderLeft: '4px solid #EFBF04',
                  paddingLeft: '1.25rem',
                }}
              >
                Common<br />Questions
              </h2>
            </div>
            <div className="max-w-2xl">
              <ImNewFAQ faqs={faqs} />
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-24 px-6 md:px-8 bg-[#3399CC]">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:px-[10%]">
            <div>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
                  color: '#ffffff',
                  lineHeight: 1.15,
                  marginBottom: '0.75rem',
                }}
              >
                We&rsquo;d love to see you<br />this Sunday.
              </h2>
              <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1rem', color: 'rgba(255,255,255,0.75)' }}>
                Any questions before you come? We are happy to help.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                href="/contact"
                className="px-8 py-4 text-center transition-colors"
                style={{
                  background: '#ffffff',
                  color: '#1A1A1A',
                  borderRadius: 4,
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Contact Us
              </Link>
              <a
                href="https://www.google.com/maps/place/Grace+Life+Church,+Vizag/@17.7456557,83.312457,99m/data=!3m1!1e3!4m6!3m5!1s0x3a395d7a60e10f17:0x23137b54b808f3b2!8m2!3d17.745603!4d83.312793!16s%2Fg%2F11ghpmzkvl"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 text-center transition-colors"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  border: '2px solid rgba(255,255,255,0.6)',
                  borderRadius: 4,
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                Get Directions
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
