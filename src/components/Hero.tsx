import React from 'react';
import { Calendar, MessageCircle, CheckCircle2, Shield, Heart, MapPin, Award } from 'lucide-react';
import { DOCTOR_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const Hero: React.FC<Props> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-950 via-slate-900 to-slate-900 text-white py-16 md:py-24">
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#7dd3fc_1px,transparent_1px)] [background-size:16px_16px]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-900/80 border border-sky-400/40 text-sky-200 text-xs font-semibold backdrop-blur-xs">
              <CheckCircle2 className="w-4 h-4 text-sky-300" aria-hidden="true" />
              <span>{DOCTOR_INFO.crp} • Terapia Cognitivo-Comportamental</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif-heading tracking-tight leading-tight text-white">
              Sua saúde mental merece um espaço de <span className="text-sky-300 italic">escuta ética, leve e acolhedora</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              {DOCTOR_INFO.slogan} <br className="hidden sm:inline" />
              Atendimentos em <strong className="text-white">Psicoterapia Individual</strong> e <strong className="text-white">Terapia de Casal</strong> com fundamentação científica em TCC.
            </p>

            {/* Notice banner about private insurance refund */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-sky-950/90 border border-sky-800 text-sky-200 text-xs font-medium max-w-xl">
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                <strong>Consultório Presencial em Belo Horizonte:</strong> {DOCTOR_INFO.addressShort} e Online. <em>(Atendimento exclusivamente particular)</em>
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Bianca!%20Gostaria%20de%20agendar%20minha%20primeira%20sess%C3%A3o.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-full shadow-lg hover:shadow-sky-400/25 transition-all flex items-center justify-center gap-2.5 text-base focus:ring-4 focus:ring-sky-300 cursor-pointer"
                aria-label="Agendar primeira sessão via WhatsApp com Dra. Bianca Durães"
              >
                <MessageCircle className="w-5 h-5 fill-slate-950" aria-hidden="true" />
                <span>Agendar Primeira Sessão</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full border border-slate-700 transition-all flex items-center justify-center gap-2 text-base focus:ring-4 focus:ring-sky-300 cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-sky-300" aria-hidden="true" />
                <span>Ver Disponibilidade</span>
              </button>
            </div>

            {/* Quick Highlights / Trust Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center gap-2.5">
                <Shield className="w-5 h-5 text-sky-300 shrink-0" aria-hidden="true" />
                <span className="text-xs text-slate-300 font-medium">Sigilo Absoluto Garantido</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Award className="w-5 h-5 text-sky-300 shrink-0" aria-hidden="true" />
                <span className="text-xs text-slate-300 font-medium">Atendimento Humanizado</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Heart className="w-5 h-5 text-sky-300 shrink-0" aria-hidden="true" />
                <span className="text-xs text-slate-300 font-medium">BH Presencial & Online</span>
              </div>
            </div>

          </div>

          {/* Profile Card / Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Decorative aura */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-blue-600 rounded-3xl blur-xl opacity-30 animate-pulse" aria-hidden="true"></div>

              <div className="relative bg-slate-800/90 border border-slate-700/80 rounded-3xl p-6 shadow-2xl backdrop-blur-md text-center">
                <div className="relative inline-block mb-4">
                  <img
                    src={DOCTOR_INFO.photoUrl}
                    alt={`Foto oficial da ${DOCTOR_INFO.name}, Psicóloga`}
                    referrerPolicy="no-referrer"
                    className="w-40 h-40 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-sky-400/80 shadow-md mx-auto"
                  />
                  {/* Status dot */}
                  <span
                    className="absolute bottom-2 right-2 w-5 h-5 bg-sky-400 border-2 border-slate-900 rounded-full shadow-md animate-bounce"
                    title="Disponível para novos pacientes"
                    aria-label="Status: Disponível para atendimento"
                  ></span>
                </div>

                <h2 className="text-2xl font-serif-heading font-bold text-white mb-1">
                  {DOCTOR_INFO.name}
                </h2>
                <p className="text-sky-300 text-sm font-semibold mb-3">
                  Psicóloga Clínica • {DOCTOR_INFO.crp}
                </p>

                <div className="bg-slate-900/80 rounded-2xl p-4 text-xs text-slate-300 text-left space-y-2 border border-slate-700/50 mb-4">
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden="true"></span>
                    <span>Terapia Cognitivo-Comportamental (TCC)</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden="true"></span>
                    <span>Foco em Mulheres & Público Infanto-Juvenil</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" aria-hidden="true"></span>
                    <span>Atendimento Presencial (Alípio de Melo/BH) & Online</span>
                  </p>
                </div>

                <a
                  href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Bianca!%20Gostaria%20de%20saber%20os%20hor%C3%A1rios%20dispon%C3%ADveis.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 bg-sky-700 hover:bg-sky-600 text-white rounded-xl text-sm font-semibold transition-colors focus:ring-2 focus:ring-sky-400"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Falar Direto no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
