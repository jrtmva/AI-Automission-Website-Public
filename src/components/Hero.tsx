import React from 'react';
import {
  Calendar,
  ArrowRight,
  Bot,
  Cpu,
  TrendingUp,
  Cloud,
  Zap,
} from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-transparent">
      {/* Moving Tech Stream across Hero Section: Electric Blue & Neon Purple */}
      <div className="absolute top-24 left-0 right-0 h-[1.5px] bg-slate-900/60 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F0FF]/40 30%, via-[#D946EF]/40 70%, to-transparent"
        />
        <div
          className="absolute top-0 bottom-0 w-72 bg-gradient-to-r from-transparent via-white 70%, via-cyan-200 to-transparent opacity-90 animate-stream-fast"
          style={{ filter: 'drop-shadow(0 0 8px #00F0FF)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Clean Kicker / Positioning Label (Unboxed, Zero-Pill) */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400/90">
            <span>AI Automation Specialist</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span className="text-slate-300 normal-case tracking-normal font-medium text-xs">
              Transforming Manual Friction Into Scalable Growth
            </span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.12] mb-6 [text-wrap:balance]">
            Work Smarter.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-100">
              Automate Faster.
            </span>{' '}
            <span className="text-gold-gradient block mt-1.5">Scale Without Limits.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10 [text-wrap:balance]">
            I help businesses eliminate repetitive tasks, automate workflows, and build
            intelligent AI-powered systems that save time, reduce costs, and accelerate growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 shadow-[0_0_24px_rgba(245,158,11,0.4)] hover:shadow-[0_0_32px_rgba(245,158,11,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2.5"
              aria-label="Book a Free Strategy Call"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book a Free Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto px-7 py-4 rounded-xl font-medium text-xs tracking-wider uppercase bg-[#0B1023]/70 hover:bg-[#0E1530]/90 text-slate-200 hover:text-white border border-slate-800 hover:border-cyan-500/40 shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-cyan-400" />
              <span>Explore Automation Solutions</span>
            </a>
          </div>

          {/* Clean Target Audience (Unboxed Text with Centered Dots) */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-400 mb-14">
            <span className="text-amber-400/90 font-semibold uppercase tracking-wider text-[11px]">
              Who I Help:
            </span>
            <span>Businesses</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>Entrepreneurs</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>Agencies</span>
            <span className="text-slate-600" aria-hidden="true">·</span>
            <span>Service Providers</span>
          </div>
        </div>

        {/* Visual Display with Uploaded Cyberpunk Asset */}
        <div className="relative max-w-5xl mx-auto">
          {/* Subtle Ambient Behind-Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 via-amber-500/15 to-purple-600/20 rounded-2xl blur-xl opacity-60" />

          {/* Cybernetic Frame Border with Hairline Stroke */}
          <div className="relative rounded-2xl overflow-hidden bg-[#070A14] border border-slate-800 shadow-2xl">
            <img
              src="/assets/aistudio/AI_Automission_Cyberpunk_Banner-2_a2b68509.png"
              alt="AI AutoMission Cyberpunk Banner - Automate, Optimize, Scale"
              className="w-full h-auto object-cover object-center max-h-[460px] transform hover:scale-[1.008] transition-transform duration-700"
              loading="eager"
            />

            {/* Glowing Corner Accents */}
            <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-amber-400/80 pointer-events-none" />
            <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-cyan-400/80 pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-purple-400/80 pointer-events-none" />
            <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-amber-400/80 pointer-events-none" />
          </div>

          {/* 4 Feature Cards with Clean Glassmorphism & Subtle Hover Glow */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 mt-6">
            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#090E20]/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0B1228] transition-all group">
              <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/20 text-cyan-400 group-hover:border-cyan-400/40 transition-colors">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">AI Chatbots</p>
                <p className="text-[11px] text-slate-400">24/7 lead capture & support</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#090E20]/80 border border-slate-800/80 hover:border-purple-500/40 hover:bg-[#0B1228] transition-all group">
              <div className="p-2 rounded-lg bg-purple-950/60 border border-purple-500/20 text-purple-400 group-hover:border-purple-400/40 transition-colors">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Workflow Auto</p>
                <p className="text-[11px] text-slate-400">Zero-touch handoffs</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#090E20]/80 border border-slate-800/80 hover:border-amber-500/40 hover:bg-[#0B1228] transition-all group">
              <div className="p-2 rounded-lg bg-amber-950/60 border border-amber-500/20 text-amber-400 group-hover:border-amber-400/40 transition-colors">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Business Auto</p>
                <p className="text-[11px] text-slate-400">Revenue & CRM pipelines</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#090E20]/80 border border-slate-800/80 hover:border-sky-500/40 hover:bg-[#0B1228] transition-all group">
              <div className="p-2 rounded-lg bg-sky-950/60 border border-sky-500/20 text-sky-400 group-hover:border-sky-400/40 transition-colors">
                <Cloud className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-semibold text-white tracking-wide">Custom Solutions</p>
                <p className="text-[11px] text-slate-400">API & multi-agent setups</p>
              </div>
            </div>
          </div>

          {/* Subtagline Banner */}
          <div className="mt-8 text-center">
            <p className="text-sm sm:text-base tracking-wide text-slate-300">
              Smarter Automation.{' '}
              <span className="font-semibold text-gold-shimmer">
                Greater Possibilities.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
