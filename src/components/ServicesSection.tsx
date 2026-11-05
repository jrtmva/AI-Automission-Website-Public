import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/content.ts';
import {
  Bot,
  Filter,
  MailCheck,
  GitBranch,
  Cpu,
  Headphones,
  Network,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';

const serviceIconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-4 h-4" />,
  Filter: <Filter className="w-4 h-4" />,
  MailCheck: <MailCheck className="w-4 h-4" />,
  GitBranch: <GitBranch className="w-4 h-4" />,
  Cpu: <Cpu className="w-4 h-4" />,
  Headphones: <Headphones className="w-4 h-4" />,
  Network: <Network className="w-4 h-4" />,
  Sparkles: <Sparkles className="w-4 h-4" />,
};

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Agents & Chatbots', 'Lead Generation', 'Operations', 'Integrations'];

  const filteredServices =
    selectedCategory === 'All'
      ? SERVICES_LIST
      : SERVICES_LIST.filter((s) => s.category === selectedCategory);

  return (
    <section id="services" className="py-24 md:py-32 relative bg-[#060814]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Specialized Automation Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            Intelligent AI Systems <span className="text-gold-gradient">Built for Real ROI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            I design and deploy resilient, production-ready AI agents and automated infrastructure
            that measurably lower payroll costs, accelerate sales velocity, and streamline operations.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          <div className="inline-flex p-1 rounded-xl bg-slate-900/90 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 font-bold shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (8 Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="group relative flex flex-col justify-between rounded-2xl p-6 bg-[#0B1023]/70 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0E152E]/90 hover:shadow-[0_0_35px_rgba(0,240,255,0.12)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Header: Number, Icon & Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700/80 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400/50 group-hover:text-cyan-300 transition-colors">
                    {serviceIconMap[service.iconName]}
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-400/80">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Unboxed Metadata: Category & Time Saved */}
                <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                  <span>{service.category}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-cyan-400">{service.timeSavings}</span>
                </div>

                {/* Service Title */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                  {service.title}
                </h3>

                {/* Sub-tagline */}
                <p className="text-xs text-slate-400 italic mb-4 leading-relaxed">
                  "{service.tagline}"
                </p>

                {/* Business Benefit (Explicit ROI) */}
                <div className="mb-4 pb-4 border-b border-slate-800/70">
                  <p className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Business Benefit
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {service.businessBenefit}
                  </p>
                </div>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-1.5 mb-6">
                  {service.technicalCapabilities.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="pt-4 border-t border-slate-800/60">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase bg-slate-900/80 hover:bg-amber-500 hover:text-slate-950 text-slate-200 border border-slate-700/70 hover:border-amber-400 transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Build This System</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
