import React from 'react';
import { Mail, Calendar, ExternalLink, ArrowRight, MessageSquare } from 'lucide-react';

interface InquiriesSectionProps {
  onOpenBooking?: () => void;
}

export const InquiriesSection: React.FC<InquiriesSectionProps> = ({ onOpenBooking }) => {
  const contactChannels = [
    {
      platform: 'Facebook',
      handle: 'AI AutoMission',
      url: 'https://www.facebook.com/profile.php?id=61596052419425',
      description: 'Connect on Messenger for project inquiries, workflow audits, or partnership discussions.',
      badge: 'Active & Responsive',
      badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
      borderGlow: 'hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(24,119,242,0.25)]',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-[#1877F2]/15 border border-[#1877F2]/40 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-[#1877F2]/25 transition-all">
          <svg
            className="w-6 h-6 text-[#1877F2] fill-current"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        </div>
      ),
      actionLabel: 'Chat on Facebook',
    },
    {
      platform: 'Instagram',
      handle: '@ai.auto_mission',
      url: 'https://www.instagram.com/ai.auto_mission/',
      description: 'Follow our automation demos, agent build breakdowns, and DM directly for quick inquiries.',
      badge: 'Official Page',
      badgeColor: 'bg-pink-500/20 text-pink-300 border-pink-500/30',
      borderGlow: 'hover:border-pink-500/50 hover:shadow-[0_0_30px_rgba(225,48,108,0.25)]',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#833AB4]/20 via-[#FD1D1D]/20 to-[#F77737]/20 border border-pink-500/40 flex items-center justify-center shrink-0 group-hover:scale-105 transition-all">
          <svg className="w-6 h-6" viewBox="0 0 24 24" aria-hidden="true">
            <defs>
              <linearGradient id="inquiryIgGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#fdf497" />
                <stop offset="25%" stopColor="#fd5949" />
                <stop offset="60%" stopColor="#d6249f" />
                <stop offset="100%" stopColor="#285AEB" />
              </linearGradient>
            </defs>
            <path
              fill="url(#inquiryIgGradient)"
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </div>
      ),
      actionLabel: 'Follow & DM on Instagram',
    },
    {
      platform: 'Direct Email',
      handle: 'janryantanmiraflor.va@gmail.com',
      url: 'mailto:janryantanmiraflor.va@gmail.com',
      description: 'Ideal for sending comprehensive RFP specifications, system requirements, and private proposals.',
      badge: '24h Response',
      badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
      borderGlow: 'hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/40 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-amber-500/25 transition-all text-amber-400">
          <Mail className="w-6 h-6" />
        </div>
      ),
      actionLabel: 'Send Direct Email',
    },
    {
      platform: 'Google Calendar',
      handle: 'Direct 1-on-1 Consultation',
      url: 'https://calendar.app.google/9m3GmWy9GGJgfMWx9',
      description: 'Reserve an exact 25-minute strategy video slot with automated Google Meet calendar invitation.',
      badge: 'Live Sync',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      borderGlow: 'hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]',
      icon: (
        <div className="w-12 h-12 rounded-2xl bg-cyan-500/15 border border-cyan-500/40 flex items-center justify-center shrink-0 group-hover:scale-105 group-hover:bg-cyan-500/25 transition-all text-cyan-400">
          <Calendar className="w-6 h-6" />
        </div>
      ),
      actionLabel: 'Book on Google Calendar',
    },
  ];

  return (
    <section id="inquiries" className="py-20 md:py-28 relative bg-[#070A18]/85 overflow-hidden">
      {/* Background Neon Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with exact requested title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400 mb-3 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Direct Communication Channels</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 [text-wrap:balance]">
            For more Inquiries you can{' '}
            <span className="text-gold-gradient">message me here:</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed [text-wrap:balance]">
            Have questions about custom AI agents, workflow automation, or enterprise integration?
            Choose your preferred platform below and let’s connect directly.
          </p>
        </div>

        {/* 4 Interactive Contact Cards with Clickable Logos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel) => (
            <a
              key={channel.platform}
              href={channel.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-2xl bg-[#090E22]/90 backdrop-blur-xl border border-slate-800 transition-all duration-300 flex flex-col justify-between ${channel.borderGlow} relative overflow-hidden`}
              aria-label={`Open ${channel.platform} (${channel.handle}) in new tab`}
            >
              {/* Corner accent glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] rounded-full blur-xl pointer-events-none group-hover:bg-white/[0.05] transition-colors" />

              <div>
                <div className="flex items-start justify-between gap-3 mb-5">
                  {/* Clickable Platform Logo */}
                  {channel.icon}

                  <span
                    className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${channel.badgeColor}`}
                  >
                    {channel.badge}
                  </span>
                </div>

                <div className="mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors flex items-center gap-1.5">
                    <span>{channel.platform}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-slate-400" />
                  </h3>
                  <p className="text-xs font-mono text-cyan-300 truncate font-medium">
                    {channel.handle}
                  </p>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {channel.description}
                </p>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                <span>{channel.actionLabel}</span>
                <div className="p-1.5 rounded-lg bg-slate-800/80 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
