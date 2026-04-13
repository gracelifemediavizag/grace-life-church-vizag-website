import Link from 'next/link';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function SoundCloudIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M1.5 13.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5zm2-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 1 0V13a.5.5 0 0 0-.5-.5zm2-.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 1 0V12.5a.5.5 0 0 0-.5-.5zm2-.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 1 0V12a.5.5 0 0 0-.5-.5zm9.5-4A5.5 5.5 0 0 0 12 9.1V17h8.5a2.5 2.5 0 0 0 0-5 2.47 2.47 0 0 0-.44.04A5.49 5.49 0 0 0 17 7.5zm-5 1.6a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5z"/>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/mission' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Sermons', href: '/sermons' },
  { label: 'Blog', href: '/blog' },
  { label: "I'm New", href: '/im-new' },
  { label: 'Give', href: '/give' },
  { label: 'Contact', href: '/contact' },
];

export default async function Footer() {
  const reader = createReader(process.cwd(), config);
  const settings = await reader.singletons.siteSettings.read();
  const serviceTimes = await reader.singletons.serviceTimes.read();

  const s = settings ?? {
    primaryContactName: 'Mohan Nitta',
    phone1: '(+91) 91829 49644',
    phone2: '(+91) 95025 42648',
    addressLine1: '50-1-43, ASR Nagar',
    addressLine2: 'Seethammadhara',
    city: 'Visakhapatnam',
    state: 'Andhra Pradesh',
    pincode: '530013',
    youtubeUrl: 'https://www.youtube.com/@DanielSuryaAvula',
    instagramUrl: 'https://www.instagram.com/gracelifechurchvizag/',
    facebookUrl: 'https://www.facebook.com/danielsurya.avula.1',
    soundcloudUrl: 'https://soundcloud.com/user-267402632-188676084',
    danielsuryaUrl: 'https://www.danielsurya.in/',
    mapsUrl: '',
    announcementActive: false,
    announcementText: '',
    announcementLink: '',
    giveAccountName: '',
    giveAccountNumber: '',
    giveIFSC: '',
    giveBank: '',
    giveBranch: '',
  };

  const services = serviceTimes?.services ?? [];

  return (
    <footer className="bg-[#111111] text-white border-t-4 border-[#EFBF04]">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Church info */}
        <div className="space-y-6">
          <div className="font-[family-name:var(--font-playfair)] font-bold text-lg tracking-tighter text-[#3399CC]">
            GRACE LIFE CHURCH VIZAG
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            Preaching the whole counsel of God.<br />
            A church plant of Fullness of Joy Ministries.
          </p>
          <div className="space-y-1">
            <p className="text-white/80 text-sm">{s.addressLine1}</p>
            <p className="text-white/80 text-sm">{s.addressLine2}, {s.city}</p>
            <p className="text-white/80 text-sm">{s.state} — {s.pincode}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[0.7rem] uppercase tracking-widest text-[#3399CC] font-semibold mb-2" style={{ fontFamily: 'var(--font-lato)' }}>Contact</p>
            <p className="text-white/80 text-sm">{s.primaryContactName}</p>
            {s.phone1 && <p className="text-white/70 text-sm">{s.phone1}</p>}
            {s.phone2 && <p className="text-white/70 text-sm">{s.phone2}</p>}
          </div>
          {/* Social links */}
          <div className="flex gap-4 pt-2">
            {s.youtubeUrl && (
              <a href={s.youtubeUrl} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white/40 hover:text-[#EFBF04] transition-colors">
                <YouTubeIcon />
              </a>
            )}
            {s.instagramUrl && (
              <a href={s.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white/40 hover:text-[#EFBF04] transition-colors">
                <InstagramIcon />
              </a>
            )}
            {s.facebookUrl && (
              <a href={s.facebookUrl} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white/40 hover:text-[#EFBF04] transition-colors">
                <FacebookIcon />
              </a>
            )}
            {s.soundcloudUrl && (
              <a href={s.soundcloudUrl} target="_blank" rel="noopener noreferrer" aria-label="SoundCloud" className="text-white/40 hover:text-[#EFBF04] transition-colors">
                <SoundCloudIcon />
              </a>
            )}
          </div>
        </div>

        {/* Column 2: Service times */}
        <div className="space-y-6">
          <p className="text-[0.7rem] uppercase tracking-widest text-[#3399CC] font-bold" style={{ fontFamily: 'var(--font-lato)' }}>Service Times</p>
          <div className="space-y-5">
            {services.map((item) => (
              <div key={item.name}>
                <p className="text-white font-medium text-sm">{item.name}</p>
                <p className="text-white/60 text-xs mt-0.5">{item.day} · {item.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: Our Ministries */}
        <div className="space-y-6">
          <p className="text-[0.7rem] uppercase tracking-widest text-[#3399CC] font-bold" style={{ fontFamily: 'var(--font-lato)' }}>Our Ministries</p>
          <ul className="space-y-3">
            {s.danielsuryaUrl && (
              <li>
                <a
                  href={s.danielsuryaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  Fullness of Joy Ministries
                </a>
              </li>
            )}
            {s.youtubeUrl && (
              <li>
                <a
                  href={s.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  YouTube — Daniel Surya Avula
                </a>
              </li>
            )}
          </ul>
        </div>

        {/* Column 4: Quick links */}
        <div className="space-y-6">
          <p className="text-[0.7rem] uppercase tracking-widest text-[#3399CC] font-bold" style={{ fontFamily: 'var(--font-lato)' }}>Quick Links</p>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-white/70 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#EFBF04]/20 py-6 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-white/40 text-[0.65rem] uppercase tracking-widest">
            A church plant of Fullness of Joy Ministries
          </p>
          <p className="text-white/40 text-[0.65rem] uppercase tracking-widest">
            © 2026 Grace Life Church Vizag
          </p>
        </div>
      </div>
    </footer>
  );
}
