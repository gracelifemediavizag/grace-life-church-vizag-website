'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

export default function HomeHeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="relative z-10 max-w-screen-2xl mx-auto px-6 md:px-8 text-center pt-20"
    >
      <motion.p
        variants={item}
        className="text-white/60 text-[0.7rem] uppercase tracking-widest mb-6"
        style={{ fontFamily: 'var(--font-lato)', fontWeight: 700 }}
      >
        Visakhapatnam, Andhra Pradesh
      </motion.p>

      <motion.h1
        variants={item}
        className="text-white mb-6 leading-[1.05]"
        style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          fontWeight: 400,
          fontFamily: 'var(--font-poppins)',
        }}
      >
        Welcome to<br />Grace Life Church
      </motion.h1>

      <motion.p
        variants={item}
        className="text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
        style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.25rem' }}
      >
        Preaching the Whole Counsel of God
      </motion.p>

      <motion.div variants={item} className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/im-new" className="btn-hero-outline">
          Plan Your Visit
        </Link>
        <Link href="/sermons" className="btn-hero-ghost">
          Watch Sermons
        </Link>
      </motion.div>
    </motion.div>
  );
}
