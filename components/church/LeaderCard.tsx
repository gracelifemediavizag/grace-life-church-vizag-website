import Link from 'next/link';

interface LeaderCardProps {
  name: string;
  role: string;
  slug: string;
  bio?: string;
  size?: 'lg' | 'sm';
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

export default function LeaderCard({ name, role, slug, bio, size = 'sm' }: LeaderCardProps) {
  if (size === 'lg') {
    return (
      <Link href={`/leadership/${slug}`} className="group block bg-white rounded-md p-8 flex flex-col items-start gap-6 border-b-4 border-transparent hover:border-[#EFBF04] transition-all">
        <div className="w-20 h-20 rounded-none bg-glc-surface-high flex items-center justify-center text-glc-navy font-bold text-xl font-[family-name:var(--font-playfair)]">
          {getInitials(name)}
        </div>
        <div>
          <h3 className="text-xl font-bold text-glc-on-surface mb-1 group-hover:text-glc-navy transition-colors">{name}</h3>
          <p className="text-glc-navy font-medium text-sm">{role}</p>
          {bio && <p className="text-glc-on-surface-variant text-sm mt-3 leading-relaxed line-clamp-3">{bio}</p>}
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/leadership/${slug}`} className="group block bg-white rounded-md p-6 flex items-center gap-4 border-b-4 border-transparent hover:border-[#EFBF04] transition-all">
      <div className="w-14 h-14 shrink-0 rounded-none bg-glc-surface-high flex items-center justify-center text-glc-navy font-bold text-base font-[family-name:var(--font-playfair)]">
        {getInitials(name)}
      </div>
      <div>
        <h3 className="font-bold text-glc-on-surface text-base group-hover:text-glc-navy transition-colors">{name}</h3>
        <p className="text-glc-navy text-xs uppercase tracking-widest mt-0.5">{role}</p>
      </div>
    </Link>
  );
}
