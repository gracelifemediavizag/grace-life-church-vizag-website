import { NextRequest, NextResponse } from 'next/server';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const dynamic = 'force-dynamic';

/* ── Static pages always included in the index ──────────────────────────── */
const staticPages = [
  { type: 'Page', title: 'Home',                         href: '/',                       description: '' },
  { type: 'Page', title: 'Our Mission',                  href: '/about/mission',           description: 'We exist to glorify God through exalting, edifying, and evangelizing.' },
  { type: 'Page', title: 'Our Doctrine',                 href: '/about/doctrine',          description: 'Reformed doctrinal statement of Grace Life Church.' },
  { type: 'Page', title: 'Core Beliefs',                 href: '/about/core-beliefs',      description: 'The foundational beliefs of Grace Life Church.' },
  { type: 'Page', title: 'Core Values',                  href: '/about/core-values',       description: 'The values that shape our church community.' },
  { type: 'Page', title: 'The Gospel',                   href: '/about/the-gospel',        description: 'What is the gospel? The good news of Jesus Christ.' },
  { type: 'Page', title: 'Leadership',                   href: '/leadership',              description: 'Meet the pastors and elders of Grace Life Church.' },
  { type: 'Page', title: 'Sermons & Messages',           href: '/sermons',                 description: 'Listen to sermon series and messages from Grace Life Church.' },
  { type: 'Page', title: 'Events',                       href: '/events',                  description: 'Upcoming events at Grace Life Church Vizag.' },
  { type: 'Page', title: "Pastor's Blog",                href: '/blog',                    description: 'Articles and reflections from the pastor.' },
  { type: 'Page', title: 'Give',                         href: '/give',                    description: 'Support the ministry through generous giving.' },
  { type: 'Page', title: "I'm New Here",                 href: '/im-new',                  description: 'Plan your first visit to Grace Life Church.' },
  { type: 'Page', title: 'Contact Us',                   href: '/contact',                 description: 'Get in touch with Grace Life Church Vizag.' },
  { type: 'Ministry', title: 'Membership',               href: '/ministries/membership',   description: 'Covenantal membership at Grace Life Church.' },
  { type: 'Service', title: 'Sunday Telugu Service',     href: '/#service-times',          description: 'Sunday Telugu-medium worship service.' },
  { type: 'Service', title: 'Sunday English Service',    href: '/#service-times',          description: 'Sunday English-medium worship service.' },
  { type: 'Service', title: 'Service Times',             href: '/#service-times',          description: 'When we meet for Sunday worship and other gatherings.' },
];

type SearchResult = { type: string; title: string; href: string; description?: string };

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')?.trim().toLowerCase() ?? '';

  if (q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const matches: SearchResult[] = [];

  /* ── 1. Static pages ─────────────────────────────────────────────────── */
  for (const item of staticPages) {
    if (
      item.title.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q)
    ) {
      matches.push({ type: item.type, title: item.title, href: item.href });
    }
  }

  /* ── 2. Keystatic CMS content ────────────────────────────────────────── */
  try {
    const reader = createReader(process.cwd(), config);

    /* Blog posts */
    const blogEntries = await reader.collections.blogPosts.all();
    for (const { slug, entry } of blogEntries) {
      const text = [entry.title, entry.author ?? '', entry.excerpt ?? ''].join(' ').toLowerCase();
      if (text.includes(q)) {
        matches.push({ type: 'Article', title: entry.title, href: `/blog/${slug}` });
      }
    }

    /* Events */
    const eventEntries = await reader.collections.events.all();
    for (const { slug, entry } of eventEntries) {
      const text = [entry.title, entry.description ?? '', entry.location ?? '', entry.time ?? ''].join(' ').toLowerCase();
      if (text.includes(q)) {
        matches.push({ type: 'Event', title: entry.title, href: `/events#${slug}` });
      }
    }

    /* Sermon series */
    const seriesEntries = await reader.collections.sermonSeries.all();
    for (const { slug, entry } of seriesEntries) {
      const text = [entry.name, entry.description ?? '', entry.reference ?? ''].join(' ').toLowerCase();
      if (text.includes(q)) {
        matches.push({ type: 'Sermon Series', title: entry.name, href: `/sermons#${slug}` });
      }
    }

    /* Leadership */
    const leadershipEntries = await reader.collections.leadership.all();
    for (const { slug, entry } of leadershipEntries) {
      const text = [entry.name, entry.title ?? '', entry.category ?? ''].join(' ').toLowerCase();
      if (text.includes(q)) {
        matches.push({ type: 'Leadership', title: entry.name, href: `/leadership/${slug}` });
      }
    }

    /* Service times */
    const serviceTimes = await reader.singletons.serviceTimes.read();
    if (serviceTimes?.services) {
      for (const svc of serviceTimes.services) {
        const text = [svc.name, svc.day, svc.time].join(' ').toLowerCase();
        if (text.includes(q)) {
          matches.push({ type: 'Service', title: `${svc.name} — ${svc.day} ${svc.time}`, href: '/#service-times' });
        }
      }
    }
  } catch {
    // CMS unavailable — static results still returned
  }

  /* Deduplicate by href+title */
  const seen = new Set<string>();
  const deduped = matches.filter((r) => {
    const key = `${r.href}::${r.title}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return NextResponse.json({ results: deduped.slice(0, 10) });
}
