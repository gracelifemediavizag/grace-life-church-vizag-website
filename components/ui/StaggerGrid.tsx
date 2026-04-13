'use client';

import { motion } from 'framer-motion';
import type { ReactNode, CSSProperties } from 'react';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09 },
  },
};

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export function StaggerGrid({ children, className, style }: Props) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className, style }: Props) {
  return (
    <motion.div
      variants={itemVariants}
      className={className}
      // display:flex so height:100% on children is resolved against the stretched grid cell
      style={{ display: 'flex', flexDirection: 'column', ...style }}
    >
      {children}
    </motion.div>
  );
}
