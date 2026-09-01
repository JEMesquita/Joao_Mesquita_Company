import React, { useState, useRef, useEffect } from 'react';
import { Palette, Check, Sparkles, ChevronDown } from 'lucide-react';
import { useTheme, palettes, PaletteId } from '../context/ThemeContext';

export const PaletteSelector: React.FC = () => {
  const { currentPalette, paletteId, setPaletteId } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all cursor-pointer shadow-sm"
        style={{
          backgroundColor: currentPalette.bgCard,
          borderColor: currentPalette.borderAccent,
          color: currentPalette.accentPrimary
        }}
        title="Mudar Paleta de Cores"
        aria-label="Selecionar paleta de cores"
      >
        <span 
          className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0" 
          style={{ backgroundColor: currentPalette.previewColor }}
        />
        <Palette className="w-3.5 h-3.5" />
        <span className="hidden md:inline font-medium text-slate-200">
          {currentPalette.shortName}
        </span>
        <ChevronDown className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 mt-2 w-64 rounded-2xl border p-2.5 shadow-2xl z-50 animate-in fade-in slide-in-from-top-2 duration-150 backdrop-blur-xl"
          style={{
            backgroundColor: currentPalette.bgCard,
            borderColor: currentPalette.borderAccent
          }}
        >
          <div className="px-2.5 py-1.5 border-b mb-2 flex items-center justify-between" style={{ borderColor: currentPalette.borderSubtle }}>
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 font-display flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" style={{ color: currentPalette.accentPrimary }} />
              Paletas de Cores
            </span>
            <span className="text-[10px] text-slate-500">4 Opções</span>
          </div>

          <div className="space-y-1">
            {(Object.keys(palettes) as PaletteId[]).map((key) => {
              const pal = palettes[key];
              const isActive = paletteId === key;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setPaletteId(key);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between p-2 rounded-xl text-left text-xs transition-all cursor-pointer ${
                    isActive 
                      ? 'font-bold shadow-sm' 
                      : 'hover:bg-white/5 text-slate-300'
                  }`}
                  style={{
                    backgroundColor: isActive ? 'rgba(255,255,255,0.06)' : undefined,
                    color: isActive ? pal.accentPrimary : undefined,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div 
                      className="w-4 h-4 rounded-full flex items-center justify-center p-0.5 border"
                      style={{ 
                        borderColor: pal.borderAccent,
                        background: `linear-gradient(135deg, ${pal.previewColor}, ${pal.accentColor})` 
                      }}
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-200">
                        {pal.name}
                      </span>
                      <span className="text-[10px] text-slate-400 font-normal">
                        {pal.shortName}
                      </span>
                    </div>
                  </div>

                  {isActive && (
                    <Check className="w-4 h-4" style={{ color: pal.accentPrimary }} />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
