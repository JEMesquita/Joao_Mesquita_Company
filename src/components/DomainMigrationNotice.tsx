import React, { useState } from 'react';
import { Globe, ArrowRight, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const DomainMigrationNotice: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const { currentPalette } = useTheme();

  if (!visible) return null;

  return (
    <div 
      id="domain-migration-bar"
      className="text-[#94a3b8] border-b text-xs sm:text-sm py-2 px-4 relative z-50 shadow-inner transition-colors duration-300"
      style={{
        backgroundColor: currentPalette.bgCard,
        borderColor: currentPalette.borderSubtle
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span 
            className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full font-semibold border text-xs"
            style={{
              backgroundColor: `${currentPalette.accentPrimary}15`,
              borderColor: currentPalette.borderAccent,
              color: currentPalette.accentPrimary
            }}
          >
            <Globe className="w-3.5 h-3.5" style={{ color: currentPalette.accentPrimary }} />
            Novo Domínio Comercial
          </span>
          <span className="text-[#94a3b8]">
            Você está acessando a nova plataforma empresarial <strong className="text-white">www.joaomesquita.com.br</strong> (evolução de <em>joaomesquita.net.br</em> com foco integral em serviços de TIC).
          </span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#servicos"
            className="hidden md:inline-flex items-center gap-1 font-medium underline underline-offset-2 transition-colors"
            style={{ color: currentPalette.accentPrimary }}
          >
            Ver catálogo de serviços <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={() => setVisible(false)}
            aria-label="Fechar aviso"
            className="p-1 text-[#94a3b8] hover:text-white rounded-md transition-colors cursor-pointer"
            style={{ backgroundColor: 'transparent' }}
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
