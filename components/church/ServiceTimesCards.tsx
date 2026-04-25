'use client';

import { useState } from 'react';

const dayGroups = [
  {
    day: 'Sunday',
    shortDay: 'SUN',
    services: [
      { label: 'Sunday School',    time: '10:30 AM – 12:30 PM' },
      { label: 'Telugu Worship',   time: '10:30 AM – 12:30 PM' },
      { label: 'English Worship',  time: '4:00 PM – 6:00 PM'   },
    ],
  },
  {
    day: 'Wednesday',
    shortDay: 'WED',
    services: [
      { label: 'Congregational Prayer', time: '7:00 – 8:30 PM' },
    ],
  },
  {
    day: '1st & 3rd Thursday',
    shortDay: 'THU',
    services: [
      { label: "Women's Ministry", time: '6:30 PM – 8:00 PM' },
    ],
  },
  {
    day: '2nd Friday',
    shortDay: 'FRI',
    services: [
      { label: 'Whole Night Prayer', time: '8:00 PM – 12:00 AM' },
    ],
  },
  {
    day: 'Saturday',
    shortDay: 'SAT',
    services: [
      { label: 'Youth Fellowship', time: '7:00 – 8:30 PM' },
    ],
  },
];

export default function ServiceTimesCards() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
      {dayGroups.map((group, i) => {
        const isOpen = open === i;
        return (
          <div
            key={group.day}
            style={{
              background: isOpen ? '#1A1A1A' : '#F8F8F8',
              borderRadius: 6,
              border: isOpen ? '1px solid #1A1A1A' : '1px solid #E8E8E8',
              overflow: 'hidden',
              transition: 'background 0.2s, border-color 0.2s',
            }}
          >
            {/* Card header — click to toggle */}
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between text-left"
              style={{ padding: '1.25rem 1.25rem', cursor: 'pointer', background: 'transparent', border: 'none' }}
            >
              <div>
                {/* Short day label */}
                <p
                  style={{
                    fontFamily: 'var(--font-lato)',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: isOpen ? '#EFBF04' : '#3399CC',
                    marginBottom: '0.3rem',
                    transition: 'color 0.2s',
                  }}
                >
                  {group.shortDay}
                </p>
                {/* Full day name */}
                <p
                  style={{
                    fontFamily: 'var(--font-poppins)',
                    fontWeight: 300,
                    fontSize: '1.25rem',
                    color: isOpen ? '#ffffff' : '#1A1A1A',
                    lineHeight: 1.1,
                    transition: 'color 0.2s',
                  }}
                >
                  {group.day}
                </p>
                {/* Service count */}
                {!isOpen && (
                  <p
                    style={{
                      fontFamily: 'var(--font-lato)',
                      fontSize: '0.6rem',
                      fontWeight: 600,
                      letterSpacing: '0.1em',
                      color: '#1A1A1A',
                      opacity: 0.35,
                      marginTop: '0.35rem',
                    }}
                  >
                    {group.services.length} {group.services.length === 1 ? 'service' : 'services'}
                  </p>
                )}
              </div>

              {/* Chevron */}
              <span
                style={{
                  display: 'inline-block',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.22s ease',
                  color: isOpen ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.25)',
                  flexShrink: 0,
                  marginLeft: '1rem',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 5.5L8 10.5L13 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>

            {/* Expandable services list */}
            <div
              style={{
                display: 'grid',
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                transition: 'grid-template-rows 0.22s ease',
              }}
            >
              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    borderTop: '1px solid rgba(255,255,255,0.08)',
                    padding: '0 1.25rem 1.25rem',
                  }}
                >
                  <div className="space-y-0">
                    {group.services.map((s, j) => (
                      <div
                        key={s.label}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'baseline',
                          gap: '1rem',
                          padding: '0.65rem 0',
                          borderBottom: j < group.services.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                        }}
                      >
                        <span
                          style={{
                            fontFamily: 'var(--font-poppins)',
                            fontWeight: 300,
                            fontSize: '0.875rem',
                            color: 'rgba(255,255,255,0.6)',
                          }}
                        >
                          {s.label}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-lato)',
                            fontWeight: 700,
                            fontSize: '0.75rem',
                            color: '#ffffff',
                            whiteSpace: 'nowrap',
                            letterSpacing: '0.02em',
                          }}
                        >
                          {s.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
