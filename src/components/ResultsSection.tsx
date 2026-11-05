import React from 'react';
import { ILLUSTRATIVE_BENCHMARKS } from '../data/content.ts';
import {
  TrendingUp,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

interface ResultsSectionProps {
  onOpenBooking: () => void;
}

export const ResultsSection: React.FC<ResultsSectionProps> = ({ onOpenBooking }) => {
  const illustrativeUseCases = [
    {
      title: 'Digital Marketing & Content Agency',
      problem: 'Account managers spending 18 hours/week copy-pasting analytics and formatting client PDF status decks.',
      solution: 'Automated n8n pipeline pulling Google Ads, Meta Ads, and Stripe into auto-generated executive briefings with AI summary commentary.',
      projectedImpact: '16 hours recovered weekly per manager; reports dispatched automatically on the 1st of every month at 8:00 AM.',
      category: 'Illustrative Scenario 01',
    },
    {
      title: 'High-Ticket B2B Consulting Firm',
      problem: 'Inbound leads waiting 3 to 12 hours for manual email replies, resulting in a 40% loss of warm prospect interest.',
      solution: 'OpenAI multi-channel qualification agent conducting real-time discovery in under 45 seconds, scoring budget, and reserving calendar slots.',
      projectedImpact: 'Response velocity reduced from hours to 45 seconds; qualified discovery bookings increased significantly.',
      category: 'Illustrative Scenario 02',
    },
    {
      title: 'E-Commerce & DTC Brand',
      problem: 'Support team inundated with "Where is my order?" and return policy tickets during peak shopping periods.',
      solution: 'AI Support assistant integrated into Shopify and shipping carriers to resolve tier-1 queries and process approved exchanges automatically.',
      projectedImpact: 'Over 65% of customer inquiries resolved with zero human intervention; customer satisfaction boosted.',
      category: 'Illustrative Scenario 03',
    },
  ];

  return (
    <section className="py-24 md:py-32 relative bg-[#070A18]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Measurable Business Impact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            Expected Outcomes & <span className="text-gold-gradient">Potential Benefits</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            When you eliminate repetitive bottlenecks and let intelligent systems do the heavy lifting,
            here are the concrete operational improvements your business achieves.
          </p>
        </div>

        {/* 4 Metric Pillars with Tabular Figures */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ILLUSTRATIVE_BENCHMARKS.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0B1023]/70 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:bg-[#0E152E]/90 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-gold-gradient mb-2 font-mono tabular-nums">
                {item.metric}
              </div>
              <h4 className="text-sm font-bold text-white mb-2 leading-snug">{item.label}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        {/* Clearly Labeled Illustrative Use-Case Scenarios */}
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Illustrative Architecture Scenarios
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Representative blueprints showcasing how automation solves real business friction.
              </p>
            </div>
            <div className="self-start sm:self-auto flex items-center gap-1.5 text-xs text-slate-400 font-medium">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              <span>Clearly labeled illustrative models</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {illustrativeUseCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#0B1023]/70 backdrop-blur-xl border border-slate-800/80 hover:border-cyan-500/40 hover:shadow-[0_0_25px_rgba(0,240,255,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 block mb-2">
                    {useCase.category}
                  </span>
                  <h4 className="text-base font-bold text-white mb-4">{useCase.title}</h4>

                  <div className="space-y-3 mb-6 text-xs text-slate-300">
                    <div>
                      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                        The Challenge
                      </p>
                      <p className="leading-relaxed">{useCase.problem}</p>
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold text-cyan-400 uppercase tracking-wider mb-0.5">
                        Automated Architecture
                      </p>
                      <p className="leading-relaxed text-slate-200">{useCase.solution}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/70">
                  <p className="text-[10px] font-semibold text-amber-400/90 uppercase tracking-wider mb-1">
                    Potential Impact
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed font-medium">
                    {useCase.projectedImpact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ethical Transparency Disclaimer */}
        <p className="text-[11px] text-slate-500 text-center max-w-3xl mx-auto leading-relaxed">
          * <strong className="text-slate-400">Transparency Disclosure:</strong> Figures and operational scenarios shown above represent illustrative potential benchmarks and engineering projections based on typical workflow parameters. Exact results depend on your company size, existing toolset, and automation scope.
        </p>
      </div>
    </section>
  );
};
