import React, { useState } from 'react';
import { FAQS } from '../data/content.ts';
import { ChevronDown, ArrowRight } from 'lucide-react';

interface FaqSectionProps {
  onOpenBooking: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenBooking }) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 md:py-32 relative bg-[#070A18]/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="text-slate-300 text-base leading-relaxed [text-wrap:balance]">
            Everything you need to know about AI automation architecture, timelines, security
            standards, and ongoing support.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 border ${
                  isOpen
                    ? 'bg-[#0B1023]/90 border-cyan-500/40 shadow-[0_0_25px_rgba(0,240,255,0.1)]'
                    : 'bg-[#0B1023]/60 border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-white leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-lg border transition-transform duration-200 shrink-0 ${
                      isOpen
                        ? 'bg-amber-500/20 border-amber-500/40 text-amber-400 rotate-180'
                        : 'bg-slate-900 border-slate-800 text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-slate-800/60">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Card */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-[#0B1023]/60 border border-slate-800">
          <p className="text-xs sm:text-sm text-slate-300 mb-3">
            Have a specialized custom workflow or proprietary software requirement not answered
            here?
          </p>
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 uppercase tracking-wider"
          >
            <span>Ask Jan directly on a Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
