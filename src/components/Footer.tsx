import React from 'react';
import { 
  Code2, 
  PhoneCall, 
  Mail, 
  Globe, 
  MapPin, 
  ShieldCheck, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { useTheme } from '../context/ThemeContext';

export const Footer: React.FC = () => {
  const { currentPalette } = useTheme();

  return (
    <footer 
      id="main-footer"
      className="border-t text-[#94a3b8] text-xs pt-16 pb-12 transition-colors duration-300"
      style={{
        backgroundColor: currentPalette.bgCanvas,
        borderColor: currentPalette.borderSubtle
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: currentPalette.borderSubtle }}>
          
          {/* Col 1: Brand & Summary (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div 
                className="w-10 h-10 rounded-xl p-0.5 shadow-md"
                style={{
                  background: `linear-gradient(135deg, ${currentPalette.accentPrimary}, ${currentPalette.accentSecondary})`
                }}
              >
                <div 
                  className="w-full h-full rounded-[10px] flex items-center justify-center"
                  style={{ backgroundColor: currentPalette.bgCanvas }}
                >
                  <Code2 className="w-5 h-5" style={{ color: currentPalette.accentPrimary }} />
                </div>
              </div>
              <div>
                <span className="text-lg font-bold text-white tracking-tight font-display block">
                  JOÃO MESQUITA TIC
                </span>
                <span className="text-[11px] font-mono" style={{ color: currentPalette.accentPrimary }}>
                  Soluções em Tecnologia & Software
                </span>
              </div>
            </div>

            <p className="text-[#94a3b8] text-xs leading-relaxed max-w-sm">
              Empresa especializada em soluções completas de Tecnologia da Informação e Comunicação. Desenvolvimento de software sob encomenda, consultoria estratégica em TI, suporte técnico e gestão em nuvem.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a 
                href="https://www.linkedin.com/in/joao-mesquita-30560b29/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all border" 
                style={{
                  backgroundColor: currentPalette.bgCard,
                  borderColor: currentPalette.borderSubtle
                }}
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a 
                href="https://www.facebook.com/JEMesquita" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all border" 
                style={{
                  backgroundColor: currentPalette.bgCard,
                  borderColor: currentPalette.borderSubtle
                }}
                title="Facebook"
              >
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a 
                href="https://www.instagram.com/esmerinomesquita/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all border" 
                style={{
                  backgroundColor: currentPalette.bgCard,
                  borderColor: currentPalette.borderSubtle
                }}
                title="Instagram"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a 
                href="mailto:esmerinomesquita@gmail.com" 
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all border" 
                style={{
                  backgroundColor: currentPalette.bgCard,
                  borderColor: currentPalette.borderSubtle
                }}
                title="E-mail"
              >
                <i className="fas fa-envelope text-sm"></i>
              </a>
              <a 
                href="https://lattes.cnpq.br/3630898583941744" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-300 hover:text-white transition-all border" 
                style={{
                  backgroundColor: currentPalette.bgCard,
                  borderColor: currentPalette.borderSubtle
                }}
                title="Currículo Lattes CNPq"
              >
                <i className="fas fa-graduation-cap text-sm"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Services / CNAEs (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Nossos Serviços & CNAEs Oficiais
            </h4>
            <ul className="space-y-2">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <a 
                    href="#servicos" 
                    className="flex items-start gap-1.5 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-slate-300 block hover:text-white transition-colors">{s.title}</span>
                      <span className="text-[10px] font-mono" style={{ color: currentPalette.accentPrimary }}>{s.cnaeCode}</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacts & Location (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Fale Conosco
            </h4>
            
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 shrink-0" style={{ color: currentPalette.accentPrimary }} />
                <span>WhatsApp Principal:</span>
                <a 
                  href="https://wa.me/5585920015069" 
                  className="font-bold hover:underline font-mono"
                  style={{ color: currentPalette.accentPrimary }}
                >
                  (85) 92001-5069
                </a>
              </div>

              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 shrink-0" style={{ color: currentPalette.accentPrimary }} />
                <span>Tel Secundário:</span>
                <a href="https://wa.me/5585996613303" className="text-slate-300 hover:underline font-mono">
                  (85) 99661-3303
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{ color: currentPalette.accentPrimary }} />
                <span>E-mail:</span>
                <a href="mailto:contato@joaomesquita.com.br" className="text-slate-300 hover:text-white">
                  contato@joaomesquita.com.br
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 shrink-0" style={{ color: currentPalette.accentPrimary }} />
                <span>Site:</span>
                <a href="https://www.joaomesquita.com.br" className="text-slate-300 hover:text-white">
                  www.joaomesquita.com.br
                </a>
              </div>

              <div className="flex items-center gap-2 pt-1 text-[#94a3b8]">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0" />
                <span>Ceará, Brasil (Atendimento Presencial e Remoto)</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-[#94a3b8]">
          <div>
            <p className="font-medium text-slate-300">
              joaomesquita.net.br &copy; 2026. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-[#94a3b8] mt-0.5">
              João Mesquita Company &bull; Soluções Estratégicas em Tecnologia da Informação e Comunicação.
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a>
            <span className="text-slate-700">&bull;</span>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <span className="text-slate-700">&bull;</span>
            <a href="#contato" className="hover:text-white transition-colors">Contato</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
