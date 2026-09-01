import React, { useState } from 'react';
import { 
  Briefcase, 
  Star, 
  Quote, 
  CheckCircle2, 
  ArrowUpRight, 
  TrendingUp,
  Building2,
  ShieldCheck
} from 'lucide-react';
import { caseStudiesData, testimonialsData } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';

export const CasesAndTestimonials: React.FC = () => {
  const [activeCase, setActiveCase] = useState(caseStudiesData[0].id);
  const { currentPalette } = useTheme();

  const currentCase = caseStudiesData.find(c => c.id === activeCase) || caseStudiesData[0];

  return (
    <section 
      id="cases" 
      className="py-20 md:py-28 transition-colors duration-300 relative"
      style={{ backgroundColor: currentPalette.bgCanvas }}
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
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Resultados Comprovados & Prova Social</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
            Cases de Sucesso e Avaliações de Clientes
          </h2>

          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            Veja como nossas soluções estratégicas em TIC geram impacto real na eficiência operacional e segurança de organizações parceiras.
          </p>
        </div>

        {/* Interactive Case Studies Tabs */}
        <div className="mb-20">
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {caseStudiesData.map((cs) => {
              const isActive = activeCase === cs.id;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActiveCase(cs.id)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap border cursor-pointer ${
                    isActive ? 'shadow-md font-bold' : 'hover:text-white'
                  }`}
                  style={{
                    backgroundColor: isActive ? currentPalette.accentPrimary : currentPalette.bgCard,
                    borderColor: isActive ? currentPalette.borderAccent : currentPalette.borderSubtle,
                    color: isActive ? '#ffffff' : '#94a3b8',
                  }}
                >
                  {cs.clientCategory}
                </button>
              );
            })}
          </div>

          {/* Active Case Details Card */}
          <div 
            className="rounded-2xl border p-6 sm:p-10 shadow-2xl"
            style={{
              backgroundColor: currentPalette.bgCard,
              borderColor: currentPalette.borderAccent
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span 
                      className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${currentPalette.accentPrimary}15`,
                        borderColor: currentPalette.borderAccent,
                        color: currentPalette.accentPrimary
                      }}
                    >
                      {currentCase.clientCategory}
                    </span>
                    {currentCase.tags.map((tag, idx) => (
                      <span 
                        key={idx} 
                        className="text-[10px] font-mono px-2 py-0.5 rounded text-[#94a3b8] border"
                        style={{
                          backgroundColor: currentPalette.bgCanvas,
                          borderColor: currentPalette.borderSubtle
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                    {currentCase.title}
                  </h3>
                </div>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div 
                    className="p-4 rounded-xl border"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    <h4 className="font-semibold text-rose-400 mb-1 flex items-center gap-1.5 font-display text-xs uppercase tracking-wider">
                      <span>O Desafio</span>
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {currentCase.challenge}
                    </p>
                  </div>

                  <div 
                    className="p-4 rounded-xl border"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    <h4 className="font-semibold mb-1 flex items-center gap-1.5 font-display text-xs uppercase tracking-wider" style={{ color: currentPalette.accentPrimary }}>
                      <span>Solução Estratégica Aplicada</span>
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>

                  <div 
                    className="p-4 rounded-xl border"
                    style={{
                      backgroundColor: `${currentPalette.accentPrimary}10`,
                      borderColor: currentPalette.borderAccent
                    }}
                  >
                    <h4 className="font-semibold mb-1 flex items-center gap-1.5 font-display text-xs uppercase tracking-wider" style={{ color: currentPalette.accentSecondary }}>
                      <span>Resultado Obtido</span>
                    </h4>
                    <p className="text-slate-200 leading-relaxed">
                      {currentCase.result}
                    </p>
                  </div>
                </div>
              </div>

              {/* Metrics Column */}
              <div 
                className="lg:col-span-5 rounded-xl p-6 border flex flex-col justify-between h-full space-y-6"
                style={{
                  backgroundColor: currentPalette.bgCanvas,
                  borderColor: currentPalette.borderSubtle
                }}
              >
                <h4 
                  className="text-xs font-bold text-[#94a3b8] uppercase tracking-wider font-display border-b pb-3"
                  style={{ borderColor: currentPalette.borderSubtle }}
                >
                  Indicadores de Impacto (KPIs)
                </h4>

                <div className="space-y-4">
                  {currentCase.metrics.map((metric, mIdx) => (
                    <div 
                      key={mIdx} 
                      className="p-3 rounded-lg border"
                      style={{
                        backgroundColor: currentPalette.bgCard,
                        borderColor: currentPalette.borderSubtle
                      }}
                    >
                      <span 
                        className={`text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r ${currentPalette.gradientText} font-display block`}
                      >
                        {metric.value}
                      </span>
                      <span className="text-xs text-[#94a3b8] font-medium">
                        {metric.label}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/5585920015069?text=Ol%C3%A1%20Jo%C3%A3o!%20Vi%20o%20case%20de%20${encodeURIComponent(currentCase.clientCategory)}%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20similar.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-xs transition-all shadow-md cursor-pointer ${currentPalette.buttonClass}`}
                >
                  <span>Quero um resultado similar na minha empresa</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              O que dizem os gestores atendidos
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] mt-1">
              Feedback real de quem confia na expertise da João Mesquita TIC.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl border flex flex-col justify-between transition-colors shadow-lg"
                style={{
                  backgroundColor: currentPalette.bgCard,
                  borderColor: currentPalette.borderSubtle
                }}
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 italic mb-6 leading-relaxed">
                    &ldquo;{item.content}&rdquo;
                  </p>
                </div>

                <div 
                  className="pt-4 border-t flex items-center gap-3"
                  style={{ borderColor: currentPalette.borderSubtle }}
                >
                  <div 
                    className="w-10 h-10 rounded-full border flex items-center justify-center text-sm font-bold font-display"
                    style={{
                      backgroundColor: currentPalette.bgCanvas,
                      borderColor: currentPalette.borderAccent,
                      color: currentPalette.accentPrimary
                    }}
                  >
                    {item.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-white font-display">
                      {item.name}
                    </h4>
                    <p className="text-[11px] font-medium" style={{ color: currentPalette.accentPrimary }}>
                      {item.role} &bull; {item.company}
                    </p>
                    <p className="text-[10px] text-slate-500">
                      {item.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
