import React from 'react';
import { Check, ArrowRight, Sparkles, Clock, ShieldCheck } from 'lucide-react';

interface PricingPackagesProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingPackages: React.FC<PricingPackagesProps> = ({ onSelectPlan }) => {
  return (
    <section id="formules" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-stone-600" />
            <span>Formules Claires et Sans Surprise</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Des formules adaptées aux commerces et PME
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Un investissement rentabilisé dès les premiers clients supplémentaires conquis. 
            Aucun frais récurrent caché.
          </p>
        </div>

        {/* 3 Packages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          
          {/* Plan 1: Audit Flash Gratuit */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                  Diagnostic Initial
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Audit Flash et Recommandations
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  L'état des lieux sans engagement de votre site actuel : contrastes, mobilité et conformité 2025.
                </p>
              </div>

              <div className="pt-2 pb-4 border-y border-stone-100 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-bold text-stone-900">0 €</span>
                <span className="text-xs text-stone-500 font-medium">Offert / 100% sans engagement</span>
              </div>

              <ul className="space-y-3 text-xs text-stone-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Test des ratios de contraste de votre page d'accueil</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Vérification de l'ergonomie mobile et du parcours client</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Rapport synthétique remis sous 24 heures ouvrées</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>3 axes concrets d'amélioration immédiate</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-3">
              <button
                onClick={() => onSelectPlan('Audit Flash Offert')}
                className="w-full py-3.5 px-4 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 font-semibold text-xs transition-all border border-stone-300 text-center block cursor-pointer"
              >
                Demander mon audit gratuit
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <Clock className="w-3 h-3" />
                <span>Réponse sous 24h ouvrées</span>
              </div>
            </div>
          </div>

          {/* Plan 2: Landing Page Express (STAR) */}
          <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 border-2 border-amber-500 flex flex-col justify-between shadow-xl relative scale-102">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-950 text-[11px] font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              La Formule la Plus Demandée
            </div>

            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-amber-400 font-bold">
                  Commerces et Restaurants
                </span>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Refonte Landing Page Express
                </h3>
                <p className="text-xs text-stone-300 leading-relaxed">
                  Une page moderne, sobre et percutante pour présenter votre établissement et capter des clients.
                </p>
              </div>

              <div className="pt-2 pb-4 border-y border-stone-800 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-bold text-white">À partir de 890 €</span>
                <span className="text-xs text-stone-400 font-medium">TTC / Clé en main</span>
              </div>

              <ul className="space-y-3 text-xs text-stone-300">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Design sobre, chic et intemporel</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>100% accessible conforme WCAG 2.2 AA (Directive 2025)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Menu interactif ou liste des prestations sans PDF lourd</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Boutons d'appel direct, horaires et géolocalisation 1-clic</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Mentions légales et déclaration d'accessibilité incluses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <span>Livraison rapide en 5 à 7 jours ouvrés</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-3">
              <button
                onClick={() => onSelectPlan('Refonte Landing Page Express')}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-all text-center block cursor-pointer shadow-md"
              >
                Choisir cette formule et réserver un créneau
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>Garantie conformité et satisfaction</span>
              </div>
            </div>
          </div>

          {/* Plan 3: Refonte Complète Multi-Pages */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-stone-500 font-bold">
                  PME et Établissements Établis
                </span>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Refonte Site Vitrine Complet
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  La transformation totale de votre site (3 à 8 pages) avec préservation de votre référencement Google.
                </p>
              </div>

              <div className="pt-2 pb-4 border-y border-stone-100 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-bold text-stone-900">Sur devis</span>
                <span className="text-xs text-stone-500 font-medium">Selon l'architecture existante</span>
              </div>

              <ul className="space-y-3 text-xs text-stone-700">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Refonte multi-pages (Accueil, Histoire, Prestations, Carte, Contact)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Conservation de 100% de votre antériorité SEO (redirections 301)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Intégration d'outils de réservation (Zenchef, TheFork, Calendly...)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Déclaration d'accessibilité complète certifiée</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>Formation vidéo pour mettre à jour vos contenus en toute autonomie</span>
                </li>
              </ul>
            </div>

            <div className="pt-8 space-y-3">
              <button
                onClick={() => onSelectPlan('Refonte Site Vitrine Complet')}
                className="w-full py-3.5 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-all text-center block cursor-pointer"
              >
                Demander un devis sur-mesure
              </button>
              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <Clock className="w-3 h-3" />
                <span>Délai moyen : 10 à 15 jours</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
