'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import type { Leader } from '@/lib/leaders';

const tabs = [
  { key: 'all',               label: 'All'                  },
  { key: 'elder',             label: 'Elders'               },
  { key: 'elder-in-training', label: 'Elders in Training'   },
  { key: 'deacon',            label: 'Deacons'              },
  { key: 'deaconess',         label: 'Deaconesses'          },
  { key: 'worship',           label: 'Worship'              },
  { key: 'youth',             label: 'Youth'                },
  { key: 'media',             label: 'Media'                },
] as const;

function getInitials(name: string) {
  return name.split(' ').filter(Boolean).map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

function MemberCard({ leader }: { leader: Leader }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      href={`/leadership/${leader.slug}`}
      className="group flex flex-col"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ textDecoration: 'none' }}
    >
      {/* Portrait area — large, like a headshot */}
      <div
        style={{
          aspectRatio: '3 / 4',
          background: hovered ? '#242424' : '#1c1c1c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background 0.25s ease',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {leader.photo ? (
          <Image
            src={leader.photo}
            alt={leader.name}
            fill
            style={{ objectFit: 'cover', objectPosition: 'top' }}
            sizes="(max-width: 768px) 50vw, 200px"
          />
        ) : (
          /* Large initials fallback */
          <span
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 300,
              color: hovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.35)',
              letterSpacing: '0.06em',
              transition: 'color 0.25s ease',
              userSelect: 'none',
            }}
          >
            {getInitials(leader.name)}
          </span>
        )}

        {/* Gold bottom rule — appears on hover */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 3,
            background: '#EFBF04',
            transform: hovered ? 'scaleX(1)' : 'scaleX(0)',
            transformOrigin: 'left',
            transition: 'transform 0.25s ease',
            zIndex: 1,
          }}
        />
      </div>

      {/* Name + role footer */}
      <div className="pt-4 pb-1">
        <h3
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 400,
            fontSize: '0.9375rem',
            color: '#ffffff',
            lineHeight: 1.3,
            marginBottom: '0.3rem',
          }}
        >
          {leader.name}
        </h3>
        <p
          style={{
            fontFamily: 'var(--font-lato)',
            fontSize: '0.6rem',
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#EFBF04',
            opacity: 0.7,
          }}
        >
          {leader.role}
        </p>
      </div>
    </Link>
  );
}

export default function LeadershipTabs({ leaders }: { leaders: Leader[] }) {
  const [activeTab, setActiveTab] = useState<string>('all');

  const filterMembers = (tab: string) => {
    if (tab === 'all') return leaders;
    if (tab === 'elder') return leaders.filter(l => l.category === 'elder' || l.category === 'pastor');
    return leaders.filter(l => l.category === tab);
  };

  const activeMembers = filterMembers(activeTab);

  return (
    <section className="bg-[#0d0d0d] px-6 md:px-8 pb-24">
      <div className="max-w-screen-2xl mx-auto">

        {/* Tab bar */}
        <div
          className="flex gap-0 overflow-x-auto border-b mb-14"
          style={{ borderColor: 'rgba(255,255,255,0.08)', scrollbarWidth: 'none' }}
        >
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            const count = filterMembers(tab.key).length;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className="shrink-0 flex items-center gap-2 px-5 py-5 transition-colors"
                style={{
                  background: 'none',
                  border: 'none',
                  borderBottom: isActive ? '2px solid #EFBF04' : '2px solid transparent',
                  marginBottom: '-1px',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-lato)',
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: isActive ? '#EFBF04' : 'rgba(255,255,255,0.35)',
                  transition: 'color 0.15s',
                }}
              >
                {tab.label}
                <span
                  style={{
                    fontSize: '0.55rem',
                    color: isActive ? 'rgba(239,191,4,0.6)' : 'rgba(255,255,255,0.2)',
                    fontWeight: 700,
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Members grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-x-6 gap-y-10"
            style={{
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            }}
          >
            {activeMembers.map(leader => (
              <MemberCard key={leader.slug} leader={leader} />
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
