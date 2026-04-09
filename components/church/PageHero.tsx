interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '6rem' }} className="px-6 md:px-8">
      <div className="max-w-screen-2xl mx-auto">
        <div className="md:pl-[15%]">
          <p
            className="mb-5"
            style={{
              fontFamily: 'var(--font-lato)',
              fontSize: '0.65rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#EFBF04',
            }}
          >
            {label}
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: subtitle ? '1.5rem' : 0,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 300,
                fontSize: '1.0625rem',
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.8,
                maxWidth: '34rem',
              }}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
