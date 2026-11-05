import React from 'react';

/**
 * Clean, sophisticated background with electric blue (#00F0FF) and neon purple (#D946EF)
 * moving light streams running smoothly across the page.
 * Creates an ultra-premium cyberpunk-tech aesthetic that stays elegant and minimalist.
 */
export const TechNeonFullBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Deep Space Navy & Charcoal Base */}
      <div className="absolute inset-0 bg-[#060814]" />

      {/* Subtle Ambient Radial Glow Spheres */}
      <div className="absolute -top-40 left-1/4 w-[700px] h-[450px] bg-cyan-600/10 blur-[160px] rounded-full" />
      <div className="absolute top-1/4 -right-32 w-[600px] h-[500px] bg-purple-600/12 blur-[170px] rounded-full" />
      <div className="absolute top-1/2 -left-40 w-[650px] h-[550px] bg-cyan-500/10 blur-[170px] rounded-full" />
      <div className="absolute top-3/4 right-1/4 w-[750px] h-[500px] bg-purple-600/12 blur-[180px] rounded-full" />
      <div className="absolute -bottom-32 left-1/3 w-[600px] h-[450px] bg-amber-500/8 blur-[160px] rounded-full" />

      {/* Sophisticated Tech PCB Micro Dot Matrix Grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, #00F0FF 1.2px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* ========================================================
          MOVING TECH LIGHT STREAMS (Electric Blue & Neon Purple)
          Smooth horizontal beams gliding across the viewport
         ======================================================== */}
      
      {/* Stream 1: Upper Viewport (Hero / Header boundary) - Electric Cyan Moving Right */}
      <div className="absolute top-[18%] left-0 right-0 h-[1.5px] pointer-events-none overflow-hidden opacity-85">
        {/* Track Line */}
        <div className="absolute inset-0 bg-slate-900/60" />
        {/* Moving Electric Blue Laser Stream A */}
        <div className="absolute top-0 bottom-0 w-80 bg-gradient-to-r from-transparent via-[#00F0FF] to-white rounded-full animate-stream-medium"
             style={{ filter: 'drop-shadow(0 0 8px #00F0FF) drop-shadow(0 0 16px rgba(0,240,255,0.7))' }} />
        {/* Moving Electric Blue Laser Stream B (staggered for seamless continuity) */}
        <div className="absolute top-0 bottom-0 w-80 bg-gradient-to-r from-transparent via-[#00F0FF] to-white rounded-full animate-stream-medium"
             style={{ animationDelay: '-4.25s', filter: 'drop-shadow(0 0 8px #00F0FF) drop-shadow(0 0 16px rgba(0,240,255,0.7))' }} />
      </div>

      {/* Stream 2: Upper Mid (Problems Section) - Neon Purple Moving Left */}
      <div className="absolute top-[34%] left-0 right-0 h-[1.5px] pointer-events-none overflow-hidden opacity-80">
        <div className="absolute inset-0 bg-slate-900/50" />
        {/* Stream A */}
        <div className="absolute top-0 bottom-0 w-72 bg-gradient-to-r from-white via-[#D946EF] to-transparent rounded-full animate-stream-reverse"
             style={{ filter: 'drop-shadow(0 0 8px #D946EF) drop-shadow(0 0 16px rgba(217,70,239,0.7))' }} />
        {/* Stream B */}
        <div className="absolute top-0 bottom-0 w-72 bg-gradient-to-r from-white via-[#D946EF] to-transparent rounded-full animate-stream-reverse"
             style={{ animationDelay: '-4.75s', filter: 'drop-shadow(0 0 8px #D946EF) drop-shadow(0 0 16px rgba(217,70,239,0.7))' }} />
      </div>

      {/* Stream 3: Middle Viewport (Services & Simulator) - Dual Stream Sweep */}
      <div className="absolute top-[52%] left-0 right-0 h-[2px] pointer-events-none overflow-hidden opacity-85">
        <div className="absolute inset-0 bg-slate-900/60" />
        {/* Electric Cyan Beam A */}
        <div className="absolute top-0 bottom-0 w-96 bg-gradient-to-r from-transparent via-[#00F0FF] 60%, to-white rounded-full animate-stream-fast"
             style={{ filter: 'drop-shadow(0 0 10px #00F0FF) drop-shadow(0 0 20px rgba(0,240,255,0.8))' }} />
        {/* Electric Cyan Beam B */}
        <div className="absolute top-0 bottom-0 w-96 bg-gradient-to-r from-transparent via-[#00F0FF] 60%, to-white rounded-full animate-stream-fast"
             style={{ animationDelay: '-2.75s', filter: 'drop-shadow(0 0 10px #00F0FF) drop-shadow(0 0 20px rgba(0,240,255,0.8))' }} />
        {/* Neon Purple Counter Beam A */}
        <div className="absolute top-0 bottom-0 w-64 bg-gradient-to-r from-white via-[#D946EF] to-transparent rounded-full animate-stream-reverse"
             style={{ filter: 'drop-shadow(0 0 10px #D946EF) drop-shadow(0 0 18px rgba(217,70,239,0.8))' }} />
        {/* Neon Purple Counter Beam B */}
        <div className="absolute top-0 bottom-0 w-64 bg-gradient-to-r from-white via-[#D946EF] to-transparent rounded-full animate-stream-reverse"
             style={{ animationDelay: '-4.75s', filter: 'drop-shadow(0 0 10px #D946EF) drop-shadow(0 0 18px rgba(217,70,239,0.8))' }} />
      </div>

      {/* Stream 4: Lower Mid Viewport (Why Choose Me & Results) - Electric Blue Moving Right */}
      <div className="absolute top-[68%] left-0 right-0 h-[1.5px] pointer-events-none overflow-hidden opacity-80">
        <div className="absolute inset-0 bg-slate-900/50" />
        <div className="absolute top-0 bottom-0 w-80 bg-gradient-to-r from-transparent via-[#00F0FF] to-cyan-200 rounded-full animate-stream-medium"
             style={{ filter: 'drop-shadow(0 0 8px #00F0FF) drop-shadow(0 0 16px rgba(0,240,255,0.7))' }} />
        <div className="absolute top-0 bottom-0 w-80 bg-gradient-to-r from-transparent via-[#00F0FF] to-cyan-200 rounded-full animate-stream-medium"
             style={{ animationDelay: '-4.25s', filter: 'drop-shadow(0 0 8px #00F0FF) drop-shadow(0 0 16px rgba(0,240,255,0.7))' }} />
      </div>

      {/* Stream 5: Lower Viewport (About & FAQ / CTA) - Neon Purple Moving Across */}
      <div className="absolute top-[84%] left-0 right-0 h-[1.5px] pointer-events-none overflow-hidden opacity-85">
        <div className="absolute inset-0 bg-slate-900/60" />
        <div className="absolute top-0 bottom-0 w-96 bg-gradient-to-r from-transparent via-[#D946EF] 60%, to-white rounded-full animate-stream-slow"
             style={{ filter: 'drop-shadow(0 0 10px #D946EF) drop-shadow(0 0 20px rgba(217,70,239,0.75))' }} />
        <div className="absolute top-0 bottom-0 w-96 bg-gradient-to-r from-transparent via-[#D946EF] 60%, to-white rounded-full animate-stream-slow"
             style={{ animationDelay: '-6.5s', filter: 'drop-shadow(0 0 10px #D946EF) drop-shadow(0 0 20px rgba(217,70,239,0.75))' }} />
      </div>

      {/* SVG Circuit Highway Overlay with Pulsing Junctions */}
      <svg
        className="absolute inset-0 w-full h-full opacity-60"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 1600 2400"
      >
        <defs>
          <linearGradient id="cyanTrail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="purpleTrail" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D946EF" stopOpacity="0.05" />
            <stop offset="50%" stopColor="#C084FC" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Diagonal Arterial Circuit 1 (Hero to Problems) - period exactly 600px */}
        <path
          d="M -40 180 L 320 180 L 400 250 L 980 250 L 1050 190 L 1380 190 L 1440 240 L 1640 240"
          stroke="#00F0FF"
          strokeWidth="1.6"
          fill="none"
          strokeDasharray="120 480"
          className="animate-circuit-flow neon-glow-cyan"
        />
        <circle cx="320" cy="180" r="3.5" fill="#00F0FF" className="neon-glow-cyan" />
        <circle cx="400" cy="250" r="4" fill="#FFFFFF" stroke="#00F0FF" strokeWidth="1.5" />
        <circle cx="980" cy="250" r="3.5" fill="#00F0FF" />
        <circle cx="1050" cy="190" r="4" fill="#FFFFFF" stroke="#00F0FF" strokeWidth="1.5" />

        {/* Diagonal Arterial Circuit 2 (Services to How It Works) - reverse flow, period exactly 600px */}
        <path
          d="M 1640 760 L 1260 760 L 1180 840 L 680 840 L 610 770 L 220 770 L -40 770"
          stroke="#D946EF"
          strokeWidth="1.6"
          fill="none"
          strokeDasharray="120 480"
          className="animate-circuit-flow-reverse neon-glow-purple"
        />
        <circle cx="1260" cy="760" r="3.5" fill="#D946EF" className="neon-glow-purple" />
        <circle cx="1180" cy="840" r="4" fill="#FFFFFF" stroke="#D946EF" strokeWidth="1.5" />
        <circle cx="680" cy="840" r="3.5" fill="#D946EF" />
        <circle cx="610" cy="770" r="4" fill="#FFFFFF" stroke="#D946EF" strokeWidth="1.5" />

        {/* Diagonal Arterial Circuit 3 (ROI to About) - period exactly 600px */}
        <path
          d="M -40 1340 L 360 1340 L 440 1410 L 940 1410 L 1010 1350 L 1360 1350 L 1420 1400 L 1640 1400"
          stroke="#00F0FF"
          strokeWidth="1.6"
          fill="none"
          strokeDasharray="120 480"
          className="animate-circuit-flow-slow neon-glow-cyan"
        />
        <circle cx="360" cy="1340" r="3.5" fill="#00F0FF" />
        <circle cx="440" cy="1410" r="4" fill="#FFFFFF" stroke="#00F0FF" strokeWidth="1.5" />
        <circle cx="940" cy="1410" r="3.5" fill="#00F0FF" />

        {/* Left & Right Flank Vertical Circuit Highway Traces */}
        <path
          d="M 50 100 L 50 500 L 90 540 L 90 1100 L 50 1140 L 50 1800 L 90 1840 L 90 2350"
          stroke="#00F0FF"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.4"
        />
        <path
          d="M 1550 120 L 1550 550 L 1510 590 L 1510 1150 L 1550 1190 L 1550 1850 L 1510 1890 L 1510 2350"
          stroke="#D946EF"
          strokeWidth="1.2"
          strokeDasharray="4 8"
          fill="none"
          opacity="0.4"
        />
      </svg>
    </div>
  );
};

