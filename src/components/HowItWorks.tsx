import React from 'react';
import { PROCESS_STEPS } from '../data/content.ts';
import { Check, ArrowRight, Compass, Lightbulb, Wrench, Gauge } from 'lucide-react';

const stepIcons: Record<string, React.ReactNode> = {
  '01': <Compass className="w-4 h-4 text-cyan-400" />,
  '02': <Lightbulb className="w-4 h-4 text-amber-400" />,
  '03': <Wrench className="w-4 h-4 text-purple-400" />,
  '04': <Gauge className="w-4 h-4 text-emerald-400" />,
};

interface HowItWorksProps {
  onOpenBooking: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenBooking }) => {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative bg-[#070A18]/65">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Structured Implementation Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            How It Works: <span className="text-gold-gradient">The 4-Step Process</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            A predictable, battle-tested engineering path from friction discovery to full
            autonomous deployment without interrupting your active operations.
          </p>
        </div>

        {/* 4 Process Cards with Connected Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              className="relative rounded-2xl p-7 bg-[#0B1023]/70 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0E152E]/90 hover:shadow-[0_0_30px_rgba(0,240,255,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-2xl font-black text-gold-gradient tracking-tight">
                    {step.stepNumber}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center shadow-sm">
                    {stepIcons[step.stepNumber]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">{step.title}</h3>
                
                <p className="text-[11px] font-mono text-cyan-400/90 uppercase tracking-wider mb-3">
                  Timeline: {step.timeline}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed mb-5">{step.summary}</p>

                {/* Core Deliverables */}
                <div className="space-y-2 border-t border-slate-800/70 pt-4 mb-4">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Core Deliverables
                  </p>
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                <span className="text-slate-400 text-[11px]">Milestone Focus</span>
                <span className="text-slate-200 font-medium text-right text-xs">{step.focus}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-14 text-center">
          <button
            onClick={onOpenBooking}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.35)] transition-all"
          >
            <span>Start Step 01: Book Your Discovery Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
