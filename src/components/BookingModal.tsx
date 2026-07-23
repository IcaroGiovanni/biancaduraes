import React, { useState } from 'react';
import { X, Calendar, MessageCircle, Clock, Check, User, ShieldCheck } from 'lucide-react';
import { DOCTOR_INFO } from '../data/siteData';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [service, setService] = useState('Psicoterapia Individual');
  const [modality, setModality] = useState('Online');
  const [preferredTime, setPreferredTime] = useState('Tarde (13h às 18h)');
  const [patientName, setPatientName] = useState('');
  const [mainGoal, setMainGoal] = useState('Tratar Ansiedade / Estresse');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá Dra. Bianca Durães!\n\nGostaria de solicitar um agendamento de consulta:\n\n👤 *Nome:* ${patientName || 'Não informado'}\n🩺 *Serviço:* ${service}\n💻 *Modalidade:* ${modality}\n⏰ *Preferência de Horário:* ${preferredTime}\n🎯 *Objetivo Principal:* ${mainGoal}\n\nAguardo seu retorno para confirmação de horários!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${DOCTOR_INFO.whatsappNumber}?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="booking-modal-title"
    >
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-sky-100 max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-800 hover:bg-slate-100 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-600 cursor-pointer"
          aria-label="Fechar janela de agendamento"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Header */}
        <div className="text-center mb-6 space-y-2">
          <div className="w-12 h-12 bg-sky-100 text-sky-800 rounded-2xl flex items-center justify-center mx-auto">
            <Calendar className="w-6 h-6" aria-hidden="true" />
          </div>
          <h2 id="booking-modal-title" className="text-2xl font-serif-heading font-bold text-slate-900">
            Agendar Consulta Inicial
          </h2>
          <p className="text-xs text-slate-500">
            Preencha abaixo para gerar sua mensagem personalizada no WhatsApp da Dra. Bianca
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          {/* Patient Name */}
          <div>
            <label htmlFor="patient-name" className="block text-xs font-bold text-slate-700 mb-1">
              Seu Nome Completo:
            </label>
            <input
              id="patient-name"
              type="text"
              required
              placeholder="Ex: Maria Silva"
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              className="w-full p-3 bg-sky-50/40 border border-sky-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-sky-600 focus:bg-white focus:outline-none"
            />
          </div>

          {/* Service Selection */}
          <div>
            <label htmlFor="service-select" className="block text-xs font-bold text-slate-700 mb-1">
              Tipo de Atendimento Desejado:
            </label>
            <select
              id="service-select"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full p-3 bg-sky-50/40 border border-sky-200 rounded-xl text-slate-800 font-semibold focus:ring-2 focus:ring-sky-600 focus:outline-none"
            >
              <option value="Psicoterapia Individual">Psicoterapia Individual (Adulto / Adolescente)</option>
              <option value="Terapia de Casal">Terapia de Casal</option>
              <option value="Orientação Profissional">Orientação Profissional & Carreira</option>
            </select>
          </div>

          {/* Modality (Online / Presencial) */}
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Modalidade de Atendimento:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setModality('Online')}
                className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer ${
                  modality === 'Online'
                    ? 'bg-sky-700 text-white border-sky-700 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>💻 Online (Vídeo)</span>
              </button>

              <button
                type="button"
                onClick={() => setModality('Presencial (Alípio de Melo - Belo Horizonte)')}
                className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 cursor-pointer ${
                  modality.startsWith('Presencial')
                    ? 'bg-sky-700 text-white border-sky-700 shadow-xs'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>🏥 Presencial (Alípio de Melo/BH)</span>
              </button>
            </div>
          </div>

          {/* Time Slot */}
          <div>
            <label htmlFor="time-select" className="block text-xs font-bold text-slate-700 mb-1">
              Preferência de Turno:
            </label>
            <select
              id="time-select"
              value={preferredTime}
              onChange={(e) => setPreferredTime(e.target.value)}
              className="w-full p-3 bg-sky-50/40 border border-sky-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-sky-600 focus:outline-none"
            >
              <option value="Manhã (8h às 12h)">Manhã (8h às 12h)</option>
              <option value="Tarde (13h às 18h)">Tarde (13h às 18h)</option>
              <option value="Noite (18h às 21h)">Noite (18h às 21h)</option>
            </select>
          </div>

          {/* Main Goal */}
          <div>
            <label htmlFor="goal-select" className="block text-xs font-bold text-slate-700 mb-1">
              Motivo ou Queixa Principal (Opcional):
            </label>
            <select
              id="goal-select"
              value={mainGoal}
              onChange={(e) => setMainGoal(e.target.value)}
              className="w-full p-3 bg-sky-50/40 border border-sky-200 rounded-xl text-slate-800 focus:ring-2 focus:ring-sky-600 focus:outline-none"
            >
              <option value="Tratar Ansiedade / Estresse">Tratar Ansiedade / Estresse</option>
              <option value="Depressão / Baixa Motivação">Depressão / Baixa Motivação</option>
              <option value="Conflitos em Relacionamento">Conflitos em Relacionamento</option>
              <option value="Burnout / Exaustão Profissional">Burnout / Exaustão Profissional</option>
              <option value="Autoconhecimento & Autoestima">Autoconhecimento & Autoestima</option>
              <option value="Luto ou Perda Recente">Luto ou Perda Recente</option>
              <option value="Outro assunto">Outro assunto</option>
            </select>
          </div>

          {/* Security Note */}
          <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-700 shrink-0" aria-hidden="true" />
            <span>Seus dados são confidenciais e protegidos pelo sigilo ético da psicologia.</span>
          </div>

          {/* Submit CTA */}
          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-slate-950" aria-hidden="true" />
              <span>Enviar Solicitação pelo WhatsApp</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
