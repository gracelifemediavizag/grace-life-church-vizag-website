import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import ScriptureBlock from '@/components/church/ScriptureBlock';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Grace Life Church Vizag. We are located in Seethammadhara, Visakhapatnam, Andhra Pradesh.',
};

const serviceTimes = [
  { service: 'Sunday School', time: 'Sun 10:30 AM – 12:30 PM' },
  { service: 'Telugu Worship', time: 'Sun 10:30 AM – 12:30 PM & 6:00 PM – 8:00 PM' },
  { service: 'English Worship', time: 'Sun 8:30 AM – 10:00 AM' },
  { service: 'Congregational Prayer', time: 'Wed 7:00 PM – 8:30 PM' },
  { service: 'Whole Night Prayer', time: '2nd Fri 8:00 PM – 12:00 AM' },
  { service: 'Youth Fellowship', time: 'Sat 7:00 PM – 8:30 PM' },
];

export default function ContactPage() {
  return (
    <>
      <NavBar />
      <main className="pb-24 min-h-screen">
        {/* Hero */}
        <header style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '6rem' }} className="px-6 md:px-8 mb-16">
          <div className="max-w-screen-2xl mx-auto">
            <div className="md:pl-[15%]">
              <p className="mb-5" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EFBF04' }}>
                Get in Touch
              </p>
              <h1 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
                Contact Us
              </h1>
            </div>
          </div>
        </header>

        {/* 2 column layout */}
        <div className="max-w-screen-2xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Info */}
          <div className="flex flex-col space-y-10">
            <ScriptureBlock
              quote="For my house shall be called a house of prayer for all peoples."
              reference="Isaiah 56:7"
            />

            {/* Address & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <section>
                <h3 className="text-[0.7rem] uppercase tracking-widest text-glc-outline font-bold mb-4">
                  Location
                </h3>
                <p className="text-lg font-medium text-glc-on-surface leading-relaxed">
                  50-1-43, Ground Floor<br />
                  ASR Nagar,<br />
                  Seethammadhara,<br />
                  Visakhapatnam,<br />
                  Andhra Pradesh — 530013
                </p>
                <p className="text-glc-on-surface-variant text-sm mt-3 leading-relaxed">
                  On the road opposite Little Giggles Playschool, up the road from Alluri Seetharamaraju Statue Junction towards the mountain.
                </p>
              </section>
              <section>
                <h3 className="text-[0.7rem] uppercase tracking-widest text-glc-outline font-bold mb-4">
                  Phone
                </h3>
                <p className="text-glc-on-surface font-semibold mb-2">Mohan Nitta</p>
                <a href="tel:+919182949644" className="block text-lg text-glc-navy font-medium hover:underline">
                  (+91) 91829 49644
                </a>
                <a href="tel:+919502542648" className="block text-lg text-glc-navy font-medium hover:underline mt-1">
                  (+91) 95025 42648
                </a>
              </section>
            </div>

            {/* Service times */}
            <section className="bg-white rounded-md p-8">
              <h3 className="text-[0.7rem] uppercase tracking-widest text-glc-outline font-bold mb-6">
                Service Times
              </h3>
              <div className="space-y-4">
                {serviceTimes.map((s) => (
                  <div key={s.service} className="flex justify-between items-start py-2 border-b border-glc-outline-variant/30 last:border-0">
                    <span className="text-glc-on-surface-variant font-medium text-sm">{s.service}</span>
                    <span className="text-glc-navy font-bold text-sm text-right ml-4">{s.time}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right: Form + Map */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[0.7rem] uppercase tracking-widest text-glc-outline font-bold mb-6">
                Send a Message
              </h3>
              <ContactForm />
            </div>

            {/* Map placeholder */}
            <div className="relative min-h-[300px] bg-glc-surface-low rounded-md overflow-hidden flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-[0.65rem] uppercase tracking-widest text-glc-on-surface-variant font-bold mb-2">
                  [MAP: SEETHAMMADHARA, VIZAG]
                </p>
                <p className="text-glc-on-surface-variant text-sm">
                  50-1-43, ASR Nagar, Seethammadhara, Visakhapatnam
                </p>
                <a
                  href="https://www.google.com/maps/place/Grace+Life+Church,+Vizag/@17.7456557,83.312457,99m/data=!3m1!1e3!4m6!3m5!1s0x3a395d7a60e10f17:0x23137b54b808f3b2!8m2!3d17.745603!4d83.312793!16s%2Fg%2F11ghpmzkvl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-glc-navy text-[0.7rem] uppercase tracking-widest font-bold border-b-2 border-glc-navy pb-0.5 hover:text-glc-navy-hover transition-colors"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 mx-6 md:mx-8 max-w-screen-2xl lg:mx-auto bg-glc-navy rounded-md p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Come Visit Us</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              We welcome anyone who wants to join us for worship on Sunday. Our doors are open,
              and we would love to meet you.
            </p>
          </div>
          <a
            href="/im-new"
            className="shrink-0 px-10 py-5 bg-white text-glc-navy rounded-sm font-bold text-[0.7rem] uppercase tracking-widest hover:bg-[#EFBF04] hover:text-black transition-colors"
          >
            Plan Your Visit
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
