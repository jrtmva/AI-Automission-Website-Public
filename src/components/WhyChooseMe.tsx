import React from 'react';
import { WHY_CHOOSE_ME } from '../data/content.ts';
import {
  Sliders,
  Target,
  CheckCircle2,
  PlugZap,
  TrendingUp,
  ShieldCheck,
  XCircle,
} from 'lucide-react';

const icons: Record<string, React.ReactNode> = {
  Sliders: <Sliders className="w-4 h-4 text-amber-400" />,
  Target: <Target className="w-4 h-4 text-cyan-400" />,
  CheckCircle2: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
  PlugZap: <PlugZap className="w-4 h-4 text-purple-400" />,
  TrendingUp: <TrendingUp className="w-4 h-4 text-sky-400" />,
  ShieldCheck: <ShieldCheck className="w-4 h-4 text-amber-400" />,
};

export const WhyChooseMe: React.FC = () => {
  return (
    <section id="why-choose-me" className="py-24 md:py-32 relative bg-[#060814]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Differentiators & Philosophy</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            Why Work With <span className="text-gold-gradient">AI AutoMission</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            I don’t chase fleeting AI novelties or sell rigid off-the-shelf templates. I engineer
            battle-tested business automation tailored specifically to your tech stack.
          </p>
        </div>

        {/* 6 Core Differentiation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_ME.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0B1023]/70 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0E152E]/90 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center mb-4 shadow-sm">
                {icons[pillar.icon]}
              </div>
              <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Clear Comparison Table: Typical Vendor vs AI AutoMission */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-slate-800/80 bg-[#0B1023]/80 backdrop-blur-xl shadow-2xl">
          <div className="p-5 sm:p-6 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Direct Comparison: How We Compare
            </h4>
            <span className="text-xs text-amber-400 font-semibold tracking-wider uppercase">
              Business-First Advantage
            </span>
          </div>

          <div className="divide-y divide-slate-800/80 text-xs sm:text-sm">
            <div className="grid grid-cols-12 p-4 bg-slate-950/60 font-semibold uppercase tracking-wider text-slate-400 text-[11px]">
              <div className="col-span-4">Capability / Approach</div>
              <div className="col-span-4 text-slate-400">Generic Freelancers / Agencies</div>
              <div className="col-span-4 text-amber-300 font-bold">AI AutoMission</div>
            </div>

            <div className="grid grid-cols-12 p-4 items-center">
              <div className="col-span-4 font-semibold text-slate-200">Solution Architecture</div>
              <div className="col-span-4 text-slate-400 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Pre-built cookie cutter templates</span>
              </div>
              <div className="col-span-4 text-slate-100 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>100% custom-tailored to your tech stack</span>
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 items-center bg-slate-950/20">
              <div className="col-span-4 font-semibold text-slate-200">Business Focus</div>
              <div className="col-span-4 text-slate-400 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Tech buzzwords without tangible ROI</span>
              </div>
              <div className="col-span-4 text-slate-100 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Obsessed with hours saved & revenue created</span>
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 items-center">
              <div className="col-span-4 font-semibold text-slate-200">Integration Method</div>
              <div className="col-span-4 text-slate-400 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Forces migration to unfamiliar software</span>
              </div>
              <div className="col-span-4 text-slate-100 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Connects seamlessly into your existing apps</span>
              </div>
            </div>

            <div className="grid grid-cols-12 p-4 items-center bg-slate-950/20">
              <div className="col-span-4 font-semibold text-slate-200">Post-Launch Support</div>
              <div className="col-span-4 text-slate-400 flex items-center gap-1.5">
                <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Hands off code and vanishes</span>
              </div>
              <div className="col-span-4 text-slate-100 flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Continuous monitoring, testing & iteration</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
