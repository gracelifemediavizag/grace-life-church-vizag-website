'use client';

import { useState, useRef } from 'react';

/* ─── Types ──────────────────────────────────────────────────────────────────── */
export interface ChurchEvent {
  id: number;
  title: string;
  date: string;        // ISO: YYYY-MM-DD
  time: string;
  location: string;
  description: string;
  isPast?: boolean;
}

/* ─── Helpers ────────────────────────────────────────────────────────────────── */
function parseDate(dateStr: string): Date {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d);
}

function formatMonthYear(dateStr: string): string {
  const [y, m] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, 1).toLocaleDateString('en-IN', {
    month: 'long',
    year: 'numeric',
  });
}

function formatShortDate(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

function formatDayHeader(dateStr: string): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  return new Date(y, m - 1, d).toLocaleDateString('en-IN', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });
}

function groupByDate(evts: ChurchEvent[]): Record<string, ChurchEvent[]> {
  const sorted = [...evts].sort((a, b) => a.date.localeCompare(b.date));
  const map: Record<string, ChurchEvent[]> = {};
  for (const ev of sorted) {
    if (!map[ev.date]) map[ev.date] = [];
    map[ev.date].push(ev);
  }
  return map;
}

function groupByMonth(evts: ChurchEvent[]): Record<string, ChurchEvent[]> {
  const sorted = [...evts].sort((a, b) => a.date.localeCompare(b.date));
  const map: Record<string, ChurchEvent[]> = {};
  for (const ev of sorted) {
    const month = ev.date.slice(0, 7);
    if (!map[month]) map[month] = [];
    map[month].push(ev);
  }
  return map;
}

/* ─── Event Card (horizontal — GCC-style full card) ─────────────────────────── */
function HorizontalEventCard({ ev, index }: { ev: ChurchEvent; index: number }) {
  const [hovered, setHovered] = useState(false);

  const [y, m, d] = ev.date.split('-').map(Number);
  const dateObj = new Date(y, m - 1, d);
  const dayNum = dateObj.toLocaleDateString('en-IN', { day: 'numeric' });
  const monthShort = dateObj.toLocaleDateString('en-IN', { month: 'short' }).toUpperCase();
  const weekday = dateObj.toLocaleDateString('en-IN', { weekday: 'long' });

  // Alternate header backgrounds for visual variety
  const headerBgs = ['#1A1A1A', '#3399CC', '#1a2e3b', '#2a2a2a'];
  const headerBg = headerBgs[index % headerBgs.length];

  return (
    <div
      className="shrink-0 flex flex-col cursor-default transition-all"
      style={{
        width: '300px',
        borderRadius: 8,
        background: '#ffffff',
        boxShadow: hovered
          ? '0 8px 32px rgba(0,0,0,0.13)'
          : '0 2px 12px rgba(0,0,0,0.07)',
        transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease',
        overflow: 'hidden',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image / header panel */}
      <div
        className="flex items-center justify-center relative"
        style={{ background: headerBg, height: '160px' }}
      >
        {/* Large day number watermark */}
        <span
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '7rem',
            fontWeight: 300,
            color: '#ffffff',
            opacity: 0.08,
            lineHeight: 1,
            userSelect: 'none',
            position: 'absolute',
          }}
        >
          {dayNum}
        </span>
        {/* Date block */}
        <div className="relative text-center">
          <p
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.6rem',
              letterSpacing: '0.18em',
              fontWeight: 700,
              color: '#EFBF04',
              textTransform: 'uppercase',
              marginBottom: '0.25rem',
            }}
          >
            {weekday}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-poppins)',
              fontSize: '3rem',
              fontWeight: 300,
              color: '#ffffff',
              lineHeight: 1,
            }}
          >
            {dayNum}
          </p>
          <p
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              fontWeight: 700,
              color: 'rgba(255,255,255,0.55)',
              textTransform: 'uppercase',
              marginTop: '0.3rem',
            }}
          >
            {monthShort}
          </p>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-5">
        {/* Time */}
        <p
          className="mb-2"
          style={{
            fontFamily: 'var(--font-lato)',
            fontSize: '0.65rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#3399CC',
          }}
        >
          {ev.time}
        </p>

        {/* Title */}
        <h3
          className="mb-2 leading-snug"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: '1rem',
            fontWeight: 400,
            color: '#1A1A1A',
          }}
        >
          {ev.title}
        </h3>

        {/* Description */}
        <p
          className="text-[0.8125rem] leading-relaxed mb-4"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontWeight: 300,
            color: '#1A1A1A',
            opacity: 0.6,
          }}
        >
          {ev.description}
        </p>

        {/* Location + arrow */}
        <div className="flex items-center justify-between mt-auto">
          <p
            style={{
              fontFamily: 'var(--font-roboto)',
              fontSize: '0.7rem',
              color: '#1A1A1A',
              opacity: 0.4,
            }}
          >
            {ev.location}
          </p>
          <span
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: hovered ? '#3399CC' : '#1A1A1A',
              opacity: hovered ? 1 : 0.3,
              transition: 'color 0.2s, opacity 0.2s',
              textTransform: 'uppercase',
            }}
          >
            More →
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Event Card (vertical) ─────────────────────────────────────────────────── */
function VerticalEventCard({ ev }: { ev: ChurchEvent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="bg-white p-5 transition-colors"
      style={{
        borderRadius: 8,
        border: `1px solid ${hovered ? '#3399CC' : '#E0E0E0'}`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3
        className="text-base mb-2"
        style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, color: '#1A1A1A' }}
      >
        {ev.title}
      </h3>
      <p
        className="text-[0.8rem] mb-2"
        style={{ fontFamily: 'var(--font-roboto)', color: '#1A1A1A', opacity: 0.5 }}
      >
        {ev.time} &middot; {ev.location}
      </p>
      <p
        className="text-[0.875rem]"
        style={{
          fontFamily: 'var(--font-poppins)',
          fontWeight: 300,
          color: '#1A1A1A',
          opacity: 0.7,
          lineHeight: 1.6,
        }}
      >
        {ev.description}
      </p>
    </div>
  );
}

