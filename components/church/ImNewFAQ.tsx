'use client';

import { useState } from 'react';

const faqItems = [
  {
    question: 'How do I find the church?',
    answer:
      'Grace Life Church is on the road opposite Little Giggles Playschool in Seethammadhara — up the road from Alluri Seetharamaraju Statue Junction towards the mountain. Our address is 50-1-43, ASR Nagar, Seethammadhara, Visakhapatnam, Andhra Pradesh — 530013.',
  },
  {
    question: 'Where do I park?',
    answer:
      'There is parking space in front of the church building for bikes and scooters. Cars can be parked on the main street or on the street opposite the church building.',
  },
  {
    question: 'What about my children?',
    answer:
      'Kids are a priority for us. We have trained, caring teachers and age-appropriate Bible lessons based on the Generations of Grace curriculum — developed by graduates of The Master\'s Seminary at Grace Community Church.\n\nAges 3–7 are taught using pictures and interactive dialogue. Ages 8–12 are taught by reading Scripture directly. A room is available for mothers with infants, and children above 12 assist the teachers.',
  },
  {
    question: 'What should I wear?',
    answer:
      'The congregation generally wears formal or modest attire. Men typically wear shirts and formal trousers; women mostly wear Sari or Salwar Kameez. Dress comfortably and modestly — you are welcome as you are.',
  },
  {
    question: 'Do I need to be a Christian to attend?',
    answer:
      'Absolutely not. We welcome anyone who is curious about Jesus Christ. Our services are open to all, and you will never be put on the spot or pressured. Come as you are.',
  },
];

export default function ImNewFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y" style={{ borderTop: '1px solid #E8E8E8', borderBottom: '1px solid #E8E8E8' }}>
      {faqItems.map((item, i) => (
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
