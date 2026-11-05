import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Calendar, Shield } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenPrivacy: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenPrivacy }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problems', href: '#problems' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Why Choose Me', href: '#why-choose-me' },
    { name: 'ROI Calculator', href: '#roi-calculator' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Inquiries', href: '#inquiries' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#060814]/95 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-black/80 py-3'
          : 'bg-[#060814]/75 backdrop-blur-md border-b border-slate-800/60 py-4'
      }`}
    >
      {/* Moving Tech Stream across Header: Electric Blue & Neon Purple */}
      <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-slate-950/80 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00F0FF]/40 30%, via-[#D946EF]/40 70%, to-transparent"
        />
        <div className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-white 70%, via-cyan-200 to-transparent opacity-95 animate-beam-scan"
             style={{ filter: 'drop-shadow(0 0 6px #00F0FF)' }} />
        <div className="absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent via-purple-200 70%, via-[#D946EF] to-transparent opacity-90 animate-beam-scan-reverse"
             style={{ filter: 'drop-shadow(0 0 6px #D946EF)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Clean Brand Wordmark (Single Element, No Pill Clutter) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg py-0.5"
            aria-label="AI AutoMission Home"
          >
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-bold text-xs shadow-[0_0_15px_rgba(245,158,11,0.4)] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.6)] transition-all">
              AI
            </div>
            <span className="font-semibold text-base tracking-wider text-slate-100">
              AUTO<span className="text-gold-gradient font-bold">MISSION</span>
            </span>
          </a>

          {/* Zone 2: Single-Line Text Nav Links */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase font-medium tracking-wider text-slate-300 hover:text-amber-400 transition-colors whitespace-nowrap shrink-0"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Action + Quiet Privacy Link */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <button
              onClick={onOpenPrivacy}
              className="text-xs text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              aria-label="View Privacy Policy"
            >
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Privacy</span>
            </button>
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider transition-all duration-200 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:brightness-110 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.35)] hover:shadow-[0_0_28px_rgba(245,158,11,0.55)] active:scale-95 flex items-center gap-2 whitespace-nowrap shrink-0"
              aria-label="Book a Free Strategy Call"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-md font-semibold text-[11px] bg-amber-500 text-slate-950 uppercase tracking-wider"
              aria-label="Book Call"
            >
              Book Call
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-slate-200 hover:text-amber-400 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 px-4 rounded-xl bg-[#090D1C]/98 backdrop-blur-xl border border-slate-800 shadow-2xl space-y-3">
            <div className="grid grid-cols-1 gap-1 pt-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800/60 hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-lg font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-600 text-slate-950 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Strategy Call</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenPrivacy();
                }}
                className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 flex items-center justify-center gap-1.5"
              >
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>View Full Privacy Policy</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