/* ─── Scroll arrow button ────────────────────────────────────────────────────── */
function ScrollArrow({
  direction,
  onClick,
  disabled,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === 'left' ? 'Scroll left' : 'Scroll right'}
      className="group"
      style={{
        background: 'none',
        border: 'none',
        padding: '4px',
        cursor: disabled ? 'default' : 'pointer',
        color: disabled ? '#D0D0D0' : '#1A1A1A',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        style={{ transition: 'opacity 0.15s ease' }}
        className={!disabled ? 'group-hover:opacity-40 group-active:opacity-20' : ''}
      >
        {direction === 'left' ? (
          <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────────── */
export default function EventsList({ events }: { events: ChurchEvent[] }) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);

  const SCROLL_AMOUNT = 320; // card width (300) + gap (16) + buffer

  function handleScroll() {
    if (scrollRef.current) setScrollPos(scrollRef.current.scrollLeft);
  }

  function scrollLeft() {
    scrollRef.current?.scrollBy({ left: -SCROLL_AMOUNT, behavior: 'smooth' });
  }

  function scrollRight() {
    scrollRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: 'smooth' });
  }

  const canScrollLeft = scrollPos > 0;
  const canScrollRight = scrollRef.current
    ? scrollPos < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 4
    : true;

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const oneYearOut = new Date(today);
  oneYearOut.setFullYear(oneYearOut.getFullYear() + 1);

  const currentMonthKey = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;

  // This month's events (regardless of past/future within the month)
  const thisMonthEvents = events
    .filter((e) => e.date.slice(0, 7) === currentMonthKey)
    .sort((a, b) => a.date.localeCompare(b.date));

  // Past events: before today, NOT in current month
  const pastEvents = events
    .filter((e) => {
      const d = parseDate(e.date);
      return d < today && e.date.slice(0, 7) !== currentMonthKey;
    })
    .sort((a, b) => b.date.localeCompare(a.date)); // most recent first

  // Future months events: after current month, within 1 year
  const futureEvents = events
    .filter((e) => {
      const d = parseDate(e.date);
      return e.date.slice(0, 7) > currentMonthKey && d <= oneYearOut;
    })
    .sort((a, b) => a.date.localeCompare(b.date));

  const pastByMonth = groupByMonth(pastEvents);
  const futureByDate = groupByDate(futureEvents);
  const futureDatesByMonth = groupByMonth(futureEvents);

  return (
    <>
      {/* ── Section 1: This Month horizontal scroll ── */}
      <section className="pt-14 pb-10 bg-white">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-baseline gap-4">
              <h2
                className="text-[0.7rem] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#3399CC' }}
              >
                This Month
              </h2>
              <span
                className="text-[0.7rem] uppercase tracking-widest"
                style={{ fontFamily: 'var(--font-lato)', fontWeight: 700, color: '#1A1A1A', opacity: 0.3 }}
              >
                {formatMonthYear(currentMonthKey + '-01')}
              </span>
            </div>
            {thisMonthEvents.length > 0 && (
              <div className="flex gap-2">
                <ScrollArrow direction="left" onClick={scrollLeft} disabled={!canScrollLeft} />
                <ScrollArrow direction="right" onClick={scrollRight} disabled={!canScrollRight} />
              </div>
            )}
          </div>

          {thisMonthEvents.length === 0 ? (
            <p
              className="text-base"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, color: '#1A1A1A', opacity: 0.5 }}
            >
              No events scheduled for this month.
            </p>
          ) : (
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="flex gap-4 overflow-x-auto pb-4"
              style={{ scrollbarWidth: 'none' }}
            >
              {thisMonthEvents.map((ev, i) => (
                <HorizontalEventCard key={ev.id} ev={ev} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-[#E0E0E0]" />

      {/* ── Section 2: Tabbed vertical list ── */}
      <section className="pt-10 pb-20 bg-[#F8F8F8]">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">

          {/* Tab bar */}
          <div className="flex gap-0 mb-10 border-b border-[#E0E0E0]">
            {(['upcoming', 'past'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-6 py-3 text-[0.7rem] uppercase tracking-widest transition-colors"
                style={{
                  fontFamily: 'var(--font-lato)',
                  fontWeight: 700,
                  color: activeTab === tab ? '#3399CC' : '#1A1A1A',
                  opacity: activeTab === tab ? 1 : 0.4,
                  borderBottom: activeTab === tab ? '2px solid #3399CC' : '2px solid transparent',
                  marginBottom: '-1px',
                  background: 'none',
                  cursor: 'pointer',
                }}
              >
                {tab === 'upcoming' ? 'Upcoming' : 'Past Events'}
              </button>
            ))}
          </div>

          {/* Upcoming tab */}
          {activeTab === 'upcoming' && (
            <>
              {Object.keys(futureDatesByMonth).length === 0 ? (
                <p
                  className="text-base"
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, color: '#1A1A1A', opacity: 0.5 }}
                >
                  No upcoming events beyond this month. Check back soon.
                </p>
              ) : (
                Object.entries(futureDatesByMonth).map(([month]) => {
                  // Get all dates for this month
                  const datesInMonth = Object.keys(futureByDate).filter(
                    (d) => d.slice(0, 7) === month
                  );
                  return (
                    <div key={month} className="mb-12">
                      {/* Month header */}
                      <div className="mb-6 pb-2" style={{ borderBottom: '2px solid #EFBF04' }}>
                        <h2
                          className="text-[0.75rem] uppercase"
                          style={{
                            fontFamily: 'var(--font-lato)',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            color: '#1A1A1A',
                          }}
                        >
                          {formatMonthYear(month + '-01')}
                        </h2>
                      </div>

                      {datesInMonth.map((date) => (
                        <div key={date} className="mb-8">
                          <p
                            className="text-[0.8rem] mb-3"
                            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, color: '#3399CC' }}
                          >
                            {formatDayHeader(date)}
                          </p>
                          <div className="space-y-3 md:pl-4">
                            {futureByDate[date].map((ev) => (
                              <VerticalEventCard key={ev.id} ev={ev} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </>
          )}

          {/* Past tab */}
          {activeTab === 'past' && (
            <>
              {Object.keys(pastByMonth).length === 0 ? (
                <p
                  className="text-base"
                  style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, color: '#1A1A1A', opacity: 0.5 }}
                >
                  No past events recorded.
                </p>
              ) : (
                Object.entries(pastByMonth).map(([month, monthEvents]) => {
                  const byDate = groupByDate(monthEvents);
                  // Reverse date order (most recent first)
                  const dates = Object.keys(byDate).sort((a, b) => b.localeCompare(a));
                  return (
                    <div key={month} className="mb-12">
                      {/* Month header */}
                      <div className="mb-6 pb-2" style={{ borderBottom: '2px solid #E0E0E0' }}>
                        <h2
                          className="text-[0.75rem] uppercase"
                          style={{
                            fontFamily: 'var(--font-lato)',
                            fontWeight: 700,
                            letterSpacing: '0.12em',
                            color: '#1A1A1A',
                            opacity: 0.4,
                          }}
                        >
                          {formatMonthYear(month + '-01')}
                        </h2>
                      </div>

                      {dates.map((date) => (
                        <div key={date} className="mb-8">
                          <p
                            className="text-[0.8rem] mb-3"
                            style={{ fontFamily: 'var(--font-poppins)', fontWeight: 400, color: '#1A1A1A', opacity: 0.4 }}
                          >
                            {formatDayHeader(date)}
                          </p>
                          <div className="space-y-3 md:pl-4 opacity-60">
                            {byDate[date].map((ev) => (
                              <VerticalEventCard key={ev.id} ev={ev} />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
