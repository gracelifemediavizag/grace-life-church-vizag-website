'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface BlogCardProps {
  title:     string;
  author:    string;
  date:      string;
  excerpt:   string;
  slug:      string;
  readTime?: string;
  featured?: boolean;
  index?:    number;
}

// Cycles: blue → gold → dark
const topBarColors = ['#3399CC', '#EFBF04', '#1A1A1A'];

export default function BlogCard({ title, author, date, excerpt, slug, readTime, featured, index = 0 }: BlogCardProps) {
  if (featured) {
    return (
      <article
        style={{
          background: '#0F0F0F',
          borderTop: '3px solid #EFBF04',
          padding: '3rem 3.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-lato)',
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#EFBF04',
          }}
        >
          Featured Article
        </p>

        <h2
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 300,
            fontSize: 'clamp(1.75rem, 3.5vw, 3rem)',
            color: '#ffffff',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            maxWidth: '38rem',
          }}
        >
          {title}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 300,
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.8,
            maxWidth: '42rem',
          }}
        >
          {excerpt}
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            {author}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.6rem' }}>·</span>
          <span
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.6rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
            }}
          >
            {date}
          </span>
          {readTime && (
            <>
              <span style={{ color: 'rgba(255,255,255,0.15)', fontSize: '0.6rem' }}>·</span>
              <span
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#3399CC',
                }}
              >
                {readTime}
              </span>
            </>
          )}
        </div>

        <Link
          href={`/blog/${slug}`}
          style={{
            display: 'inline-block',
            fontFamily: 'var(--font-lato)',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#EFBF04',
            borderBottom: '1px solid rgba(239,191,4,0.4)',
            paddingBottom: '2px',
            width: 'fit-content',
          }}
        >
          Read Article →
        </Link>
      </article>
    );
  }

  const barColor = topBarColors[index % topBarColors.length];
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      className="group"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      style={{
        background: '#ffffff',
        borderTop: `3px solid ${barColor}`,
        border: '1px solid #EBEBEB',
        borderTopColor: barColor,
        borderTopWidth: '3px',
        padding: '1.75rem',
        position: 'relative',
        // Fill the grid cell height so all cards in a row are uniform
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Watermark number */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '1.25rem',
          right: '1.5rem',
          fontFamily: 'var(--font-poppins)',
          fontWeight: 700,
          fontSize: '3.5rem',
          lineHeight: 1,
          color: '#F0F0F0',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.04em',
        }}
      >
        {num}
      </span>

      {/* Content grows to fill available space */}
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <p
          style={{
            fontFamily: 'var(--font-lato)',
            fontSize: '0.58rem',
            fontWeight: 700,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: barColor === '#1A1A1A' ? '#1A1A1A' : barColor,
            opacity: barColor === '#1A1A1A' ? 0.5 : 0.8,
            marginBottom: '0.75rem',
          }}
        >
          {date}
        </p>

        <h3
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 400,
            fontSize: '1.0625rem',
            color: '#1A1A1A',
            lineHeight: 1.4,
            marginBottom: '0.75rem',
            paddingRight: '3rem',
            // Clamp to 2 lines so titles of different lengths don't push cards out of alignment
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}
        >
          {title}
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 300,
            fontSize: '0.875rem',
            color: '#1A1A1A',
            opacity: 0.55,
            lineHeight: 1.75,
            marginBottom: '1.25rem',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}
        >
          {excerpt}
        </p>

        {/* Footer pinned to the bottom of the card */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem', marginTop: 'auto' }}>
          <span
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.58rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#1A1A1A',
              opacity: 0.35,
            }}
          >
            {author}{readTime ? ` · ${readTime}` : ''}
          </span>
          <Link
            href={`/blog/${slug}`}
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: '#3399CC',
              borderBottom: '1px solid rgba(51,153,204,0.35)',
              paddingBottom: '1px',
            }}
          >
            Read →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
