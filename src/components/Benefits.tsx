import React from 'react';
import { Users, TrendingUp, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface BenefitsProps {
  onOpenAudit: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenAudit }) => {
  return (
    <section id="benefices" className="py-12 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Retour sur Investissement et Impact Direct</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Les bénéfices concrets pour votre chiffre d'affaires
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            L'accessibilité n'est pas une simple contrainte technique : c'est le levier commercial 
            le plus sous-estimé par les entreprises de proximité.
          </p>
        </div>

        {/* 3 Main Core Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Benefit 1 */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 text-amber-900 flex items-center justify-center">
                <Users className="w-7 h-7 text-amber-700" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Audience et Inclusivité
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Plus de clients satisfaits, tous publics confondus
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Les seniors représentent aujourd'hui le pouvoir d'achat le plus élevé dans les commerces et restaurants. 
                En leur offrant des textes parfaitement contrastés, des boutons faciles à actionner et une navigation limpide, 
                vous captez une clientèle fidèle souvent ignorée par vos concurrents.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
              <span>Publics seniors et PMR conquis</span>
              <span className="font-serif font-bold text-base text-stone-900">+20%</span>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-stone-700" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Image et Réputation
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Une image de marque moderne, sobre et rassurante
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Votre site web est votre vitrine principale. Une esthétique épurée, intemporelle et sans artifice 
                projette instantanément le sérieux, l'exigence et le soin que vous mettez dans votre propre métier. 
                Fini les bricolages visuels qui dévalorisent vos prestations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
              <span>Perception de confiance accrue</span>
              <span className="font-serif font-bold text-base text-stone-900">Immédiat</span>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-900 flex items-center justify-center">
                <Zap className="w-7 h-7 text-emerald-700" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Conversion et Performance
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Un site rapide qui convertit plus de visiteurs en réservations
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Un code propre sans surplus se charge en moins d'une seconde. Les boutons d'appels et formulaires 
                sont pensés pour déclencher l'action en un minimum d'étapes. Moins d'abandons, plus d'appels téléphoniques, 
                plus de commandes et de demandes de devis qualifiées.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
              <span>Hausse moyenne des demandes</span>
              <span className="font-serif font-bold text-base text-emerald-700">+34%</span>
            </div>
          </div>

        </div>

        {/* Reassurance Banner */}
        <div className="bg-white rounded-2xl p-6 border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
            <span className="text-sm text-stone-700 font-medium">
              Chaque refonte est pensée pour maximiser directement vos réservations, commandes ou appels.
            </span>
          </div>
          <button
            onClick={onOpenAudit}
            className="shrink-0 px-6 py-3 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <span>Demander un audit gratuit</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
