import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import PageHero from '@/components/church/PageHero';

export const metadata: Metadata = {
  title: 'Core Beliefs',
  description: 'The ten core beliefs of Grace Life Church Vizag.',
};

const beliefs = [
  {
    number: 1,
    title: 'The Sufficiency of Christ',
    description:
      'Based on His virgin birth, sinless life, present rule and future reign, sufficient death, and exclusive offer of salvation.',
    references: 'Isa 7:14; John 8:46; Heb. 5:18; Ps 110; Rev 20; John 14:6',
  },
  {
    number: 2,
    title: 'The Sufficiency of the Scripture',
    description: 'Based on its divine origin — the Bible is fully sufficient for all matters of faith and practice.',
    references: '2 Tim 3:16–17; Heb. 4:12',
  },
  {
    number: 3,
    title: 'The Witness of the Local Church',
    description:
      'Based on its commission, call to equip the saints, and govern itself autonomously under Christ.',
    references: 'Matt 28:19–20; Eph. 4:11',
  },
  {
    number: 4,
    title: 'The Priesthood of all Believers',
    description:
      "Based on the privilege to be Christ's representatives on earth, who have no need of a human mediator.",
    references: '1 Tim 2:5',
  },
  {
    number: 5,
    title: 'The Total Depravity of Man',
    description: 'All mankind is utterly fallen and incapable of saving themselves.',
    references: 'Rom 3:9–20',
  },
  {
    number: 6,
    title: 'The Eternal Security of Salvation',
    description:
      "All the redeemed, once saved, are kept by God's power and are thus secure in Christ forever.",
    references: '1 Peter 1:3–5',
  },
  {
    number: 7,
    title: 'The Absolute Sovereignty of God',
    description: 'God reigns supremely over all creation, providence, and redemption.',
    references: 'Ps 103:19; Rom 9–11; Eph. 1:4–14',
  },
  {
    number: 8,
    title: 'The Horror of Eternal Punishment',
    description:
      'Those who reject Christ face an eternal, conscious judgment in hell.',
    references: 'Matt 25:46; Rev 21',
  },
  {
    number: 9,
    title: 'The Free Offer of the Gospel',
    description:
      'The gospel is freely offered to all mankind, calling all to repentance and faith.',
    references: 'Eph. 2:8–10',
  },
  {
    number: 10,
    title: 'The Glory of Heaven',
    description:
      'The redeemed will dwell in the glorious presence of God forever in the new creation.',
    references: 'John 14; Rev 21–22',
  },
];

export default function CoreBeliefsPage() {
  return (
    <>
      <NavBar />
      <main>
        <PageHero
          label="About — Core Beliefs"
          title="Core Beliefs"
          subtitle="Ten convictions that anchor our faith and practice."
        />

        <section className="py-20 px-6 md:px-8 bg-[#F8F8F8]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {beliefs.map((belief, i) => {
                const isGold = i % 2 === 0;
                const accentColor = isGold ? '#EFBF04' : '#3399CC';
                const cardBg = isGold ? '#1A1A1A' : '#1C2E40';
                const numStr = String(belief.number).padStart(2, '0');

                return (
                  <div
                    key={belief.number}
                    className="group relative overflow-hidden cursor-default"
                    style={{ background: cardBg, borderRadius: 6 }}
                  >
                    {/* Top accent stripe */}
                    <div style={{ height: 3, background: accentColor }} />

                    {/* ── Mobile: always fully visible ── */}
                    <div className="md:hidden flex flex-col justify-between px-5 py-6 gap-4">
                      <div>
                        <span
                          className="block mb-2"
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontSize: '2.25rem',
                            fontWeight: 300,
                            color: accentColor,
                            lineHeight: 1,
                          }}
                        >
                          {numStr}
                        </span>
                        <h2
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontSize: '0.9375rem',
                            fontWeight: 400,
                            color: '#ffffff',
                            lineHeight: 1.4,
                          }}
                        >
                          {belief.title}
                        </h2>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontSize: '0.8125rem',
                            fontWeight: 300,
                            color: 'rgba(255,255,255,0.68)',
                            lineHeight: 1.65,
                            marginBottom: '0.625rem',
                          }}
                        >
                          {belief.description}
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-lato)',
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: accentColor,
                          }}
                        >
                          {belief.references}
                        </p>
                      </div>
                    </div>

                    {/* ── Desktop default: big number + title, hides on hover ── */}
                    <div
                      className="hidden md:flex absolute inset-0 flex-col justify-center px-6 pb-4 pt-6 transition-opacity duration-300 group-hover:opacity-0"
                      style={{ top: 3, minHeight: '240px' }}
                    >
                      <span
                        className="block mb-3"
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontSize: '3rem',
                          fontWeight: 300,
                          color: accentColor,
                          lineHeight: 1,
                        }}
                      >
                        {numStr}
                      </span>
                      <h2
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontSize: '0.9375rem',
                          fontWeight: 400,
                          color: '#ffffff',
                          lineHeight: 1.4,
                        }}
                      >
                        {belief.title}
                      </h2>
                    </div>

                    {/* ── Desktop hover: smaller title + description + scripture ── */}
                    <div
                      className="hidden md:flex absolute inset-0 flex-col justify-between px-6 pb-6 pt-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ top: 3, minHeight: '240px' }}
                    >
                      <div>
                        <span
                          className="block mb-1"
                          style={{
                            fontFamily: 'var(--font-lato)',
                            fontSize: '0.55rem',
                            fontWeight: 700,
                            letterSpacing: '0.18em',
                            textTransform: 'uppercase',
                            color: accentColor,
                          }}
                        >
                          {numStr}
                        </span>
                        <h2
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontSize: '0.8125rem',
                            fontWeight: 400,
                            color: '#ffffff',
                            lineHeight: 1.35,
                            opacity: 0.85,
                          }}
                        >
                          {belief.title}
                        </h2>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontSize: '0.78rem',
                            fontWeight: 300,
                            color: 'rgba(255,255,255,0.7)',
                            lineHeight: 1.65,
                            marginBottom: '0.75rem',
                          }}
                        >
                          {belief.description}
                        </p>
                        <p
                          style={{
                            fontFamily: 'var(--font-lato)',
                            fontSize: '0.6rem',
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: accentColor,
                            opacity: 0.85,
                          }}
                        >
                          {belief.references}
                        </p>
                      </div>
                    </div>

                    {/* Spacer to give desktop cards their height */}
                    <div className="hidden md:block" style={{ minHeight: '240px' }} />
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
