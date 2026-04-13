'use client';

import { useState } from 'react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function ImNewFAQ({ faqs }: { faqs: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y" style={{ borderTop: '1px solid #E8E8E8', borderBottom: '1px solid #E8E8E8' }}>
      {faqs.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left bg-transparent border-none cursor-pointer group"
          >
            <span
              style={{
                fontFamily: 'var(--font-poppins)',
                fontWeight: 400,
                fontSize: '1rem',
                color: open === i ? '#3399CC' : '#1A1A1A',
                transition: 'color 0.15s',
              }}
            >
              {item.question}
            </span>
            <span
              className="shrink-0 ml-6 transition-transform duration-200"
              style={{
                display: 'inline-block',
                transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)',
                color: open === i ? '#3399CC' : '#1A1A1A',
                opacity: open === i ? 1 : 0.35,
                fontSize: '1.25rem',
                lineHeight: 1,
                fontWeight: 300,
              }}
            >
              +
            </span>
          </button>

          <div
            style={{
              display: 'grid',
              gridTemplateRows: open === i ? '1fr' : '0fr',
              transition: 'grid-template-rows 0.22s ease',
            }}
          >
            <div className="overflow-hidden">
              <div className="pb-6 space-y-3">
                {item.answer.split('\n').filter(Boolean).map((line, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: 'var(--font-poppins)',
                      fontWeight: 300,
                      fontSize: '0.9375rem',
                      color: '#1A1A1A',
                      lineHeight: 1.85,
                      opacity: 0.72,
                    }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
