import React from 'react';
import { 
  Kanban, 
  ShieldCheck, 
  Users, 
  GraduationCap, 
  CheckCircle, 
  Zap, 
  Sparkles,
  Lock,
  CalendarCheck,
  Headphones
} from 'lucide-react';
import { differentialsData } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';

export const DifferentialsSection: React.FC = () => {
  const { currentPalette } = useTheme();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Kanban':
        return <Kanban className="w-6 h-6" style={{ color: currentPalette.accentPrimary }} />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6" style={{ color: currentPalette.accentSecondary }} />;
      case 'Users':
        return <Users className="w-6 h-6" style={{ color: currentPalette.accentPrimary }} />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6" style={{ color: currentPalette.accentSecondary }} />;
      default:
        return <CheckCircle className="w-6 h-6" style={{ color: currentPalette.accentPrimary }} />;
    }
  };

  const keyStrengths = [
    {
      label: 'Pontualidade de Entrega',
      val: '99%',
      detail: 'Sprints organizadas e controle rigoroso de cronograma'
    },
    {
      label: 'Proteção de Dados',
      val: '100%',
      detail: 'Conformidade integral com LGPD e boas práticas OWASP'
    },
    {
      label: 'Atendimento Consultivo',
      val: 'Direto',
      detail: 'Comunicação contínua com o especialista responsável'
    },
    {
      label: 'Suporte & Sustentação',
      val: 'SLA Ativo',
      detail: 'Planos de continuidade operacional sem surpresas'
    }
  ];

  return (
    <section 
      id="diferenciais" 
      className="py-20 md:py-28 border-y transition-colors duration-300 relative"
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
            <Sparkles className="w-3.5 h-3.5" />
            <span>Por que escolher a João Mesquita TIC</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
            Diferenciais Competitivos que Geram Valor Real
          </h2>

          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            Eliminamos os riscos comuns de projetos de tecnologia combinando rigor metodológico, foco inegociável em segurança e flexibilidade de atendimento.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {differentialsData.map((diff, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border transition-all hover:-translate-y-1 duration-200 flex flex-col justify-between group shadow-xl"
              style={{
                backgroundColor: currentPalette.bgCard,
                borderColor: currentPalette.borderSubtle
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="p-3 rounded-xl border group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    {getIcon(diff.icon)}
                  </div>
                  <span 
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderAccent,
                      color: currentPalette.accentPrimary
                    }}
                  >
                    {diff.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-display mb-2.5">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94a3b8] leading-relaxed">
                  {diff.description}
                </p>
              </div>

              <div 
                className="mt-6 pt-4 border-t flex items-center gap-1.5 text-xs font-medium"
                style={{
                  borderColor: currentPalette.borderSubtle,
                  color: currentPalette.accentPrimary
                }}
              >
                <CheckCircle className="w-4 h-4" />
                <span>Garantia de Qualidade</span>
              </div>
            </div>
          ))}
        </div>

        {/* Metrics Row */}
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl border shadow-xl"
          style={{
            backgroundColor: currentPalette.bgCard,
            borderColor: currentPalette.borderSubtle
          }}
        >
          {keyStrengths.map((item, i) => (
            <div 
              key={i} 
              className="text-center p-3 border-r last:border-r-0"
              style={{ borderColor: currentPalette.borderSubtle }}
            >
              <span 
                className={`text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${currentPalette.gradientText} font-display block mb-1`}
              >
                {item.val}
              </span>
              <h4 className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                {item.label}
              </h4>
              <p className="text-[11px] text-[#94a3b8]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
