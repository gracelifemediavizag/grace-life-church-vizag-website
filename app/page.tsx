import type { Metadata } from 'next';
import Link from 'next/link';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import BlogCard from '@/components/church/BlogCard';
import ServiceTimesAccordion from '@/components/church/ServiceTimesAccordion';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const metadata: Metadata = {
  title: 'Grace Life Church Vizag — Preaching the Whole Counsel of God',
  description:
    'Grace Life Church Vizag is a Reformed church in Visakhapatnam, Andhra Pradesh, preaching the whole counsel of God. A church plant of Fullness of Joy Ministries.',
};

export default async function HomePage() {
  const reader = createReader(process.cwd(), config);
  const allEntries = await reader.collections.blogPosts.all();
  const blogPosts = allEntries
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      author: entry.author,
      date: entry.date
        ? new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        : '',
      readTime: entry.readTime ?? '',
      excerpt: entry.excerpt ?? '',
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section
          className="relative flex items-center justify-center bg-[#1A1A1A]"
          style={{
            minHeight: '100vh',
            backgroundImage: "url('/images/heroes/mainpagehero.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center 80px',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.45)' }} />

          {/* Content */}
          <div className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 text-center pt-20">
            <p
              className="text-white/60 text-[0.7rem] uppercase tracking-widest mb-6"
              style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}
            >
              Visakhapatnam, Andhra Pradesh
            </p>
            <h1
              className="text-white mb-6 leading-[1.05]"
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 400,
                fontFamily: 'var(--font-poppins)',
              }}
            >
              Welcome to<br />Grace Life Church
            </h1>
            <p
              className="text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.25rem' }}
            >
              Preaching the Whole Counsel of God
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/im-new" className="btn-hero-outline">
                Plan Your Visit
              </Link>
              <Link href="/sermons" className="btn-hero-ghost">
                Watch Sermons
              </Link>
            </div>
          </div>
        </section>

        {/* Service Times */}
        <section className="py-24 px-6 md:px-8 bg-white">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* Left — heading */}
            <div className="md:pl-8">
              <p className="text-[#3399CC] text-[0.7rem] uppercase tracking-widest font-bold mb-3"
                 style={{ fontFamily: 'var(--font-lato)' }}>
                Join Us
              </p>
              <h2 className="text-3xl md:text-4xl text-glc-on-surface tracking-tight mb-6">
                Service Times
              </h2>
              <p className="text-glc-on-surface-variant text-base leading-relaxed mb-8">
                We gather weekly to worship God, grow in His Word, and encourage one another.
                You are welcome to join us at any of our services.
              </p>
              <a
                href="https://www.google.com/maps/place/Grace+Life+Church,+Vizag/@17.7456557,83.312457,99m/data=!3m1!1e3!4m6!3m5!1s0x3a395d7a60e10f17:0x23137b54b808f3b2!8m2!3d17.745603!4d83.312793!16s%2Fg%2F11ghpmzkvl"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-glc-navy text-[0.7rem] uppercase tracking-widest border-b-2 border-glc-navy pb-1"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}
              >
                Get Directions
              </a>
            </div>
            {/* Right — accordion */}
            <ServiceTimesAccordion />
          </div>
        </section>

        {/* Mission — The 3 M's */}
        <section className="py-24 px-6 md:px-8 bg-[#1A1A1A]">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="md:pl-8">
              <p className="text-[#EFBF04] text-[0.7rem] uppercase tracking-widest font-bold mb-6"
                 style={{ fontFamily: 'var(--font-lato)' }}>
                Our Mission
              </p>
              <h2 className="text-4xl md:text-5xl text-white mb-8 leading-tight">
                We exist to glorify God.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Grace Life Church is committed to three core missional callings—Exalting God,
                Edifying the Saints, and Evangelizing the Lost—grounded in the whole counsel
                of Scripture.
              </p>
              <Link
                href="/about/mission"
                className="inline-flex items-center gap-2 text-[#EFBF04] text-[0.7rem] uppercase tracking-widest border-b-2 border-[#EFBF04] pb-1"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}
              >
                Our Full Mission
              </Link>
            </div>
            <div className="flex flex-col gap-8">
              {[
                {
                  heading: 'Exalting God',
                  body: 'To love and worship the Lord with all of our heart, soul, mind and strength, both individually and corporately.',
                },
                {
                  heading: 'Edifying the Saints',
                  body: "To build up God's people to be more like Jesus Christ through loving encouragement and equipping in godly character and biblical understanding.",
                },
                {
                  heading: 'Evangelizing the Lost',
                  body: 'To passionately share the gospel of Jesus Christ in order to establish worshipers in His church locally and globally.',
                },
              ].map((m) => (
                <div key={m.heading} className="flex gap-6 items-start">
                  <div className="shrink-0 w-12 h-12 bg-[#EFBF04] flex items-center justify-center">
                    <span className="text-black font-bold text-lg font-[family-name:var(--font-playfair)]">E</span>
                  </div>
                  <div>
                    <h3 className="text-lg text-white mb-1">{m.heading}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{m.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Blog Posts */}
        <section className="pt-14 pb-20 px-6 md:px-8 bg-[#F8F8F8]">
          <div className="max-w-screen-2xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="text-[#3399CC] text-[0.7rem] uppercase tracking-widest font-bold mb-3"
                   style={{ fontFamily: 'var(--font-lato)' }}>
                  From the Pulpit
                </p>
                <h2 className="text-4xl md:text-5xl text-glc-on-surface tracking-tight">
                  Pastor&rsquo;s Blog
                </h2>
              </div>
              <Link
                href="/blog"
                className="hidden md:block text-glc-navy font-bold text-[0.7rem] uppercase tracking-widest border-b-2 border-glc-navy pb-1"
              >
                View All Posts
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {blogPosts.map((post, i) => (
                <BlogCard key={post.slug} {...post} readTime={post.readTime} index={i} />
              ))}
            </div>
            <div className="md:hidden mt-10">
              <Link
                href="/blog"
                className="text-glc-navy font-bold text-[0.7rem] uppercase tracking-widest border-b-2 border-glc-navy pb-1"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>

        {/* Plan Your Visit CTA */}
        <section className="py-24 px-6 md:px-8 bg-glc-navy">
          <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                First time visiting?
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                We would love to have you join us on Sunday. Here is everything you need to
                know before your first visit.
              </p>
            </div>
            <Link
              href="/im-new"
              className="shrink-0 px-12 py-5 bg-white text-glc-navy rounded-sm font-bold text-[0.7rem] uppercase tracking-widest hover:bg-[#EFBF04] hover:text-black transition-colors"
            >
              Plan Your Visit
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
