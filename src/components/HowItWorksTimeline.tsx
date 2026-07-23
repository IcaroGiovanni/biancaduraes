import React from 'react';
import { Calendar, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
import { TIMELINE_STEPS, DOCTOR_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const HowItWorksTimeline: React.FC<Props> = ({ onOpenBooking }) => {
  return (
    <section id="como-funciona" className="py-20 bg-white border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <span>Passo a Passo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-slate-900">
            Como funciona a sua jornada terapêutica
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Iniciar a terapia é simples e transparente. Veja os 3 passos para dar o primeiro passo em direção ao seu bem-estar emocional:
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {TIMELINE_STEPS.map((step) => (
            <div
              key={step.number}
              className="bg-sky-50/40 rounded-3xl p-8 border border-sky-100 shadow-xs relative flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div className="space-y-4">
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-2xl bg-sky-700 text-white flex items-center justify-center font-bold text-lg shadow-xs">
                  {step.number}
                </div>

                <div>
                  <h3 className="text-2xl font-serif-heading font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-sky-800 block mt-0.5">
                    {step.subtitle}
                  </span>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {step.description}
                </p>

                {/* Details list */}
                <div className="pt-4 border-t border-sky-100 space-y-2">
                  {step.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-sky-700 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="bg-sky-950 text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold">
            Pronto para dar o primeiro passo?
          </h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto">
            Tire suas dúvidas diretamente com a Dra. Bianca Durães pelo WhatsApp sem qualquer compromisso. Horários flexíveis para atendimento no consultório em Belo Horizonte (Alípio de Melo) e Online.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Bianca!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20sobre%20o%20atendimento.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-full text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              <span>Falar no WhatsApp Agora</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-full text-sm border border-slate-700 transition-all cursor-pointer"
            >
              <span>Ver Horários Disponíveis</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
