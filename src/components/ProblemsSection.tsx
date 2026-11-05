import React, { useState } from 'react';
import { PROBLEMS_SOLVED } from '../data/content.ts';
import {
  Clock,
  Zap,
  UserCheck,
  Workflow,
  TrendingUp,
  Layers,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-4 h-4" />,
  Zap: <Zap className="w-4 h-4" />,
  UserCheck: <UserCheck className="w-4 h-4" />,
  Workflow: <Workflow className="w-4 h-4" />,
  TrendingUp: <TrendingUp className="w-4 h-4" />,
  Layers: <Layers className="w-4 h-4" />,
};

interface ProblemsSectionProps {
  onOpenBooking: () => void;
}

export const ProblemsSection: React.FC<ProblemsSectionProps> = ({ onOpenBooking }) => {
  const [activeProblemId, setActiveProblemId] = useState<string>(PROBLEMS_SOLVED[0].id);

  return (
    <section id="problems" className="py-24 md:py-32 relative bg-[#070A16]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Operational Friction & Bottlenecks</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            Common Business Problems <span className="text-gold-gradient">I Solve With AI</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            Repetitive tasks and disconnected tools quietly drain revenue, exhaust teams, and slow
            down growth. Here is how intelligent AI automation transforms friction into compounding leverage.
          </p>
        </div>

        {/* 6 Problem Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEMS_SOLVED.map((item, idx) => {
            const isHovered = activeProblemId === item.id;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveProblemId(item.id)}
                className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 bg-[#0B1023]/70 backdrop-blur-xl border ${
                  isHovered
                    ? 'border-cyan-500/40 shadow-[0_0_30px_rgba(0,240,255,0.12)] -translate-y-1'
                    : 'border-slate-800/80 hover:border-slate-700'
                }`}
              >
                <div>
                  {/* Top Header: Metric & Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-slate-900/90 border border-slate-700/80 flex items-center justify-center text-cyan-400 shadow-sm">
                        {iconMap[item.iconName]}
                      </div>
                      <span className="font-mono text-xs font-bold text-amber-400/90">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span className="text-xs font-medium text-slate-300">
                      {item.metricBadge}
                    </span>
                  </div>

                  {/* Problem Title */}
                  <h3 className="text-base font-bold text-white mb-4 leading-snug">
                    {item.problemTitle}
                  </h3>

                  {/* The Operational Pain */}
                  <div className="mb-4 pb-4 border-b border-slate-800/70">
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
                      The Bottleneck
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.theBottleneck}
                    </p>
                  </div>

                  {/* The AI AutoMission Cure */}
                  <div className="mb-5">
                    <p className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>The AI Automation Solution</span>
                    </p>
                    <p className="text-xs text-slate-200 leading-relaxed">
                      {item.theAiSolution}
                    </p>
                  </div>
                </div>

                {/* Measurable Business Outcome */}
                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400 text-[11px]">Business Benefit</span>
                  <span className="text-amber-300/90 font-medium text-right text-xs">
                    {item.businessImpact.split(' ').slice(0, 5).join(' ')}...
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Trigger Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-[#0B1226]/90 to-slate-900/80 border border-slate-800/90 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Recognize any of these bottlenecks in your current business?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Let's audit your workflow and design custom AI automations in a free 25-minute strategy call.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 hover:brightness-110 text-slate-950 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Audit My Bottlenecks Free</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
