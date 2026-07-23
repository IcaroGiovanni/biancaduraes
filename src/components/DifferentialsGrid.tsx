import React from 'react';
import { ShieldCheck, Heart, Brain, Laptop } from 'lucide-react';
import { DIFFERENTIALS } from '../data/siteData';

export const DifferentialsGrid: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-7 h-7 text-sky-800" aria-hidden="true" />;
      case 'Heart': return <Heart className="w-7 h-7 text-sky-800" aria-hidden="true" />;
      case 'Brain': return <Brain className="w-7 h-7 text-sky-800" aria-hidden="true" />;
      case 'Laptop': return <Laptop className="w-7 h-7 text-sky-800" aria-hidden="true" />;
      default: return <ShieldCheck className="w-7 h-7 text-sky-800" aria-hidden="true" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 bg-sky-50/40 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <span>Diferenciais</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-slate-900">
            Por que escolher a consulta com a Dra. Bianca Durães
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Compromisso com o mais alto padrão de atendimento clínico, acolhimento em Belo Horizonte e online, e responsabilidade com o seu progresso emocional.
          </p>
        </div>

        {/* Differentials Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-3xl border border-sky-100 shadow-xs hover:shadow-md transition-all text-center space-y-4 flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-sky-100 flex items-center justify-center">
                {getIcon(diff.iconName)}
              </div>
              <h3 className="text-xl font-serif-heading font-bold text-slate-900">
                {diff.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
