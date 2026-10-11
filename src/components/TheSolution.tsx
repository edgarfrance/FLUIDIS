import React from 'react';
import { Palette, CheckCheck, Smartphone, ShieldCheck, ArrowRight, Compass, Sparkles, FileText } from 'lucide-react';

interface TheSolutionProps {
  onOpenAudit: () => void;
}

export const TheSolution: React.FC<TheSolutionProps> = ({ onOpenAudit }) => {
  return (
    <section id="solution" className="py-20 md:py-28 bg-white border-t border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-stone-600" />
            <span>Notre Approche & Savoir-Faire</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Ce que nous réalisons pour votre établissement
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Pas de modèles génériques ni de jargon abscons. Nous concevons une présence en ligne élégante, 
            évidente à utiliser et accessible à 100% de votre clientèle.
          </p>
        </div>

        {/* 4 Pillars of Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200/90 hover:border-stone-300 transition-all space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif font-bold text-lg">
                01
              </div>
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">Design & Image de marque</span>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Refonte sobre et esthétique haut de gamme
            </h3>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              Inspirée de la direction artistique soignée de <em>mabonneadresse.com</em> : typographies raffinées, 
              grilles aérées, photographies magnifiées et mise en valeur immédiate de votre identité. 
              Votre site inspire la confiance dès la première seconde.
            </p>

            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-stone-200/60">
              <li className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Mise en page épurée valorisant vos produits et vos prestations</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Textes clairs, hiérarchisés et percutants rédigés pour convertir</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200/90 hover:border-stone-300 transition-all space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif font-bold text-lg">
                02
              </div>
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">Accessibilité Universelle</span>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Mise aux normes visuelles et ergonomiques
            </h3>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              Application rigoureuse des standards WCAG 2.2 niveau AA et RGAA : ratios de contraste validés (supérieurs à 4.5:1 et 7:1), 
              tailles de police confortables, espacements calculés, balises descriptives pour tous les éléments visuels.
            </p>

            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-stone-200/60">
              <li className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Lisibilité garantie pour seniors, malvoyants et daltoniens</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Navigation au clavier et compatibilité lecteurs d'écran</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200/90 hover:border-stone-300 transition-all space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif font-bold text-lg">
                03
              </div>
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">Ergonomie & Vitesse</span>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Expérience mobile fluide & conversion directe
            </h3>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              Plus de 70% de vos clients consultent votre site depuis leur smartphone. Nous supprimons toute friction : 
              menus consultables en 1 clic sans téléchargement PDF, bouton d'appel direct, boutons tactiles adaptés au pouce.
            </p>

            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-stone-200/60">
              <li className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Chargement ultra-rapide sous 1,2s (favorisé par Google SEO)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Parcours de prise de contact ou de réservation raccourci</span>
              </li>
            </ul>
          </div>

          {/* Pillar 4 */}
          <div className="p-8 rounded-3xl bg-[#FAF8F5] border border-stone-200/90 hover:border-stone-300 transition-all space-y-5">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif font-bold text-lg">
                04
              </div>
              <span className="text-xs font-medium text-stone-500 uppercase tracking-wider">Conformité & Sérénité</span>
            </div>
            
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Mentions obligatoires & Déclaration légale
            </h3>
            
            <p className="text-stone-600 text-sm leading-relaxed">
              Nous intégrons une page de déclaration d'accessibilité simplifiée, conforme à la Directive Européenne, 
              ainsi que les mentions légales, la politique de cookies et la conformité RGPD nécessaires à votre activité.
            </p>

            <ul className="space-y-2 text-xs text-stone-700 pt-2 border-t border-stone-200/60">
              <li className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Déclaration d'accessibilité officielle prête pour Juin 2025</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Protection juridique et transparence totale pour vos clients</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Process Banner */}
        <div className="bg-stone-50 rounded-2xl p-6 sm:p-8 border border-stone-200 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-stone-500">
              Méthodologie transparente en 3 étapes
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              1. Diagnostic gratuit → 2. Maquette chic sous 5 jours → 3. Mise en ligne sans coupure
            </div>
          </div>
          <button
            onClick={onOpenAudit}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs font-semibold inline-flex items-center gap-2 transition-all shadow-sm"
          >
            <span>Démarrer par l'audit gratuit</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};
