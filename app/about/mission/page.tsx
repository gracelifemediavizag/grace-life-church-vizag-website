import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import PageHero from '@/components/church/PageHero';
import ScriptureBlock from '@/components/church/ScriptureBlock';

export const metadata: Metadata = {
  title: 'Mission',
  description:
    'The mission of Grace Life Church Vizag — Exalting God, Edifying the Saints, and Evangelizing the Lost.',
};

const missions = [
  {
    title: 'Exalting God',
    description:
      'To love and worship the Lord with all of our heart, soul, mind and strength, both individually and corporately.',
    verse: 'Mark 12:30',
  },
  {
    title: 'Edifying the Saints',
    description:
      "To build up God's people to be more like Jesus Christ through loving encouragement and equipping in godly character, biblical understanding, and ministry skills.",
    verse: 'Ephesians 4:12',
  },
  {
    title: 'Evangelizing the Lost',
    description:
      'To passionately share the gospel of Jesus Christ in order to establish worshipers in His church locally and globally.',
    verse: 'Matthew 28:19–20',
  },
];

function SolaCard({ latin, english, desc }: { latin: string; english: string; desc: string }) {
  return (
    <div className="bg-white p-7" style={{ borderRadius: 8, borderLeft: '4px solid #EFBF04' }}>
      <p
        className="text-[0.6rem] uppercase tracking-widest mb-2"
        style={{ fontFamily: 'var(--font-lato)', color: '#1A1A1A', opacity: 0.4, fontWeight: 700 }}
      >
        {english}
      </p>
      <h3
        className="text-xl mb-3"
        style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, color: '#1A1A1A' }}
      >
        {latin}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, color: '#1A1A1A', opacity: 0.65 }}
      >
        {desc}
      </p>
    </div>
  );
}

export default function MissionPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero
          label="About — Mission"
          title="Our Mission"
          subtitle="Three callings, one purpose — the glory of God."
        />

        <section className="pt-20 pb-14 px-6 md:px-8 bg-glc-surface">
          <div className="max-w-screen-2xl mx-auto max-w-4xl">
            <div className="md:pl-[15%] mb-16">
              <p className="text-glc-on-surface text-xl leading-relaxed">
                Grace Life Church exists to glorify God through loving the Lord Jesus Christ
                passionately, obeying all that He commanded joyfully, and making disciples
                effectively for the kingdom of God.
              </p>
            </div>

            <div className="md:pl-[15%] space-y-16">
              {missions.map((m, i) => (
                <div key={m.title} className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 items-start">
                  <div className="w-16 h-16 bg-glc-navy flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-2xl font-[family-name:var(--font-playfair)]">
                      {i + 1}
                    </span>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-glc-on-surface mb-4">
                      {m.title}
                    </h2>
                    <p className="text-glc-on-surface-variant text-lg leading-relaxed mb-2">
                      {m.description}
                    </p>
                    <p className="text-[0.65rem] uppercase tracking-widest text-glc-navy font-bold">
                      — {m.verse}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="md:pl-[15%] mt-20">
              <ScriptureBlock
                quote="We exist to glorify God through loving the Lord Jesus Christ passionately, obeying all that He commanded joyfully, and making disciples effectively for the kingdom of God."
                reference="The Vision of Grace Life Church"
              />
            </div>
          </div>
        </section>

        {/* Five Solas */}
        <section className="pt-14 pb-20 px-6 md:px-8 bg-glc-surface-low">
          <div className="max-w-screen-2xl mx-auto">
            <div className="md:pl-[15%] mb-10">
              <p className="text-glc-on-surface-variant text-[0.7rem] uppercase tracking-widest font-bold mb-4">
                Foundational Convictions
              </p>
              <h2 className="text-3xl md:text-4xl text-glc-on-surface mb-4">
                The Five Solas
              </h2>
              <p className="text-glc-on-surface-variant text-lg leading-relaxed max-w-2xl">
                We are committed to the five solas of the Reformation — the core convictions that
                define our theology and practice.
              </p>
            </div>

            {/* Top row: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              {[
                { latin: 'Sola Scriptura', english: 'Scripture alone', desc: 'The Bible alone is our highest authority.' },
                { latin: 'Sola Fide', english: 'Faith alone', desc: 'We are saved through faith alone in Jesus Christ.' },
                { latin: 'Sola Gratia', english: 'Grace alone', desc: 'We are saved by the grace of God alone.' },
              ].map((sola) => (
                <SolaCard key={sola.latin} {...sola} />
              ))}
            </div>

            {/* Bottom row: 2 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:px-[16.66%]">
              {[
                { latin: 'Solus Christus', english: 'Christ alone', desc: 'Jesus Christ alone is our Lord, Savior, and King.' },
                { latin: 'Soli Deo Gloria', english: 'To the glory of God alone', desc: 'We live for the glory of God alone.' },
              ].map((sola) => (
                <SolaCard key={sola.latin} {...sola} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
