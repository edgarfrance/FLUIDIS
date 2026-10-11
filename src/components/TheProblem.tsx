import React, { useState } from 'react';
import { AlertTriangle, Users, EyeOff, Smartphone, Scale, ArrowRight, TrendingDown } from 'lucide-react';

interface TheProblemProps {
  onOpenAudit: () => void;
}

export const TheProblem: React.FC<TheProblemProps> = ({ onOpenAudit }) => {
  const [estimatedMonthlyVisitors, setEstimatedMonthlyVisitors] = useState<number>(1200);

  // 20% of population has some disability, presbyopia, visual fatigue or navigation barrier
  const estimatedLostVisitors = Math.round(estimatedMonthlyVisitors * 0.20);
  // Conservative 2.5% conversion rate on visitors
  const estimatedLostConversions = Math.max(1, Math.round(estimatedLostVisitors * 0.025));

  return (
    <section id="constat" className="py-14 md:py-20 bg-white border-y border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-800 text-xs font-semibold uppercase tracking-wider">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>Le Constat et La Réalité du Web Actuel</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Pourquoi 8 sites sur 10 perdent des clients silencieusement chaque jour
          </h2>
          
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Un site créé il y a 3 ou 5 ans n'est plus adapté aux exigences d'aujourd'hui. 
            Sans que vous vous en rendiez compte, des clients potentiels font demi-tour après seulement 4 secondes.
          </p>
        </div>

        {/* 3 Pillars of Problem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Aging design & low contrast */}
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <EyeOff className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Contrastes faibles et polices illisibles
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Le fameux texte gris clair sur fond blanc à la mode en 2018 est un calvaire pour les yeux. 
                Pour les personnes de plus de 45 ans, les myopes ou les clients consultant votre site sur smartphone en extérieur, 
                vos tarifs et menus sont tout simplement illisibles.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-rose-700 font-medium flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 shrink-0" />
              <span>71% des visiteurs quittent un site difficile à lire</span>
            </div>
          </div>

          {/* Card 2: Mobile friction & seniors */}
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Menus scannés et boutons microscopiques
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Des PDF lourds à télécharger pour voir une carte, des numéros de téléphone non cliquables, 
                des boutons minuscules sur lesquels on peine à appuyer avec le pouce : le parcours client est semé 
                d'embûches inutiles qui découragent les réservations et commandes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-rose-700 font-medium flex items-center gap-1.5">
              <TrendingDown className="w-4 h-4 shrink-0" />
              <span>+68% de navigation mobile aujourd'hui</span>
            </div>
          </div>

          {/* Card 3: EU Directive 2025 */}
          <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200 hover:border-stone-300 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                La Directive Européenne (Juin 2025)
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                La directive européenne sur l'accessibilité (EAA) entre en application en 2025. 
                Si les TPE et microentreprises ne risquent pas d'amendes directes, <strong className="text-stone-900">les standards de marché changent radicalement</strong>. 
                Les consommateurs s'habituent à des sites clairs et fuient les plateformes obsolètes.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-amber-800 font-medium flex items-center gap-1.5">
              <Scale className="w-4 h-4 shrink-0 text-amber-700" />
              <span>Le nouveau standard de crédibilité digitale</span>
            </div>
          </div>

        </div>

        {/* Interactive Loss Calculator Widget */}
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-10 shadow-xl border border-stone-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-wider uppercase">
                <Users className="w-4 h-4" />
                <span>Simulateur d'impact pour votre entreprise</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-snug">
                Combien de clients passez-vous sous silence chaque mois ?
              </h3>
              <p className="text-stone-300 text-sm leading-relaxed">
                En France, près de 12 millions de personnes vivent avec une limitation (troubles visuels légers à sévères, 
                arthrose, daltonisme, presbytie). Estimez votre trafic mensuel pour visualiser l'impact d'un site inaccessible.
              </p>

              {/* Slider for monthly traffic */}
              <div className="pt-2 space-y-2">
                <div className="flex justify-between text-xs text-stone-300">
                  <span>Trafic mensuel estimé :</span>
                  <span className="font-bold text-amber-300 text-sm">{estimatedMonthlyVisitors.toLocaleString('fr-FR')} visites / mois</span>
                </div>
                <input
                  type="range"
                  min="300"
                  max="10000"
                  step="100"
                  value={estimatedMonthlyVisitors}
                  onChange={(e) => setEstimatedMonthlyVisitors(Number(e.target.value))}
                  className="w-full accent-amber-500 bg-stone-700 h-2 rounded-lg cursor-pointer"
                  aria-label="Trafic mensuel estimé"
                />
                <div className="flex justify-between text-[11px] text-stone-400">
                  <span>300 visites (petit commerce)</span>
                  <span>3 000 visites (restaurant prisé)</span>
                  <span>10 000+ visites</span>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="lg:col-span-6 bg-stone-800/80 p-6 sm:p-8 rounded-2xl border border-stone-700/80 space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-700">
                  <div className="text-xs text-stone-400">Visiteurs freinés / mois</div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-rose-400 mt-1">
                    ~{estimatedLostVisitors.toLocaleString('fr-FR')}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1">soit 20% de votre audience</div>
                </div>

                <div className="p-4 rounded-xl bg-stone-900/90 border border-stone-700">
                  <div className="text-xs text-stone-400">Réservations ou devis manqués</div>
                  <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mt-1">
                    {estimatedLostConversions} à {estimatedLostConversions * 3}
                  </div>
                  <div className="text-[11px] text-stone-400 mt-1">contacts potentiels / mois</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <p className="text-xs text-stone-300 leading-snug">
                  Une refonte accessible transforme immédiatement ces visiteurs perdus en clients fidèles.
                </p>
                <button
                  onClick={onOpenAudit}
                  className="w-full sm:w-auto shrink-0 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-all shadow-md cursor-pointer"
                >
                  <span>Tester mon site gratuitement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
