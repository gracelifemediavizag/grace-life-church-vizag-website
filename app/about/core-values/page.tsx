import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import FadeInUp from '@/components/ui/FadeInUp';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const metadata: Metadata = {
  title: 'Core Values',
  description: 'The ten core values that guide the life and ministry of Grace Life Church Vizag.',
};

export default async function CoreValuesPage() {
  const reader = createReader(process.cwd(), config);
  const entry = await reader.singletons.coreValues.read();
  const values = entry?.values ?? [];

  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '6rem' }} className="px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="md:pl-[15%]">
              <p className="mb-5" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EFBF04' }}>
                About — Core Values
              </p>
              <h1 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                Our Core Values
              </h1>
              <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '34rem' }}>
                What we treasure shapes how we live.
              </p>
            </div>
          </div>
        </section>

        {/* Alternating value sections */}
        {values.map((v, i) => {
          const isEven = i % 2 === 0;
          return (
            <section
              key={v.value}
              className="px-6 md:px-10"
              style={{
                paddingTop: '5rem',
                paddingBottom: '5rem',
                background: isEven ? '#ffffff' : '#F8F8F8',
              }}
            >
              <FadeInUp>
          <div className="max-w-[1400px] mx-auto flex flex-col md:items-center gap-10 md:gap-16">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">

                  {/* Image / placeholder block */}
                  {v.image ? (
                    <div
                      className={`flex-1 relative overflow-hidden w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}
                      style={{ aspectRatio: '4/3', maxWidth: '480px', borderRadius: 8, minHeight: '260px' }}
                    >
                      <Image src={v.image} alt={v.value} fill sizes="(max-width: 768px) 100vw, 480px" className="object-cover" />
                    </div>
                  ) : (
                    <div
                      className={`flex-1 flex items-center justify-center w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}
                      style={{ background: isEven ? '#F8F8F8' : '#ffffff', aspectRatio: '4/3', maxWidth: '480px', borderRadius: 8, minHeight: '260px' }}
                    >
                      <div className="text-center p-8 select-none">
                        <span
                          className="block"
                          style={{ fontSize: '6rem', fontWeight: 300, color: '#3399CC', opacity: 0.15, fontFamily: 'var(--font-poppins)', lineHeight: 1 }}
                        >
                          {i + 1}
                        </span>
                        <p
                          className="mt-3"
                          style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#1A1A1A', opacity: 0.25 }}
                        >
                          Image Coming Soon
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Text block */}
                  <div className={`flex-1 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <h2
                      className="text-2xl md:text-3xl text-[#1A1A1A] mb-5"
                      style={{ fontWeight: 400, fontFamily: 'var(--font-poppins)', borderLeft: '4px solid #EFBF04', paddingLeft: '1.25rem', lineHeight: 1.3 }}
                    >
                      We value {v.value}
                    </h2>
                    <p
                      className="text-[#1A1A1A] text-base mb-6"
                      style={{ fontWeight: 300, fontFamily: 'var(--font-poppins)', lineHeight: 1.8, paddingLeft: '1.25rem' }}
                    >
                      {v.description}
                    </p>
                    <p
                      style={{ fontFamily: 'var(--font-lato)', fontStyle: 'italic', color: '#3399CC', fontSize: '0.8125rem', paddingLeft: '1.25rem', letterSpacing: '0.01em' }}
                    >
                      {v.references}
                    </p>
                  </div>
                </div>
              </div>
          </FadeInUp>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
