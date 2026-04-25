# Grace Life Church Vizag — Website

Official website for Grace Life Church Vizag, a Reformed church in Visakhapatnam, Andhra Pradesh.

**Live site:** [gracelifechurch.in](https://gracelifechurch.in) · [gracelifevizag.org](https://gracelifevizag.org)

---

## Domains

| Domain | Registrar | Status | DNS |
|---|---|---|---|
| `gracelifechurch.in` | GoDaddy (10-yr purchase) | **Primary** — pointed to Vercel | GoDaddy → Vercel |
| `gracelifevizag.org` | Wix (cancelled) | Active until **Sep 2026**, then expires | Wix DNS → Vercel |

Both domains resolve to the same Vercel deployment. `gracelifevizag.org` will stop working when the Wix registration lapses in Sep 2026 — no action needed before then. All other church domains are also registered on GoDaddy.

> **Note for the future:** If `gracelifechurch.in` needs to be renewed, it's managed at GoDaddy. The `gracelifevizag.org` Wix registration does not need to be renewed — let it lapse.

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
| Domains | GoDaddy (`gracelifechurch.in`) + Wix (`gracelifevizag.org`, until Sep 2026) → Vercel |

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

### Contact form
The contact form uses [FormSubmit.co](https://formsubmit.co) — no account or API key needed. The first submission to `gracelifemediavizag@gmail.com` will trigger a one-time activation email; click the confirmation link and all future submissions will deliver normally. Replies go directly to the visitor's email via `reply-to`.

---

## CMS (Keystatic)

Content is managed via Keystatic — a git-based CMS with no database. Editors log in at `/keystatic`, make changes through a visual UI, and changes are committed directly to this repo. Vercel auto-deploys on every push to `main`.

**Editable content:** Blog posts, Events, Leadership team (with photos), Sermon series, Ministry pages, Service times, Site settings.

Admin is accessible at `gracelifechurch.in/keystatic` (protected by GitHub OAuth in production).

> Keystatic setup requires a GitHub OAuth App. See environment variables above.

---

## Deployment

Deploys automatically via Vercel on every push to `main`. Both domains point to the same Vercel project — no separate configuration needed per domain. DNS for `gracelifechurch.in` is managed in GoDaddy; DNS for `gracelifevizag.org` is managed in Wix (redirect-only until Sep 2026).

---

## Temporary Pre-Launch Changes (Revert When Ministries Pages Are Built)

The following changes were made temporarily before the site went live (April 2026) because the Ministries sub-pages are not yet built out. **Revert all of these once the pages are ready.**

### 1. NavBar — Ministries dropdown removed
- **File:** `components/church/NavBar.tsx`
- The entire Ministries nav item (with its two-column grouped dropdown) was removed from `navLinks`.
- The `mobileMinistriesOpen` / `mobileMembershipOpen` state vars and the mobile accordion block were also removed.
- **Revert:** Restore the Ministries entry to `navLinks` between About and Sermons, restore the two state vars, and restore the mobile accordion block (it rendered `navLinks[2].groups`).

### 2. NavBar — Membership added as a top-level link
- **File:** `components/church/NavBar.tsx`
- `{ label: 'Membership', href: '/ministries/membership' }` was added as a standalone nav link between Blog and I'm New.
- **Revert:** Remove this entry when Membership is accessible again through the Ministries dropdown.

### 3. Search — Unbuilt ministry pages excluded
- **File:** `app/api/search/route.ts`
- The `staticPages` array had all ministry entries removed except Membership.
- The dynamic Keystatic ministry collection query (`reader.collections.ministries.all()`) was removed entirely to prevent unbuilt pages from appearing in search results.
- **Revert:** Restore all removed ministry entries to `staticPages` and restore the ministries collection query block.

---

## Maintainer

Built and maintained by [Prabhu Avula](https://github.com/prabhuavula7) on behalf of Grace Life Church Vizag.
For structural or layout changes, contact the maintainer. Day-to-day content edits go through the Keystatic CMS — no code changes required.
