import React, { createContext, useContext, useState, useEffect } from 'react';

export type PaletteId = 'emerald-cyan' | 'sapphire-blue' | 'amber-gold' | 'neon-violet';

export interface PaletteConfig {
  id: PaletteId;
  name: string;
  shortName: string;
  description: string;
  previewColor: string;
  accentColor: string;
  gradient: string;
  bgCanvas: string;
  bgCard: string;
  bgCardHover: string;
  borderSubtle: string;
  borderAccent: string;
  accentPrimary: string;
  accentSecondary: string;
  accentText: string;
  buttonClass: string;
  badgeClass: string;
  gradientText: string;
}

export const palettes: Record<PaletteId, PaletteConfig> = {
  'emerald-cyan': {
    id: 'emerald-cyan',
    name: 'Esmeralda & Ciano Cyber',
    shortName: 'Esmeralda',
    description: 'Verde esmeralda, ciano vibrante e obsidiana de alta tecnologia',
    previewColor: '#10b981',
    accentColor: '#06b6d4',
    gradient: 'from-emerald-500 to-teal-500',
    bgCanvas: '#090e17',
    bgCard: '#111c2e',
    bgCardHover: '#16243b',
    borderSubtle: 'rgba(255, 255, 255, 0.07)',
    borderAccent: 'rgba(16, 185, 129, 0.35)',
    accentPrimary: '#10b981',
    accentSecondary: '#06b6d4',
    accentText: 'text-emerald-400',
    buttonClass: 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/60 hover:shadow-emerald-600/30',
    badgeClass: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    gradientText: 'from-emerald-400 via-teal-300 to-cyan-400',
  },
  'sapphire-blue': {
    id: 'sapphire-blue',
    name: 'Safira & Cobalto Tech',
    shortName: 'Safira',
    description: 'Azul cobalto corporativo, índigo e slate executivo',
    previewColor: '#3b82f6',
    accentColor: '#60a5fa',
    gradient: 'from-blue-600 to-indigo-600',
    bgCanvas: '#0b132b',
    bgCard: '#142042',
    bgCardHover: '#1c2d5c',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderAccent: 'rgba(59, 130, 246, 0.35)',
    accentPrimary: '#3b82f6',
    accentSecondary: '#60a5fa',
    accentText: 'text-blue-400',
    buttonClass: 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-950/60 hover:shadow-blue-600/30',
    badgeClass: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    gradientText: 'from-blue-400 via-indigo-300 to-cyan-400',
  },
  'amber-gold': {
    id: 'amber-gold',
    name: 'Obsidiana & Ouro Titânio',
    shortName: 'Ouro Titânio',
    description: 'Âmbar refinado, dourado metálico e grafite ônix',
    previewColor: '#f59e0b',
    accentColor: '#fbbf24',
    gradient: 'from-amber-500 to-yellow-600',
    bgCanvas: '#0d0f14',
    bgCard: '#181b22',
    bgCardHover: '#222630',
    borderSubtle: 'rgba(255, 255, 255, 0.07)',
    borderAccent: 'rgba(245, 158, 11, 0.35)',
    accentPrimary: '#f59e0b',
    accentSecondary: '#fbbf24',
    accentText: 'text-amber-400',
    buttonClass: 'bg-amber-600 hover:bg-amber-500 text-slate-950 font-bold shadow-amber-950/60 hover:shadow-amber-600/30',
    badgeClass: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
    gradientText: 'from-amber-400 via-yellow-300 to-orange-400',
  },
  'neon-violet': {
    id: 'neon-violet',
    name: 'Ciano Neon & Violeta',
    shortName: 'Cyber Violet',
    description: 'Violeta espacial, ciano elétrico e preto profundo',
    previewColor: '#a855f7',
    accentColor: '#06b6d4',
    gradient: 'from-violet-600 to-cyan-500',
    bgCanvas: '#0c0a17',
    bgCard: '#17142b',
    bgCardHover: '#231e40',
    borderSubtle: 'rgba(255, 255, 255, 0.08)',
    borderAccent: 'rgba(168, 85, 247, 0.35)',
    accentPrimary: '#a855f7',
    accentSecondary: '#06b6d4',
    accentText: 'text-violet-400',
    buttonClass: 'bg-gradient-to-r from-violet-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white shadow-violet-950/60',
    badgeClass: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
    gradientText: 'from-violet-400 via-pink-400 to-cyan-400',
  }
};

interface ThemeContextType {
  currentPalette: PaletteConfig;
  paletteId: PaletteId;
  setPaletteId: (id: PaletteId) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  currentPalette: palettes['emerald-cyan'],
  paletteId: 'emerald-cyan',
  setPaletteId: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [paletteId, setPaletteId] = useState<PaletteId>(() => {
    try {
      const saved = localStorage.getItem('jm_palette');
      if (saved && saved in palettes) {
        return saved as PaletteId;
      }
    } catch {
      // fallback
    }
    return 'emerald-cyan'; // New fresh default palette
  });

  const currentPalette = palettes[paletteId] || palettes['emerald-cyan'];

  useEffect(() => {
    try {
      localStorage.setItem('jm_palette', paletteId);
      // Update root CSS variables for dynamic elements
      const root = document.documentElement;
      root.style.setProperty('--bg-canvas', currentPalette.bgCanvas);
      root.style.setProperty('--bg-card', currentPalette.bgCard);
      root.style.setProperty('--bg-card-hover', currentPalette.bgCardHover);
      root.style.setProperty('--accent-primary', currentPalette.accentPrimary);
      root.style.setProperty('--accent-secondary', currentPalette.accentSecondary);
      root.style.setProperty('--border-subtle', currentPalette.borderSubtle);
      root.style.setProperty('--border-accent', currentPalette.borderAccent);
    } catch {
      // ignore
    }
  }, [paletteId, currentPalette]);

  return (
    <ThemeContext.Provider value={{ currentPalette, paletteId, setPaletteId }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
