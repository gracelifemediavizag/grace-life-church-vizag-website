import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import BlogCard from '@/components/church/BlogCard';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const metadata: Metadata = {
  title: "Pastor's Blog",
  description:
    "Theological articles and pastoral reflections from the teaching team at Grace Life Church Vizag.",
};

export default async function BlogIndexPage() {
  const reader = createReader(process.cwd(), config);
  const allEntries = await reader.collections.blogPosts.all();
  const posts = allEntries
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      author: entry.author,
      date: entry.date ?? '',
      readTime: entry.readTime ?? '',
      excerpt: entry.excerpt ?? '',
    }))
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  const [featured, ...rest] = posts;

  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ── */}
        <section className="bg-[#1A1A1A] pt-40 pb-28 px-6 md:px-8">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
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
                From the Pulpit
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
                The Blog
              </h1>
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.0625rem',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.8,
                  maxWidth: '30rem',
                }}
              >
                Theological articles and pastoral reflections from the teaching team at Grace Life Church.
              </p>
            </div>

            {/* Pull stat */}
            <div className="md:pr-[10%]">
              <div
                className="border-l-4 pl-6"
                style={{ borderColor: '#3399CC' }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.0625rem',
                    color: 'rgba(255,255,255,0.6)',
                    lineHeight: 1.85,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;Preach the word; be ready in season and out of season; reprove,
                  rebuke, and exhort, with complete patience and teaching.&rdquo;
                </p>
                <p
                  className="mt-4"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: '#3399CC',
                    opacity: 0.8,
                  }}
                >
                  2 Timothy 4:2
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Featured post ── */}
        <section className="px-6 md:px-8 py-16 bg-[#F8F8F8]">
          <div className="max-w-screen-2xl mx-auto">
            <BlogCard
              title={featured.title}
              author={featured.author}
              date={featured.date}
              excerpt={featured.excerpt}
              slug={featured.slug}
              readTime={featured.readTime}
              featured
            />
          </div>
        </section>

        {/* ── Grid + sidebar ── */}
        <section className="px-6 md:px-8 py-16 pb-28 bg-white">
          <div className="max-w-screen-2xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

            {/* Post grid */}
            <div className="lg:col-span-8">
              <p
                className="mb-8"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#1A1A1A',
                  opacity: 0.3,
                }}
              >
                All Articles
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {rest.map((post, i) => (
                  <BlogCard
                    key={post.slug}
                    title={post.title}
                    author={post.author}
                    date={post.date}
                    excerpt={post.excerpt}
                    readTime={post.readTime}
                    slug={post.slug}
                    index={i}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-10">

              {/* Recent posts */}
              <section>
                <p
                  className="mb-5"
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.6rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: '#1A1A1A',
                    opacity: 0.35,
                    borderBottom: '1px solid #EBEBEB',
                    paddingBottom: '0.75rem',
                  }}
                >
                  Recent Posts
                </p>
                <div className="space-y-5">
                  {posts.map((post) => (
                    <a key={post.slug} href={`/blog/${post.slug}`} className="block group">
                      <p
                        style={{
                          fontFamily: 'var(--font-lato)',
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          letterSpacing: '0.14em',
                          textTransform: 'uppercase',
                          color: '#1A1A1A',
                          opacity: 0.35,
                          marginBottom: '0.3rem',
                        }}
                      >
                        {post.date}
                      </p>
                      <p
                        style={{
                          fontFamily: 'var(--font-poppins)',
                          fontWeight: 400,
                          fontSize: '0.9375rem',
                          color: '#1A1A1A',
                          lineHeight: 1.4,
                          transition: 'color 0.15s',
                        }}
                        className="group-hover:text-[#3399CC]"
                      >
                        {post.title}
                      </p>
                    </a>
                  ))}
                </div>
              </section>

            </aside>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