export const CyberDivider: React.FC<{
  type?: 'blue-purple' | 'purple-blue' | 'dual';
  className?: string;
}> = ({ type = 'blue-purple', className = '' }) => {
  return (
    <div className={`relative w-full overflow-hidden pointer-events-none py-2 ${className}`}>
      {/* Background Track Line */}
      <div className="relative w-full h-[1.5px] bg-slate-900/80">
        {/* Subtle static gradient trace */}
        <div
          className={`absolute inset-0 h-full ${
            type === 'blue-purple'
              ? 'bg-gradient-to-r from-transparent via-[#00F0FF]/60 30%, via-[#D946EF]/60 70%, to-transparent'
              : type === 'purple-blue'
              ? 'bg-gradient-to-r from-transparent via-[#D946EF]/60 30%, via-[#00F0FF]/60 70%, to-transparent'
              : 'bg-gradient-to-r from-transparent via-[#00F0FF]/60 25%, via-[#F59E0B]/50 50%, via-[#D946EF]/60 75%, to-transparent'
          }`}
        />

        {/* Primary Traveling Laser Pulse */}
        <div className="absolute top-0 bottom-0 w-44 bg-gradient-to-r from-transparent via-white 70%, via-cyan-200 to-transparent opacity-95 animate-beam-scan"
             style={{ filter: 'drop-shadow(0 0 6px #00F0FF)' }} />

        {/* Counter Traveling Pulse (Neon Purple) */}
        <div className="absolute top-0 bottom-0 w-36 bg-gradient-to-r from-transparent via-purple-200 70%, via-[#D946EF] to-transparent opacity-90 animate-beam-scan-reverse"
             style={{ filter: 'drop-shadow(0 0 6px #D946EF)' }} />
      </div>

      {/* Minimalist Center Diamond Junction Knot */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-1 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00F0FF]" />
        <div className="w-6 h-2 rounded-full bg-[#060814] border border-slate-700 flex items-center justify-center">
          <span className="w-3 h-0.5 rounded bg-gradient-to-r from-[#00F0FF] via-white to-[#D946EF]" />
        </div>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#D946EF]" />
      </div>
    </div>
  );
};
