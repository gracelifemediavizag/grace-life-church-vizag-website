import { NextRequest, NextResponse } from 'next/server';

// ─── Simple sliding-window rate limiter ────────────────────────────────────
// In-memory — good enough for a low-traffic church site.
// For distributed rate limiting on Vercel (multi-region), swap for Upstash Redis.

const WINDOW_MS   = 60_000; // 1 minute
const MAX_SEARCH  = 30;     // search queries per IP per minute
const MAX_API     = 60;     // general API calls per IP per minute

interface RateEntry { count: number; resetAt: number }
const store = new Map<string, RateEntry>();

function check(key: string, limit: number): boolean {
  const now = Date.now();
  const entry = store.get(key);

  if (!entry || entry.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return true; // allowed
  }
  if (entry.count >= limit) return false; // blocked
  entry.count++;
  return true; // allowed
}

function getIp(req: NextRequest): string {
  return (
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    req.headers.get('x-real-ip') ??
    '127.0.0.1'
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = getIp(request);

  // Rate-limit search API tightly
  if (pathname.startsWith('/api/search')) {
    if (!check(`search:${ip}`, MAX_SEARCH)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }
  }

  // Rate-limit all other API routes more loosely
  if (pathname.startsWith('/api/') && !pathname.startsWith('/api/keystatic')) {
    if (!check(`api:${ip}`, MAX_API)) {
      return NextResponse.json(
        { error: 'Too many requests. Please wait a moment and try again.' },
        { status: 429, headers: { 'Retry-After': '60' } }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/:path*'],
};
