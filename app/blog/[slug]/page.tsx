import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';
import { DocumentRenderer } from '@keystatic/core/renderer';

interface Props {
  params: Promise<{ slug: string }>;
}

const reader = createReader(process.cwd(), config);

export async function generateStaticParams() {
  const slugs = await reader.collections.blogPosts.list();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = await reader.collections.blogPosts.read(slug);
  if (!entry) return { title: 'Post Not Found' };
  return {
    title: entry.title,
    description: entry.excerpt ?? '',
  };
}

/** Renders markdown-ish content with the site's design language */
function renderContent(content: string) {
  const blocks = content.split('\n\n').filter(Boolean);

  return blocks.map((block, i) => {
    // H2
    if (block.startsWith('## ')) {
      return (
        <h2
          key={i}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 400,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
            color: '#1A1A1A',
            lineHeight: 1.3,
            marginTop: '3rem',
            marginBottom: '1rem',
            paddingLeft: '1.25rem',
            borderLeft: '3px solid #EFBF04',
          }}
        >
          {block.slice(3)}
        </h2>
      );
    }

    // H3
    if (block.startsWith('### ')) {
      return (
        <h3
          key={i}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 400,
            fontSize: '1.125rem',
            color: '#1A1A1A',
            lineHeight: 1.35,
            marginTop: '2rem',
            marginBottom: '0.75rem',
          }}
        >
          {block.slice(4)}
        </h3>
      );
    }

    // Numbered list
    if (/^\d+\.\s/.test(block)) {
      const items = block.split('\n').filter(Boolean);
      return (
        <ol
          key={i}
          style={{
            paddingLeft: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {items.map((item, j) => (
            <li
              key={j}
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                color: '#1A1A1A',
                opacity: 0.75,
                lineHeight: 1.9,
                listStyleType: 'decimal',
              }}
            >
              {renderInline(item.replace(/^\d+\.\s/, ''))}
            </li>
          ))}
        </ol>
      );
    }

    // Bullet list
    if (block.startsWith('- ')) {
      const items = block.split('\n').filter(Boolean);
      return (
        <ul
          key={i}
          style={{
            paddingLeft: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {items.map((item, j) => (
            <li
              key={j}
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                color: '#1A1A1A',
                opacity: 0.75,
                lineHeight: 1.9,
                listStyleType: 'disc',
              }}
            >
              {renderInline(item.slice(2))}
            </li>
          ))}
        </ul>
      );
    }

    // Em-dash attribution lines (e.g. — *Author, Role*)
    if (block.startsWith('— ')) {
      return (
        <p
          key={i}
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 300,
            fontSize: '0.875rem',
            color: '#1A1A1A',
            opacity: 0.45,
            fontStyle: 'italic',
            marginTop: '0.5rem',
          }}
        >
          {block.replace(/\*/g, '')}
        </p>
      );
    }

    // Regular paragraph
    return (
      <p
        key={i}
        style={{
          fontFamily: 'var(--font-poppins)',
          fontWeight: 300,
          fontSize: '1.0625rem',
          color: '#1A1A1A',
          opacity: 0.78,
          lineHeight: 1.9,
        }}
      >
        {renderInline(block)}
      </p>
    );
  });
}

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong
          key={i}
          style={{ fontWeight: 600, color: '#1A1A1A', opacity: 1 }}
        >
          {part.slice(2, -2)}
        </strong>
      );
    }
    // Strip stray single *italics* markers
    return part.replace(/\*/g, '');
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const entry = await reader.collections.blogPosts.read(slug, { resolveLinkedFiles: true });
  if (!entry) notFound();

  const allSlugs = await reader.collections.blogPosts.list();
  const otherEntries = await Promise.all(
    allSlugs.filter((s) => s !== slug).map((s) => reader.collections.blogPosts.read(s))
  );
  const otherPosts = otherEntries.filter(Boolean).map((e, i) => ({
    slug: allSlugs.filter((s) => s !== slug)[i],
    title: e!.title,
    date: e!.date ?? '',
    author: e!.author,
  }));

  const post = {
    title: entry.title,
    author: entry.author,
    authorRole: entry.authorRole ?? '',
    date: entry.date ? new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : '',
    readTime: entry.readTime ?? '',
    excerpt: entry.excerpt ?? '',
  };
  const initials = post.author.split(' ').map((n: string) => n[0]).join('').slice(0, 2).toUpperCase();

  return (
    <>
      <NavBar />
      <main>

        {/* ── Hero ── */}
        <section style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '4rem' }}>
          <div className="max-w-screen-2xl mx-auto px-6 md:px-8">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>

              {/* Breadcrumb */}
              <Link
                href="/blog"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#EFBF04',
                  opacity: 0.75,
                  display: 'inline-block',
                  marginBottom: '1.75rem',
                }}
              >
                ← The Blog
              </Link>

              {/* Title */}
              <h1
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
                  color: '#ffffff',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '2.5rem',
                }}
              >
                {post.title}
              </h1>

              {/* Meta row */}
              <div
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                  paddingTop: '1.5rem',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem 2rem',
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 400,
                      fontSize: '0.9375rem',
                      color: '#ffffff',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {post.author}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-lato)',
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.35)',
                    }}
                  >
                    {post.authorRole}
                  </p>
                </div>

                <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '1rem' }}>·</span>

                <div>
                  <p
                    style={{
                      fontFamily: 'var(--font-lato)',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                      marginBottom: '0.2rem',
                    }}
                  >
                    {post.date}
                  </p>
                  <p
                    style={{
                      fontFamily: 'var(--font-lato)',
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: '#3399CC',
                    }}
                  >
                    {post.readTime}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Article body ── */}
        <section style={{ background: '#ffffff', padding: '5rem 1.5rem 6rem' }}>
          <article style={{ maxWidth: '680px', margin: '0 auto' }}>

            {/* Lead excerpt pull quote */}
            <blockquote
              style={{
                borderLeft: '4px solid #EFBF04',
                paddingLeft: '1.5rem',
                marginBottom: '3rem',
              }}
            >
              <p
                style={{
                  fontFamily: 'var(--font-poppins)',
                  fontWeight: 300,
                  fontSize: '1.1875rem',
                  color: '#1A1A1A',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  opacity: 0.85,
                }}
              >
                {post.excerpt}
              </p>
            </blockquote>

            {/* Body */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <DocumentRenderer
                document={entry.content}
                renderers={{
                  block: {
                    heading: ({ level, children }) =>
                      level === 2 ? (
                        <h2 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)', color: '#1A1A1A', lineHeight: 1.3, marginTop: '3rem', marginBottom: '1rem', paddingLeft: '1.25rem', borderLeft: '3px solid #EFBF04' }}>{children}</h2>
                      ) : (
                        <h3 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, fontSize: '1.125rem', color: '#1A1A1A', lineHeight: 1.35, marginTop: '2rem', marginBottom: '0.75rem' }}>{children}</h3>
                      ),
                    paragraph: ({ children }) => (
                      <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: '#1A1A1A', opacity: 0.78, lineHeight: 1.9 }}>{children}</p>
                    ),
                    list: ({ type, children }) =>
                      type === 'ordered' ? (
                        <ol style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'decimal' }}>{children}</ol>
                      ) : (
                        <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', listStyleType: 'disc' }}>{children}</ul>
                      ),
                    listItem: ({ children }) => (
                      <li style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: '#1A1A1A', opacity: 0.75, lineHeight: 1.9 }}>{children}</li>
                    ),
                    divider: () => <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: '2rem 0' }} />,
                    blockquote: ({ children }) => (
                      <blockquote style={{ borderLeft: '4px solid #EFBF04', paddingLeft: '1.5rem' }}>{children}</blockquote>
                    ),
                  },
                  inline: {
                    bold: ({ children }) => <strong style={{ fontWeight: 600, color: '#1A1A1A', opacity: 1 }}>{children}</strong>,
                    italic: ({ children }) => <em>{children}</em>,
                    link: ({ href, children }) => <a href={href} style={{ color: '#3399CC', textDecoration: 'underline' }}>{children}</a>,
                  },
                }}
              />
            </div>

            {/* Author bio card */}
            <div
              style={{
                marginTop: '4rem',
                background: '#1A1A1A',
                padding: '2rem',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '1.25rem',
              }}
            >
              {/* Initials square */}
              <div
                style={{
                  flexShrink: 0,
                  width: '3rem',
                  height: '3rem',
                  background: '#EFBF04',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 700,
                    fontSize: '0.875rem',
                    color: '#000000',
                    letterSpacing: '0.04em',
                  }}
                >
                  {initials}
                </span>
              </div>
              <div>
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 400,
                    fontSize: '0.9375rem',
                    color: '#ffffff',
                    marginBottom: '0.25rem',
                  }}
                >
                  {post.author}
                </p>
                <p
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  {post.authorRole}
                </p>
              </div>
            </div>

          </article>
        </section>

        {/* ── More from the Blog ── */}
        {otherPosts.length > 0 && (
          <section style={{ background: '#1A1A1A', padding: '4rem 1.5rem 5rem' }}>
            <div style={{ maxWidth: '680px', margin: '0 auto' }}>
              <p
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.6rem',
                  fontWeight: 700,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '2rem',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                  paddingBottom: '1rem',
                }}
              >
                More from the Blog
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                    <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '0.5rem' }}>
                      {p.date ? new Date(p.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''}
                    </p>
                    <h4 className="group-hover:text-[#3399CC] transition-colors" style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1rem', color: '#ffffff', lineHeight: 1.4, marginBottom: '0.5rem' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontFamily: 'var(--font-lato)', fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.25)' }}>
                      {p.author}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

      </main>
      <Footer />
    </>
  );
}
