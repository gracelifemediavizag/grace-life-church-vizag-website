import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';

export const metadata: Metadata = {
  title: 'Core Values',
  description: 'The ten core values that guide the life and ministry of Grace Life Church Vizag.',
};

const values = [
  {
    number: 1,
    value: "God's Word",
    image: '/bible.jpg',
    description:
      "We value God's Word, the Bible, as solely authoritative and sufficient in all matters of belief and behavior for every believer's enjoyment of God and for the ministry of the church.",
    references: 'Psa. 1:1–3; 2 Tim 3:16–17; 1 Pet 2:2; 2 Pet 1:2–4',
  },
  {
    number: 2,
    value: 'Prayer',
    image: '/prayer.jpg',
    description:
      'We value prayer as the visible engine of all our efforts in ministry and worship. Fully relying on the Holy Spirit.',
    references: 'Acts 2:42; Eph. 6:18–20; Phil 4:6; Col 4:2; 1 Thess. 5:16–18; 1 Cor 2:14–16; Zech 4:6',
  },
  {
    number: 3,
    value: 'Biblical Family Roles',
    image: '/biblicalfamilyroles.jpeg',
    description:
      'We value husbands, wives, and children fulfilling their biblical roles in the family and in the church.',
    references: 'Deut. 6:4–9; Psa. 78:1–9; Eph. 6:4; 2 Tim 3:14–15',
  },
  {
    number: 4,
    value: 'Personal and Corporate Worship',
    image: '/personalandcorporateworship.jpeg',
    description:
      'We value personal and corporate worship of God, which engages both the mind and the heart.',
    references: 'John 4:23–24; Jam 4:8; Psa. 16:11; 2 Tim 4:1–4',
  },
  {
    number: 5,
    value: 'Christ-Centered Relationships',
    image: '/christcenteredrelationship.jpg',
    description:
      "We value Christ-centered relationships, especially through the regular gathering of small groups focused on God's Word, prayer, and mutual love.",
    references: 'John 13:34; Eph. 5:1–2; 1 Thess. 5:11; Heb 10:23–25; Jam 5:16',
  },
  {
    number: 6,
    value: 'Christlikeness',
    image: '/christlikeness.jpg',
    description:
      'We value corporately developing biblical knowledge, character, and actions that imitate Christ.',
    references: 'Eph. 4:12; Col 1:28',
  },
  {
    number: 7,
    value: 'Faithful Service',
    image: null,
    description: 'We value every believer faithfully serving in the body of Christ.',
    references: 'Rom 12:9–13; 1 Pet 4:11–12; 1 Cor. 12:7; Eph. 4:11–13',
  },
  {
    number: 8,
    value: 'Gospel Outreach',
    image: null,
    description:
      'We value reaching those who do not know Christ in our communities and throughout the world.',
    references: 'Matt 28:19–20; Acts 1:8; Rom 10:1; Col 4:2–4',
  },
  {
    number: 9,
    value: 'Elder Leadership',
    image: null,
    description:
      "We value the submission to Christ's leadership, which is carried out by a biblically qualified team of elders.",
    references: 'Acts 20:28; 1 Tim 3:1–7; Titus 1:5–9; 1 Pet 5:1–3; Heb. 13:17',
  },
  {
    number: 10,
    value: 'Leader Equipping',
    image: null,
    description: 'We value equipping leaders in the context of the local church.',
    references: 'Eph. 4:11–12; 1 Tim 5:17',
  },
];

export default function CoreValuesPage() {
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
              key={v.number}
              className="px-6 md:px-10"
              style={{
                paddingTop: '5rem',
                paddingBottom: '5rem',
                background: isEven ? '#ffffff' : '#F8F8F8',
              }}
            >
              <div
                className="max-w-[1400px] mx-auto flex flex-col md:items-center gap-10 md:gap-16"
                style={{
                  flexDirection: 'column',
                }}
              >
                {/* On desktop: alternating row direction */}
                {/* Image appears first in DOM → shows above text on mobile per spec.
                    On desktop, even rows: text left (order-1) / image right (order-2).
                    On desktop, odd rows: image left (order-1) / text right (order-2). */}
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 w-full">

                  {/* Image / placeholder block */}
                  {v.image ? (
                    <div
                      className={`flex-1 relative overflow-hidden w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}
                      style={{
                        aspectRatio: '4/3',
                        maxWidth: '480px',
                        borderRadius: 8,
                        minHeight: '260px',
                      }}
                    >
                      <Image src={v.image} alt={v.value} fill className="object-cover" />
                    </div>
                  ) : (
                    <div
                      className={`flex-1 flex items-center justify-center w-full ${isEven ? 'md:order-2' : 'md:order-1'}`}
                      style={{
                        background: isEven ? '#F8F8F8' : '#ffffff',
                        aspectRatio: '4/3',
                        maxWidth: '480px',
                        borderRadius: 8,
                        minHeight: '260px',
                      }}
                    >
                      <div className="text-center p-8 select-none">
                        <span
                          className="block"
                          style={{
                            fontSize: '6rem',
                            fontWeight: 300,
                            color: '#3399CC',
                            opacity: 0.15,
                            fontFamily: 'var(--font-poppins)',
                            lineHeight: 1,
                          }}
                        >
                          {v.number}
                        </span>
                        <p
                          className="mt-3"
                          style={{
                            fontFamily: 'var(--font-lato)',
                            fontSize: '0.65rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            color: '#1A1A1A',
                            opacity: 0.25,
                          }}
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
                      style={{
                        fontWeight: 400,
                        fontFamily: 'var(--font-poppins)',
                        borderLeft: '4px solid #EFBF04',
                        paddingLeft: '1.25rem',
                        lineHeight: 1.3,
                      }}
                    >
                      We value {v.value}
                    </h2>
                    <p
                      className="text-[#1A1A1A] text-base mb-6"
                      style={{
                        fontWeight: 300,
                        fontFamily: 'var(--font-poppins)',
                        lineHeight: 1.8,
                        paddingLeft: '1.25rem',
                      }}
                    >
                      {v.description}
                    </p>
                    <p
                      style={{
                        fontFamily: 'var(--font-lato)',
                        fontStyle: 'italic',
                        color: '#3399CC',
                        fontSize: '0.8125rem',
                        paddingLeft: '1.25rem',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {v.references}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </main>
      <Footer />
    </>
  );
}
