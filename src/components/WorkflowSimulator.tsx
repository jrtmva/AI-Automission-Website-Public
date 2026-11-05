import React, { useState } from 'react';
import {
  Play,
  RotateCcw,
  CheckCircle,
  Zap,
  Bot,
  Database,
  Send,
  Calendar,
} from 'lucide-react';

interface WorkflowStep {
  id: number;
  label: string;
  subtext: string;
  icon: React.ReactNode;
  durationMs: number;
  status: 'idle' | 'running' | 'completed';
  log: string;
}

export const WorkflowSimulator: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);

  const initialSteps: WorkflowStep[] = [
    {
      id: 1,
      label: 'Inbound Lead Trigger',
      subtext: 'High-value prospect submits contact form',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      durationMs: 280,
      status: 'idle',
      log: 'Webhook received payload from web form (Lead: Acme Logistics, Budget: $15k+).',
    },
    {
      id: 2,
      label: 'AI Intent Qualification',
      subtext: 'OpenAI Agent scores intent and enriches company data',
      icon: <Bot className="w-4 h-4 text-cyan-400" />,
      durationMs: 380,
      status: 'idle',
      log: 'Intent classified as "Urgent Enterprise Tier". Fit score: 98/100.',
    },
    {
      id: 3,
      label: 'CRM Synchronization & Task Routing',
      subtext: 'HubSpot / GoHighLevel pipeline updated seamlessly',
      icon: <Database className="w-4 h-4 text-purple-400" />,
      durationMs: 280,
      status: 'idle',
      log: 'Deal card created in "Qualified Discovery" stage. Account executive alerted via Slack.',
    },
    {
      id: 4,
      label: 'Contextual Multi-Channel Outreach',
      subtext: 'AI crafts tailored email and SMS confirmation',
      icon: <Send className="w-4 h-4 text-cyan-300" />,
      durationMs: 280,
      status: 'idle',
      log: 'Personalized response dispatched in 1.3 seconds referencing client logistics bottleneck.',
    },
    {
      id: 5,
      label: 'Calendar Reservation',
      subtext: 'Direct booking link synced with live specialist availability',
      icon: <Calendar className="w-4 h-4 text-amber-400" />,
      durationMs: 200,
      status: 'idle',
      log: 'Google Meet invite reserved with zero back-and-forth emails.',
    },
  ];

  const [steps, setSteps] = useState<WorkflowStep[]>(initialSteps);

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setCompleted(false);
    setCurrentStepIndex(0);

    const updatedSteps = [...initialSteps];

    let stepIdx = 0;
    const executeNext = () => {
      if (stepIdx < updatedSteps.length) {
        setCurrentStepIndex(stepIdx);
        updatedSteps[stepIdx].status = 'running';
        setSteps([...updatedSteps]);

        setTimeout(() => {
          updatedSteps[stepIdx].status = 'completed';
          setSteps([...updatedSteps]);
          stepIdx++;
          if (stepIdx < updatedSteps.length) {
            executeNext();
          } else {
            setIsRunning(false);
            setCompleted(true);
          }
        }, updatedSteps[stepIdx].durationMs);
      }
    };

    executeNext();
  };

  const resetSimulation = () => {
    setIsRunning(false);
    setCompleted(false);
    setCurrentStepIndex(-1);
    setSteps(initialSteps.map((s) => ({ ...s, status: 'idle' })));
  };

  return (
    <section className="py-20 relative bg-[#070A18]/80 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Text Column */}
          <div className="lg:max-w-md">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
              <span>Interactive Workflow Engine</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
              Watch An AI Automation Pipeline <span className="text-gold-gradient">Execute in 1.4s</span>
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-6 [text-wrap:balance]">
              Most businesses spend 4 to 8 hours manually responding to leads, updating spreadsheets,
              and chasing meetings. Our autonomous systems execute the entire lifecycle in under
              2 seconds with zero human lag.
            </p>

            <div className="flex items-center gap-3">
              <button
                onClick={runSimulation}
                disabled={isRunning}
                className={`px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all ${
                  isRunning
                    ? 'bg-slate-800 text-slate-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 shadow-md shadow-amber-500/20 active:scale-95'
                }`}
              >
                <Play className="w-3.5 h-3.5 fill-slate-950" />
                <span>{isRunning ? 'Executing Pipeline...' : 'Run Live Simulation'}</span>
              </button>

              <button
                onClick={resetSimulation}
                disabled={isRunning || (!completed && currentStepIndex === -1)}
                className="px-4 py-3 rounded-xl text-xs font-medium text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors flex items-center gap-1.5"
                aria-label="Reset simulation"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset</span>
              </button>
            </div>

            {completed && (
              <div className="mt-5 p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>
                  <strong>Full Pipeline Executed in 1.4s.</strong> Replaces ~4.5 hours of manual back-and-forth coordination.
                </span>
              </div>
            )}
          </div>

          {/* Right Interactive Node Flow */}
          <div className="w-full lg:max-w-2xl p-6 sm:p-7 rounded-2xl bg-[#090D1F]/90 backdrop-blur-xl border border-slate-800/80 shadow-2xl relative">
            <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80 text-xs">
              <span className="font-mono text-cyan-400 uppercase tracking-wider">
                Live Autonomous Pipeline Execution
              </span>
              <span className="text-slate-400 font-mono">
                Duration:{' '}
                <span className="text-emerald-400 font-bold">
                  {completed ? '1.4s' : isRunning ? 'Running...' : '0.0s'}
                </span>
              </span>
            </div>

            <div className="space-y-3 relative">
              {steps.map((step) => {
                const isStepActive = step.status === 'running';
                const isStepCompleted = step.status === 'completed';

                return (
                  <div
                    key={step.id}
                    className={`p-3.5 rounded-xl border transition-all duration-300 flex items-start gap-3.5 ${
                      isStepActive
                        ? 'bg-cyan-950/30 border-cyan-400/80 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                        : isStepCompleted
                        ? 'bg-slate-900/80 border-emerald-500/40'
                        : 'bg-slate-950/40 border-slate-800/60 opacity-60'
                    }`}
                  >
                    <div
                      className={`p-2 rounded-lg shrink-0 mt-0.5 ${
                        isStepCompleted
                          ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/30'
                          : isStepActive
                          ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-400/50 animate-pulse'
                          : 'bg-slate-900 text-slate-500 border border-slate-800'
                      }`}
                    >
                      {step.icon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h5
                          className={`text-xs font-bold uppercase tracking-wider ${
                            isStepCompleted
                              ? 'text-emerald-300'
                              : isStepActive
                              ? 'text-cyan-300'
                              : 'text-slate-300'
                          }`}
                        >
                          {step.id}. {step.label}
                        </h5>
                        <span className="text-[10px] font-mono text-slate-500">
                          {isStepCompleted ? 'DONE' : isStepActive ? 'EXECUTING...' : 'PENDING'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{step.subtext}</p>
                      {(isStepActive || isStepCompleted) && (
                        <div className="mt-2 text-[10px] font-mono text-cyan-200/90 bg-black/40 px-2.5 py-1 rounded border border-cyan-500/20">
                          &gt; {step.log}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
