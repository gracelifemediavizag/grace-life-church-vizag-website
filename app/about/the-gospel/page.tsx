import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';

export const metadata: Metadata = {
  title: 'The Gospel',
  description:
    'What is the gospel of Jesus Christ? Grace Life Church Vizag explains the good news of salvation.',
};

const qaPairs = [
  {
    roman: 'I',
    question: 'Who made us, and to whom are we accountable?',
    answer: 'We are accountable to God, our Creator and King.',
  },
  {
    roman: 'II',
    question: 'What is our problem?',
    answer: 'Our problem is our sin and rebellion against Him.',
  },
  {
    roman: 'III',
    question: "What is God's solution to our problem?",
    answer: 'Salvation through the life, death, and resurrection of Jesus Christ.',
  },
  {
    roman: 'IV',
    question: 'How can I be included in His solution?',
    answer: 'Through repentance from sin and faith in Jesus Christ alone.',
  },
];

export default function TheGospelPage() {
  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '7rem' }} className="px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto">
            <div className="md:pl-[15%] max-w-3xl">
              <p
                className="mb-6"
                style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EFBF04' }}
              >
                About — The Gospel
              </p>
              <h1
                className="text-white mb-8"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                  lineHeight: 1.05,
                  letterSpacing: '-0.02em',
                }}
              >
                The Gospel
              </h1>
              <p
                className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl"
                style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300 }}
              >
                Since the word &ldquo;gospel&rdquo; means &ldquo;good news,&rdquo; when Christians
                talk about the gospel, they are telling the good news about Jesus — a message from
                God saying: <em>&ldquo;Here is how you can be saved from my judgment.&rdquo;</em>
              </p>
              {/* Anchor verse */}
              <div
                className="border-l-4 pl-6"
                style={{ borderColor: '#EFBF04' }}
              >
                <p
                  className="text-white/90 text-lg leading-relaxed italic"
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300 }}
                >
                  &ldquo;God did not send his Son into the world to condemn the world, but in order
                  that the world might be saved through him.&rdquo;
                </p>
                <p
                  className="mt-3 text-[0.65rem] uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-lato)', color: '#EFBF04', fontWeight: 700 }}
                >
                  John 3:17
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Four Questions ── */}
        <section className="py-20 px-6 md:px-8 bg-[#F8F8F8]">
          <div className="max-w-screen-2xl mx-auto">
            <p
              className="text-[0.7rem] uppercase tracking-widest mb-10 md:pl-[15%]"
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#1A1A1A', opacity: 0.4 }}
            >
              Four Questions the Gospel Answers
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {qaPairs.map((item) => (
                <div
                  key={item.roman}
                  className="flex flex-col justify-between p-7"
                  style={{
                    background: '#1A1A1A',
                    borderRadius: 6,
                    borderTop: '3px solid #EFBF04',
                    minHeight: '220px',
                  }}
                >
                  <div>
                    <span
                      className="block mb-5"
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontSize: '1.75rem',
                        fontWeight: 300,
                        color: '#EFBF04',
                        lineHeight: 1,
                      }}
                    >
                      {item.roman}
                    </span>
                    <p
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 400,
                        fontSize: '0.9375rem',
                        color: '#ffffff',
                        lineHeight: 1.6,
                      }}
                    >
                      {item.question}
                    </p>
                  </div>
                  <p
                    className="mt-6 pt-5"
                    style={{
                      borderTop: '1px solid rgba(255,255,255,0.1)',
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 300,
                      fontSize: '0.8125rem',
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.65,
                      fontStyle: 'italic',
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── God ── */}
        <section className="py-24 px-6 md:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
            <div className="md:pl-[20%]">
              <p
                className="text-[0.6rem] uppercase tracking-widest mb-4"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#EFBF04' }}
              >
                Part One
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: '#1A1A1A',
                  lineHeight: 1.05,
                  borderLeft: '4px solid #EFBF04',
                  paddingLeft: '1.25rem',
                }}
              >
                God
              </h2>
            </div>
            <div className="space-y-6 max-w-2xl">
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: '#1A1A1A',
                  lineHeight: 1.9,
                  opacity: 0.8,
                }}
              >
                The first thing to know about the good news of Jesus is that &ldquo;in the beginning,
                God created the heavens and the earth&rdquo; (Genesis 1:1). Because God created
                everything — including us — he has the right to tell us how to live.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: '#1A1A1A',
                  lineHeight: 1.9,
                  opacity: 0.8,
                }}
              >
                God describes himself as &ldquo;merciful and gracious, slow to anger, and abounding
                in love and faithfulness…forgiving iniquity and transgression and sin.&rdquo; Then God
                adds, &ldquo;but who will by no means clear the guilty&rdquo; (Exodus 34:6–7). This loving
                God does not leave the guilty unpunished. God is also holy and righteous. He is
                determined never to ignore or tolerate sin — including ours.
              </p>
              {/* Inline scripture */}
              <blockquote
                className="py-6 px-0"
                style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0' }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.125rem',
                    color: '#1A1A1A',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;It is appointed for man to die once, and after that comes judgment.&rdquo;
                </p>
                <p
                  className="mt-3 text-[0.65rem] uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-lato)', color: '#3399CC', fontWeight: 700 }}
                >
                  Hebrews 9:27
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Mankind ── */}
        <section className="py-24 px-6 md:px-8 bg-[#F8F8F8]">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
            <div className="md:pl-[20%]">
              <p
                className="text-[0.6rem] uppercase tracking-widest mb-4"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#EFBF04' }}
              >
                Part Two
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                  color: '#1A1A1A',
                  lineHeight: 1.05,
                  borderLeft: '4px solid #EFBF04',
                  paddingLeft: '1.25rem',
                }}
              >
                Mankind
              </h2>
            </div>
            <div className="space-y-6 max-w-2xl">
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: '#1A1A1A',
                  lineHeight: 1.9,
                  opacity: 0.8,
                }}
              >
                When God created the first human beings — Adam and Eve — he intended for them to live
                under his righteous rule in perfect joy. When Adam disobeyed God, that fellowship
                with God was broken. Adam and Eve had declared rebellion against God.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: '#1A1A1A',
                  lineHeight: 1.9,
                  opacity: 0.8,
                }}
              >
                The Bible says &ldquo;all have sinned and fall short of the glory of God…none is
                righteous, no, not one&rdquo; (Romans 3:23, 10). Sin is not merely a violation of
                a heavenly traffic law. It is the rejection of God himself and his right to
                exercise authority over those to whom he gives life.
              </p>
              <blockquote
                className="py-6 px-0"
                style={{ borderTop: '1px solid #E0E0E0', borderBottom: '1px solid #E0E0E0' }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.125rem',
                    color: '#1A1A1A',
                    lineHeight: 1.8,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;The wages of sin is death.&rdquo;
                </p>
                <p
                  className="mt-3 text-[0.65rem] uppercase tracking-widest"
                  style={{ fontFamily: 'var(--font-lato)', color: '#3399CC', fontWeight: 700 }}
                >
                  Romans 6:23
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        {/* ── Jesus Christ — dark, climactic ── */}
        <section className="py-24 px-6 md:px-8 bg-[#1A1A1A]">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
            <div className="md:pl-[20%]">
              <p
                className="text-[0.6rem] uppercase tracking-widest mb-4"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#EFBF04' }}
              >
                Part Three
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  color: '#ffffff',
                  lineHeight: 1.1,
                  borderLeft: '4px solid #EFBF04',
                  paddingLeft: '1.25rem',
                }}
              >
                But…<br />Jesus<br />Christ
              </h2>
            </div>
            <div className="space-y-6 max-w-2xl">
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.9,
                }}
              >
                The word &ldquo;Christ&rdquo; means &ldquo;anointed one,&rdquo; referring to anointing
                a king with oil when he is crowned. So, when we say &ldquo;Jesus Christ,&rdquo; we are
                saying that Jesus is a King.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.75)',
                  lineHeight: 1.9,
                }}
              >
                God had promised that he would come as a great King to rescue his people from their
                sins. Jesus came to die in their place, to take the punishment they deserved for
                their rebellion against God. As Jesus died on a cross, the awful weight of all our
                sins fell on his shoulders. And Jesus died — for you and me.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 400,
                  fontSize: '1.0625rem',
                  color: '#ffffff',
                  lineHeight: 1.9,
                }}
              >
                But the story doesn&rsquo;t end there. Jesus the Crucified is no longer dead.
                He rose from the grave. Jesus&rsquo; rising from the grave was God&rsquo;s way of
                saying: <em style={{ color: '#EFBF04' }}>&ldquo;What Jesus claimed about who he is
                and what he came to do is true.&rdquo;</em>
              </p>
            </div>
          </div>
        </section>

        {/* ── Our Response ── */}
        <section className="py-24 px-6 md:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-24 items-start">
            <div className="md:pl-[20%]">
              <p
                className="text-[0.6rem] uppercase tracking-widest mb-4"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#EFBF04' }}
              >
                Part Four
              </p>
              <h2
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  color: '#1A1A1A',
                  lineHeight: 1.1,
                  borderLeft: '4px solid #EFBF04',
                  paddingLeft: '1.25rem',
                }}
              >
                Our<br />Response
              </h2>
            </div>
            <div className="space-y-6 max-w-2xl">
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: '#1A1A1A',
                  lineHeight: 1.9,
                  opacity: 0.8,
                }}
              >
                God expects us to respond with repentance and faith. To repent of our sins means
                to turn away from our rebellion against God. It means we will no longer live at
                peace with our sins.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: '#1A1A1A',
                  lineHeight: 1.9,
                  opacity: 0.8,
                }}
              >
                Not only that, but we also turn to God in faith. Faith is reliance — a
                promise-founded trust in the risen Jesus to save you from your sins.
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: '#1A1A1A',
                  lineHeight: 1.9,
                  opacity: 0.8,
                }}
              >
                If God is ever to count us righteous, he will have to do it on the basis of
                someone else&rsquo;s record. And that is what happens when a person is saved by
                Jesus: all our sins are credited to Jesus who took the punishment for them, and
                the perfect righteousness of Jesus is credited to us when we place our trust in
                what he has done for us.
              </p>

              {/* Two response pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {[
                  { word: 'Repentance', desc: 'Turn away from sin and rebellion against God.' },
                  { word: 'Faith', desc: 'Trust in the risen Christ alone for your salvation.' },
                ].map((item) => (
                  <div
                    key={item.word}
                    className="p-6"
                    style={{
                      background: '#F8F8F8',
                      borderTop: '3px solid #3399CC',
                      borderRadius: 6,
                    }}
                  >
                    <h3
                      className="mb-2"
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 400,
                        fontSize: '1rem',
                        color: '#1A1A1A',
                      }}
                    >
                      {item.word}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 300,
                        fontSize: '0.875rem',
                        color: '#1A1A1A',
                        opacity: 0.65,
                        lineHeight: 1.7,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Prayer of Faith — full dark, centered ── */}
        <section className="py-28 px-6 md:px-8 bg-glc-navy">
          <div className="max-w-screen-2xl mx-auto">
            <div className="max-w-2xl mx-auto text-center">
              <p
                className="text-[0.65rem] uppercase tracking-widest mb-8"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#EFBF04' }}
              >
                A Prayer of Faith
              </p>
              <p
                className="italic leading-[1.9] mb-10"
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                &ldquo;Jesus, I know I cannot save myself, and I know you have promised to save
                those who repent and put their faith in you alone. I trust you to forgive my sins
                and give me eternal life. Thank you for dying in my place to make my salvation
                possible.&rdquo;
              </p>
              <div
                className="w-12 mx-auto mb-8"
                style={{ height: 2, background: '#EFBF04', opacity: 0.5 }}
              />
              <p
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.35)',
                }}
              >
                Adapted from <em>What is the Gospel?</em> by Greg Gilbert
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
