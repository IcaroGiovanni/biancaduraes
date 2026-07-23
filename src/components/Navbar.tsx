import React, { useState } from 'react';
import { Menu, X, Calendar, MessageCircle, Heart, ShieldCheck, PhoneCall } from 'lucide-react';
import { DOCTOR_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<Props> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Abordagem TCC', href: '#abordagem' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Como Funciona', href: '#como-funciona' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas (FAQ)', href: '#faq' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-sky-100 shadow-xs transition-all">
      {/* Skip link for screen reader keyboard accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-sky-900 focus:text-white focus:outline-none focus:ring-4 focus:ring-sky-400 font-bold"
      >
        Pular para o conteúdo principal
      </a>

      {/* Top emergency & CRP info bar */}
      <div className="bg-sky-900 text-sky-100 px-4 py-1.5 text-xs">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-sky-300 animate-pulse" aria-hidden="true"></span>
            <span className="font-semibold">{DOCTOR_INFO.crp}</span>
            <span className="hidden sm:inline text-sky-300">|</span>
            <span className="hidden sm:inline">{DOCTOR_INFO.availableStatus}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white underline underline-offset-2 flex items-center gap-1 focus:ring-2 focus:ring-sky-300 rounded"
              aria-label={`Atendimento via WhatsApp ${DOCTOR_INFO.formattedPhone}`}
            >
              <PhoneCall className="w-3 h-3 text-sky-300" aria-hidden="true" />
              <span>{DOCTOR_INFO.formattedPhone}</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-sky-600 rounded-lg p-1"
            aria-label="Dra. Bianca Durães - Página inicial"
          >
            <div className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center text-white shadow-xs group-hover:bg-sky-800 transition-colors">
              <span className="font-serif-heading font-bold text-xl">BD</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-heading text-xl font-bold text-slate-900 leading-none group-hover:text-sky-800 transition-colors">
                {DOCTOR_INFO.name}
              </span>
              <span className="text-xs text-sky-800 font-medium tracking-wide">
                Psicóloga Clínica • TCC
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação principal">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-sky-800 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-600 rounded px-1 py-0.5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 bg-sky-700 hover:bg-sky-800 text-white rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all flex items-center gap-2 focus:ring-4 focus:ring-sky-300 cursor-pointer"
              aria-label="Agendar sessão de terapia"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              <span>Agendar Sessão</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 bg-sky-700 text-white rounded-full text-xs font-semibold"
            >
              Agendar
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="p-2 text-slate-700 hover:text-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden border-t border-sky-100 bg-white px-4 pt-4 pb-6 space-y-3 shadow-xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-800 hover:bg-sky-50 hover:text-sky-800 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 border-t border-sky-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 bg-sky-700 text-white rounded-xl text-center font-semibold shadow-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" aria-hidden="true" />
              Agendar Sessão pelo WhatsApp
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
