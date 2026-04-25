'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch('https://formsubmit.co/ajax/gracelifemediavizag@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name:     data.get('name'),
          email:    data.get('email'),
          message:  data.get('message'),
          _subject: `Website contact: ${data.get('name')}`,
          _replyto: data.get('email'),
          _captcha: 'false',
        }),
      });
      const result = await res.json();
      if (result.success === 'true' || result.success === true) {
        setSubmitted(true);
      } else {
        setError('Something went wrong. Please try again.');
      }
    } catch {
      setError('Could not send your message. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-glc-surface-low rounded-md p-8 text-center">
        <p className="text-[0.7rem] uppercase tracking-widest text-glc-navy font-bold mb-2">Message Sent</p>
        <p className="text-glc-on-surface-variant leading-relaxed">
          Thank you for reaching out. We will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="space-y-1">
        <label className="block text-[0.65rem] uppercase tracking-widest text-glc-on-surface-variant font-semibold" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your full name"
          className="w-full border-b-2 border-glc-outline-variant bg-transparent py-3 text-glc-on-surface placeholder:text-glc-on-surface-variant/40 focus:outline-none focus:border-glc-navy transition-colors text-base"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-[0.65rem] uppercase tracking-widest text-glc-on-surface-variant font-semibold" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          className="w-full border-b-2 border-glc-outline-variant bg-transparent py-3 text-glc-on-surface placeholder:text-glc-on-surface-variant/40 focus:outline-none focus:border-glc-navy transition-colors text-base"
        />
      </div>

      <div className="space-y-1">
        <label className="block text-[0.65rem] uppercase tracking-widest text-glc-on-surface-variant font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="w-full border-b-2 border-glc-outline-variant bg-transparent py-3 text-glc-on-surface placeholder:text-glc-on-surface-variant/40 focus:outline-none focus:border-glc-navy transition-colors text-base resize-none"
        />
      </div>

      {error && (
        <p className="text-sm" style={{ color: '#cc3333', fontFamily: 'var(--font-poppins)', fontWeight: 300 }}>
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="px-10 py-4 bg-glc-navy text-white rounded-sm font-bold text-[0.7rem] uppercase tracking-widest hover:bg-[#EFBF04] hover:text-black transition-colors disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
