import React, { useState } from 'react';
import { CheckCircle2, AlertTriangle, ArrowRight, Gauge, Sparkles } from 'lucide-react';
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

  const answeredCount = [q1, q2, q3, q4].filter(v => v !== null).length;
  const issuesDetected = [q1 === false, q2 === false, q3 === false, q4 === false].filter(Boolean).length;

  const handleApplyToForm = () => {
    onPreFillForm(selectedSector, {
      mobileEasy: q1 ?? false,
      contrastGood: q2 ?? false,
      accessibilityDeclaration: q3 ?? false,
      fastLoading: q4 ?? false,
    });
  };

  return (
    <section className="py-16 md:py-24 bg-white border-y border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
            Répondez à ces 4 questions rapides pour estimer le risque d'inaccessibilité de votre vitrine web.
          </p>
        </div>

        {/* Sector picker */}
        <div className="mb-8">
          <label className="block text-xs font-semibold uppercase tracking-wider text-stone-500 mb-2 text-center">
            Sélectionnez votre type d'activité :
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {[
              { id: 'restaurant', label: '🍽️ Restaurant / Bar' },
              { id: 'commerce', label: '🛍️ Commerce de détail' },
              { id: 'services', label: '🏢 PME & Services' },
              { id: 'artisan', label: '🔨 Artisanat / Métiers' },
            ].map(sector => (
              <button
                key={sector.id}
                onClick={() => setSelectedSector(sector.id as ActivitySector)}
                className={`py-2.5 px-3 rounded-xl border text-center font-medium transition-all cursor-pointer ${
                  selectedSector === sector.id
                    ? 'bg-stone-900 text-white border-stone-900 shadow-sm'
                    : 'bg-[#FAF8F5] text-stone-700 border-stone-200 hover:border-stone-300'
                }`}
              >
                {sector.label}
              </button>
            ))}
          </div>
        </div>

        {/* Questions Grid */}
        <div className="space-y-4 bg-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-stone-200">
          
          {/* Question 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div>
              <div className="text-sm font-semibold text-stone-900">
                1. Vos tarifs ou vos menus sont-ils lisibles en direct sur smartphone (sans télécharger de PDF) ?
              </div>
              <div className="text-xs text-stone-500">Les PDF sur mobile font fuir 60% des visiteurs instantanément.</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setQ1(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  q1 === true ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                Oui, direct en ligne
              </button>
              <button
                onClick={() => setQ1(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  q1 === false ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                Non / En PDF / Pas sûr
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div>
              <div className="text-sm font-semibold text-stone-900">
                2. Les contrastes sont-ils nets, même pour une personne de plus de 50 ans ou au soleil ?
              </div>
              <div className="text-xs text-stone-500">Norme WCAG : minimum 4.5:1 entre texte et arrière-plan.</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setQ2(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  q2 === true ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                Oui, très contrasté
              </button>
              <button
                onClick={() => setQ2(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  q2 === false ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                Non / Couleurs claires
              </button>
            </div>
          </div>

          {/* Question 3 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-stone-200">
            <div>
              <div className="text-sm font-semibold text-stone-900">
                3. Votre site possède-t-il une déclaration d'accessibilité et les mentions 2025 ?
              </div>
              <div className="text-xs text-stone-500">Exigence issue de la directive européenne sur l'accessibilité.</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setQ3(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  q3 === true ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                Oui, présente
              </button>
              <button
                onClick={() => setQ3(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  q3 === false ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                Non / Pas à jour
              </button>
            </div>
          </div>

          {/* Question 4 */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="text-sm font-semibold text-stone-900">
                4. Un visiteur peut-il vous appeler ou réserver en 1 seul clic depuis son smartphone ?
              </div>
              <div className="text-xs text-stone-500">Numéro cliquable natif sans devoir faire de copier-coller.</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setQ4(true)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  q4 === true ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                Oui, en 1 clic
              </button>
              <button
                onClick={() => setQ4(false)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  q4 === false ? 'bg-rose-600 text-white border-rose-600' : 'bg-white text-stone-700 border-stone-300'
                }`}
              >
                Non / Formulaire long
              </button>
            </div>
          </div>

        </div>

        {/* Diagnosis Result Box */}
        {answeredCount > 0 && (
          <div className="mt-6 p-6 rounded-2xl bg-stone-900 text-stone-100 border border-stone-800 space-y-4 animate-in fade-in duration-300">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  Diagnostic préliminaire ({answeredCount}/4 questions répondues)
                </div>
                <div className="font-serif text-xl sm:text-2xl font-bold text-white mt-1">
                  {issuesDetected > 0
                    ? `${issuesDetected} point(s) d'optimisation critique(s) identifié(s)`
                    : "Votre site semble sur la bonne voie ! Vérifions les détails techniques."}
                </div>
                <div className="text-xs text-stone-300 mt-1">
                  Potentiel de gain estimé : <strong className="text-amber-300">+20% à +35% de prises de contact</strong> après refonte accessible.
                </div>
              </div>

              <button
                onClick={handleApplyToForm}
                className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-semibold text-xs inline-flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
              >
                <span>Demander mon audit complet offert</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
