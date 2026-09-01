import React from 'react';
import { 
  ArrowRight, 
  MessageSquare, 
  ShieldCheck, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Server, 
  Sparkles, 
  Award, 
  Cpu, 
  Clock 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Hero: React.FC = () => {
  const { currentPalette } = useTheme();
  const whatsappUrl = "https://wa.me/5585920015069?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20em%20solu%C3%A7%C3%B5es%20estrat%C3%A9gicas%20em%20TIC.";

  return (
    <section 
      id="hero" 
      className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: currentPalette.bgCanvas }}
    >
      {/* Dynamic Background Glows */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[130px] rounded-full pointer-events-none -z-10 transition-all duration-500" 
        style={{ backgroundColor: `${currentPalette.previewColor}18` }}
      />
      <div 
        className="absolute top-1/3 right-10 w-[400px] h-[300px] blur-[120px] rounded-full pointer-events-none -z-10 transition-all duration-500" 
        style={{ backgroundColor: `${currentPalette.accentColor}15` }}
      />

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none -z-10" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Top Badge */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold mb-6 shadow-sm"
              style={{
                backgroundColor: `${currentPalette.accentPrimary}15`,
                borderColor: currentPalette.borderAccent,
                color: currentPalette.accentPrimary
              }}
            >
              <span 
                className="flex h-2 w-2 rounded-full animate-pulse" 
                style={{ backgroundColor: currentPalette.accentPrimary }}
              />
              <span>João Mesquita Company &bull; Serviços Especializados de TIC</span>
              <span className="text-slate-500 font-normal hidden sm:inline">| B2B & B2C</span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.95rem] font-extrabold text-white tracking-tight leading-[1.15] mb-6 font-display">
              Soluções Estratégicas em{' '}
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentPalette.gradientText}`}>
                Tecnologia da Informação
              </span>{' '}
              e Comunicação (TIC)
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#94a3b8] font-normal leading-relaxed mb-8 max-w-2xl">
              Transforme seu negócio com desenvolvimento de software sob medida, consultoria especializada e suporte técnico de alta performance. Experiência sólida e inovação constante ao seu alcance.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-cta"
                className={`inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-base shadow-lg transition-all active:scale-[0.98] group cursor-pointer ${currentPalette.buttonClass}`}
              >
                <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Solicitar Orçamento via WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#servicos"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-slate-200 hover:text-white font-semibold text-base border transition-all"
                style={{
                  backgroundColor: currentPalette.bgCard,
                  borderColor: currentPalette.borderSubtle
                }}
              >
                <span>Conhecer Nossos Serviços</span>
              </a>
            </div>

            {/* Quick Guarantees / Value Pillars */}
            <div 
              className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 border-t w-full text-slate-400 text-xs sm:text-sm"
              style={{ borderColor: currentPalette.borderSubtle }}
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: currentPalette.accentPrimary }} />
                <span>Foco em Segurança & LGPD</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" style={{ color: currentPalette.accentSecondary }} />
                <span>Gestão Ágil de Projetos</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Clock className="w-4 h-4 shrink-0" style={{ color: currentPalette.accentPrimary }} />
                <span>Atendimento Ceará & Brasil</span>
              </div>
            </div>

          </div>

          {/* Visual Showcase Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div 
              className="relative rounded-2xl p-1 border shadow-2xl shadow-black/40 transition-all duration-300"
              style={{
                backgroundColor: currentPalette.bgCard,
                borderColor: currentPalette.borderAccent
              }}
            >
              
              {/* Window Header */}
              <div 
                className="rounded-xl p-4 sm:p-5"
                style={{ backgroundColor: currentPalette.bgCanvas }}
              >
                <div 
                  className="flex items-center justify-between border-b pb-3 mb-4"
                  style={{ borderColor: currentPalette.borderSubtle }}
                >
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="text-xs font-mono text-[#94a3b8] flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5" style={{ color: currentPalette.accentPrimary }} />
                    <span>joaomesquita.com.br/hub-tic</span>
                  </div>
                  <span 
                    className="text-[10px] px-2 py-0.5 rounded border font-mono font-semibold"
                    style={{
                      backgroundColor: `${currentPalette.accentPrimary}15`,
                      borderColor: currentPalette.borderAccent,
                      color: currentPalette.accentPrimary
                    }}
                  >
                    ONLINE
                  </span>
                </div>

                {/* Capability Matrix Preview */}
                <div className="space-y-3">
                  <div 
                    className="p-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: currentPalette.bgCard,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white flex items-center gap-2">
                        <Code2 className="w-4 h-4" style={{ color: currentPalette.accentPrimary }} />
                        Software Sob Encomenda
                      </span>
                      <span 
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
                        style={{
                          backgroundColor: currentPalette.bgCanvas,
                          borderColor: currentPalette.borderSubtle,
                          color: currentPalette.accentSecondary
                        }}
                      >
                        CNAE 6202-3/00
                      </span>
                    </div>
                    <p className="text-[11px] text-[#94a3b8]">
                      Sistemas Web, Mobile, APIs REST e automação operacional.
                    </p>
                  </div>

                  <div 
                    className="p-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: currentPalette.bgCard,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" style={{ color: currentPalette.accentSecondary }} />
                        Consultoria TI & Segurança
                      </span>
                      <span 
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
                        style={{
                          backgroundColor: currentPalette.bgCanvas,
                          borderColor: currentPalette.borderSubtle,
                          color: currentPalette.accentSecondary
                        }}
                      >
                        CNAE 6204-0/00
                      </span>
                    </div>
                    <p className="text-[11px] text-[#94a3b8]">
                      Auditoria de vulnerabilidades, compliance LGPD e governança.
                    </p>
                  </div>

                  <div 
                    className="p-3 rounded-lg border transition-colors"
                    style={{
                      backgroundColor: currentPalette.bgCard,
                      borderColor: currentPalette.borderSubtle
                    }}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-white flex items-center gap-2">
                        <Server className="w-4 h-4" style={{ color: currentPalette.accentPrimary }} />
                        Hospedagem, Dados & Suporte
                      </span>
                      <span 
                        className="text-[10px] font-mono px-1.5 py-0.5 rounded border"
                        style={{
                          backgroundColor: currentPalette.bgCanvas,
                          borderColor: currentPalette.borderSubtle,
                          color: currentPalette.accentPrimary
                        }}
                      >
                        CNAE 6209 / 6311
                      </span>
                    </div>
                    <p className="text-[11px] text-[#94a3b8]">
                      Ambientes em nuvem com 99.9% uptime e help desk proativo.
                    </p>
                  </div>
                </div>

                {/* Direct Contact Banner Inside Card */}
                <div 
                  className="mt-4 pt-3 border-t flex items-center justify-between text-xs"
                  style={{ borderColor: currentPalette.borderSubtle }}
                >
                  <div className="flex flex-col">
                    <span className="text-[11px] text-[#94a3b8]">Central de Atendimento</span>
                    <span className="font-semibold text-white font-mono">(85) 92001-5069</span>
                  </div>
                  <a
                    href="#orcamento"
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-sm ${currentPalette.buttonClass}`}
                  >
                    Simular Projeto &rarr;
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

