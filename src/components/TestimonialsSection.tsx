import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/siteData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="depoimentos" className="py-20 bg-sky-50/40 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <span>Depoimentos Reais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-slate-900">
            Relatos de quem já transformou sua saúde mental
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            A privacidade é totalmente resguardada, mas a gratidão de ver vidas reconstruídas e emoções fortalecidas é nosso maior compromisso.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl p-8 border border-sky-100 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative"
            >
              <div className="space-y-4 relative">
                <Quote className="w-10 h-10 text-sky-100 absolute -top-2 -right-2" aria-hidden="true" />

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400" aria-label={`Avaliação 5 de 5 estrelas`}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" aria-hidden="true" />
                  ))}
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic relative z-10">
                  "{test.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{test.name}</h3>
                  <span className="text-slate-500">{test.role}</span>
                </div>
                <div className="text-right">
                  <span className="px-2.5 py-1 bg-sky-50 text-sky-800 font-semibold rounded-full border border-sky-200 text-[11px] block mb-1">
                    {test.tag}
                  </span>
                  <span className="text-slate-400 text-[11px]">{test.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carl Rogers Quote Banner */}
        <div className="mt-16 bg-gradient-to-r from-sky-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
          <Quote className="w-24 h-24 text-sky-800/30 absolute -top-4 left-1/2 -translate-x-1/2 pointer-events-none" aria-hidden="true" />
          <blockquote className="relative z-10 space-y-3 max-w-2xl mx-auto">
            <p className="font-serif-heading text-2xl sm:text-3xl italic text-sky-100">
              "O que é mais pessoal é o que é mais universal."
            </p>
            <cite className="block text-xs uppercase tracking-widest text-sky-300 font-bold not-italic">
              — Carl Rogers
            </cite>
          </blockquote>
        </div>

      </div>
    </section>
  );
};
