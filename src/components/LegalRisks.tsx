import React from 'react';
import { ShieldAlert, AlertOctagon, Scale, FileSpreadsheet, Ban, ArrowRight, ShieldCheck } from 'lucide-react';

interface LegalRisksProps {
  onOpenAudit: () => void;
}

export const LegalRisks: React.FC<LegalRisksProps> = ({ onOpenAudit }) => {
  return (
    <section id="risques" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-900 text-xs font-semibold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5 text-rose-700" />
            <span>Cadre Réglementaire et Sanctions Légales</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Quels risques encourez-vous en cas de non-respect de la loi ?
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Avec l'entrée en application de la Directive Européenne sur l'Accessibilité (EAA) transposée en droit français, 
            l'accessibilité numérique n'est plus une simple recommandation technique : elle devient un enjeu juridique surveillé.
          </p>
        </div>

        {/* 4 Risk Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Risk 1: Financial Fines */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs hover:border-rose-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center">
                <AlertOctagon className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-rose-800">
                Amendes financières
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Jusqu'à 25 000 € d'amende
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Les sanctions financières en France peuvent atteindre <strong>25 000 € par service</strong> (renouvelables chaque année). 
                Les autorités de contrôle (DGCCRF, Arcom) disposent du pouvoir d'infliger des astreintes journalières jusqu'à mise en conformité complète.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-medium text-rose-700">
              Sanction renouvelable annuellement
            </div>
          </div>

          {/* Risk 2: Mandatory Statement Default */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                <Scale className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                Défaut de déclaration
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Amendes directes de 2 000 € à 20 000 €
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                L'absence de mention du statut d'accessibilité sur votre page d'accueil ou l'omission d'une déclaration conforme 
                constitue une infraction directe, sanctionnée indépendamment de la taille de votre structure.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-medium text-amber-800">
              Contrôlable immédiatement en ligne
            </div>
          </div>

          {/* Risk 3: Tender Disqualification */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center">
                <Ban className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Perte de contrats
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Exclusion des appels d'offres
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Les collectivités territoriales, administrations publiques et grands donneurs d'ordre intègrent désormais 
                la conformité RGAA / WCAG comme <strong>critère éliminatoire obligatoire</strong> dans leurs consultations.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-medium text-stone-700">
              Critère RSE et achats responsables
            </div>
          </div>

          {/* Risk 4: Litigation & Reputation */}
          <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-11 h-11 rounded-xl bg-stone-100 text-stone-700 flex items-center justify-center">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-stone-600">
                Contentieux et image
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Mises en demeure et avis négatifs
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hausse des signalements par des collectifs d'usagers et risque de mise en cause pour discrimination d'accès au service. 
                Une mauvaise publicité numérique impacte directement vos avis Google et votre crédibilité locale.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-stone-100 text-[11px] font-medium text-stone-700">
              Impact direct sur votre réputation
            </div>
          </div>

        </div>

        {/* Protection Reassurance Box */}
        <div className="bg-stone-900 text-stone-100 rounded-2xl p-7 sm:p-9 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>Votre protection clé en main</span>
            </div>
            <div className="font-serif text-xl sm:text-2xl font-bold text-white">
              Nous sécurisons l'intégralité de votre site : technique, visuel et mentions légales
            </div>
            <p className="text-xs text-stone-300 max-w-2xl leading-relaxed">
              Nos refontes intègrent systématiquement la déclaration d'accessibilité officielle, la mise aux normes WCAG 2.2 AA et les mentions requises. Vous êtes 100% en règle sans complexité juridique.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Vérifier mon exposition légale gratuitement</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
