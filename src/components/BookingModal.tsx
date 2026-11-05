import React, { useState, useMemo, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Building,
  User,
  Mail,
  Phone,
  Sparkles,
  Download,
  ArrowRight,
  ExternalLink,
  Globe,
} from 'lucide-react';
import { validateBookingForm } from '../utils/roi-calculator.ts';
import {
  detectUserTimezone,
  getTimezoneSummary,
  COMMON_TIMEZONES,
  getUpcomingDates,
  getTimeSlotsForDate,
  buildIcsCalendarContent,
  AvailableDate,
  TimeSlot,
} from '../utils/timezone-scheduler.ts';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Timezone auto-detection and state
  const [userTimezone, setUserTimezone] = useState<string>(() => detectUserTimezone());

  // Dynamically generated upcoming consultation dates based on timezone
  const availableDates: AvailableDate[] = useMemo(() => {
    return getUpcomingDates(userTimezone);
  }, [userTimezone]);

  // Selected date ISO string (e.g. "2026-11-06")
  const [selectedDateIso, setSelectedDateIso] = useState<string>('');

  // Keep selected date valid whenever availableDates updates
  useEffect(() => {
    if (availableDates.length > 0) {
      if (!selectedDateIso || !availableDates.some((d) => d.isoDate === selectedDateIso)) {
        setSelectedDateIso(availableDates[0].isoDate);
      }
    }
  }, [availableDates, selectedDateIso]);

  // Active date object
  const activeDateObj = useMemo(() => {
    return availableDates.find((d) => d.isoDate === selectedDateIso) || availableDates[0];
  }, [availableDates, selectedDateIso]);

  // Dynamically generated slots converted to user's timezone
  const availableSlots: TimeSlot[] = useMemo(() => {
    if (!activeDateObj) return [];
    return getTimeSlotsForDate(activeDateObj.isoDate, userTimezone);
  }, [activeDateObj, userTimezone]);

  // Selected time slot ID
  const [selectedSlotId, setSelectedSlotId] = useState<string>('');

  // Keep selected slot valid whenever availableSlots updates
  useEffect(() => {
    if (availableSlots.length > 0) {
      if (!selectedSlotId || !availableSlots.some((s) => s.id === selectedSlotId)) {
        setSelectedSlotId(availableSlots[0].id);
      }
    }
  }, [availableSlots, selectedSlotId]);

  // Active slot object
  const activeSlotObj = useMemo(() => {
    return availableSlots.find((s) => s.id === selectedSlotId) || availableSlots[0];
  }, [availableSlots, selectedSlotId]);

  // Human-readable timezone summary (e.g. "New York", "UTC-5")
  const tzSummary = useMemo(() => {
    return getTimezoneSummary(userTimezone);
  }, [userTimezone]);

  // Form states
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    primaryBottleneck: 'Too much time spent on repetitive administrative tasks',
    teamSize: '2-10 team members',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const bottleneckOptions = [
    'Too much time spent on repetitive administrative tasks',
    'Slow customer response times and lost momentum',
    'Manual lead management and dropped follow-ups',
    'Inefficient business workflows & manual handoffs',
    'Missed sales opportunities and dormant leads',
    'Disconnected tools, apps, and fragmented data silos',
    'Custom AI agents & autonomous digital coworkers',
  ];

  const GOOGLE_CALENDAR_URL = 'https://calendar.app.google/NKJVuN2ajnxuMyQC9';

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }

    if (step === 2) {
      const validation = validateBookingForm({
        fullName: formData.fullName,
        email: formData.email,
        companyName: formData.companyName,
        primaryBottleneck: formData.primaryBottleneck,
      });

      if (!validation.isValid) {
        setFormErrors(validation.errors);
        return;
      }

      setFormErrors({});
      setIsSubmitting(true);

      setTimeout(() => {
        setIsSubmitting(false);
        setStep(3);
      }, 700);
    }
  };

  const generateIcsCalendar = () => {
    if (!activeSlotObj) return;

    const icsContent = buildIcsCalendarContent({
      summary: 'AI AutoMission Strategy Call with Jan Ryan Miraflor',
      description: `Discovery audit with AI AutoMission to evaluate workflow automation, identify bottlenecks, and design a customized AI implementation roadmap. Focus: ${formData.primaryBottleneck}. Manila Reference: ${activeSlotObj.manilaTime}.`,
      userEmail: formData.email || 'client@company.com',
      clientTimezone: userTimezone,
      utcIso: activeSlotObj.utcIso,
      googleCalendarUrl: GOOGLE_CALENDAR_URL,
    });

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'AI-AutoMission-Strategy-Call.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0A0E22] border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] overflow-hidden">
        {/* Modal Top Header */}
        <div className="px-6 py-5 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 id="booking-modal-title" className="text-base font-bold text-white">
                Book Your Free AI Strategy Call
              </h3>
              <p className="text-xs text-slate-400">
                25 minutes • 1-on-1 with Jan Ryan Miraflor • Zero sales pressure
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {step === 1 && (
            <div>
              <div className="mb-5">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
                  Step 1 of 2: Select Date & Time Slot
                </span>
                <p className="text-xs text-slate-300">
                  Pick a convenient time for your 25-minute automation discovery consultation.
                </p>
              </div>

              {/* Timezone Auto-Detection & Adjustment Bar */}
              <div className="mb-6 p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 shrink-0">
                    <Globe className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                        Auto-Adjusted to Your Timezone:
                      </span>
                    </div>
                    <span className="text-xs text-white font-semibold">
                      {tzSummary.city} ({tzSummary.offset})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <label htmlFor="tz-select" className="text-[11px] text-slate-400 whitespace-nowrap">
                    Change:
                  </label>
                  <select
                    id="tz-select"
                    value={userTimezone}
                    onChange={(e) => setUserTimezone(e.target.value)}
                    className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-cyan-400 cursor-pointer"
                  >
                    {!COMMON_TIMEZONES.some((c) => c.value === userTimezone) && (
                      <option value={userTimezone}>{userTimezone} (Detected)</option>
                    )}
                    {COMMON_TIMEZONES.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Date Selection */}
              <div className="mb-6">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2.5">
                  Available Dates ({tzSummary.city} local date):
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                  {availableDates.map((opt) => (
                    <button
                      key={opt.isoDate}
                      type="button"
                      onClick={() => setSelectedDateIso(opt.isoDate)}
                      className={`p-3 rounded-xl border text-center transition-all ${
                        selectedDateIso === opt.isoDate
                          ? 'bg-amber-500/20 border-amber-400 text-white shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                          : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-bold block">{opt.label}</span>
                      <span className="text-[11px] text-slate-400 block mt-0.5">{opt.formattedDate}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2.5">
                  <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                    Available Time Slots ({tzSummary.city} local time):
                  </label>
                  <span className="text-[11px] text-slate-400">
                    Jan's base: Philippines (UTC+8)
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {availableSlots.map((slot) => {
                    const isSelected = selectedSlotId === slot.id;
                    return (
                      <button
                        key={slot.id}
                        type="button"
                        onClick={() => setSelectedSlotId(slot.id)}
                        className={`py-2.5 px-3 rounded-xl border text-left transition-all ${
                          isSelected
                            ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.25)]'
                            : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-mono font-bold text-white">
                            {slot.localTime}
                          </span>
                          {slot.dateShiftLabel && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-amber-300">
                              {slot.dateShiftLabel}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-0.5">
                          {slot.manilaTime}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Direct Google Calendar Option */}
              <div className="mb-6 p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs text-slate-300">
                    Prefer live Google Calendar sync?
                  </span>
                </div>
                <a
                  href={GOOGLE_CALENDAR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold transition-colors"
                >
                  <span>Open Jan's Google Calendar</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2"
                >
                  <span>Continue to Business Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <form onSubmit={handleNextStep}>
              <div className="mb-5 flex items-center justify-between pb-3 border-b border-slate-800">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block">
                    Step 2 of 2: Your Business Profile
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Reserved:{' '}
                    <strong className="text-white">
                      {activeDateObj?.label || 'Selected Date'}
                    </strong>{' '}
                    at{' '}
                    <strong className="text-cyan-300">
                      {activeSlotObj?.localTime || 'Selected Time'}
                    </strong>{' '}
                    ({tzSummary.city} time · {activeSlotObj?.manilaTime})
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-cyan-400 hover:underline"
                >
                  Change time
                </button>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                      formErrors.fullName ? 'border-rose-500' : 'border-slate-800'
                    }`}
                  />
                  {formErrors.fullName && (
                    <p className="text-[11px] text-rose-400 mt-1">{formErrors.fullName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Business Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        formErrors.email ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Company / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Media Group"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 ${
                        formErrors.companyName ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {formErrors.companyName && (
                      <p className="text-[11px] text-rose-400 mt-1">{formErrors.companyName}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">
                      Estimated Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                    >
                      <option value="Solo founder">Solo founder</option>
                      <option value="2-10 team members">2 - 10 team members</option>
                      <option value="11-50 team members">11 - 50 team members</option>
                      <option value="50+ enterprise">50+ team members</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Primary Operational Bottleneck *
                  </label>
                  <select
                    value={formData.primaryBottleneck}
                    onChange={(e) =>
                      setFormData({ ...formData, primaryBottleneck: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white focus:outline-none focus:ring-1 focus:ring-amber-500"
                  >
                    {bottleneckOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    Current Software Tools or Details (Optional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. We use HubSpot and Slack; we want to automate new client onboarding..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-xs text-slate-400 hover:text-white"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Securing Strategy Slot...</span>
                  ) : (
                    <>
                      <span>Confirm Free Strategy Call</span>
                      <CheckCircle2 className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <h4 className="text-2xl font-extrabold text-white mb-2">
                Strategy Session Confirmed!
              </h4>
              <p className="text-xs text-slate-300 max-w-md mx-auto mb-6">
                Your consultation with <strong>Jan Ryan Miraflor</strong> is confirmed for{' '}
                <strong className="text-amber-400">
                  {activeDateObj?.formattedDate || 'Selected Date'} at {activeSlotObj?.localTime || 'Selected Time'}
                </strong>{' '}
                (<span className="text-slate-300">{tzSummary.city} / {tzSummary.offset}</span>).
                Synchronized with Jan in the Philippines (
                <span className="text-cyan-300 font-medium">{activeSlotObj?.manilaTime}</span>
                ). A calendar invite and Google Meet link have been prepared for{' '}
                <strong className="text-cyan-400">{formData.email}</strong>.
              </p>

              {/* Summary Card */}
              <div className="max-w-md mx-auto p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Client:</span>
                  <span className="text-white font-medium">{formData.fullName} ({formData.companyName})</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Your Local Time:</span>
                  <span className="text-white font-medium">
                    {activeDateObj?.label} at {activeSlotObj?.localTime} ({tzSummary.city})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Manila Base Time:</span>
                  <span className="text-cyan-300 font-medium">
                    {activeSlotObj?.manilaTime}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Focus Area:</span>
                  <span className="text-amber-300 font-medium truncate max-w-[240px]">
                    {formData.primaryBottleneck}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Consultant:</span>
                  <span className="text-cyan-300 font-medium">Jan Ryan Miraflor (AI AutoMission)</span>
                </div>
              </div>

              {/* Google Calendar Direct Sync Card */}
              <div className="max-w-md mx-auto p-4 rounded-2xl bg-gradient-to-r from-amber-500/15 via-slate-900 to-cyan-500/15 border border-amber-500/40 text-left mb-6 shadow-[0_0_25px_rgba(245,158,11,0.2)]">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-1">
                      Final Step: Lock Slot on Google Calendar
                    </h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed mb-3">
                      To sync this session directly into your calendar and reserve your private Google Meet video room, finalize your appointment on Jan's official Google Calendar:
                    </p>
                    <a
                      href={GOOGLE_CALENDAR_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-4 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 flex items-center justify-center gap-2 shadow-md shadow-amber-500/30 transition-all hover:scale-[1.01]"
                    >
                      <span>Confirm Exact Time on Google Calendar</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Download Calendar Action & Close */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={generateIcsCalendar}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-500/40 flex items-center justify-center gap-2 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .ics file</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
