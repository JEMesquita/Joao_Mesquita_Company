import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  MessageSquare, 
  Send, 
  Sparkles, 
  Sliders, 
  Layers, 
  ShieldCheck, 
  Clock, 
  Building2 
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';

export const ProjectCalculator: React.FC = () => {
  const { currentPalette } = useTheme();
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);
  const [companySize, setCompanySize] = useState('pequena');
  const [urgency, setUrgency] = useState('30dias');
  const [hasLGPDRequirement, setHasLGPDRequirement] = useState(true);

  const selectedService = servicesData.find(s => s.id === selectedServiceId) || servicesData[0];

  const sizeLabels: Record<string, string> = {
    micro: 'Microempresa / Autônomo (1-5 usuários)',
    pequena: 'Pequena Empresa (6-20 usuários)',
    media: 'Média Empresa (21-100 usuários)',
    corporativo: 'Corporativo / Grande Porte (100+ usuários)'
  };

  const urgencyLabels: Record<string, string> = {
    imediato: 'Crítico / Imediato (Início em até 7 dias)',
    '30dias': 'Próximos 30 dias (Planejamento padrão)',
    estrategico: 'Planejamento Estratégico para o próximo trimestre'
  };

  const generateWhatsAppMessage = () => {
    const text = 
`*SOLICITAÇÃO DE ORÇAMENTO PERSONALIZADO - JOÃO MESQUITA TIC*
---------------------------------------
📌 *Serviço Selecionado:* ${selectedService.title} (${selectedService.cnaeCode})
🏢 *Porte da Organização:* ${sizeLabels[companySize]}
⏱️ *Prazo Desejado:* ${urgencyLabels[urgency]}
🔒 *Requisito de Segurança / LGPD:* ${hasLGPDRequirement ? 'Sim, prioritário' : 'Padrão'}

Gostaria de agendar uma conversa técnica para alinhamento de escopo e proposta comercial.`;

    return `https://wa.me/5585920015069?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="orcamento" 
      className="py-20 md:py-28 border-t transition-colors duration-300 relative"
      style={{
        backgroundColor: currentPalette.bgCanvas,
        borderColor: currentPalette.borderSubtle
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div 
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs font-semibold mb-4"
            style={{
              backgroundColor: `${currentPalette.accentPrimary}15`,
              borderColor: currentPalette.borderAccent,
              color: currentPalette.accentPrimary
            }}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Interativo de Escopo</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
            Monte a Estratégia de TIC Ideal para sua Empresa
          </h2>

          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            Selecione suas necessidades e envie um briefing pré-formatado diretamente para o nosso especialista via WhatsApp ou e-mail.
          </p>
        </div>

        {/* Interactive Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Controls (7 cols) */}
          <div 
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl border space-y-6 shadow-xl"
            style={{
              backgroundColor: currentPalette.bgCard,
              borderColor: currentPalette.borderSubtle
            }}
          >
            
            {/* 1. Escolha do Serviço Principal */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                1. Qual serviço principal sua empresa necessita?
              </label>
              <div className="space-y-2">
                {servicesData.map((s) => {
                  const isSelected = selectedServiceId === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedServiceId(s.id)}
                      className="w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer"
                      style={{
                        backgroundColor: isSelected ? `${currentPalette.accentPrimary}18` : currentPalette.bgCanvas,
                        borderColor: isSelected ? currentPalette.accentPrimary : currentPalette.borderSubtle,
                        color: isSelected ? '#ffffff' : '#94a3b8'
                      }}
                    >
                      <div className="flex flex-col">
                        <span className="text-xs sm:text-sm font-semibold font-display text-white">
                          {s.title}
                        </span>
                        <span className="text-[11px] font-mono" style={{ color: currentPalette.accentPrimary }}>
                          {s.cnaeCode}
                        </span>
                      </div>
                      {isSelected && (
                        <Check className="w-5 h-5 shrink-0" style={{ color: currentPalette.accentPrimary }} />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Porte da Empresa */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                2. Porte da Organização / Número de Usuários
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  { id: 'micro', label: 'Microempresa (1-5 users)' },
                  { id: 'pequena', label: 'Pequena (6-20 users)' },
                  { id: 'media', label: 'Média (21-100 users)' },
                  { id: 'corporativo', label: 'Corporativo (100+ users)' }
                ].map((item) => {
                  const isSelected = companySize === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setCompanySize(item.id)}
                      className="p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all text-left cursor-pointer"
                      style={{
                        backgroundColor: isSelected ? `${currentPalette.accentPrimary}18` : currentPalette.bgCanvas,
                        borderColor: isSelected ? currentPalette.accentPrimary : currentPalette.borderSubtle,
                        color: isSelected ? '#ffffff' : '#94a3b8'
                      }}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Prazo / Urgência */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-3">
                3. Expectativa de Início
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  { id: 'imediato', label: 'Urgente (< 7 dias)' },
                  { id: '30dias', label: 'Em 30 dias' },
                  { id: 'estrategico', label: 'Próximo Trimestre' }
                ].map((u) => {
                  const isSelected = urgency === u.id;
                  return (
                    <button
                      key={u.id}
                      type="button"
                      onClick={() => setUrgency(u.id)}
                      className="p-2.5 rounded-xl border text-xs font-medium transition-all text-center cursor-pointer"
                      style={{
                        backgroundColor: isSelected ? `${currentPalette.accentPrimary}18` : currentPalette.bgCanvas,
                        borderColor: isSelected ? currentPalette.accentPrimary : currentPalette.borderSubtle,
                        color: isSelected ? '#ffffff' : '#94a3b8'
                      }}
                    >
                      {u.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Segurança / LGPD toggle */}
            <div className="pt-2">
              <label 
                className="flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-colors"
                style={{
                  backgroundColor: currentPalette.bgCanvas,
                  borderColor: currentPalette.borderSubtle
                }}
              >
                <input
                  type="checkbox"
                  checked={hasLGPDRequirement}
                  onChange={(e) => setHasLGPDRequirement(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 bg-slate-800 border-slate-700 focus:ring-blue-500"
                />
                <div className="text-xs">
                  <span className="font-semibold text-white block">
                    Incluir foco especial em Segurança da Informação & Compliance LGPD
                  </span>
                  <span className="text-[#94a3b8]">
                    Recomendado para proteção de dados sensíveis e conformidade jurídica.
                  </span>
                </div>
              </label>
            </div>

          </div>

          {/* Right Column: Briefing Summary & Direct WhatsApp Submission (5 cols) */}
          <div 
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border shadow-2xl space-y-6"
            style={{
              backgroundColor: currentPalette.bgCard,
              borderColor: currentPalette.borderAccent
            }}
          >
            
            <div className="border-b pb-4" style={{ borderColor: currentPalette.borderSubtle }}>
              <span className="text-[11px] font-mono uppercase tracking-wider font-semibold" style={{ color: currentPalette.accentPrimary }}>
                Resumo da Demanda
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-1">
                Proposta Personalizada
              </h3>
            </div>

            <div className="space-y-3.5 text-xs text-slate-300">
              <div 
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: currentPalette.bgCanvas,
                  borderColor: currentPalette.borderSubtle
                }}
              >
                <span className="text-[10px] uppercase font-bold text-slate-500 block mb-1">
                  Serviço Recomendado
                </span>
                <span className="text-sm font-semibold text-white font-display block">
                  {selectedService.title}
                </span>
                <span className="text-[11px] font-mono" style={{ color: currentPalette.accentPrimary }}>
                  {selectedService.cnaeCode}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div 
                  className="p-3 rounded-lg border"
                  style={{
                    backgroundColor: currentPalette.bgCanvas,
                    borderColor: currentPalette.borderSubtle
                  }}
                >
                  <span className="text-[10px] text-slate-500 uppercase block">Porte</span>
                  <span className="font-medium text-slate-200">{companySize.toUpperCase()}</span>
                </div>
                <div 
                  className="p-3 rounded-lg border"
                  style={{
                    backgroundColor: currentPalette.bgCanvas,
                    borderColor: currentPalette.borderSubtle
                  }}
                >
                  <span className="text-[10px] text-slate-500 uppercase block">Prazo</span>
                  <span className="font-medium text-slate-200">{urgency === 'imediato' ? 'Imediato' : 'Planejado'}</span>
                </div>
              </div>

              <div 
                className="p-3.5 rounded-xl border"
                style={{
                  backgroundColor: `${currentPalette.accentPrimary}12`,
                  borderColor: currentPalette.borderAccent
                }}
              >
                <div className="flex items-center gap-2 font-semibold mb-1" style={{ color: currentPalette.accentPrimary }}>
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Benefício Garantido</span>
                </div>
                <p className="text-[11px] text-slate-300">
                  Diagnóstico inicial gratuito com o especialista João Mesquita para validação técnica de requisitos.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Action with prefilled message */}
            <div className="pt-2">
              <a
                href={generateWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                id="simulator-whatsapp-submit"
                className={`flex items-center justify-center gap-2.5 w-full py-4 rounded-xl font-bold text-sm shadow-lg transition-all active:scale-95 cursor-pointer ${currentPalette.buttonClass}`}
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enviar Demanda via WhatsApp</span>
              </a>
              <p className="text-center text-[11px] text-[#94a3b8] mt-2">
                Atendimento rápido pelo número oficial (85) 92001-5069
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
