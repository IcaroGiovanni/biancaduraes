import React, { useState } from 'react';
import { AccessibilityState } from './types';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { TccInteractiveTriad } from './components/TccInteractiveTriad';
import { HowItWorksTimeline } from './components/HowItWorksTimeline';
import { DifferentialsGrid } from './components/DifferentialsGrid';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { BookingModal } from './components/BookingModal';
import { Footer } from './components/Footer';
import { MessageCircle } from 'lucide-react';
import { DOCTOR_INFO } from './data/siteData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [accessibilityState, setAccessibilityState] = useState<AccessibilityState>({
    fontSize: 'normal',
    highContrast: false,
    dyslexicFont: false,
    lineSpacing: 'normal',
    highlightLinks: false,
    screenReaderActive: false,
  });

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 font-sans">
      {/* Floating Accessibility Widget */}
      <AccessibilityToolbar state={accessibilityState} setState={setAccessibilityState} />

      {/* Navigation Header */}
      <Navbar onOpenBooking={() => setBookingOpen(true)} />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Hero onOpenBooking={() => setBookingOpen(true)} />
        <AboutSection />
        <ServicesSection onOpenBooking={() => setBookingOpen(true)} />
        <TccInteractiveTriad />
        <DifferentialsGrid />
        <HowItWorksTimeline onOpenBooking={() => setBookingOpen(true)} />
        <TestimonialsSection />
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Booking Modal */}
      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />

      {/* Floating Quick WhatsApp Button */}
      <a
        href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Bianca!%20Gostaria%20de%20agendar%20uma%20consulta.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Atendimento rápido via WhatsApp da Dra. Bianca Durães"
        className="fixed bottom-6 left-6 z-40 p-4 bg-sky-400 hover:bg-sky-300 text-slate-950 rounded-full shadow-2xl transition-all hover:scale-110 focus:ring-4 focus:ring-sky-200 flex items-center justify-center border-2 border-white/80"
      >
        <MessageCircle className="w-7 h-7 fill-slate-950" aria-hidden="true" />
      </a>
    </div>
  );
}
