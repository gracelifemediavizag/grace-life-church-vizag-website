import type { Metadata } from 'next';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import ScriptureBlock from '@/components/church/ScriptureBlock';

export const metadata: Metadata = {
  title: 'Give',
  description: 'Support the ministry of Grace Life Church Vizag through generous giving.',
};

export default function GivePage() {
  return (
    <>
      <NavBar />
      <main className="pb-32">
        {/* Hero */}
        <section style={{ background: '#1A1A1A', paddingTop: '10rem', paddingBottom: '6rem' }} className="px-6 md:px-8 mb-16">
          <div className="max-w-screen-2xl mx-auto">
            <div className="md:pl-[15%]">
              <p className="mb-5" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EFBF04' }}>
                Stewardship
              </p>
              <h1 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                Give
              </h1>
              <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '34rem' }}>
                The ministry of Grace Life Church is made possible through the generous
                stewardship of our congregation and friends.
              </p>
            </div>
          </div>
        </section>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">

          {/* Notice */}
          <section className="md:ml-[15%] max-w-2xl mb-16">
            <div className="bg-glc-surface-low border-l-4 border-glc-navy p-6 rounded-r-md">
              <p className="text-[0.65rem] uppercase tracking-widest font-bold text-glc-on-surface-variant mb-2">
                Please Note
              </p>
              <p className="text-glc-on-surface leading-relaxed">
                UPI QR code is coming soon. In the meantime, please use bank transfer or
                contact us directly.
              </p>
              <div className="mt-4">
                <p className="text-glc-navy font-medium text-lg mt-1">(+91) 91829 49644</p>
              </div>
            </div>
          </section>

          {/* Payment methods */}
          <section className="md:ml-[15%] max-w-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* UPI */}
              <div className="bg-white rounded-md p-8">
                <p className="text-[0.65rem] uppercase tracking-widest text-glc-on-surface-variant font-bold mb-4">
                  UPI Payment
                </p>
                <div className="aspect-square bg-glc-surface-low border border-dashed border-glc-outline-variant flex flex-col items-center justify-center p-8 mb-4">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-glc-on-surface-variant mb-3">
                    <rect x="3" y="3" width="6" height="6"/><rect x="15" y="3" width="6" height="6"/><rect x="3" y="15" width="6" height="6"/>
                    <path d="M21 15h-3v3M18 21h3M15 18h3v3M9 9h.01M9 15h.01M15 9h.01"/>
                  </svg>
                  <p className="text-[0.65rem] uppercase tracking-widest text-glc-on-surface-variant font-medium text-center">
                    QR Code — Details Coming Soon
                  </p>
                </div>
                <p className="text-glc-on-surface-variant text-sm text-center">
                  Contact us to receive UPI details
                </p>
              </div>

              {/* Bank Transfer */}
              <div className="bg-white rounded-md p-8">
                <p className="text-[0.65rem] uppercase tracking-widest text-glc-on-surface-variant font-bold mb-6">
                  Bank Transfer
                </p>
                <div className="space-y-5">
                  {[
                    { label: 'Account Name',   value: 'Grace Life Church' },
                    { label: 'Account Number', value: '249405001197' },
                    { label: 'IFSC Code',      value: 'ICIC0002494' },
                    { label: 'Bank',           value: 'ICICI Bank' },
                    { label: 'Branch',         value: 'Seethammadhara' },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-glc-outline-variant pb-3">
                      <p className="text-[0.6rem] uppercase tracking-widest text-glc-on-surface-variant font-semibold mb-1">
                        {item.label}
                      </p>
                      <p className="text-glc-on-surface font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scripture */}
            <ScriptureBlock
              quote="Each of you should give what you have decided in your heart to give, not reluctantly or under compulsion, for God loves a cheerful giver."
              reference="2 Corinthians 9:7"
            />

            {/* Why we give */}
            <div className="mt-16 space-y-6">
              <p className="text-[0.7rem] uppercase tracking-widest text-glc-on-surface-variant font-bold">
                Why We Give
              </p>
              <p className="text-glc-on-surface-variant text-lg leading-[1.9]">
                Giving is an act of worship. We give not out of obligation but out of gratitude
                for what God has done for us in Christ. Every gift entrusted to Grace Life Church
                goes directly toward preaching the gospel, discipling believers, and training
                faithful leaders for the Telugu church.
              </p>
              <p className="text-glc-on-surface-variant text-lg leading-[1.9]">
                We are committed to faithful, transparent stewardship of every contribution we
                receive. If you have any questions about how funds are used, please reach out to
                us directly.
              </p>
            </div>

            <p className="mt-10 text-sm text-glc-on-surface-variant italic border-t border-glc-outline-variant pt-6">
              Note: All contributions may be tax-exempt. An official receipt will be provided
              upon request. Please contact us for details.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
