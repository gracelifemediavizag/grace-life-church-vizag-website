# Grace Life Church Vizag — Website

Official website for Grace Life Church Vizag, a Reformed church in Visakhapatnam, Andhra Pradesh.

**Live site:** [gracelifevizag.org](https://gracelifevizag.org)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui, Base UI, Lucide Icons |
| CMS | Keystatic (git-based, GitHub storage) |
| Animations | Framer Motion |
| Analytics | Vercel Analytics |
| Deployment | Vercel |
| Domain | Cloudflare (DNS) → Vercel |

---

## Project Structure

```
/
├── app/                        # App Router pages
│   ├── page.tsx                # Home
│   ├── about/                  # Mission, Core Beliefs, Core Values, Doctrine, The Gospel
│   ├── blog/                   # Blog listing + [slug] article pages
│   ├── contact/                # Contact form + map + service times
│   ├── events/                 # Upcoming events list
│   ├── give/                   # Giving / bank transfer details
│   ├── im-new/                 # First-time visitor guide
│   ├── leadership/             # Pastoral & elder team
│   ├── ministries/             # Ministry pages (dynamic [slug])
│   ├── sermons/                # Sermon archive + current series
│   └── api/                    # API routes (search, Keystatic handler)
├── components/
│   └── church/                 # Site-specific components (NavBar, Footer, BlogCard, etc.)
├── public/                     # Static assets (images, logos)
├── lib/                        # Shared utilities
├── next.config.ts              # Next.js config (redirects, image domains)
├── tailwind.config.ts          # Tailwind + design tokens
└── package.json
```

---

## Design System

| Token | Value | Usage |
|---|---|---|
| Blue (brand) | `#3399CC` | Navbar, CTAs, active states, icons |
| Gold (accent) | `#EFBF04` | Section labels, pull quotes, decorative borders |
| Dark | `#1A1A1A` | Hero backgrounds, dark sections |
| Off-white | `#F8F8F8` | Alternate section backgrounds |
| Navy | `#0d2a4a` | CTA sections, footer |

**Fonts:** Poppins (headings + body), Lato (labels + nav), Roboto (UI metadata)

> Never approximate colors with Tailwind utilities. Always use exact hex values or CSS variables.

---

## Local Development

```bash
npm install
npm run dev
```

App runs at `http://localhost:3000`. Keystatic CMS will be at `http://localhost:3000/keystatic` once configured.

---

## Environment Variables

Create `.env.local` for local development:

```env
# GitHub OAuth (for Keystatic CMS)
KEYSTATIC_GITHUB_CLIENT_ID=
KEYSTATIC_GITHUB_CLIENT_SECRET=
KEYSTATIC_SECRET=
```

For production, set these in the Vercel dashboard under **Project → Settings → Environment Variables**.

---

## CMS (Keystatic)

Content is managed via Keystatic — a git-based CMS with no database. Editors log in at `/keystatic`, make changes through a visual UI, and changes are committed directly to this repo. Vercel auto-deploys on every push to `main`.

**Editable content:** Blog posts, Events, Leadership team (with photos), Sermon series, Ministry pages, Service times, Site settings.

> Keystatic setup requires a GitHub OAuth App. See environment variables above.

---

## Deployment

Deploys automatically via Vercel on every push to `main`. DNS is managed on Cloudflare pointing to Vercel.

---

## Maintainer

Built and maintained by [Prabhu Avula](https://github.com/prabhuavula7) on behalf of Grace Life Church Vizag.
For structural or layout changes, contact the maintainer. Day-to-day content edits go through the Keystatic CMS — no code changes required.
