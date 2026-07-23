import React, { useState } from 'react';
import { ChevronDown, Search, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS, DOCTOR_INFO } from '../data/siteData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'todos', label: 'Todas as Dúvidas' },
    { id: 'consultas', label: 'Sobre as Consultas' },
    { id: 'online', label: 'Terapia Online' },
    { id: 'geral', label: 'Sigilo & Ética' },
  ];

  const filteredFaqs = FAQ_ITEMS.filter(item => {
    const matchesCat = selectedCategory === 'todos' || item.category === selectedCategory;
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 bg-white border-b border-sky-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-sky-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-sky-800" aria-hidden="true" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-slate-900">
            Dúvidas Frequentes sobre a Terapia
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Transparência total para você iniciar seu acompanhamento com tranquilidade e clareza.
          </p>
        </div>

        {/* Search Input */}
        <div className="mb-6 relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-slate-400" aria-hidden="true" />
          </div>
          <input
            type="text"
            placeholder="Pesquise por uma pergunta (ex: primeira sessão, duração, sigilo)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-sky-50/40 border border-sky-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:bg-white transition-all"
            aria-label="Pesquisar dúvidas frequentes"
          />
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-sky-700 text-white shadow-xs'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-sky-50/30 border border-sky-100 rounded-2xl overflow-hidden transition-all hover:border-sky-300"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${faq.id}`}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-sky-600 cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-sky-800 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      aria-hidden="true"
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${faq.id}`}
                      className="px-5 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-sky-100 animate-in fade-in duration-200"
                    >
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 text-sm">
              Nenhuma pergunta encontrada para sua busca. Tente buscar por outros termos ou mande uma mensagem direta no WhatsApp.
            </div>
          )}
        </div>

        {/* Direct Contact Help */}
        <div className="mt-12 text-center p-6 bg-sky-50 rounded-2xl border border-sky-200 space-y-3">
          <p className="text-sm text-sky-950 font-semibold">
            Ficou com alguma outra dúvida específica?
          </p>
          <a
            href={`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=Ol%C3%A1%20Dra.%20Bianca!%20Tenho%20uma%20d%C3%BAvida%20que%20n%C3%A3o%20encontrei%20no%20site.`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-sky-700 hover:bg-sky-800 text-white rounded-full text-xs font-bold transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            <span>Falar com a Dra. Bianca Durães no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
