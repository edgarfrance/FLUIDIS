import React, { useState } from 'react';
import { ArrowRight, Gauge, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';
import { ActivitySector } from '../types';

interface AuditSimulatorProps {
  onPreFillForm: (sector: ActivitySector, answers: any) => void;
}

export const AuditSimulator: React.FC<AuditSimulatorProps> = ({ onPreFillForm }) => {
  const [selectedSector, setSelectedSector] = useState<ActivitySector>('restaurant');
  const [q1, setQ1] = useState<boolean | null>(null);
  const [q2, setQ2] = useState<boolean | null>(null);
  const [q3, setQ3] = useState<boolean | null>(null);
  const [q4, setQ4] = useState<boolean | null>(null);

  // Sector-tailored questions content
  const sectorQuestions = {
    restaurant: {
      q1Title: "1. Vos cartes, menus et formules sont-ils lisibles directement sur smartphone (sans télécharger de PDF lourd) ?",
      q1Sub: "Les PDF sur mobile font fuir plus de 60% des clients cherchant où déjeuner ou dîner.",
      q1Yes: "Oui, consultable en ligne",
      q1No: "Non, en PDF ou pas sûr",
      q2Title: "2. Les contrastes de couleurs permettent-ils de lire votre carte en terrasse en plein soleil ?",
      q2Sub: "Textes bien sombres sur fond lin clair : indispensable pour les clients de plus de 45 ans.",
      q2Yes: "Oui, très contrasté",
      q2No: "Non, contrastes faibles",
      q3Title: "3. Votre site affiche-t-il les allergènes, les mentions obligatoires et la conformité d'accessibilité (Directive 2025) ?",
      q3Sub: "Une transparence totale qui rassure chaque convive et respecte les nouvelles normes.",
      q3Yes: "Oui, tout est à jour",
      q3No: "Non, à compléter",
      q4Title: "4. Un client peut-il réserver une table ou lancer un appel téléphonique en 1 seul clic ?",
      q4Sub: "Bouton d'appel ou de réservation directe au pouce, sans devoir chercher le numéro.",
      q4Yes: "Oui, en 1 clic direct",
      q4No: "Non, parcours complexe",
    },
    commerce: {
      q1Title: "1. Vos produits phares, horaires et prix sont-ils consultables directement sur mobile sans zoomer ?",
      q1Sub: "Une vitrine claire convertit immédiatement le passant en client en boutique.",
      q1Yes: "Oui, consultation fluide",
      q1No: "Non, difficile à lire",
      q2Title: "2. Les contrastes entre vos textes descriptifs et vos fonds de page sont-ils nets et reposants ?",
      q2Sub: "Norme WCAG : minimum 4.5:1 pour éviter la fatigue visuelle des acheteurs.",
      q2Yes: "Oui, contrastes nets",
      q2No: "Non, teintes trop claires",
      q3Title: "3. Votre vitrine intègre-t-elle les mentions légales et la conformité d'accessibilité 2025 ?",
      q3Sub: "Exigence européenne pour le commerce et gage de crédibilité immédiat.",
      q3Yes: "Oui, mentions présentes",
      q3No: "Non ou pas à jour",
      q4Title: "4. Un client peut-il trouver votre adresse, vos horaires ou vous contacter en un seul geste ?",
      q4Sub: "Itinéraire GPS et appel direct au pouce sans devoir copier-coller.",
      q4Yes: "Oui, en 1 clic",
      q4No: "Non, plusieurs étapes",
    },
    services: {
      q1Title: "1. La liste de vos prestations, expertises et tarifs indicatifs est-elle limpide sur mobile sans document à télécharger ?",
      q1Sub: "Un décideur pressé doit comprendre votre proposition de valeur en moins de 5 secondes.",
      q1Yes: "Oui, lisible de suite",
      q1No: "Non, document ou plaquette PDF",
      q2Title: "2. Vos textes évitent-ils le gris clair sur blanc pour garantir une lecture professionnelle ?",
      q2Sub: "Un bon contraste augmente le temps passé sur votre site et valorise votre sérieux.",
      q2Yes: "Oui, typographie sombre",
      q2No: "Non, nuances grises claires",
      q3Title: "3. Votre entreprise dispose-t-elle d'une déclaration d'accessibilité conforme à la Directive Européenne 2025 ?",
      q3Sub: "De plus en plus exigé dans les appels d'offres et les partenariats professionnels.",
      q3Yes: "Oui, conforme 2025",
      q3No: "Non, aucune déclaration",
      q4Title: "4. Un prospect peut-il demander un devis ou convenir d'un rendez-vous sans formulaire à rallonge ?",
      q4Sub: "Moins de friction = 3 fois plus de prises de contact qualifiées.",
      q4Yes: "Oui, formulaire court",
      q4No: "Non, formulaire lourd",
    },
    artisan: {
      q1Title: "1. Vos réalisations récentes, photos de chantiers et tarifs indicatifs s'affichent-ils instantanément sur smartphone ?",
      q1Sub: "Vos futurs clients veulent voir la qualité de votre savoir-faire sans attendre le chargement.",
      q1Yes: "Oui, chargement rapide",
      q1No: "Non, lent ou non optimisé",
      q2Title: "2. Les explications sont-elles écrites en grand et avec un fort contraste pour les particuliers ?",
      q2Sub: "Une lisibilité exemplaire met immédiatement en valeur votre rigueur artisanale.",
      q2Yes: "Oui, grand format net",
      q2No: "Non, polices trop petites",
      q3Title: "3. Votre site présente-t-il vos assurances, garanties décennales et mentions légales conformes ?",
      q3Sub: "La transparence juridique déclenche la signature de devis en toute confiance.",
      q3Yes: "Oui, garanties visibles",
      q3No: "Non, mentions absentes",
      q4Title: "4. Un client peut-il vous joindre ou envoyer une demande d'intervention d'un simple clic ?",
      q4Sub: "Appel direct immédiat sans devoir recopier votre numéro sur un papier.",
      q4Yes: "Oui, appel en 1 clic",
      q4No: "Non, pas de clic direct",
    },
  };

  const currentQuestions = sectorQuestions[selectedSector as keyof typeof sectorQuestions] || sectorQuestions.restaurant;

  const answers = [q1, q2, q3, q4];
  const answeredCount = answers.filter(v => v !== null).length;
  const issuesCount = answers.filter(v => v === false).length;
  const passedCount = answers.filter(v => v === true).length;

  // Dynamic calculated potential gain based on exact answers
  const calculateResult = () => {
    if (answeredCount === 0) return null;

    if (issuesCount === 0) {
      return {
        badge: "Excellent niveau de départ",
        badgeColor: "bg-emerald-950 text-emerald-400 border-emerald-800",
        title: "Votre site respecte les bases essentielles de l'ergonomie",
        gainText: "+5% à +12% de conversions supplémentaires",
        subText: "Une refonte apportera un gain sur la vitesse pure de chargement, le SEO local et la conformité légale 2025.",
        ctaLabel: "Vérifier les détails techniques gratuitement",
      };
    } else if (issuesCount === 1) {
      return {
        badge: "1 point de blocage détecté",
        badgeColor: "bg-amber-950 text-amber-400 border-amber-800",
        title: "Un frein significatif décourage une partie de vos visiteurs",
        gainText: "+15% à +20% de contacts ou réservations estimés",
        subText: "En éliminant ce point de friction sur mobile et contrastes, vos conversions augmentent rapidement.",
        ctaLabel: "Corriger ce point avec mon audit offert",
      };
    } else if (issuesCount === 2) {
      return {
        badge: "2 points de blocage critiques",
        badgeColor: "bg-amber-950 text-amber-400 border-amber-800",
        title: "Deux barrières importantes font fuir près de 20% de vos clients",
        gainText: "+25% à +35% de conversions estimées",
        subText: "La refonte accessible débloquera immédiatement les clients seniors et les mobinautes en situation de déplacement.",
        ctaLabel: "Demander mon audit pour débloquer ces 25%",
      };
    } else if (issuesCount === 3) {
      return {
        badge: "3 points de blocage majeurs",
        badgeColor: "bg-rose-950 text-rose-400 border-rose-800",
        title: "Votre site actuel pénalise lourdement votre acquisition client",
        gainText: "+35% à +45% de clients potentiels supplémentaires",
        subText: "Une part importante de vos visiteurs quitte votre site pour aller chez un concurrent plus lisible.",
        ctaLabel: "Planifier la refonte avec mon audit gratuit",
      };
    } else {
      return {
        badge: "Refonte prioritaire conseillée",
        badgeColor: "bg-rose-950 text-rose-400 border-rose-800",
        title: "Votre site actuel est en rupture avec les standards 2025",
        gainText: "+50% ou plus de réservations et devis",
        subText: "Mobile, contrastes, conformité et parcours client : repartir sur une base propre et sobre transformera vos résultats.",
        ctaLabel: "Demander mon audit complet d'urgence",
      };
    }
  };

  const dynamicResult = calculateResult();

  const handleApplyToForm = () => {
    onPreFillForm(selectedSector, {
      mobileEasy: q1 ?? false,
      contrastGood: q2 ?? false,
      accessibilityDeclaration: q3 ?? false,
      fastLoading: q4 ?? false,
      issuesCount,
      estimatedGain: dynamicResult?.gainText,
    });
  };

  return (
    <section className="py-12 md:py-24 bg-white border-y border-stone-200">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Gauge className="w-3.5 h-3.5 text-stone-600" />
            <span>Auto-Diagnostic en 30 Secondes</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900">
            Votre site actuel est-il prêt pour 2025 ?
          </h2>
          <p className="text-stone-600 text-sm max-w-xl mx-auto">
            Répondez à ces 4 questions adaptées à votre activité pour évaluer instantanément vos opportunités de gain.
          </p>
        </div>

        {/* Sector picker */}
        <div className="mb-8">
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 text-center">
            Sélectionnez votre secteur pour adapter le test :
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {[
              { id: 'restaurant', label: '🍽️ Restaurant et Bar' },
              { id: 'commerce', label: '🛍️ Commerce de détail' },
              { id: 'services', label: '🏢 PME et Services' },
              { id: 'artisan', label: '🔨 Artisanat et Métiers' },
            ].map(sector => (
              <button
                key={sector.id}
                onClick={() => {
                  setSelectedSector(sector.id as ActivitySector);
                  // Keep answers or let them re-evaluate
                }}
                className={`py-2.5 px-3 rounded-xl border text-center font-medium transition-all cursor-pointer ${
                  selectedSector === sector.id
                    ? 'bg-stone-900 text-white border-stone-900 shadow-xs'
                    : 'bg-[#FAF8F5] text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                {sector.label}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Grid */}
        <div className="space-y-4 bg-[#FAF8F5] p-5 sm:p-8 rounded-3xl border border-stone-200">
          
          {/* Question 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-stone-900">
                {currentQuestions.q1Title}
              </div>
              <div className="text-xs text-stone-500">{currentQuestions.q1Sub}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setQ1(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  q1 === true ? 'bg-emerald-600 text-white border-emerald-600 font-semibold' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {currentQuestions.q1Yes}
              </button>
              <button
                onClick={() => setQ1(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  q1 === false ? 'bg-rose-600 text-white border-rose-600 font-semibold' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {currentQuestions.q1No}
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-stone-900">
                {currentQuestions.q2Title}
              </div>
              <div className="text-xs text-stone-500">{currentQuestions.q2Sub}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setQ2(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  q2 === true ? 'bg-emerald-600 text-white border-emerald-600 font-semibold' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {currentQuestions.q2Yes}
              </button>
              <button
                onClick={() => setQ2(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  q2 === false ? 'bg-rose-600 text-white border-rose-600 font-semibold' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {currentQuestions.q2No}
              </button>
            </div>
          </div>

          {/* Question 3 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-stone-900">
                {currentQuestions.q3Title}
              </div>
              <div className="text-xs text-stone-500">{currentQuestions.q3Sub}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setQ3(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  q3 === true ? 'bg-emerald-600 text-white border-emerald-600 font-semibold' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {currentQuestions.q3Yes}
              </button>
              <button
                onClick={() => setQ3(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  q3 === false ? 'bg-rose-600 text-white border-rose-600 font-semibold' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {currentQuestions.q3No}
              </button>
            </div>
          </div>

          {/* Question 4 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="text-sm font-semibold text-stone-900">
                {currentQuestions.q4Title}
              </div>
              <div className="text-xs text-stone-500">{currentQuestions.q4Sub}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setQ4(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  q4 === true ? 'bg-emerald-600 text-white border-emerald-600 font-semibold' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {currentQuestions.q4Yes}
              </button>
              <button
                onClick={() => setQ4(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                  q4 === false ? 'bg-rose-600 text-white border-rose-600 font-semibold' : 'bg-white text-stone-700 border-stone-300 hover:bg-stone-50'
                }`}
              >
                {currentQuestions.q4No}
              </button>
            </div>
          </div>

        </div>

        {/* Dynamic Reactive Diagnosis Box */}
        {dynamicResult && (
          <div className="mt-6 p-5 sm:p-8 rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 space-y-4 animate-in fade-in duration-200">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${dynamicResult.badgeColor}`}>
                    {dynamicResult.badge}
                  </span>
                  <span className="text-xs text-stone-400">
                    ({answeredCount}/4 questions répondues)
                  </span>
                </div>

                <div className="font-serif text-xl sm:text-2xl font-bold text-white">
                  {dynamicResult.title}
                </div>

                <div className="text-sm text-stone-300">
                  Potentiel de gain calculé : <strong className="text-amber-300 font-semibold text-base">{dynamicResult.gainText}</strong>
                </div>

                <p className="text-xs text-stone-400 max-w-xl">
                  {dynamicResult.subText}
                </p>
              </div>

              <button
                onClick={handleApplyToForm}
                className="w-full sm:w-auto shrink-0 px-6 py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>{dynamicResult.ctaLabel}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
