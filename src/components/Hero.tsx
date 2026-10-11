import React from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Eye, Smartphone, Zap } from 'lucide-react';

interface HeroProps {
  onOpenAudit: () => void;
  onExploreComparison: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAudit, onExploreComparison }) => {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-[#FAF8F5]">
      {/* Subtle organic background accent lines */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-stone-200/30 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            
            {/* Elegant kicker / micro-pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100/80 border border-stone-200 text-stone-700 text-xs font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              <span>Spécialiste de la refonte pour PME, Commerces & Restaurants</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 tracking-tight leading-[1.12]">
              Votre site web oublie-t-il{' '}
              <span className="italic font-normal text-stone-700 underline decoration-amber-500/60 decoration-wavy decoration-1 underline-offset-8">
                une partie de vos clients ?
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Nous refondons votre site ou landing page avec l'élégance sobre des plus belles adresses. 
              Un design moderne, ultra-rapide et <strong className="text-stone-900 font-semibold">accessible à tous</strong> (seniors, malvoyants, usage mobile) conforme à la nouvelle réglementation européenne.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1 text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium bg-stone-50/70 p-2.5 rounded-lg border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>+20% d'audience touchée</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium bg-stone-50/70 p-2.5 rounded-lg border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Directive UE Juin 2025</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-stone-700 font-medium bg-stone-50/70 p-2.5 rounded-lg border border-stone-200/60">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Livraison en 7 à 10 jours</span>
              </div>
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-stone-900 text-stone-100 hover:bg-stone-800 active:bg-stone-950 transition-all font-semibold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 cursor-pointer border border-stone-800"
              >
                <span>Demander un audit gratuit de mon site</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={onExploreComparison}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 transition-all font-medium text-sm cursor-pointer hover:border-stone-400 shadow-sm"
              >
                <Eye className="w-4 h-4 text-stone-500" />
                <span>Voir le comparatif Avant / Après</span>
              </button>
            </div>

            {/* Reassurance text */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-xs text-stone-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-stone-400" />
              <span>Diagnostic offert et sans engagement sous 24h · Aucun devis forcé · Réponse humaine</span>
            </div>

          </div>

          {/* Right Visual / Proof Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative layered frame */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-stone-200 via-amber-100/40 to-stone-100 rounded-2xl transform rotate-1 opacity-70 -z-10" />

              {/* Main Preview Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-xl border border-stone-200/80 space-y-6">
                
                {/* Header of the mock showcase */}
                <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                    <span className="text-xs font-mono text-stone-400 ml-2">audits.maboutique.fr</span>
                  </div>
                  <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Conforme WCAG AA
                  </span>
                </div>

                {/* Score indicators */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/60">
                    <div className="text-2xl font-serif font-bold text-emerald-600">99<span className="text-xs font-sans text-stone-400">/100</span></div>
                    <div className="text-[11px] text-stone-500 font-medium mt-0.5">Accessibilité</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/60">
                    <div className="text-2xl font-serif font-bold text-emerald-600">100<span className="text-xs font-sans text-stone-400">/100</span></div>
                    <div className="text-[11px] text-stone-500 font-medium mt-0.5">Performance</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#FAF8F5] border border-stone-200/60">
                    <div className="text-2xl font-serif font-bold text-stone-800">8.4<span className="text-xs font-sans text-stone-400">:1</span></div>
                    <div className="text-[11px] text-stone-500 font-medium mt-0.5">Ratio contraste</div>
                  </div>
                </div>

                {/* Micro preview of a refined business site */}
                <div className="rounded-xl border border-stone-200 overflow-hidden bg-[#FAF8F5] p-4 space-y-3">
                  <div className="flex items-center justify-between text-xs text-stone-500">
                    <span className="font-serif italic font-semibold text-stone-900">Le Bistrot des Halles</span>
                    <span className="text-[10px] text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">Menu Lisible</span>
                  </div>
                  <p className="text-xs text-stone-700 leading-snug">
                    "Une lisibilité immédiate, même au soleil en terrasse. Nos réservations du midi ont augmenté de +32%."
                  </p>
                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-stone-500">Navigation fluide au doigt</span>
                    <span className="text-xs font-semibold text-amber-900 bg-amber-100 px-3 py-1 rounded-lg">
                      Réserver en 1 clic
                    </span>
                  </div>
                </div>

                {/* Bottom value list */}
                <div className="space-y-2 pt-1 text-xs text-stone-600">
                  <div className="flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Chargement instantané sous 1 seconde (Google First)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Optimisation mobile irréprochable pour tous les âges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>Mentions obligatoires & conformité légale incluses</span>
                  </div>
                </div>

                {/* Small live badge */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-400">
                  <span>Style sobre façon mabonneadresse.com</span>
                  <span className="text-stone-900 font-medium">Zéro superflu</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
