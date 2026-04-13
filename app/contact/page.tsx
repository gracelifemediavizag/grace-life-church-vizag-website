import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import ContactForm from './ContactForm';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Grace Life Church Vizag. We are located in Seethammadhara, Visakhapatnam, Andhra Pradesh.',
};

export default async function ContactPage() {
  const reader = createReader(process.cwd(), config);
  const [settingsEntry, serviceTimesEntry] = await Promise.all([
    reader.singletons.siteSettings.read(),
    reader.singletons.serviceTimes.read(),
  ]);

  const s = settingsEntry ?? {
    primaryContactName: 'Mohan Nitta',
    phone1: '(+91) 91829 49644',
    phone2: '(+91) 95025 42648',
    addressLine1: '50-1-43, ASR Nagar',
    addressLine2: 'Seethammadhara',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '530013',
    mapsUrl: '',
  };

  const services = serviceTimesEntry?.services ?? [];

  const mapsLink = s.mapsUrl ||
    'https://www.google.com/maps/place/Grace+Life+Church,+Vizag/@17.7456557,83.312457,99m';

  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ── */}
        <section className="relative px-6 md:px-8" style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '7rem', minHeight: '65vh' }}>
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/images/heroes/contactus.jpg"
              alt="Vizag coastline at golden hour"
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 55%' }}
              priority
            />
          </div>
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 60%, rgba(0,0,0,0.35) 100%)' }}
          />
          <div className="relative z-10 max-w-screen-2xl mx-auto">
            <div className="md:pl-[15%] max-w-2xl">
              <p className="mb-5" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EFBF04' }}>
                Get in Touch
              </p>
              <h1 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
                Contact Us
              </h1>
              <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '30rem' }}>
                We would love to hear from you. Reach out with any questions or come visit us on Sunday.
              </p>
            </div>
          </div>
        </section>

        {/* ── Info + Form (two equal columns) ── */}
        <section className="px-6 md:px-8 py-20" style={{ background: '#F8F8F8' }}>
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left — church info */}
            <div className="flex flex-col gap-10">

              {/* Scripture */}
              <div className="border-l-4 pl-6" style={{ borderColor: '#EFBF04' }}>
                <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: '#1A1A1A', lineHeight: 1.85, fontStyle: 'italic' }}>
                  &ldquo;For my house shall be called a house of prayer for all peoples.&rdquo;
                </p>
                <p className="mt-3" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#3399CC' }}>
                  Isaiah 56:7
                </p>
              </div>

              {/* Service times — driven from serviceTimes singleton */}
              <div className="bg-white p-8">
                <p className="mb-6" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3399CC' }}>
                  Service Times
                </p>
                {services.map((svc, i) => (
                  <div
                    key={svc.name}
                    className="flex justify-between items-center py-3"
                    style={{ borderBottom: i < services.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                  >
                    <span style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.9375rem', color: '#1A1A1A' }}>
                      {svc.name}
                    </span>
                    <span style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, fontSize: '0.72rem', color: '#3399CC', letterSpacing: '0.04em' }}>
                      {svc.day} · {svc.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Address + Phone side by side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <p className="mb-4" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3399CC' }}>
                    Location
                  </p>
                  <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, fontSize: '0.9375rem', color: '#1A1A1A', lineHeight: 1.8 }}>
                    {s.addressLine1}<br />
                    {s.addressLine2}<br />
                    {s.city}<br />
                    {s.state} — {s.pincode}
                  </p>
                  <p className="mt-2" style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.8rem', color: '#1A1A1A', opacity: 0.45, lineHeight: 1.7 }}>
                    Opposite Little Giggles Playschool, up from Alluri Seetharamaraju Statue Junction.
                  </p>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4"
                    style={{ fontFamily: 'var(--font-lato)', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#3399CC', borderBottom: '2px solid #3399CC', paddingBottom: '2px' }}
                  >
                    Open in Google Maps →
                  </a>
                </div>

                <div>
                  <p className="mb-4" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3399CC' }}>
                    Phone
                  </p>
                  {s.primaryContactName && (
                    <p className="mb-3" style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, fontSize: '0.9375rem', color: '#1A1A1A' }}>
                      {s.primaryContactName}
                    </p>
                  )}
                  {s.phone1 && (
                    <a
                      href={`tel:${s.phone1.replace(/[^+\d]/g, '')}`}
                      style={{ display: 'block', fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.05rem', color: '#3399CC', marginBottom: '0.4rem' }}
                    >
                      {s.phone1}
                    </a>
                  )}
                  {s.phone2 && (
                    <a
                      href={`tel:${s.phone2.replace(/[^+\d]/g, '')}`}
                      style={{ display: 'block', fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.05rem', color: '#3399CC' }}
                    >
                      {s.phone2}
                    </a>
                  )}
                </div>
              </div>

            </div>

            {/* Right — contact form */}
            <div className="bg-white p-8 md:p-10 flex flex-col self-stretch">
              <p className="mb-8" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3399CC' }}>
                Send a Message
              </p>
              <ContactForm />
            </div>

          </div>
        </section>

        {/* ── Map — full dedicated section ── */}
        <section style={{ background: '#1A1A1A' }}>
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8 pt-14 pb-6">
            <p className="mb-2" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#EFBF04' }}>
              Find Us
            </p>
            <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
              {s.addressLine1}, {s.addressLine2}, {s.city}
            </p>
          </div>
          <div className="w-full" style={{ height: '560px' }}>
            <iframe
              src="https://maps.google.com/maps?q=17.745603,83.312793&z=18&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: 'block' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Grace Life Church location"
            />
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 md:px-8 py-24" style={{ background: '#3399CC' }}>
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h2 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: 'clamp(1.8rem, 3vw, 2.75rem)', color: '#ffffff', lineHeight: 1.15, marginBottom: '0.75rem' }}>
                Come Visit Us
              </h2>
              <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.8 }}>
                We welcome anyone who wants to join us for worship. Our doors are open and we would love to meet you.
              </p>
            </div>
            <a
              href="/im-new"
              className="shrink-0 inline-block px-10 py-5 bg-white text-[#3399CC] hover:bg-[#EFBF04] hover:text-black transition-colors"
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', whiteSpace: 'nowrap' }}
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
