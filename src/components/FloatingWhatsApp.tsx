import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const FloatingWhatsApp: React.FC = () => {
  const { currentPalette } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const phone = '5585920015069';

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = customMsg.trim() || 'Olá João Mesquita! Gostaria de tirar uma dúvida sobre serviços de TIC para minha empresa.';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  const handleDirectClick = () => {
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent('Olá João Mesquita! Gostaria de solicitar um orçamento para serviços em TIC.')}`,
      '_blank'
    );
  };

  return (
    <div 
      id="floating-whatsapp-widget"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end"
    >
      {/* Popover Bubble */}
      {isOpen && (
        <div 
          className="mb-3 w-80 sm:w-88 rounded-2xl border shadow-2xl p-4 text-[#94a3b8] animate-in fade-in slide-in-from-bottom-3 duration-200"
          style={{
            backgroundColor: currentPalette.bgCard,
            borderColor: currentPalette.borderSubtle
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-3 mb-3" style={{ borderColor: currentPalette.borderSubtle }}>
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div 
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs font-display shadow"
                  style={{
                    background: `linear-gradient(135deg, ${currentPalette.accentPrimary}, ${currentPalette.accentSecondary})`
                  }}
                >
                  JM
                </div>
                <span 
                  className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border-2" 
                  style={{ 
                    backgroundColor: currentPalette.accentPrimary,
                    borderColor: currentPalette.bgCard 
                  }} 
                />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white font-display">
                  João Mesquita TIC
                </h4>
                <p className="text-[10px] font-medium" style={{ color: currentPalette.accentPrimary }}>
                  Online &bull; Atendimento Comercial
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#94a3b8] hover:text-white rounded-md transition-colors cursor-pointer"
              aria-label="Fechar popover WhatsApp"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Greeting message */}
          <div 
            className="p-3 rounded-xl border mb-3 text-xs text-slate-300"
            style={{
              backgroundColor: currentPalette.bgCanvas,
              borderColor: currentPalette.borderSubtle
            }}
          >
            <p className="mb-1">
              👋 <strong>Olá! Como podemos ajudar sua empresa hoje?</strong>
            </p>
            <p className="text-[11px] text-[#94a3b8]">
              Desenvolvimento de Software, Consultoria em TI, Suporte ou Nuvem.
            </p>
          </div>

          {/* Input form */}
          <form onSubmit={handleSend} className="space-y-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              placeholder="Digite sua mensagem rápida..."
              className="w-full px-3 py-2 text-xs rounded-xl border text-white placeholder:text-slate-500 focus:outline-none"
              style={{
                backgroundColor: currentPalette.bgCanvas,
                borderColor: currentPalette.borderSubtle
              }}
            />
            <div className="flex items-center gap-2">
              <button
                type="submit"
                className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-white text-xs font-semibold shadow transition-all cursor-pointer ${currentPalette.buttonClass}`}
              >
                <Send className="w-3.5 h-3.5" />
                <span>Iniciar Conversa</span>
              </button>
              <button
                type="button"
                onClick={handleDirectClick}
                className="py-2 px-3 rounded-xl border text-slate-300 text-xs font-medium transition-colors cursor-pointer"
                style={{
                  backgroundColor: currentPalette.bgCanvas,
                  borderColor: currentPalette.borderSubtle
                }}
                title="Abrir WhatsApp direto"
              >
                Abrir Direto
              </button>
            </div>
          </form>

          <div className="text-center mt-2">
            <span className="text-[10px] text-[#94a3b8] font-mono">
              (85) 92001-5069
            </span>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        {/* Pulsing Aura */}
        <span 
          className="absolute -inset-1 rounded-full blur-sm transition-all animate-pulse"
          style={{ backgroundColor: `${currentPalette.accentPrimary}40` }}
        />
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="whatsapp-floating-trigger"
          aria-label="Falar no WhatsApp com João Mesquita"
          className={`relative flex items-center gap-2 px-4 py-3.5 rounded-full font-bold text-sm shadow-xl transition-all active:scale-95 cursor-pointer ${currentPalette.buttonClass}`}
        >
          <MessageSquare className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline font-sans">WhatsApp (85) 92001-5069</span>
        </button>
      </div>

    </div>
  );
};
