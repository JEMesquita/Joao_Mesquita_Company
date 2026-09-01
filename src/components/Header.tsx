import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  PhoneCall, 
  MessageSquare, 
  Code2, 
  ShieldCheck, 
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { PaletteSelector } from './PaletteSelector';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPalette } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Sobre Nós', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Cases & Avaliações', href: '#cases' },
    { name: 'Simulador', href: '#orcamento' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappUrl = "https://wa.me/5585920015069?text=Ol%C3%A1%20Jo%C3%A3o%20Mesquita!%20Gostaria%20de%20conversar%20sobre%20uma%20solu%C3%A7%C3%A3o%20em%20TIC%20para%20minha%20empresa.";

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md border-b shadow-lg shadow-black/40 py-3' 
          : 'backdrop-blur-sm border-b py-4'
      }`}
      style={{
        backgroundColor: `${currentPalette.bgCanvas}ee`,
        borderColor: isScrolled ? currentPalette.borderAccent : currentPalette.borderSubtle
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a 
          href="#hero" 
          id="header-brand-logo"
          className="flex items-center gap-3 group"
        >
          <div 
            className="w-10 h-10 rounded-xl p-0.5 shadow-md group-hover:scale-105 transition-transform"
            style={{
              background: `linear-gradient(135deg, ${currentPalette.previewColor}, ${currentPalette.accentColor})`,
              boxShadow: `0 0 15px ${currentPalette.previewColor}30`
            }}
          >
            <div 
              className="w-full h-full rounded-[10px] flex items-center justify-center"
              style={{ backgroundColor: currentPalette.bgCanvas }}
            >
              <Code2 className="w-5 h-5 transition-colors" style={{ color: currentPalette.accentPrimary }} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-1.5 font-display">
              JOÃO MESQUITA
              <span 
                className="text-xs px-1.5 py-0.5 rounded font-semibold border"
                style={{
                  backgroundColor: `${currentPalette.accentPrimary}15`,
                  borderColor: currentPalette.borderAccent,
                  color: currentPalette.accentPrimary
                }}
              >
                TIC
              </span>
            </span>
            <span className="text-[11px] text-[#94a3b8] tracking-wider uppercase font-medium">
              Tecnologia & Software
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-[#94a3b8] hover:text-white transition-colors tracking-wide relative py-1"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action CTAs & Palette Selector */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Theme Palette Switcher */}
          <PaletteSelector />

          <a
            href="tel:5585920015069"
            id="header-phone-cta"
            className="flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border text-slate-300 hover:text-white transition-all"
            style={{
              backgroundColor: currentPalette.bgCard,
              borderColor: currentPalette.borderSubtle
            }}
            title="Ligar agora"
          >
            <PhoneCall className="w-3.5 h-3.5" style={{ color: currentPalette.accentPrimary }} />
            <span className="hidden lg:inline">(85) 92001-5069</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="header-whatsapp-cta"
            className={`flex items-center gap-2 text-xs sm:text-sm font-semibold px-4 py-2 rounded-lg transition-all active:scale-95 cursor-pointer shadow-md ${currentPalette.buttonClass}`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Solicitar Orçamento</span>
          </a>
        </div>

        {/* Mobile items & toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <PaletteSelector />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-button"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            className="p-2 text-slate-400 hover:text-white rounded-lg border transition-colors cursor-pointer"
            style={{
              backgroundColor: currentPalette.bgCard,
              borderColor: currentPalette.borderSubtle
            }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer"
          className="lg:hidden border-b px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
          style={{
            backgroundColor: currentPalette.bgCanvas,
            borderColor: currentPalette.borderSubtle
          }}
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-lg text-slate-200 hover:text-white font-medium text-sm transition-colors"
                style={{
                  backgroundColor: currentPalette.bgCard
                }}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t flex flex-col gap-2" style={{ borderColor: currentPalette.borderSubtle }}>
            <a
              href="tel:5585920015069"
              className="flex items-center justify-center gap-2 py-2.5 rounded-lg border text-slate-200 text-sm font-medium"
              style={{
                backgroundColor: currentPalette.bgCard,
                borderColor: currentPalette.borderSubtle
              }}
            >
              <PhoneCall className="w-4 h-4" style={{ color: currentPalette.accentPrimary }} />
              <span>(85) 92001-5069</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold shadow-md ${currentPalette.buttonClass}`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Solicitar Orçamento via WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
