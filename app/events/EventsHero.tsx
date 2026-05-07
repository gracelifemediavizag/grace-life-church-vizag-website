export default function EventsHero() {
  return (
    <section
      className="px-6 md:px-8"
      style={{
        background: '#1A1A1A',
        paddingTop: '10rem',
        paddingBottom: '3.5rem',
        minHeight: '36vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Aurora blobs */}
      <div aria-hidden className="aurora-blob aurora-blob-1" />
      <div aria-hidden className="aurora-blob aurora-blob-2" />
      <div aria-hidden className="aurora-blob aurora-blob-3" />

      {/* Text */}
      <div className="max-w-screen-2xl mx-auto" style={{ position: 'relative', zIndex: 1 }}>
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
            Calendar
          </p>
          <h1
            className="mb-4"
            style={{
              fontFamily: 'var(--font-poppins)',
              fontWeight: 300,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
            }}
          >
            Events
          </h1>
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
            Gather with us — worship, prayer, and fellowship.
          </p>
        </div>
      </div>
    </section>
  );
}
