import React, { useState } from 'react';
import { Check, X, ArrowRight, Sun, Sparkles, CheckCircle, AlertCircle, Eye } from 'lucide-react';

interface BeforeAfterComparisonProps {
  onOpenAudit: () => void;
}

export const BeforeAfterComparison: React.FC<BeforeAfterComparisonProps> = ({ onOpenAudit }) => {
  const [activeTab, setActiveTab] = useState<'after' | 'before'>('after');
  const [simulationMode, setSimulationMode] = useState<'normal' | 'sun'>('normal');

  return (
    <section id="comparatif" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100/80 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Démonstration Visuelle et Concrète</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            La différence entre un site qui exclut et une vitrine qui convertit
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Observez concrètement comment des ajustements de contraste, de typographie et de hiérarchie visuelle 
            transforment instantanément l'expérience de vos visiteurs.
          </p>
        </div>

        {/* Level 1: Primary Tab Switcher (Spacious, impossible to overlap) */}
        <div className="max-w-xl mx-auto mb-4 p-1.5 bg-stone-200/80 rounded-2xl flex items-center shadow-inner">
          <button
            type="button"
            onClick={() => setActiveTab('before')}
            className={`flex-1 py-3 px-3 sm:px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center cursor-pointer ${
              activeTab === 'before'
                ? 'bg-white text-rose-800 shadow-md ring-1 ring-stone-900/5'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            Site actuel (Non optimisé)
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('after')}
            className={`flex-1 py-3 px-3 sm:px-5 rounded-xl text-xs sm:text-sm font-semibold transition-all text-center cursor-pointer ${
              activeTab === 'after'
                ? 'bg-stone-900 text-amber-400 shadow-md ring-1 ring-stone-900/5'
                : 'text-stone-600 hover:text-stone-950'
            }`}
          >
            Site refondu (Accessible et épuré)
          </button>
        </div>

        {/* Level 2: Discrete Environment Simulation (Centered, separated row) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 text-xs">
          <span className="text-stone-500 font-medium">Conditions de lecture :</span>
          <div className="inline-flex p-1 bg-white border border-stone-200 rounded-xl shadow-xs">
            <button
              type="button"
              onClick={() => setSimulationMode('normal')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                simulationMode === 'normal'
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Vue standard</span>
            </button>
            <button
              type="button"
              onClick={() => setSimulationMode('sun')}
              className={`px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                simulationMode === 'sun'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <Sun className={`w-3.5 h-3.5 ${simulationMode === 'sun' ? 'text-stone-950' : 'text-amber-600'}`} />
              <span>Simuler le plein soleil</span>
            </button>
          </div>
        </div>

        {/* Visual Mockup Display */}
        <div className="max-w-4xl mx-auto">
          <div className={`transition-all duration-300 rounded-3xl overflow-hidden shadow-2xl border ${
            activeTab === 'before' ? 'border-rose-300/80' : 'border-stone-800'
          }`}>
            
            {/* Top Browser Bar */}
            <div className={`px-4 sm:px-6 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono ${
              activeTab === 'before' ? 'bg-stone-200 text-stone-700' : 'bg-stone-900 text-stone-300'
            }`}>
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-stone-400 shrink-0"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-stone-400 shrink-0"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-stone-400 shrink-0"></span>
                <span className="ml-2 font-sans font-medium text-xs truncate">
                  {activeTab === 'before' ? 'mon-restaurant-actuel.fr (Version vieillissante)' : 'bistrot-charlot.fr (Refonte Clarté et Sobriété)'}
                </span>
              </div>
              <div className="flex items-center gap-2 font-sans text-xs shrink-0">
                {activeTab === 'before' ? (
                  <span className="text-rose-700 bg-rose-100 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> Score a11y: 38/100
                  </span>
                ) : (
                  <span className="text-emerald-400 bg-emerald-950 px-2.5 py-0.5 rounded-full font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Score a11y: 99/100 (WCAG AAA)
                  </span>
                )}
              </div>
            </div>

            {/* Simulated Webpage Canvas */}
            <div className={`p-6 sm:p-10 transition-all ${
              simulationMode === 'sun' ? 'brightness-125 contrast-75 bg-[#FFFDF8]' : ''
            } ${activeTab === 'before' ? 'bg-[#FCFCFC]' : 'bg-[#FAF8F5]'}`}>
              
              {activeTab === 'before' ? (
                /* BEFORE CASE: Problematic typical website */
                <div className="space-y-6">
                  {/* Confusing header */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200 text-xs">
                    <span className="text-stone-400 font-sans tracking-widest uppercase">Bistrot du Coin</span>
                    <div className="text-stone-300 space-x-3 hidden sm:block">
                      <span>Accueil</span>
                      <span>Galerie</span>
                      <span>La Carte (PDF)</span>
                      <span>Contact</span>
                    </div>
                  </div>

                  {/* Problematic low-contrast hero */}
                  <div className="py-6 space-y-4">
                    <div className="text-[11px] text-stone-400 tracking-wider">Bienvenue chez nous depuis 2014</div>
                    <h3 className="text-2xl sm:text-3xl font-light text-stone-400">
                      Cuisine du marché et saveurs de saison
                    </h3>
                    <p className="text-xs text-stone-400 max-w-lg leading-relaxed">
                      Nous vous accueillons du mardi au samedi midi et soir. Découvrez nos plats faits maison avec des produits frais du terroir français.
                    </p>

                    <div className="flex flex-wrap items-center gap-3 pt-3">
                      <button className="px-3 py-1.5 bg-stone-300 text-white text-[11px] rounded cursor-not-allowed">
                        Télécharger le menu PDF (14 Mo)
                      </button>
                      <span className="text-[11px] text-stone-400">Tél : 01 XX XX XX XX</span>
                    </div>
                  </div>

                  {/* Callout of flaws */}
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-xs text-rose-900 space-y-2">
                    <div className="font-bold flex items-center gap-1.5 text-rose-800">
                      <X className="w-4 h-4 text-rose-600 shrink-0" />
                      <span>Les anomalies qui font fuir vos visiteurs :</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-rose-800/90 pl-1">
                      <li>Ratio de contraste insuffisant (1.8:1 au lieu de 4.5:1 minimum) : invisible pour les seniors ou en extérieur au soleil.</li>
                      <li>Menu au format PDF lourd impossible à lire sur smartphone sans zoomer à deux doigts.</li>
                      <li>Numéro de téléphone non interactif : le client ne peut pas vous appeler directement.</li>
                      <li>Absence totale de balises pour les lecteurs d'écran (non-conformité légale).</li>
                    </ul>
                  </div>
                </div>
              ) : (
                /* AFTER CASE: Refined, accessible, high conversion */
                <div className="space-y-8">
                  {/* Clean sober header */}
                  <div className="flex items-center justify-between pb-4 border-b border-stone-200">
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-lg font-bold text-stone-900 tracking-tight">Le Bistrot Charlot</span>
                      <span className="text-xs text-stone-500 hidden sm:inline">· Paris 11ème</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a href="#tel" className="text-xs font-semibold text-stone-800 hover:text-amber-800 underline decoration-stone-300 underline-offset-4">
                        01 42 78 90 12
                      </a>
                      <button className="px-3 py-1.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800">
                        Réserver une table
                      </button>
                    </div>
                  </div>

                  {/* High contrast, elegant editorial content */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                    <div className="md:col-span-8 space-y-3">
                      <span className="text-xs font-semibold tracking-wider uppercase text-amber-800">
                        Produits de saison et Cave d'auteurs
                      </span>
                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                        Une cuisine sincère, accessible à chaque gourmet.
                      </h3>
                      <p className="text-sm text-stone-700 leading-relaxed max-w-xl">
                        Formule midi du marché à 24€. Carte lisible en direct, adaptée à tous les écrans, 
                        avec indication claire des allergènes et options végétariennes.
                      </p>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <button className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-bold hover:bg-stone-800 flex items-center gap-2">
                          <span>Consulter la carte du jour</span>
                          <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                        </button>
                        <button className="px-4 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-900 text-xs font-semibold border border-stone-300">
                          Appeler pour réserver
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-4 bg-white p-4 rounded-xl border border-stone-200 space-y-2 text-xs">
                      <div className="font-bold text-stone-900">Horaires et Accès Facile</div>
                      <div className="text-stone-600 space-y-1">
                        <div>Mar - Sam : 12h - 14h30 · 19h - 23h</div>
                        <div className="text-emerald-700 font-medium">Accessible PMR de plain-pied</div>
                        <div className="text-stone-500">Métro Oberkampf (Ligne 5 et 9)</div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights of success */}
                  <div className="bg-emerald-50/80 border border-emerald-200 rounded-xl p-4 text-xs text-emerald-950 space-y-2">
                    <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Les atouts majeurs qui génèrent des réservations :</span>
                    </div>
                    <ul className="list-disc list-inside space-y-1 text-emerald-900/90 pl-1">
                      <li>Contraste optimal 8.5:1 : lisibilité parfaite en plein soleil en terrasse ou pour les personnes presbytes.</li>
                      <li>Carte au format web natif : ouverture en 0.2 seconde sur mobile, aucun téléchargement nécessaire.</li>
                      <li>Boutons tactiles généreux (hauteur 48px) : clic aisé au pouce sans risque d'erreur.</li>
                      <li>Structure conforme aux critères d'accessibilité numérique et prête pour la Directive Européenne.</li>
                    </ul>
                  </div>
                </div>
              )}

            </div>
          </div>

          {/* Bottom CTA for comparison */}
          <div className="mt-8 text-center">
            <button
              onClick={onOpenAudit}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 text-white hover:bg-stone-800 text-xs sm:text-sm font-semibold transition-all shadow-md cursor-pointer"
            >
              <span>Vérifier gratuitement le score de contraste et d'accessibilité de mon site</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
