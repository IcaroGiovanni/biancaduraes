import React, { useState, useEffect } from 'react';
import { AccessibilityState } from '../types';
import { 
  Eye, 
  Type, 
  Sun, 
  Moon, 
  RotateCcw, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Sparkles,
  X,
  AArrowUp,
  AArrowDown
} from 'lucide-react';

interface Props {
  state: AccessibilityState;
  setState: React.Dispatch<React.SetStateAction<AccessibilityState>>;
}

export const AccessibilityToolbar: React.FC<Props> = ({ state, setState }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isReading, setIsReading] = useState(false);

  // Apply state changes to body/HTML tags
  useEffect(() => {
    const root = document.documentElement;

    // Font size
    root.classList.remove('text-normal', 'text-large', 'text-xlarge');
    if (state.fontSize === 'large') {
      root.style.fontSize = '18px';
    } else if (state.fontSize === 'xlarge') {
      root.style.fontSize = '20px';
    } else {
      root.style.fontSize = '16px';
    }

    // High contrast
    if (state.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }

    // Highlight links
    if (state.highlightLinks) {
      document.body.classList.add('highlight-links');
    } else {
      document.body.classList.remove('highlight-links');
    }
  }, [state]);

  const handleTextToSpeech = () => {
    if ('speechSynthesis' in window) {
      if (isReading) {
        window.speechSynthesis.cancel();
        setIsReading(false);
      } else {
        const mainContent = document.querySelector('main')?.innerText || 'Dra. Bianca Durães, Psicóloga Clínica.';
        const utterance = new SpeechSynthesisUtterance(mainContent.substring(0, 500));
        utterance.lang = 'pt-BR';
        utterance.onend = () => setIsReading(false);
        window.speechSynthesis.speak(utterance);
        setIsReading(true);
      }
    } else {
      alert('Seu navegador não suporta leitura de tela por voz integrada.');
    }
  };

  const resetAccessibility = () => {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setIsReading(false);
    setState({
      fontSize: 'normal',
      highContrast: false,
      dyslexicFont: false,
      lineSpacing: 'normal',
      highlightLinks: false,
      screenReaderActive: false,
    });
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label="Abrir menu de recursos de acessibilidade"
          className="flex items-center gap-2.5 px-4 py-3 bg-sky-800 hover:bg-sky-900 text-white rounded-full shadow-2xl transition-all hover:scale-105 focus:ring-4 focus:ring-sky-400 border-2 border-sky-300/40 cursor-pointer text-sm font-semibold"
        >
          <Eye className="w-5 h-5 text-sky-200" aria-hidden="true" />
          <span className="hidden sm:inline">Acessibilidade</span>
        </button>

        {/* Panel Modal */}
        {isOpen && (
          <div
            role="dialog"
            aria-label="Opções de Acessibilidade Visual e Sonora"
            aria-modal="true"
            className="w-80 sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl p-5 text-slate-800 animate-in fade-in slide-in-from-bottom-4 duration-200 max-h-[85vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-sky-100 rounded-lg text-sky-800">
                  <Eye className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-bold text-slate-900 text-base">Painel de Acessibilidade</h2>
                  <p className="text-xs text-slate-500">Ajuste a visualização conforme sua necessidade</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Fechar painel de acessibilidade"
                className="p-1.5 hover:bg-slate-100 rounded-full text-slate-500 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4 text-sm">
              {/* Tamanho da Fonte */}
              <div>
                <label className="block font-semibold text-slate-700 mb-2 text-xs uppercase tracking-wider">
                  Tamanho do Texto
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setState(prev => ({ ...prev, fontSize: 'normal' }))}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      state.fontSize === 'normal'
                        ? 'bg-sky-800 text-white border-sky-800 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <span>Normal</span>
                  </button>
                  <button
                    onClick={() => setState(prev => ({ ...prev, fontSize: 'large' }))}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      state.fontSize === 'large'
                        ? 'bg-sky-800 text-white border-sky-800 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <AArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
                    <span>Grande</span>
                  </button>
                  <button
                    onClick={() => setState(prev => ({ ...prev, fontSize: 'xlarge' }))}
                    className={`p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                      state.fontSize === 'xlarge'
                        ? 'bg-sky-800 text-white border-sky-800 shadow-xs'
                        : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700'
                    }`}
                  >
                    <AArrowUp className="w-4 h-4" aria-hidden="true" />
                    <span>Extra</span>
                  </button>
                </div>
              </div>

              {/* Alto Contraste */}
              <div>
                <label className="block font-semibold text-slate-700 mb-2 text-xs uppercase tracking-wider">
                  Contraste Visual
                </label>
                <button
                  onClick={() => setState(prev => ({ ...prev, highContrast: !prev.highContrast }))}
                  className={`w-full p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                    state.highContrast
                      ? 'bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-sky-500'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {state.highContrast ? <Sun className="w-4 h-4 text-amber-400" aria-hidden="true" /> : <Moon className="w-4 h-4 text-slate-600" aria-hidden="true" />}
                    Modo Alto Contraste (Preto e Branco)
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800 border">
                    {state.highContrast ? 'Ativo' : 'Inativo'}
                  </span>
                </button>
              </div>

              {/* Destaque de Links */}
              <div>
                <button
                  onClick={() => setState(prev => ({ ...prev, highlightLinks: !prev.highlightLinks }))}
                  className={`w-full p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                    state.highlightLinks
                      ? 'bg-sky-800 text-white border-sky-800 shadow-md'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                    Destacar Links e Botões Interativos
                  </span>
                  <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-slate-200 text-slate-800 border">
                    {state.highlightLinks ? 'Sim' : 'Não'}
                  </span>
                </button>
              </div>

              {/* Leitura por Voz */}
              <div>
                <label className="block font-semibold text-slate-700 mb-2 text-xs uppercase tracking-wider">
                  Assistente de Voz
                </label>
                <button
                  onClick={handleTextToSpeech}
                  className={`w-full p-3 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all ${
                    isReading
                      ? 'bg-rose-700 text-white border-rose-700 animate-pulse'
                      : 'bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isReading ? <VolumeX className="w-4 h-4" aria-hidden="true" /> : <Volume2 className="w-4 h-4 text-sky-700" aria-hidden="true" />}
                    {isReading ? 'Parar Leitura do Conteúdo' : 'Ouvir Resumo do Site'}
                  </span>
                  {isReading && <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-rose-900 text-white">Lendo...</span>}
                </button>
              </div>

              {/* Botão de Reset */}
              <div className="pt-2 border-t border-slate-100">
                <button
                  onClick={resetAccessibility}
                  className="w-full py-2.5 px-3 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-xl flex items-center justify-center gap-2 transition-colors font-medium cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  Restaurar Configurações Padrão
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
