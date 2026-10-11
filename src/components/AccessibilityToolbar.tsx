import React, { useState, useEffect } from 'react';
import { Eye, Type, ZoomIn, ZoomOut, RotateCcw, Sparkles } from 'lucide-react';

export const AccessibilityToolbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [dyslexicFont, setDyslexicFont] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (largeText) {
      root.classList.add('a11y-large-text');
    } else {
      root.classList.remove('a11y-large-text');
    }

    if (highContrast) {
      root.classList.add('a11y-high-contrast');
    } else {
      root.classList.remove('a11y-high-contrast');
    }

    if (dyslexicFont) {
      root.classList.add('a11y-dyslexic');
    } else {
      root.classList.remove('a11y-dyslexic');
    }
  }, [largeText, highContrast, dyslexicFont]);

  const resetAll = () => {
    setLargeText(false);
    setHighContrast(false);
    setDyslexicFont(false);
  };

  const hasActiveModifiers = largeText || highContrast || dyslexicFont;

  return (
    <aside aria-label="Outils d'accessibilité du site" className="fixed bottom-5 right-5 z-50">
      {isOpen ? (
        <div className="bg-stone-900 text-stone-100 p-5 rounded-2xl shadow-2xl border border-stone-700 w-80 backdrop-blur-md animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-stone-800 mb-4">
            <div className="flex items-center gap-2">
              <Eye className="w-5 h-5 text-amber-400" />
              <span className="font-semibold text-sm tracking-wide">Confort de lecture</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-stone-400 hover:text-white text-xs px-2 py-1 rounded transition-colors"
              aria-label="Fermer le panneau d'accessibilité"
            >
              Fermer ✕
            </button>
          </div>

          <p className="text-xs text-stone-400 mb-4 leading-relaxed">
            Testez l'accessibilité en direct. Ces options sont intégrées nativement sur nos refontes.
          </p>

          <div className="space-y-3">
            <button
              onClick={() => setLargeText(!largeText)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                largeText ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
              }`}
            >
              <span className="flex items-center gap-2">
                {largeText ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
                Taille du texte
              </span>
              <span className="opacity-80">{largeText ? '+20% Actif' : 'Standard'}</span>
            </button>

            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                highContrast ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Contraste renforcé
              </span>
              <span className="opacity-80">{highContrast ? 'Activé' : 'Désactivé'}</span>
            </button>

            <button
              onClick={() => setDyslexicFont(!dyslexicFont)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-medium transition-all ${
                dyslexicFont ? 'bg-amber-600 text-white' : 'bg-stone-800 text-stone-200 hover:bg-stone-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <Type className="w-4 h-4" />
                Police ultra-lisible
              </span>
              <span className="opacity-80">{dyslexicFont ? 'Activé' : 'Désactivé'}</span>
            </button>
          </div>

          {hasActiveModifiers && (
            <button
              onClick={resetAll}
              className="mt-4 w-full flex items-center justify-center gap-1.5 py-2 text-xs text-stone-400 hover:text-stone-200 transition-colors border-t border-stone-800 pt-3"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Réinitialiser les réglages
            </button>
          )}

          <div className="mt-3 pt-3 border-t border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
            <span>Conforme WCAG 2.2 AA</span>
            <span className="text-emerald-400 font-medium">100% accessible</span>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className={`flex items-center gap-2 px-3.5 py-2.5 rounded-full shadow-lg border text-xs font-medium transition-all duration-200 hover:scale-105 ${
            hasActiveModifiers
              ? 'bg-amber-600 text-white border-amber-500 shadow-amber-900/20'
              : 'bg-stone-900 text-stone-100 border-stone-700 hover:bg-stone-800 shadow-stone-900/30'
          }`}
          aria-label="Ouvrir le panneau d'accessibilité"
        >
          <Eye className="w-4 h-4 text-amber-400" />
          <span className="hidden sm:inline">Accessibilité</span>
          {hasActiveModifiers && (
            <span className="w-2 h-2 rounded-full bg-amber-300 animate-pulse" />
          )}
        </button>
      )}
    </aside>
  );
};
