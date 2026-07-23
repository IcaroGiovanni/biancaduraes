import React, { useState } from 'react';
import { Brain, Sparkles, RefreshCw, ArrowRight, Heart, Zap, CheckCircle2 } from 'lucide-react';
import { TCC_EXAMPLES } from '../data/siteData';

export const TccInteractiveTriad: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(TCC_EXAMPLES[0]);
  const [showAlternative, setShowAlternative] = useState(false);

  return (
    <section id="abordagem" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-900/80 border border-sky-400/40 text-sky-200 text-xs font-bold uppercase tracking-wider">
            <Brain className="w-4 h-4 text-sky-300" aria-hidden="true" />
            <span>Abordagem Científica • TCC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif-heading font-bold text-white">
            Como funciona a Terapia Cognitivo-Comportamental
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            A TCC baseia-se no princípio de que não são as situações em si que nos perturbam, mas sim <strong className="text-sky-300">a forma como interpretamos cada evento</strong>.
          </p>
        </div>

        {/* Cognitive Triad Visual Diagram */}
        <div className="bg-slate-800/80 rounded-3xl p-8 border border-slate-700/80 shadow-2xl mb-12">
          <h3 className="text-xl font-bold text-center text-sky-300 mb-8 font-serif-heading">
            A Tríade Cognitiva: Pensar • Sentir • Agir
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-sky-950/80 text-sky-300 flex items-center justify-center font-bold text-lg border border-sky-800">
                01
              </div>
              <h4 className="font-bold text-lg text-white">Pensamento</h4>
              <p className="text-xs text-slate-300">A interpretação que sua mente dá sobre o acontecimento em fração de segundos.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-sky-950/80 text-sky-300 flex items-center justify-center font-bold text-lg border border-sky-800">
                02
              </div>
              <h4 className="font-bold text-lg text-white">Emoção</h4>
              <p className="text-xs text-slate-300">A resposta emocional e corporal imediata desencadeada por esse pensamento.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/90 border border-sky-500/30 space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-sky-950/80 text-sky-300 flex items-center justify-center font-bold text-lg border border-sky-800">
                03
              </div>
              <h4 className="font-bold text-lg text-white">Comportamento</h4>
              <p className="text-xs text-slate-300">As atitudes e ações que você toma baseado no que sentiu e pensou.</p>
            </div>
          </div>
        </div>

        {/* Interactive Simulation Container */}
        <div className="bg-slate-800/60 rounded-3xl p-6 sm:p-8 border border-slate-700">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-700">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">Simulador Interativo de Psicoeducação</span>
              <h3 className="text-xl font-bold text-white font-serif-heading">
                Veja a TCC na prática em situações do dia a dia
              </h3>
            </div>

            {/* Scenario Selector Tabs */}
            <div className="flex flex-wrap gap-2">
              {TCC_EXAMPLES.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => {
                    setSelectedExample(ex);
                    setShowAlternative(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    selectedExample.id === ex.id
                      ? 'bg-sky-400 text-slate-950 font-bold shadow-md'
                      : 'bg-slate-700/80 hover:bg-slate-700 text-slate-300'
                  }`}
                >
                  {ex.id === 'ansiedade-trabalho' ? 'Ansiedade no Trabalho' : ex.id === 'relacionamento' ? 'Relacionamentos' : 'Perfeccionismo'}
                </button>
              ))}
            </div>
          </div>

          {/* Trigger Situation Box */}
          <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-700 mb-6 text-sm">
            <span className="text-xs font-bold text-sky-300 uppercase tracking-wide block mb-1">Situação de Gatilho:</span>
            <p className="text-slate-200 font-medium">{selectedExample.situation}</p>
          </div>

          {/* Comparison Cards: Automatic Distortion vs Re-framed Thought */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            
            {/* Automatic Thought */}
            <div className={`p-6 rounded-2xl border transition-all ${!showAlternative ? 'bg-slate-900 border-rose-500/60 ring-2 ring-rose-500/30' : 'bg-slate-900/60 border-slate-700 opacity-75'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-rose-950 text-rose-300 text-xs font-bold rounded-full border border-rose-800">
                  Pensamento Automático Disfuncional
                </span>
                <Zap className="w-4 h-4 text-rose-400" aria-hidden="true" />
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Pensamento:</span>
                  <p className="font-semibold text-slate-100">"{selectedExample.thoughtAutomatic}"</p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Emoção Gerada:</span>
                  <p className="text-rose-300 font-medium">{selectedExample.emotion}</p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Comportamento Resultante:</span>
                  <p className="text-slate-300">{selectedExample.behaviorAutomatic}</p>
                </div>
              </div>
            </div>

            {/* Re-framed Thought (TCC Process) */}
            <div className={`p-6 rounded-2xl border transition-all ${showAlternative ? 'bg-slate-900 border-sky-400 ring-2 ring-sky-400/40' : 'bg-slate-900/60 border-slate-700'}`}>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-sky-950 text-sky-200 text-xs font-bold rounded-full border border-sky-700">
                  Pensamento Reestruturado na TCC
                </span>
                <CheckCircle2 className="w-4 h-4 text-sky-300" aria-hidden="true" />
              </div>

              <div className="space-y-4 text-sm">
                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Novo Pensamento Realista:</span>
                  <p className="font-semibold text-sky-200">"{selectedExample.thoughtAlternative}"</p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Nova Emoção:</span>
                  <p className="text-sky-300 font-medium">{selectedExample.emotionNew}</p>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block mb-0.5">Novo Comportamento Saudável:</span>
                  <p className="text-slate-200">{selectedExample.behaviorNew}</p>
                </div>
              </div>
            </div>

          </div>

          {/* Action Toggle Button */}
          <div className="mt-8 text-center">
            <button
              onClick={() => setShowAlternative(!showAlternative)}
              className="px-6 py-3 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold text-sm rounded-full transition-all shadow-lg flex items-center gap-2 mx-auto cursor-pointer"
            >
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              <span>{showAlternative ? 'Ver Comparação Inicial' : 'Ver Reestruturação TCC em Ação'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
