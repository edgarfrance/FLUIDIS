import React from 'react';
import { Users, TrendingUp, Sparkles, HeartHandshake, ShieldCheck, Zap, ArrowRight } from 'lucide-react';

interface BenefitsProps {
  onOpenAudit: () => void;
}

export const Benefits: React.FC<BenefitsProps> = ({ onOpenAudit }) => {
  return (
    <section id="benefices" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
            <span>Retour sur Investissement & Impact Direct</span>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Benefit 1 */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 border border-amber-200/60 text-amber-900 flex items-center justify-center">
                <Users className="w-7 h-7 text-amber-700" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Audience & Inclusivité
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
              <span>Publics seniors & PMR conquis</span>
              <span className="font-serif font-bold text-base text-stone-900">+20%</span>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-stone-100 border border-stone-200 text-stone-800 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-stone-700" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Image & Réputation
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Une image de marque moderne, sobre et rassurante
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Votre site web est votre vitrine principale. Une esthétique épurée, inspirée de l'élégance de 
                <em>mabonneadresse.com</em>, projette instantanément le sérieux, l'exigence et le soin que vous mettez 
                dans votre propre métier. Fini les bricolages visuels qui dévalorisent vos prestations.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
              <span>Perception de confiance accrue</span>
              <span className="font-serif font-bold text-base text-stone-900">Immédiat</span>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 border border-emerald-200/60 text-emerald-900 flex items-center justify-center">
                <Zap className="w-7 h-7 text-emerald-700" />
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Conversion & Performance
              </div>

              <h3 className="font-serif text-2xl font-bold text-stone-900">
                Un site rapide qui convertit plus de visiteurs en réservations
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                Un code propre sans surplus se charge en moins d'une seconde. Les boutons d'appels et formulaires 
                sont pensés pour déclencher l'action en un minimum d'étapes. Moins d'abandons, plus d'appels téléphoniques, 
                plus de tables réservées et de demandes de devis qualifiées.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-700">
              <span>Hausse moyenne des demandes</span>
              <span className="font-serif font-bold text-base text-emerald-700">+34%</span>
            </div>
          </div>

        </div>

        {/* Real Case Studies / Testimonials Snippet */}
        <div className="bg-stone-900 text-stone-100 rounded-3xl p-8 sm:p-12 shadow-xl border border-stone-800">
          <div className="max-w-3xl mb-8 space-y-2">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
              Témoignage de commerçant
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              "Nos clients de plus de 50 ans nous disent enfin qu'ils arrivent à lire la carte !"
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 text-stone-300 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700 space-y-2">
              <div className="text-amber-400 font-serif font-bold text-base">Le Restaurant L'Atelier</div>
              <p className="text-stone-300 leading-relaxed text-xs">
                "Avant, notre carte était un vieux PDF de 8 Mo. La refonte sobre et contrastée a fait bondir nos réservations en ligne du midi de +40% en deux mois."
              </p>
              <div className="text-[11px] text-stone-400 font-medium">— Marc D., Restaurateur à Lyon</div>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700 space-y-2">
              <div className="text-amber-400 font-serif font-bold text-base">Optique & Vision Saint-Germain</div>
              <p className="text-stone-300 leading-relaxed text-xs">
                "En tant qu'opticien, avoir un site non accessible était une aberration. La nouvelle vitrine est d'une clarté exemplaire et notre image s'en trouve sublimée."
              </p>
              <div className="text-[11px] text-stone-400 font-medium">— Sophie V., Gérante de magasin</div>
            </div>

            <div className="p-4 rounded-xl bg-stone-800/60 border border-stone-700 space-y-2">
              <div className="text-amber-400 font-serif font-bold text-base">Cabinet d'Avocats R&M</div>
              <p className="text-stone-300 leading-relaxed text-xs">
                "La Directive européenne approchait et nous voulions être irréprochables. Refonte menée en 8 jours, sobre, élégante et 100% conforme."
              </p>
              <div className="text-[11px] text-stone-400 font-medium">— Julien M., Associé gérant</div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-400">
              Votre établissement mérite une vitrine claire et accessible.
            </span>
            <button
              onClick={onOpenAudit}
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Obtenir mon audit personnalisé gratuit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
