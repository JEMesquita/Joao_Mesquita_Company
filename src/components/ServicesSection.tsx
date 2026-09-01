import React, { useState } from 'react';
import { 
  Code, 
  PackageCheck, 
  BarChart3, 
  Wrench, 
  Cloud, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Sparkles,
  Layers,
  ChevronRight,
  X,
  FileCheck,
  ShieldAlert
} from 'lucide-react';
import { servicesData } from '../data/servicesData';
import { ServiceItem } from '../types';
import { useTheme } from '../context/ThemeContext';

export const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const { currentPalette } = useTheme();

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-6 h-6" style={{ color: currentPalette.accentPrimary }} />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6" style={{ color: currentPalette.accentSecondary }} />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6" style={{ color: currentPalette.accentPrimary }} />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" style={{ color: currentPalette.accentSecondary }} />;
      case 'Cloud':
        return <Cloud className="w-6 h-6" style={{ color: currentPalette.accentPrimary }} />;
      default:
        return <Layers className="w-6 h-6" style={{ color: currentPalette.accentPrimary }} />;
    }
  };

  const createWhatsAppLink = (serviceTitle: string, cnae: string) => {
    const message = encodeURIComponent(
      `Olá João Mesquita! Gostaria de solicitar uma proposta comercial para o serviço:\n\n📌 *${serviceTitle}*\n(${cnae})\n\nPoderia me fornecer mais detalhes e agendar um alinhamento?`
    );
    return `https://wa.me/5585920015069?text=${message}`;
  };

  return (
    <section 
      id="servicos" 
      className="py-20 md:py-28 relative overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: currentPalette.bgCanvas }}
    >
      {/* Background Accent */}
      <div 
        className="absolute top-1/2 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none -z-10"
        style={{ backgroundColor: `${currentPalette.previewColor}10` }}
      />
      <div 
        className="absolute bottom-10 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none -z-10"
        style={{ backgroundColor: `${currentPalette.accentColor}10` }}
      />

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
            <Layers className="w-3.5 h-3.5" />
            <span>Portfólio de Soluções &bull; CNAEs Oficiais</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-display mb-4">
            Nossos Serviços Especializados em TIC
          </h2>

          <p className="text-[#94a3b8] text-base sm:text-lg leading-relaxed">
            Serviços corporativos de Tecnologia da Informação estruturados para alavancar a eficiência, a segurança de dados e a maturidade digital da sua empresa.
          </p>
        </div>

        {/* Services Grid (5 services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {servicesData.map((service, index) => {
            const isLarge = index === 0; // Highlight custom software
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`flex flex-col justify-between rounded-2xl border p-6 sm:p-7 shadow-xl transition-all hover:-translate-y-1.5 duration-300 group relative ${
                  isLarge ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{
                  backgroundColor: currentPalette.bgCard,
                  borderColor: isLarge ? currentPalette.borderAccent : currentPalette.borderSubtle,
                }}
              >
                <div>
                  {/* Top Bar: Icon + CNAE Badge */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div 
                      className="p-3 rounded-xl border group-hover:scale-110 transition-transform"
                      style={{
                        backgroundColor: currentPalette.bgCanvas,
                        borderColor: currentPalette.borderSubtle
                      }}
                    >
                      {getIcon(service.iconName)}
                    </div>
                    <span 
                      className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border shrink-0"
                      style={{
                        backgroundColor: currentPalette.bgCanvas,
                        borderColor: currentPalette.borderAccent,
                        color: currentPalette.accentPrimary
                      }}
                    >
                      {service.cnaeCode}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white font-display mb-2.5 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#94a3b8] mb-6 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights checklist */}
                  <div 
                    className="space-y-2 mb-6 pt-4 border-t"
                    style={{ borderColor: currentPalette.borderSubtle }}
                  >
                    {service.highlights.slice(0, 3).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-[#94a3b8]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: currentPalette.accentPrimary }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div 
                  className="pt-4 border-t flex items-center justify-between gap-2"
                  style={{ borderColor: currentPalette.borderSubtle }}
                >
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold transition-colors py-1.5 px-2 rounded-lg hover:bg-white/5 cursor-pointer"
                    style={{ color: currentPalette.accentPrimary }}
                  >
                    <span>Ver detalhes</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={createWhatsAppLink(service.title, service.cnaeCode)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium text-xs shadow transition-all active:scale-95 cursor-pointer ${currentPalette.buttonClass}`}
                    title={`Solicitar orçamento para ${service.title}`}
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Orçamento</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Bottom Banner for Custom Consultation */}
        <div 
          className="rounded-2xl p-6 sm:p-8 border flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-xl"
          style={{
            backgroundColor: currentPalette.bgCard,
            borderColor: currentPalette.borderAccent
          }}
        >
          <div>
            <h3 className="text-xl font-bold text-white font-display mb-1">
              Precisa de um pacote de serviços combinados (Software + Suporte + Nuvem)?
            </h3>
            <p className="text-xs sm:text-sm text-[#94a3b8] max-w-2xl">
              Elaboramos propostas personalizadas para atender contratos contínuos de TIC ou projetos fechados por etapas.
            </p>
          </div>
          <a
            href="https://wa.me/5585920015069?text=Ol%C3%A1%20Jo%C3%A3o!%20Gostaria%20de%20um%20diagn%C3%B3stico%20integrado%20de%20TIC%20para%20minha%20empresa."
            target="_blank"
            rel="noopener noreferrer"
            className={`shrink-0 px-6 py-3 rounded-xl font-semibold text-sm shadow-lg transition-all cursor-pointer ${currentPalette.buttonClass}`}
          >
            Solicitar Diagnóstico Integrado
          </a>
        </div>

      </div>

      {/* Service Detailed Modal */}
      {selectedService && (
        <div 
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div 
            className="relative w-full max-w-2xl border rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            style={{
              backgroundColor: currentPalette.bgCard,
              borderColor: currentPalette.borderAccent
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              aria-label="Fechar detalhes"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div 
                className="p-3 rounded-xl border"
                style={{
                  backgroundColor: currentPalette.bgCanvas,
                  borderColor: currentPalette.borderSubtle
                }}
              >
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs font-mono font-semibold uppercase" style={{ color: currentPalette.accentPrimary }}>
                  {selectedService.cnaeCode}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p 
              className="text-xs font-mono mb-4 pb-2 border-b"
              style={{
                borderColor: currentPalette.borderSubtle,
                color: currentPalette.accentSecondary
              }}
            >
              Referência Nacional: {selectedService.cnae}
            </p>

            {/* Body */}
            <div className="space-y-6 text-sm text-slate-300">
              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-display">
                  Descrição Completa
                </h4>
                <p className="leading-relaxed text-[#94a3b8] text-sm">
                  {selectedService.fullDesc}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-display">
                  O que está incluso (Entregáveis)
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-200">
                      <FileCheck className="w-4 h-4 shrink-0 mt-0.5" style={{ color: currentPalette.accentPrimary }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-2 font-display">
                  Público-Alvo Ideal
                </h4>
                <p 
                  className="text-xs sm:text-sm text-[#94a3b8] p-3 rounded-xl border"
                  style={{
                    backgroundColor: currentPalette.bgCanvas,
                    borderColor: currentPalette.borderSubtle
                  }}
                >
                  {selectedService.idealFor}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div 
              className="mt-8 pt-4 border-t flex flex-col sm:flex-row items-center justify-end gap-3"
              style={{ borderColor: currentPalette.borderSubtle }}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-slate-200 text-sm font-medium transition-colors border cursor-pointer"
                style={{
                  backgroundColor: currentPalette.bgCanvas,
                  borderColor: currentPalette.borderSubtle
                }}
              >
                Fechar
              </button>
              
              <a
                href={createWhatsAppLink(selectedService.title, selectedService.cnaeCode)}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md transition-all cursor-pointer ${currentPalette.buttonClass}`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar Proposta para este Serviço</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

