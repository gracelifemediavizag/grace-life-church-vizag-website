import type { Metadata } from 'next';
import Image from 'next/image';
import NavBar from '@/components/church/NavBar';
import Footer from '@/components/church/Footer';
import ScriptureBlock from '@/components/church/ScriptureBlock';
import { createReader } from '@keystatic/core/reader';
import config from '@/keystatic.config';

export const metadata: Metadata = {
  title: 'Give',
  description: 'Support the ministry of Grace Life Church Vizag through generous giving.',
};

export default async function GivePage() {
  const reader = createReader(process.cwd(), config);
  const settings = await reader.singletons.siteSettings.read();

  const phone1 = settings?.phone1 ?? '(+91) 91829 49644';
  const bankDetails = [
    { label: 'Account Name',   value: settings?.giveAccountName   ?? 'Grace Life Church' },
    { label: 'Account Number', value: settings?.giveAccountNumber ?? '249405001197'       },
    { label: 'IFSC Code',      value: settings?.giveIFSC          ?? 'ICIC0002494'        },
    { label: 'Bank',           value: settings?.giveBank          ?? 'ICICI Bank'         },
    { label: 'Branch',         value: settings?.giveBranch        ?? 'Seethammadhara'     },
  ];

  return (
    <>
      <NavBar />
      <main className="pb-32">
        {/* Hero */}
        <section className="relative md:flex md:flex-row mb-16" style={{ minHeight: '60vh' }}>
          {/* Mobile: image as full background */}
          <div className="absolute inset-0 md:hidden">
            <Image
              src="/images/heroes/giving.jpeg"
              alt="Two hands reaching toward each other"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.68)' }} />
          </div>

          {/* Left — dark text panel */}
          <div
            className="relative z-10 flex items-end w-full md:w-1/2 px-8 md:px-16 md:bg-[#1A1A1A]"
            style={{ paddingTop: '10rem', paddingBottom: '6rem' }}
          >
            <div className="max-w-md md:pl-[20%]">
              <p className="mb-5" style={{ fontFamily: 'var(--font-lato)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#EFBF04' }}>
                Stewardship
              </p>
              <h1 style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', color: '#ffffff', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
                Give
              </h1>
              <p style={{ fontFamily: 'var(--font-poppins)', fontWeight: 300, fontSize: '1.0625rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, maxWidth: '30rem' }}>
                The ministry of Grace Life Church is made possible through the generous
                stewardship of our congregation and friends.
              </p>
            </div>
          </div>

          {/* Right — image panel (desktop only) */}
          <div className="hidden md:block md:w-1/2 relative overflow-hidden">
            <Image
              src="/images/heroes/giving.jpeg"
              alt="Two hands reaching toward each other"
              fill
              sizes="50vw"
              className="object-cover"
              style={{ objectPosition: 'center center' }}
              priority
            />
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.18)' }} />
          </div>
        </section>

        <div className="max-w-screen-2xl mx-auto px-6 md:px-8">

          {/* Notice */}
          <section className="md:ml-[15%] max-w-2xl mb-16">
            <div className="bg-glc-surface-low border-l-4 border-glc-navy p-6 rounded-r-md">
              <p className="text-[0.65rem] uppercase tracking-widest font-bold text-glc-on-surface-variant mb-2">
                How to Give
              </p>
              <p className="text-glc-on-surface leading-relaxed text-justify">
                You can give using the UPI QR code or by bank transfer. Every contribution
                goes directly toward the ministry of the Word here in Visakhapatnam. If you
                have any questions, please reach out to us.
              </p>
              <div className="mt-4">
                <p className="text-glc-navy font-medium text-lg mt-1">{phone1}</p>
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
                <div className="flex justify-center mb-4">
                  <Image
                    src="/images/give/giveQRcode.jpeg"
                    alt="UPI QR Code for Grace Life Church"
                    width={240}
                    height={240}
                    className="rounded-sm"
                    style={{ width: 240, height: 240 }}
                  />
                </div>
                <p className="text-glc-on-surface-variant text-sm text-center">
                  Scan with any UPI app to give
                </p>
              </div>

              {/* Bank Transfer */}
              <div className="bg-white rounded-md p-8">
                <p className="text-[0.65rem] uppercase tracking-widest text-glc-on-surface-variant font-bold mb-6">
                  Bank Transfer
                </p>
                <div className="space-y-5">
                  {bankDetails.map((item) => (
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
              <p className="text-glc-on-surface-variant text-lg leading-[1.9] text-justify">
                Giving is an act of worship. We give not out of obligation but out of gratitude
                for what God has done for us in Christ. Every gift entrusted to Grace Life Church
                goes directly toward preaching the gospel, discipling believers, and training
                faithful leaders for the Telugu church.
              </p>
              <p className="text-glc-on-surface-variant text-lg leading-[1.9] text-justify">
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
