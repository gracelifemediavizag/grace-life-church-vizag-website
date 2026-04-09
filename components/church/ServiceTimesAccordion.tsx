'use client';

import { useState } from 'react';

const serviceTimes = [
  { label: 'English Worship',       day: 'Sunday',     time: '8:30 AM – 10:00 AM' },
  { label: 'Sunday School',         day: 'Sunday',     time: '10:30 AM – 12:30 PM' },
  { label: 'Telugu Worship',        day: 'Sunday',     time: '10:30 AM – 12:30 PM\n6:00 PM – 8:00 PM' },
  { label: 'Congregational Prayer', day: 'Wednesday',  time: '7:00 PM – 8:30 PM' },
  { label: 'Whole Night Prayer',    day: '2nd Friday', time: '8:00 PM – 12:00 AM' },
  { label: 'Youth Fellowship',      day: 'Saturday',   time: '7:00 PM – 8:30 PM' },
];

export default function ServiceTimesAccordion() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="border-t border-[#E0E0E0]">
      {serviceTimes.map((s, i) => {
        const isOpen = hoveredIndex === i;
        return (
          <div
            key={s.label}
            className="border-b border-[#E0E0E0]"
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Row header */}
            <div className="w-full flex items-center justify-between py-5 cursor-default">
              <div className="flex items-center gap-5">
                <span
                  className="w-[5.5rem] shrink-0 text-[0.6rem] uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#3399CC' }}
                >
                  {s.day}
                </span>
                <span
                  className="text-[1.0625rem] transition-colors group-hover:text-[#3399CC]"
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 400,
                    color: isOpen ? '#3399CC' : '#1A1A1A',
                  }}
                >
                  {s.label}
                </span>
              </div>
              <svg
                width="14" height="14" viewBox="0 0 10 6" fill="none"
                className="shrink-0 ml-4 transition-transform duration-200"
                style={{
                  color: '#3399CC',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* Expandable content — grid-rows trick for smooth animation */}
            <div
              className="grid transition-[grid-template-rows] duration-200 ease-in-out"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <div className="pl-[calc(5.5rem+1.25rem)] pb-6">
                  {s.time.split('\n').map((t, j) => (
                    <p
                      key={j}
                      style={{
                        fontFamily: 'var(--font-poppins)',
                        fontWeight: 300,
                        fontSize: '1.625rem',
                        color: '#3399CC',
                        lineHeight: 1.4,
                      }}
                    >
                      {t}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
