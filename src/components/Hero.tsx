import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Eye, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreComparison: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onExploreComparison }) => {
  return (
    <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle organic background accent lines */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-stone-200/30 to-transparent pointer-events-none" />
      <div className="absolute right-1/4 top-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        
        {/* Elegant kicker */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100/90 border border-stone-200 text-stone-700 text-xs font-medium tracking-wide mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-600"></span>
          <span>Spécialiste de la refonte pour PME, Commerces et Restaurants</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
          Votre site web oublie-t-il{' '}
          <span className="italic font-normal text-stone-700 underline decoration-amber-500/60 decoration-wavy decoration-1 underline-offset-8">
            une partie de vos clients ?
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto font-normal mb-10">
          Nous refondons votre site ou landing page avec une élégance sobre et intemporelle. 
          Un design moderne, ultra-rapide et <strong className="text-stone-900 font-semibold">accessible à tous</strong> (seniors, malvoyants, usage mobile) conforme à la nouvelle réglementation européenne.
        </p>

        {/* Key Value Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-10 text-left">
          <div className="flex items-center gap-2.5 text-xs text-stone-800 font-medium bg-white p-3 rounded-xl border border-stone-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>+20% d'audience touchée</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-stone-800 font-medium bg-white p-3 rounded-xl border border-stone-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Directive UE Juin 2025</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-stone-800 font-medium bg-white p-3 rounded-xl border border-stone-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Livraison en 7 à 10 jours</span>
          </div>
        </div>

        {/* Call To Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
          <button
            onClick={onOpenAudit}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-stone-900 text-stone-100 hover:bg-stone-800 active:bg-stone-950 transition-all font-semibold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer border border-stone-800"
          >
            <span>Demander un audit gratuit de mon site</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>

          <button
            onClick={onExploreComparison}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 transition-all font-medium text-sm cursor-pointer hover:border-stone-400 shadow-xs"
          >
            <Eye className="w-4 h-4 text-stone-500" />
            <span>Voir le comparatif Avant / Après</span>
          </button>
        </div>

        {/* Reassurance text */}
        <div className="flex items-center justify-center gap-2 text-xs text-stone-500">
          <ShieldCheck className="w-4 h-4 text-stone-400" />
          <span>Diagnostic offert et sans engagement sous 24h · Aucun devis forcé · Réponse humaine</span>
        </div>

      </div>
    </section>
  );
};
