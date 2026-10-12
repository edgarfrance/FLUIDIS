import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreComparison: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onExploreComparison }) => {
  return (
    <section className="relative pt-10 pb-12 md:pt-18 md:pb-14 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        
        {/* Kicker sobre */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200/90 text-stone-700 text-xs font-medium tracking-wide mb-6">
          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
          <span>Spécialiste de la refonte pour PME, Commerces et Restaurants</span>
        </div>

        {/* Headline épuré sans soulignement */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15] max-w-3xl mx-auto mb-5">
          Votre site web oublie-t-il{' '}
          <span className="italic font-normal text-stone-700">
            une partie de vos clients ?
          </span>
        </h1>

        {/* Sous-titre */}
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mx-auto font-normal mb-7">
          Nous refondons votre site ou landing page avec une esthétique sobre et soignée. 
          Un design moderne, ultra-rapide et <strong className="text-stone-900 font-semibold">accessible à tous</strong> (seniors, malvoyants, usage mobile) conforme à la nouvelle réglementation européenne.
        </p>

        {/* Points clés (sans délai de livraison) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 max-w-lg mx-auto mb-7 text-xs text-stone-700 font-medium">
          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>+20% d'audience potentielle touchée</span>
          </div>
          <div className="flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-stone-200 shadow-2xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Conforme Directive UE Juin 2025</span>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-stone-900 text-stone-100 hover:bg-stone-800 active:bg-stone-950 transition-all font-semibold text-sm shadow-sm cursor-pointer border border-stone-800"
          >
            <span>Demander un audit gratuit de mon site</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>

          <button
            onClick={onExploreComparison}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 transition-all font-medium text-sm cursor-pointer shadow-2xs"
          >
            <Eye className="w-4 h-4 text-stone-500" />
            <span>Voir le comparatif Avant / Après</span>
          </button>
        </div>

        {/* Rassurance discrète */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500">
          <ShieldCheck className="w-4 h-4 text-stone-400" />
          <span>Diagnostic offert et sans engagement sous 24h · Échange direct</span>
        </div>

      </div>
    </section>
  );
};
