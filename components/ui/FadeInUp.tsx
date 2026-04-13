'use client';

import { motion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function FadeInUp({ children, delay = 0, className, style }: FadeInUpProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
