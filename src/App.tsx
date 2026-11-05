import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { ProblemsSection } from './components/ProblemsSection.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { WorkflowSimulator } from './components/WorkflowSimulator.tsx';
import { HowItWorks } from './components/HowItWorks.tsx';
import { WhyChooseMe } from './components/WhyChooseMe.tsx';
import { ResultsSection } from './components/ResultsSection.tsx';
import { RoiCalculatorSection } from './components/RoiCalculatorSection.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { FaqSection } from './components/FaqSection.tsx';
import { InquiriesSection } from './components/InquiriesSection.tsx';
import { FinalCtaSection } from './components/FinalCtaSection.tsx';
import { Footer } from './components/Footer.tsx';
import { BookingModal } from './components/BookingModal.tsx';
import { PrivacyPolicyModal } from './components/PrivacyPolicyModal.tsx';

import { CyberDivider, TechNeonFullBackground } from './components/CyberCircuitLines.tsx';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#060814] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200 relative">
      {/* High-Tech Background with Bright Neon Light Lines Running Through It */}
      <TechNeonFullBackground />

      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section with simpler background and cyber circuit traces */}
        <Hero onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Neon Purple and Electric Blue line running across */}
        <CyberDivider type="blue-purple" />

        {/* Problems Solved Section */}
        <ProblemsSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Neon Purple and Electric Blue line running across */}
        <CyberDivider type="purple-blue" />

        {/* Services & Automation Systems Section */}
        <ServicesSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Interactive Live Workflow Execution Simulator */}
        <WorkflowSimulator />

        {/* Neon Purple and Electric Blue line running across */}
        <CyberDivider type="blue-purple" />

        {/* 4-Step Process: Discover, Strategize, Build, Optimize */}
        <HowItWorks onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Why Choose Me / Differentiation */}
        <WhyChooseMe />

        {/* Neon Purple and Electric Blue line running across */}
        <CyberDivider type="purple-blue" />

        {/* Results & Business Impact */}
        <ResultsSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Interactive ROI & Savings Calculator */}
        <RoiCalculatorSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Neon Purple and Electric Blue line running across */}
        <CyberDivider type="blue-purple" />

        {/* About Specialist Section */}
        <AboutSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* FAQ Accordion Section */}
        <FaqSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Neon Purple and Electric Blue line running across */}
        <CyberDivider type="blue-purple" />

        {/* Direct Inquiries & Messaging Channels Section */}
        <InquiriesSection onOpenBooking={() => setIsBookingOpen(true)} />

        {/* Neon Purple and Electric Blue line running across */}
        <CyberDivider type="purple-blue" />

        {/* Final Conversion CTA Section */}
        <FinalCtaSection onOpenBooking={() => setIsBookingOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
      />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Official 15-Section Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />
    </div>
  );
}
