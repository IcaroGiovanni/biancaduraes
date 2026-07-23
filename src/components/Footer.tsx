import React from 'react';
import { Heart, Instagram, Phone, Shield, AlertTriangle, ArrowUp } from 'lucide-react';
import { DOCTOR_INFO } from '../data/siteData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-sky-700 flex items-center justify-center text-white font-serif-heading font-bold text-lg">
                BD
              </div>
              <div>
                <h3 className="font-serif-heading text-xl font-bold text-white leading-tight">
                  {DOCTOR_INFO.name}
                </h3>
                <span className="text-xs text-sky-300 font-semibold">{DOCTOR_INFO.crp}</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {DOCTOR_INFO.shortBio}
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1">
              <p>📍 {DOCTOR_INFO.address}</p>
              <p>📞 {DOCTOR_INFO.formattedPhone}</p>
              <p>✉️ {DOCTOR_INFO.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#sobre" className="hover:text-sky-300 transition-colors">Sobre a Psicóloga</a></li>
              <li><a href="#servicos" className="hover:text-sky-300 transition-colors">Serviços e Modalidades</a></li>
              <li><a href="#abordagem" className="hover:text-sky-300 transition-colors">Terapia Cognitivo-Comportamental</a></li>
              <li><a href="#como-funciona" className="hover:text-sky-300 transition-colors">Como Funciona</a></li>
              <li><a href="#faq" className="hover:text-sky-300 transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-sm uppercase tracking-wider">Canais de Atendimento</h4>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={DOCTOR_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 hover:bg-sky-900 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors flex items-center gap-2 text-xs font-semibold"
                aria-label={`Siga o Instagram da ${DOCTOR_INFO.name}`}
              >
                <Instagram className="w-4 h-4 text-sky-400" aria-hidden="true" />
                <span>{DOCTOR_INFO.instagram}</span>
              </a>

              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-900 hover:bg-sky-900 text-slate-300 hover:text-white rounded-xl border border-slate-800 transition-colors flex items-center gap-2 text-xs font-semibold"
                aria-label="Atendimento no WhatsApp"
              >
                <Phone className="w-4 h-4 text-sky-400" aria-hidden="true" />
                <span>WhatsApp Direto</span>
              </a>
            </div>
          </div>

        </div>

        {/* Emergency CVV 188 Alert Box - Mandatory Ethical Mental Health Disclaimer */}
        <div className="p-4 bg-slate-900/90 rounded-2xl border border-amber-500/30 text-amber-200/90 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
            <span>
              <strong>Aviso de Emergência em Saúde Mental:</strong> Este site não realiza atendimento de urgência ou emergência imediata. Se você está em crise grave ou pensando em automutilação, ligue gratuitamente para o <strong>CVV no número 188</strong> ou procure a UPA/Pronto Socorro mais próximo.
            </span>
          </div>
          <a
            href="https://cvv.org.br"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 rounded-lg text-[11px] font-bold border border-amber-500/40 shrink-0"
          >
            Acessar CVV.org.br
          </a>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {DOCTOR_INFO.name} • Psicóloga Clínica ({DOCTOR_INFO.crp}). Todos os direitos reservados.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-sky-300 transition-colors cursor-pointer p-1"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

      </div>
    </footer>
  );
};
