'use client';

import { motion } from 'framer-motion';

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '6rem' }} className="px-6 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          className="md:pl-[15%]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={item}
            className="mb-5"
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#EFBF04',
            }}
          >
            {label}
          </motion.p>
          <motion.h1
            variants={item}
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: subtitle ? '1.5rem' : 0,
            }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              variants={item}
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
                maxWidth: '34rem',
              }}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
