import React, { useState, useMemo } from 'react';
import { calculateAutomationRoi } from '../utils/roi-calculator.ts';
import { Calculator, ArrowRight, DollarSign, Clock, TrendingUp } from 'lucide-react';

interface RoiCalculatorSectionProps {
  onOpenBooking: () => void;
}

export const RoiCalculatorSection: React.FC<RoiCalculatorSectionProps> = ({ onOpenBooking }) => {
  const [teamSize, setTeamSize] = useState<number>(5);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const [hourlyRate, setHourlyRate] = useState<number>(45);

  const roi = useMemo(() => {
    return calculateAutomationRoi({
      teamSize,
      hoursPerWeekPerPerson: hoursPerWeek,
      averageHourlyRate: hourlyRate,
      automationCoveragePct: 70,
    });
  }, [teamSize, hoursPerWeek, hourlyRate]);

  return (
    <section id="roi-calculator" className="py-24 md:py-32 relative bg-[#060814]/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
            <span>Interactive ROI Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5 [text-wrap:balance]">
            Calculate Your Business <span className="text-gold-gradient">Automation Savings</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed [text-wrap:balance]">
            See how many operational hours your team can reclaim and the tangible monthly dollars you
            stop wasting on manual administrative busywork.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Sliders Input Panel (Left 7 Cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#0B1023]/75 backdrop-blur-xl border border-slate-800/80 shadow-2xl flex flex-col justify-between">
            <div className="space-y-7">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="team-size-slider" className="text-sm font-bold text-white flex items-center gap-2">
                    <span>1. Team Members Doing Routine Tasks</span>
                  </label>
                  <span className="text-sm font-mono font-bold text-amber-400 bg-amber-950/40 px-2.5 py-1 rounded border border-amber-500/30 tabular-nums">
                    {teamSize} {teamSize === 1 ? 'person' : 'people'}
                  </span>
                </div>
                <input
                  id="team-size-slider"
                  type="range"
                  min="1"
                  max="50"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>1 person</span>
                  <span>25</span>
                  <span>50+ team members</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="hours-slider" className="text-sm font-bold text-white flex items-center gap-2">
                    <span>2. Hours Spent on Repetitive Tasks / Week</span>
                  </label>
                  <span className="text-sm font-mono font-bold text-cyan-400 bg-cyan-950/40 px-2.5 py-1 rounded border border-cyan-500/30 tabular-nums">
                    {hoursPerWeek} hrs/person
                  </span>
                </div>
                <input
                  id="hours-slider"
                  type="range"
                  min="2"
                  max="30"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>2 hrs (Light)</span>
                  <span>15 hrs</span>
                  <span>30 hrs (Heavy manual)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="rate-slider" className="text-sm font-bold text-white flex items-center gap-2">
                    <span>3. Average Fully-Loaded Hourly Cost</span>
                  </label>
                  <span className="text-sm font-mono font-bold text-purple-400 bg-purple-950/40 px-2.5 py-1 rounded border border-purple-500/30 tabular-nums">
                    ${hourlyRate}/hr
                  </span>
                </div>
                <input
                  id="rate-slider"
                  type="range"
                  min="15"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>$15/hr (Support)</span>
                  <span>$75/hr</span>
                  <span>$150/hr (Specialist)</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800/80 text-[11px] text-slate-400 leading-relaxed">
              Based on automated AI coverage eliminating ~70% of routine data entry, email triage, lead qualification, and reporting.
            </div>
          </div>

          {/* Savings Output Card (Right 5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0B1024] via-[#0E152E] to-[#0A0D1F] border border-amber-500/40 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                <span className="text-slate-400 uppercase tracking-wider font-semibold">Estimated Impact</span>
                <span className="font-mono text-amber-400 font-bold">{roi.roiMultiplier}x ROI Multiplier</span>
              </div>

              {/* Monthly Dollar Savings */}
              <div className="my-6">
                <span className="text-xs uppercase tracking-wider text-slate-400 block mb-1">
                  Projected Monthly Cost Saved
                </span>
                <div className="text-4xl sm:text-5xl font-black text-gold-gradient font-mono tracking-tight tabular-nums">
                  ${roi.monthlyCostSaved.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-1 font-mono tabular-nums">
                  ≈ ${roi.annualCostSaved.toLocaleString()} in recovered budget per year
                </p>
              </div>

              {/* Monthly Hours Saved */}
              <div className="grid grid-cols-2 gap-3 py-4 border-t border-slate-800/80">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Monthly Hours</span>
                  <div className="text-xl font-bold text-cyan-300 font-mono tabular-nums">
                    {roi.monthlyHoursSaved.toLocaleString()} hrs
                  </div>
                  <span className="text-[10px] text-slate-400">Reclaimed / mo</span>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Annual Output</span>
                  <div className="text-xl font-bold text-amber-300 font-mono tabular-nums">
                    {roi.annualHoursSaved.toLocaleString()} hrs
                  </div>
                  <span className="text-[10px] text-slate-400">Poured into growth</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <button
                onClick={onOpenBooking}
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 shadow-lg shadow-amber-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Unlock These Savings Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-2">
                Free 25-minute consultation · Zero obligation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
