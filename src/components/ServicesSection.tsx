import React from 'react';
import { 
  UserCheck, 
  HeartHandshake, 
  Briefcase, 
  MessageCircle, 
  Wind, 
  Sun, 
  Flame, 
  Feather, 
  Users, 
  Sparkles,
  ArrowRight,
  Check
} from 'lucide-react';
import { SERVICES, EXPERTISE_AREAS, DOCTOR_INFO } from '../data/siteData';

interface Props {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<Props> = ({ onOpenBooking }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-sky-800" aria-hidden="true" />;
      case 'HeartHandshake': return <HeartHandshake className="w-6 h-6 text-sky-800" aria-hidden="true" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-sky-800" aria-hidden="true" />;
      default: return <UserCheck className="w-6 h-6 text-sky-800" aria-hidden="true" />;
    }
  };

  const getExpertiseIcon = (name: string) => {
    switch (name) {
      case 'Wind': return <Wind className="w-5 h-5 text-sky-700" aria-hidden="true" />;
      case 'Sun': return <Sun className="w-5 h-5 text-sky-700" aria-hidden="true" />;
      case 'Flame': return <Flame className="w-5 h-5 text-sky-700" aria-hidden="true" />;
      case 'Feather': return <Feather className="w-5 h-5 text-sky-700" aria-hidden="true" />;
      case 'Users': return <Users className="w-5 h-5 text-sky-700" aria-hidden="true" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-sky-700" aria-hidden="true" />;
      default: return <Sparkles className="w-5 h-5 text-sky-700" aria-hidden="true" />;
    }
  };

  return (
    <section id="servicos" className="py-20 bg-sky-50/40 border-b border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <span>Modalidades de Atendimento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-slate-900">
            Cuidados especializados sob medida para seu momento
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Cada pessoa possui uma trajetória única. Os atendimentos são estruturados com técnicas validadas para proporcionar transformações consistentes e leveza emocional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-8 border border-sky-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-bl-full -z-0 transition-all group-hover:scale-125" aria-hidden="true" />

              <div className="relative z-10 space-y-5">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="px-3 py-1 bg-sky-50 text-sky-900 text-xs font-bold rounded-full border border-sky-200">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <span className="text-xs font-semibold text-sky-800 uppercase tracking-wider">
                    {service.category}
                  </span>
                  <h3 className="text-2xl font-serif-heading font-bold text-slate-900 mt-1">
                    {service.title}
                  </h3>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">Público Alvo:</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.targetAudience.map((target, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-sky-700 shrink-0" aria-hidden="true" />
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 space-y-3 relative z-10">
                <div className="text-xs text-slate-500 font-medium">
                  ⏳ {service.frequency}
                </div>

                <a
                  href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodeURIComponent(service.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-slate-900 hover:bg-sky-700 text-white rounded-xl text-xs font-bold transition-colors flex items-center justify-center gap-2 shadow-xs focus:ring-2 focus:ring-sky-500"
                  aria-label={`Saber mais sobre ${service.title} no WhatsApp`}
                >
                  <MessageCircle className="w-4 h-4 text-sky-300" aria-hidden="true" />
                  <span>Saber Mais no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Areas */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sky-100 shadow-md">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-serif-heading font-bold text-slate-900">
              Frentes de Atuação Clínica
            </h3>
            <p className="text-slate-600 text-sm">
              Tratamento humanizado focado nas queixas emocionais mais frequentes
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERTISE_AREAS.map((area, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-sky-50/40 hover:bg-sky-100/60 border border-sky-100 transition-colors flex items-start gap-4"
              >
                <div className="p-2.5 bg-white rounded-xl shadow-xs border border-sky-100 shrink-0">
                  {getExpertiseIcon(area.icon)}
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-slate-900 text-base">{area.name}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{area.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
