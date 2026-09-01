import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Briefcase, 
  Award, 
  ExternalLink, 
  CheckCircle,
  FileText,
  Binary,
  Layers,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const AboutExpert: React.FC = () => {
  const { currentPalette } = useTheme();

  const credentials = [
    {
      title: 'Ciência da Computação',
      type: 'Graduação de Base',
      description: 'Fundamentos sólidos em arquitetura de computadores, algoritmos de alta eficiência, estruturas de dados complexas e engenharia de software.',
      icon: Binary,
      badge: 'Bacharelado'
    },
    {
      title: 'Gestão de Projetos',
      type: 'Especialização Executiva',
      description: 'Planejamento ágil (Scrum/Kanban) e preditivo (PMBOK), controle orçamentário, mitigação de riscos e garantia rigorosa de prazos de entrega.',
      icon: Briefcase,
      badge: 'Especialização'
    },
    {
      title: 'Tecnologia da Informação',
      type: 'Especialização em TIC',
      description: 'Governança corporativa de TI, transformação digital de processos de negócio, arquitetura em nuvem e infraestrutura escalável.',
      icon: Layers,
      badge: 'Especialização'
    },
    {
      title: 'Segurança da Informação',
      type: 'Foco Contínuo & Compliance',
      description: 'Proteção de dados, conformidade integral com a LGPD, segurança defensiva, análise de vulnerabilidades e arquiteturas seguras.',
      icon: ShieldCheck,
      badge: 'Foco Contínuo'
    }
  ];

  return (
    <section 
      id="sobre" 
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
            <Award className="w-3.5 h-3.5" />
            <span>Sobre Nós &bull; Liderança Técnica e Especialista</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
            Credibilidade Técnica e Compromisso com Resultados
          </h2>
          
          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            Combinamos conhecimento acadêmico de ponta com a prática real de mercado para entregar soluções tecnológicas seguras, escaláveis e alinhadas aos objetivos estratégicos do seu negócio.
          </p>
        </div>

        {/* Main Profile Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Visual Presentation / Expert Card (5 cols) */}
          <div className="lg:col-span-5">
            <div 
              className="relative rounded-2xl p-6 sm:p-8 border shadow-2xl overflow-hidden group transition-all duration-300"
              style={{
                backgroundColor: currentPalette.bgCard,
                borderColor: currentPalette.borderAccent
              }}
            >
              
              <div 
                className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none"
                style={{ backgroundColor: `${currentPalette.accentPrimary}15` }}
              />

              {/* Avatar placeholder / professional badge */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-2xl p-0.5 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${currentPalette.previewColor}, ${currentPalette.accentColor})`
                  }}
                >
                  <div 
                    className="w-full h-full rounded-[14px] flex items-center justify-center text-xl font-bold font-display text-white"
                    style={{ backgroundColor: currentPalette.bgCanvas }}
                  >
                    JM
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white font-display">
                    João Mesquita
                  </h3>
                  <p className="text-xs font-medium" style={{ color: currentPalette.accentPrimary }}>
                    Especialista em TIC & Fundador
                  </p>
                  <p className="text-[11px] text-[#94a3b8]">
                    Ceará, Brasil (Atendimento Nacional)
                  </p>
                </div>
              </div>

              {/* Verified academic statement */}
              <div 
                className="p-4 rounded-xl border mb-6 text-sm text-slate-300 italic leading-relaxed"
                style={{
                  backgroundColor: currentPalette.bgCanvas,
                  borderColor: currentPalette.borderSubtle
                }}
              >
                &ldquo;Por trás da <strong>João Mesquita TIC</strong>, há um profissional dedicado com graduação em Ciência da Computação e especializações em Gestão de Projetos e Tecnologia da Informação, com foco contínuo em Segurança da Informação. Nosso compromisso é com a qualidade de engenharia e a pontualidade na entrega.&rdquo;
              </div>

              {/* Badges and Links */}
              <div className="space-y-2.5">
                <a
                  href="https://lattes.cnpq.br/3630898583941744"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-lattes-link"
                  className="flex items-center justify-between p-3 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-semibold transition-all group/link"
                >
                  <span className="flex items-center gap-2">
                    <i className="fas fa-graduation-cap text-base"></i>
                    Currículo Lattes (CNPq Oficial)
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>

                <a
                  href="https://www.linkedin.com/in/joao-mesquita-30560b29/"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="about-linkedin-link"
                  className="flex items-center justify-between p-3 rounded-lg border text-xs font-semibold transition-all group/link"
                  style={{
                    backgroundColor: `${currentPalette.accentPrimary}15`,
                    borderColor: currentPalette.borderAccent,
                    color: currentPalette.accentPrimary
                  }}
                >
                  <span className="flex items-center gap-2">
                    <i className="fab fa-linkedin text-base"></i>
                    Perfil Profissional no LinkedIn
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          </div>

          {/* Academic & Professional Pillars (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {credentials.map((cred, idx) => {
              const IconComp = cred.icon;
              return (
                <div 
                  key={idx}
                  className="p-5 rounded-xl border transition-all hover:-translate-y-1 duration-200"
                  style={{
                    backgroundColor: currentPalette.bgCard,
                    borderColor: currentPalette.borderSubtle
                  }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div 
                      className="p-2.5 rounded-lg border"
                      style={{
                        backgroundColor: `${currentPalette.accentPrimary}15`,
                        borderColor: currentPalette.borderAccent,
                        color: currentPalette.accentPrimary
                      }}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span 
                      className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full text-slate-300 font-semibold border"
                      style={{
                        backgroundColor: currentPalette.bgCanvas,
                        borderColor: currentPalette.borderSubtle
                      }}
                    >
                      {cred.badge}
                    </span>
                  </div>
                  
                  <h4 className="text-base font-bold text-white font-display mb-1">
                    {cred.title}
                  </h4>
                  <p className="text-xs font-medium mb-2" style={{ color: currentPalette.accentPrimary }}>
                    {cred.type}
                  </p>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">
                    {cred.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Trust Banner */}
        <div 
          className="p-6 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl"
          style={{
            backgroundColor: currentPalette.bgCard,
            borderColor: currentPalette.borderAccent
          }}
        >
          <div className="flex items-center gap-4 text-left">
            <div 
              className="p-3 rounded-xl border shrink-0"
              style={{
                backgroundColor: `${currentPalette.accentPrimary}20`,
                borderColor: currentPalette.borderAccent,
                color: currentPalette.accentPrimary
              }}
            >
              <ShieldCheck className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white font-display">
                Garantia de Qualidade & Estabilidade Operacional
              </h4>
              <p className="text-xs text-[#94a3b8] mt-0.5">
                Projetos desenvolvidos com metodologias ágeis, testes contínuos e suporte técnico pós-entrega.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5585920015069?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostaria%20de%20agendar%20uma%20conversa%20t%C3%A9cnica%20sobre%20as%20necessidades%20da%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer ${currentPalette.buttonClass}`}
          >
            Agendar Reunião Técnica
          </a>
        </div>

      </div>
    </section>
  );
};
