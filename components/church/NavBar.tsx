'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

/* ── Types ───────────────────────────────────────────────────────────────── */
interface NavChild  { label: string; href: string }
interface NavGroup  { label: string | null; children: NavChild[] }
interface NavItem {
  label: string;
  href:  string;
  children?: NavChild[];          // flat dropdown (About)
  groups?:   NavGroup[];          // grouped two-col dropdown (Ministries)
}

/* ── Data ────────────────────────────────────────────────────────────────── */
const navLinks: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '#',
    children: [
      { label: 'Mission',      href: '/about/mission'      },
      { label: 'Doctrine',     href: '/about/doctrine'     },
      { label: 'Core Beliefs', href: '/about/core-beliefs' },
      { label: 'Core Values',  href: '/about/core-values'  },
      { label: 'The Gospel',   href: '/about/the-gospel'   },
      { label: 'Leadership',   href: '/leadership'         },
    ],
  },
  { label: 'Sermons',    href: '/sermons'               },
  { label: 'Events',     href: '/events'                },
  { label: 'Blog',       href: '/blog'                  },
  { label: 'Membership', href: '/ministries/membership' },
  { label: "I'm New",    href: '/im-new'                },
  { label: 'Give',       href: '/give'                  },
];

/* ── Icons ───────────────────────────────────────────────────────────────── */
function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function CloseIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
function ChevronDown({ size = 8 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 10 6" fill="none" className="mt-0.5 shrink-0">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── Link class helpers ──────────────────────────────────────────────────── */
function navLinkClass(active: boolean) {
  return [
    'text-[13px] font-[family-name:var(--font-lato)] uppercase tracking-[0.08em]',
    'transition-colors border-b-2 pb-0.5',
    active
      ? 'text-[#3399CC] border-[#3399CC]'
      : 'text-[#1A1A1A] border-transparent hover:text-[#3399CC] hover:border-[#3399CC]',
  ].join(' ');
}

function dropdownLinkClass(active: boolean) {
  return [
    'block px-4 py-2.5 text-[12px] font-[family-name:var(--font-lato)] uppercase tracking-[0.08em] transition-colors whitespace-nowrap',
    active ? 'text-[#3399CC] bg-[#F8F8F8]' : 'text-[#1A1A1A] hover:text-[#3399CC] hover:bg-[#F8F8F8]',
  ].join(' ');
}

/* ── Main component ──────────────────────────────────────────────────────── */
export default function NavBar() {
  const [mobileOpen,        setMobileOpen]        = useState(false);
  const [mobileAboutOpen,   setMobileAboutOpen]   = useState(false);
const [searchOpen,        setSearchOpen]        = useState(false);
  const [searchQuery,       setSearchQuery]       = useState('');
  const [searchResults,     setSearchResults]     = useState<Array<{ title: string; href: string; type: string }>>([]);
  const [searching,         setSearching]         = useState(false);
  const [navHidden,         setNavHidden]         = useState(false);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const lastScrollY    = useRef(0);
  const pathname       = usePathname();

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') { closeSearch(); setMobileOpen(false); }
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (searchOpen) {
      const t = setTimeout(() => searchInputRef.current?.focus(), 60);
      return () => clearTimeout(t);
    }
  }, [searchOpen]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  useEffect(() => {
    function onScroll() {
      const y    = window.scrollY;
      const diff = y - lastScrollY.current;
      if      (y < 80)    setNavHidden(false);
      else if (diff >  6) setNavHidden(true);
      else if (diff < -4) setNavHidden(false);
      lastScrollY.current = y;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  function closeSearch() {
    setSearchOpen(false);
    setSearchQuery('');
    setSearchResults([]);
  }

  async function handleSearch(q: string) {
    if (q.trim().length < 2) { setSearchResults([]); return; }
    setSearching(true);
    try {
      const res  = await fetch(`/api/search?q=${encodeURIComponent(q.trim())}`);
      const data = await res.json();
      setSearchResults(data.results ?? []);
    } catch {
      setSearchResults([]);
    } finally {
      setSearching(false);
    }
  }

  const isActive           = (href: string) => pathname === href;
  const isAboutActive      = pathname.startsWith('/about') || pathname === '/leadership';
const showSearchDropdown = searchOpen && (searching || searchResults.length > 0 || searchQuery.trim().length > 1);

  return (
    <>
      {/* ── Main navbar ─────────────────────────────────────────────────── */}
      <nav
        className="fixed top-0 w-full z-50 bg-white"
        style={{
          transform:  navHidden && !searchOpen && !mobileOpen ? 'translateY(-100%)' : 'translateY(0)',
          transition: navHidden ? 'transform 0.28s ease-in' : 'transform 0.18s ease-out',
        }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-stretch" style={{ minHeight: '96px' }}>

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 mr-8" onClick={closeSearch}>
            <Image
              src="/images/logos/GLCvizaglogo-black.png"
              alt="Grace Life Church Vizag"
              width={340} height={102}
              className="h-16 w-auto md:h-[5.5rem] object-contain"
              priority
            />
          </Link>

          {/* Desktop right column */}
          <div className="hidden lg:flex flex-col ml-auto">

            {/* Top: search + mail */}
            <div className="flex items-center justify-end gap-0.5 pt-4">
              <div
                className="flex items-center gap-2 overflow-hidden transition-[max-width,opacity] duration-200 ease-out"
                style={{ maxWidth: searchOpen ? '380px' : '0', opacity: searchOpen ? 1 : 0, pointerEvents: searchOpen ? 'auto' : 'none' }}
              >
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); handleSearch(e.target.value); }}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(searchQuery); }}
                  placeholder="Search…"
                  tabIndex={searchOpen ? 0 : -1}
                  className="w-full min-w-[200px] border-b border-[#3399CC] outline-none bg-transparent py-1 px-0 text-sm text-[#1A1A1A] placeholder-[#1A1A1A]/30 font-[family-name:var(--font-roboto)]"
                />
                <button onClick={closeSearch} className="shrink-0 p-1.5 text-[#1A1A1A]/35 hover:text-[#1A1A1A] transition-colors" aria-label="Close search">
                  <CloseIcon size={18} />
                </button>
              </div>
              <div
                className="flex items-center gap-0.5 overflow-hidden transition-[max-width,opacity] duration-150 ease-in"
                style={{ maxWidth: searchOpen ? '0' : '120px', opacity: searchOpen ? 0 : 1, pointerEvents: searchOpen ? 'none' : 'auto' }}
              >
                <button onClick={() => setSearchOpen(true)} className="p-2 text-[#1A1A1A] hover:text-[#3399CC] transition-colors" aria-label="Open search">
                  <SearchIcon />
                </button>
                <Link href="/contact" className="p-2 text-[#1A1A1A] hover:text-[#3399CC] transition-colors" aria-label="Contact">
                  <MailIcon />
                </Link>
              </div>
            </div>

            {/* Bottom: nav links */}
            <div className="flex items-end pb-4 mt-auto">
              <ul className="flex items-baseline gap-9">
                {navLinks.map((link) => {
                  if (link.groups) {
                    // ── Grouped two-column dropdown (Ministries) ──
                    return (
                      <li key={link.label} className="relative group">
                        <button className={`${navLinkClass(pathname.startsWith('/ministries'))} flex items-center gap-1 bg-transparent p-0 m-0 leading-none`}>
                          {link.label}
                          <ChevronDown />
                        </button>
                        <div className="absolute top-full left-0 pt-2 z-50 hidden group-hover:block">
                          <div className="bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)] rounded-sm py-3 flex gap-0" style={{ minWidth: '440px' }}>
                            {link.groups.map((group, gi) => (
                              <div key={gi} className="flex-1" style={{ borderLeft: gi > 0 ? '1px solid #F0F0F0' : 'none' }}>
                                {group.label && (
                                  <p
                                    className="px-4 pb-2 mb-1"
                                    style={{
                                      fontFamily: 'var(--font-lato)',
                                      fontSize: '0.6rem',
                                      fontWeight: 700,
                                      letterSpacing: '0.14em',
                                      textTransform: 'uppercase',
                                      color: '#EFBF04',
                                      borderBottom: '1px solid #F0F0F0',
                                    }}
                                  >
                                    {group.label}
                                  </p>
                                )}
                                {group.children.map((child) => (
                                  <Link key={child.href} href={child.href} className={dropdownLinkClass(isActive(child.href))}>
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  }

                  if (link.children) {
                    // ── Flat dropdown (About) ──
                    return (
                      <li key={link.label} className="relative group">
                        <button className={`${navLinkClass(isAboutActive)} flex items-center gap-1 bg-transparent p-0 m-0 leading-none`}>
                          {link.label}
                          <ChevronDown />
                        </button>
                        <div className="absolute top-full left-0 w-44 pt-2 z-50 hidden group-hover:block">
                          <div className="bg-white shadow-[0_8px_32px_rgba(0,0,0,0.10)] rounded-sm py-1.5">
                            {link.children.map((child) => (
                              <Link key={child.href} href={child.href} className={dropdownLinkClass(isActive(child.href))}>
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </li>
                    );
                  }

                  // ── Plain link ──
                  return (
                    <li key={link.label}>
                      <Link href={link.href} className={navLinkClass(isActive(link.href))}>
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              className="p-2 flex flex-col gap-1.5"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <span className="block w-6 h-0.5 bg-[#1A1A1A]" />
              <span className="block w-6 h-0.5 bg-[#1A1A1A]" />
              <span className="block w-6 h-0.5 bg-[#1A1A1A]" />
            </button>
          </div>
        </div>

        {/* Search results */}
        {showSearchDropdown && (
          <div className="bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)] border-t border-[#F0F0F0]">
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-3">
              {searching && (
                <p className="text-[11px] font-[family-name:var(--font-lato)] uppercase tracking-[0.1em] text-[#1A1A1A]/35 py-2">Searching…</p>
              )}
              {!searching && searchResults.length > 0 && (
                <ul>
                  {searchResults.map((r, i) => (
                    <li key={`${r.href}__${i}`}>
                      <Link href={r.href} className="flex items-center gap-5 py-2.5 px-3 -mx-3 rounded-sm hover:bg-[#F8F8F8] group transition-colors" onClick={closeSearch}>
                        <span className="text-[10px] font-[family-name:var(--font-lato)] uppercase tracking-[0.1em] text-[#3399CC] w-16 shrink-0">{r.type}</span>
                        <span className="text-[0.875rem] text-[#1A1A1A] group-hover:text-[#3399CC] transition-colors font-[family-name:var(--font-poppins)]" style={{ fontWeight: 300 }}>{r.title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
              {!searching && searchQuery.trim().length > 1 && searchResults.length === 0 && (
                <p className="text-[13px] text-[#1A1A1A]/40 py-2 font-[family-name:var(--font-roboto)]">No results for &ldquo;{searchQuery}&rdquo;</p>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Search backdrop */}
      {searchOpen && <div className="fixed inset-0 z-40" onClick={closeSearch} />}

      {/* ── Full-screen mobile menu ──────────────────────────────────────── */}
      <div
        className={`fixed inset-0 z-[70] lg:hidden flex flex-col bg-white transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E8E8] shrink-0">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/logos/GLCvizaglogo-black.png"
              alt="Grace Life Church Vizag"
              width={200} height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-[#1A1A1A]/50 hover:text-[#1A1A1A] transition-colors"
            aria-label="Close menu"
          >
            <CloseIcon size={22} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto px-6 py-6 flex flex-col">

          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="text-[1.25rem] font-[family-name:var(--font-poppins)] text-[#1A1A1A] py-4 border-b border-[#F0F0F0] hover:text-[#3399CC] transition-colors"
            style={{ fontWeight: 300 }}
          >
            Home
          </Link>

          {/* About accordion */}
          <div className="border-b border-[#F0F0F0]">
            <button
              onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              className="w-full flex justify-between items-center text-[1.25rem] font-[family-name:var(--font-poppins)] text-[#1A1A1A] py-4 hover:text-[#3399CC] transition-colors bg-transparent border-none text-left"
              style={{ fontWeight: 300 }}
            >
              About
              <ChevronDown size={10} />
            </button>
            {mobileAboutOpen && (
              <div className="pb-3 flex flex-col gap-0.5 pl-4">
                {navLinks[1].children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-[0.8rem] font-[family-name:var(--font-lato)] uppercase tracking-[0.1em] text-[#1A1A1A]/55 hover:text-[#3399CC] py-2.5 transition-colors block"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Remaining links */}
          {[
            { label: 'Sermons', href: '/sermons'  },
            { label: 'Events',  href: '/events'   },
            { label: 'Blog',    href: '/blog'     },
            { label: "I'm New", href: '/im-new'   },
            { label: 'Give',    href: '/give'     },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              onClick={() => setMobileOpen(false)}
              className="text-[1.25rem] font-[family-name:var(--font-poppins)] text-[#1A1A1A] py-4 border-b border-[#F0F0F0] hover:text-[#3399CC] transition-colors"
              style={{ fontWeight: 300 }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="px-6 py-6 border-t border-[#E8E8E8] shrink-0">
          <Link
            href="/contact"
            onClick={() => setMobileOpen(false)}
            className="block w-full text-center py-4 text-[0.7rem] font-[family-name:var(--font-lato)] uppercase tracking-widest font-bold transition-colors"
            style={{ background: '#3399CC', color: '#ffffff', borderRadius: 4 }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
