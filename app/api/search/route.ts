import { NextRequest, NextResponse } from 'next/server';

/* ─── Searchable content index ───────────────────────────────────────────────
   Extend this with Keystatic CMS queries once keystatic.config.ts is set up.
   ─────────────────────────────────────────────────────────────────────────── */
const content = [
  { type: 'Page', title: 'Home', href: '/' },
  { type: 'Page', title: 'Our Mission', href: '/about/mission' },
  { type: 'Page', title: 'Our Doctrine', href: '/about/doctrine' },
  { type: 'Page', title: 'Core Beliefs', href: '/about/core-beliefs' },
  { type: 'Page', title: 'Core Values', href: '/about/core-values' },
  { type: 'Page', title: 'The Gospel', href: '/about/the-gospel' },
  { type: 'Page', title: 'Leadership', href: '/leadership' },
  { type: 'Page', title: 'Sermons & Messages', href: '/sermons' },
  { type: 'Page', title: 'Events', href: '/events' },
  { type: 'Page', title: "Pastor's Blog", href: '/blog' },
  { type: 'Page', title: 'Give', href: '/give' },
  { type: 'Page', title: "I'm New Here", href: '/im-new' },
  { type: 'Page', title: 'Contact Us', href: '/contact' },
  { type: 'Sermon Series', title: '1 Peter — Suffering, Holiness, and Hope', href: '/sermons#1-peter' },
  { type: 'Sermon Series', title: 'Colossians 1 — The Supremacy of Christ', href: '/sermons#colossians' },
  { type: 'Article', title: 'Why Jesus Must Be God to Save Us from Our Sins', href: '/blog/why-jesus-must-be-god' },
  { type: 'Article', title: 'Is Man Made Up of a Spirit, Soul and Body?', href: '/blog/is-man-made-of-spirit-soul-body' },
  { type: 'Article', title: 'What is the Image of God?', href: '/blog/what-is-the-image-of-god' },
  { type: 'Doctrine', title: 'Sola Scriptura — Scripture Alone', href: '/about/mission' },
  { type: 'Doctrine', title: 'Sola Fide — Faith Alone', href: '/about/mission' },
  { type: 'Doctrine', title: 'Sola Gratia — Grace Alone', href: '/about/mission' },
  { type: 'Doctrine', title: 'Solus Christus — Christ Alone', href: '/about/mission' },
  { type: 'Doctrine', title: 'Soli Deo Gloria — Glory to God Alone', href: '/about/mission' },
];

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get('q')?.trim().toLowerCase() ?? '';

  if (q.length < 2) {
    return NextResponse.json({ results: [] });
  }

  const results = content.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.type.toLowerCase().includes(q)
  );

  return NextResponse.json({ results: results.slice(0, 8) });
}
