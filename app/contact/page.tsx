import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Grace Life Church Vizag. We are located in Seethammadhara, Visakhapatnam, Andhra Pradesh.',
};

const MAPS_URL =
  'https://www.google.com/maps/place/Grace+Life+Church,+Vizag/@17.7456557,83.312457,99m/data=!3m1!1e3!4m6!3m5!1s0x3a395d7a60e10f17:0x23137b54b808f3b2!8m2!3d17.745603!4d83.312793!16s%2Fg%2F11ghpmzkvl';

const serviceTimes = [
  { service: 'Sunday School',         time: 'Sun 10:30 AM – 12:30 PM'    },
  { service: 'Telugu Worship',        time: 'Sun 10:30 AM – 12:30 PM'    },
  { service: 'English Worship',       time: 'Sun 4:00 PM – 6:00 PM'      },
  { service: 'Congregational Prayer', time: 'Wed 7:00 PM – 8:30 PM'      },
  { service: 'Whole Night Prayer',    time: '2nd Fri 8:00 PM – 12:00 AM' },
  { service: 'Youth Fellowship',      time: 'Sat 7:00 PM – 8:30 PM'      },
];

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ── */}
        <header
          style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '6rem' }}
          className="px-6 md:px-8"
        >
          <div className="max-w-screen-2xl mx-auto md:pl-[15%]">
            <p className="mb-5" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EFBF04' }}>
              Get in Touch
            </p>
            <h1 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              Contact Us
            </h1>
            <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '32rem' }}>
              We would love to hear from you. Reach out with any questions or come visit us on Sunday.
            </p>
          </div>
        </header>

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

              {/* Service times */}
              <div className="bg-white p-8">
                <p className="mb-6" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#3399CC' }}>
                  Service Times
                </p>
                {serviceTimes.map((s, i) => (
                  <div
                    key={s.service}
                    className="flex justify-between items-center py-3"
                    style={{ borderBottom: i < serviceTimes.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none' }}
                  >
                    <span style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.9375rem', color: '#1A1A1A' }}>
                      {s.service}
                    </span>
                    <span style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, fontSize: '0.72rem', color: '#3399CC', letterSpacing: '0.04em' }}>
                      {s.time}
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
                    50-1-43, ASR Nagar<br />
                    Seethammadhara<br />
                    Visakhapatnam<br />
                    Andhra Pradesh — 530013
                  </p>
                  <p className="mt-2" style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '0.8rem', color: '#1A1A1A', opacity: 0.45, lineHeight: 1.7 }}>
                    Opposite Little Giggles Playschool, up from Alluri Seetharamaraju Statue Junction.
                  </p>
                  <a
                    href={MAPS_URL}
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
                  <p className="mb-3" style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, fontSize: '0.9375rem', color: '#1A1A1A' }}>
                    Mohan Nitta
                  </p>
                  <a href="tel:+919182949644" style={{ display: 'block', fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.05rem', color: '#3399CC', marginBottom: '0.4rem' }}>
                    (+91) 91829 49644
                  </a>
                  <a href="tel:+919502542648" style={{ display: 'block', fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.05rem', color: '#3399CC' }}>
                    (+91) 95025 42648
                  </a>
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
              50-1-43, ASR Nagar, Seethammadhara, Visakhapatnam
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
