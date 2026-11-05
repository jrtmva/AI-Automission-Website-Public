import React from 'react';
import {
  Mail,
  MapPin,
  Calendar,
  ArrowRight,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenBooking }) => {
  const verifiedTechStack = [
    { name: 'OpenAI / LLMs', desc: 'Reasoning agents, embeddings & RAG' },
    { name: 'Make & n8n', desc: 'Complex visual & code-level orchestration' },
    { name: 'GoHighLevel', desc: 'CRM pipelines & multi-channel automation' },
    { name: 'HubSpot', desc: 'Sales ops & marketing workflow sync' },
    { name: 'Zapier', desc: 'Rapid prototyping & API connectors' },
    { name: 'Google Workspace', desc: 'Docs, Sheets, Drive & Gmail automation' },
    { name: 'REST APIs & Webhooks', desc: 'Custom endpoint integration' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative bg-[#060814]/75">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Profile Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#0B1023]/80 backdrop-blur-xl p-7 sm:p-9 border border-slate-800/80 shadow-2xl text-center relative overflow-hidden">
              {/* Subtle Ambient Radial Highlight */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Official AI AutoMission Neon Emblem Avatar */}
              <div className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-cyan-400 to-purple-500 mb-5 shadow-[0_0_30px_rgba(245,158,11,0.35)] group">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#070A14] flex items-center justify-center border border-amber-500/40">
                  <img
                    src="/assets/aistudio/Futuristic_Automission_Neon_Emblem_ad35fd77.png"
                    alt="AI AutoMission Official Neon Emblem - Jan Ryan Miraflor"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="text-xs font-semibold uppercase tracking-widest text-amber-400 mb-2">
                AI Automation Specialist
              </div>

              <h3 className="text-2xl font-bold text-white mb-1">Jan Ryan Miraflor</h3>
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-5">
                Founder & Principal Consultant, AI AutoMission
              </p>

              <blockquote className="text-xs text-slate-300 leading-relaxed italic mb-6">
                "I believe businesses shouldn't waste their best human minds on repetitive, mechanical
                tasks. My mission is to build intelligent automation systems that let you scale
                sustainably."
              </blockquote>

              <div className="pt-5 border-t border-slate-800/80 flex flex-col gap-2.5 text-xs text-slate-300 text-left">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href="mailto:janryantanmiraflor.va@gmail.com"
                    className="truncate hover:text-white transition-colors"
                  >
                    janryantanmiraflor.va@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Philippines · Serving Global Clients</span>
                </div>

                {/* Clickable Social Channels */}
                <div className="pt-2 flex items-center gap-2">
                  <a
                    href="https://www.facebook.com/profile.php?id=61596052419425"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500 hover:bg-blue-500/10 text-slate-300 hover:text-blue-400 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
                    aria-label="Message Jan on Facebook"
                  >
                    <svg className="w-3.5 h-3.5 fill-current text-[#1877F2]" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/ai.auto_mission/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-pink-500 hover:bg-pink-500/10 text-slate-300 hover:text-pink-400 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
                    aria-label="Message Jan on Instagram"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
                      <defs>
                        <linearGradient id="aboutIgGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#fdf497" />
                          <stop offset="25%" stopColor="#fd5949" />
                          <stop offset="60%" stopColor="#d6249f" />
                          <stop offset="100%" stopColor="#285AEB" />
                        </linearGradient>
                      </defs>
                      <path
                        fill="url(#aboutIgGrad)"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission & Technologies */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3">
              <span>Meet Your Automation Specialist</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6 [text-wrap:balance]">
              Engineering Practical AI Systems That{' '}
              <span className="text-gold-gradient">Deliver Real Business Value</span>
            </h2>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Hello! I am <strong>Jan Ryan Miraflor</strong>, an AI Automation Specialist and the
                founder of <strong>AI AutoMission</strong>.
              </p>
              <p>
                As businesses grow, operational complexity naturally creeps in. Teams end up bogged
                down in repetitive copy-pasting, manual customer support replies, disjointed CRMs, and
                dropped follow-ups. Instead of expanding market share, high-value team members spend
                their days firefighting back-office busywork.
              </p>
              <p>
                That is where I come in. My mission is straightforward:{' '}
                <strong className="text-white">
                  to help businesses, entrepreneurs, agencies, and service providers eliminate
                  operational friction and scale profitably using intelligent, reliable AI automation.
                </strong>
              </p>
              <p>
                I don’t sell empty AI hype or toy chatbots. I architect robust, error-tolerant systems
                that seamlessly interconnect your existing business tools, qualify your leads in
                seconds, and keep your business running smoothly 24/7.
              </p>
            </div>

            {/* Core Platforms Deployed */}
            <div className="mb-8">
              <h4 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-3">
                Core Platforms & Technologies I Deploy
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {verifiedTechStack.map((tech, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="text-xs font-bold text-white mb-0.5">{tech.name}</div>
                    <div className="text-[11px] text-slate-400">{tech.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 shadow-md shadow-amber-500/20 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-slate-950" />
                <span>Let's Talk About Your Workflows</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:janryantanmiraflor.va@gmail.com"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs font-medium text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Direct Email Inquiries</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
