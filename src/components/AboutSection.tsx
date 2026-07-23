import React from 'react';
import { Award, BookOpen, HeartHandshake, MapPin, Check } from 'lucide-react';
import { DOCTOR_INFO } from '../data/siteData';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Column */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-sky-100 rounded-3xl -z-10" aria-hidden="true" />
              
              <img
                src={DOCTOR_INFO.photoUrl}
                alt={`Foto oficial da ${DOCTOR_INFO.name}, Psicóloga Clínica`}
                referrerPolicy="no-referrer"
                className="w-full h-96 sm:h-[480px] object-cover rounded-3xl shadow-lg border border-sky-100"
              />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-sky-200 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-sky-100 rounded-xl text-sky-800">
                    <HeartHandshake className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{DOCTOR_INFO.name}</h3>
                    <p className="text-xs text-sky-800 font-semibold">{DOCTOR_INFO.crp}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
              <span>Sobre a Profissional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-slate-900 leading-tight">
              Trazer novos sentidos à sua história para desfrutar de uma vida leve e feliz
            </h2>

            <div className="space-y-4 text-slate-700 text-base leading-relaxed">
              <p className="text-slate-800 font-medium bg-sky-50/60 p-4 rounded-2xl border border-sky-100/80">
                "{DOCTOR_INFO.bioParagraph1}"
              </p>
              <p className="text-slate-700">
                {DOCTOR_INFO.bioParagraph2}
              </p>
            </div>

            {/* Credentials & Focus Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-100 flex items-start gap-3">
                <BookOpen className="w-5 h-5 text-sky-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Público Atendido</h3>
                  <p className="text-xs text-slate-600">Mulheres, Infanto-Juvenil e Adultos</p>
                </div>
              </div>

              <div className="p-4 bg-sky-50/60 rounded-2xl border border-sky-100 flex items-start gap-3">
                <Award className="w-5 h-5 text-sky-800 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">Abordagem & Registro</h3>
                  <p className="text-xs text-slate-600">TCC • {DOCTOR_INFO.crp}</p>
                </div>
              </div>
            </div>

            {/* Values badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="px-3 py-1.5 bg-sky-50 text-sky-900 border border-sky-200 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" /> Ética & Sigilo
              </span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-900 border border-sky-200 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" /> Atendimento Humanizado
              </span>
              <span className="px-3 py-1.5 bg-sky-50 text-sky-900 border border-sky-200 rounded-full text-xs font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-700" aria-hidden="true" /> Presencial (Alípio de Melo/BH) & Online
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
