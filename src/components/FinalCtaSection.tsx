import React from 'react';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';

interface FinalCtaSectionProps {
  onOpenBooking: () => void;
}

export const FinalCtaSection: React.FC<FinalCtaSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-[#060814]/80">
      {/* Radiant Glowing Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-500/10 via-amber-500/10 to-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-[#0B1024] via-[#0D142C] to-[#0A0D1E] border border-amber-500/40 shadow-[0_0_50px_rgba(245,158,11,0.2)] text-center relative overflow-hidden">
          {/* Cyber accents in corners */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyan-400 pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-amber-400 pointer-events-none" />
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-purple-400 pointer-events-none" />
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan-400 pointer-events-none" />

          {/* Clean Unboxed Kicker */}
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-6">
            <span>Turn Operational Friction Into Unfair Scale</span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 [text-wrap:balance]">
            Ready to Put Your Business on{' '}
            <span className="text-gold-gradient block mt-1">Autopilot?</span>
          </h2>

          {/* Supporting Text */}
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed [text-wrap:balance]">
            Let's identify the tasks slowing your business down and discover how AI automation can
            help you save time, improve efficiency, and focus on growth.
          </p>

          {/* Primary CTA & Direct Calendar Link */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-9 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 shadow-[0_0_28px_rgba(245,158,11,0.45)] hover:shadow-[0_0_36px_rgba(245,158,11,0.65)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Let's Build Your Automation System</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href="https://calendar.app.google/9m3GmWy9GGJgfMWx9"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900/90 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center justify-center gap-2 transition-all"
            >
              <span>Instant Google Calendar Link</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Reassurance points */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>25-Min Focused Discovery Audit</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>No Hard Selling or Lock-in</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Custom Blueprint Provided</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
