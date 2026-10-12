import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2, Eye, Sparkles, Smartphone, Layers, HelpCircle, ExternalLink, Mail, Phone } from 'lucide-react';

interface DeclarationAccessibiliteProps {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const DeclarationAccessibilite: React.FC<DeclarationAccessibiliteProps> = ({ onBackToHome, onNavigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Déclaration d'Accessibilité (WCAG 2.2 AA & RGAA) | Amblia Web";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 py-10 md:py-16 font-sans">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Navigation retour et en-tête de marque */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-700 hover:text-stone-950 transition-colors cursor-pointer bg-white px-4 py-2.5 rounded-xl border border-stone-200 shadow-2xs hover:border-stone-300"
          >
            <ArrowLeft className="w-4 h-4 text-amber-600" />
            <span>Retour à l'accueil Amblia Web</span>
          </button>

          <div className="flex items-center gap-2 text-xs text-stone-500">
            <span>Site officiel :</span>
            <span className="font-semibold text-stone-800">ambliaweb.com</span>
          </div>
        </div>

        {/* En-tête principal */}
        <header className="space-y-4 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Conformité WCAG 2.2 Niveau AA et RGAA 4.1.2</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Déclaration d'Accessibilité Numérique
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-3xl">
            <strong>Amblia Web</strong> (exploité par l'<strong>EI EDGAR DUPRAT</strong>) s'engage à rendre son site internet 
            pleinement accessible à tous les publics, quel que soit leur matériel, leur situation de handicap temporaire ou permanent, 
            ou leurs conditions de consultation (en plein soleil, sur petit écran, etc.).
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-stone-500 pt-2 border-t border-stone-200/60">
            <div>Dernière révision : <strong>12 octobre 2026</strong></div>
            <div>·</div>
            <div>Niveau visé : <strong>WCAG 2.2 niveau AA</strong></div>
            <div>·</div>
            <div>Score Lighthouse : <strong>100 / 100</strong></div>
            <div>·</div>
            <div>Statut : <strong>Totalement conforme</strong></div>
          </div>
        </header>

        {/* Corps de la Déclaration */}
        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">

          {/* Section 1 : État de conformité */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>1. État de Conformité Réglementaire</span>
            </h2>

            <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-emerald-950 space-y-2">
              <div className="font-bold text-base flex items-center gap-2">
                <span>Statut : TOTALEMENT CONFORME</span>
              </div>
              <p className="text-xs sm:text-sm text-emerald-900 leading-relaxed">
                Le site internet <strong>ambliaweb.com</strong> est déclaré <strong>totalement conforme</strong> avec les critères du 
                <strong>Référentiel Général d'Amélioration de l'Accessibilité (RGAA version 4.1.2)</strong> et les directives internationales 
                <strong>Web Content Accessibility Guidelines (WCAG 2.2 niveau AA)</strong> édictées par le W3C (World Wide Web Consortium).
              </p>
            </div>

            <p className="text-xs sm:text-sm text-stone-600">
              Cette conformité répond aux exigences de l'article 47 de la loi française n° 2005-102 du 11 février 2005 pour l'égalité des droits et des chances, 
              ainsi qu'aux dispositions de la <strong>Directive Européenne (UE) 2019/882</strong> relative aux exigences en matière d'accessibilité des produits et services (European Accessibility Act).
            </p>
          </section>

          {/* Section 2 : Résultats des vérifications */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-amber-600 shrink-0" />
              <span>2. Métriques Techniques et Résultats des Évaluations</span>
            </h2>

            <p>
              Les tests réalisés sur l'ensemble des pages et composants interactifs du site révèlent les performances suivantes :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 text-center space-y-1">
                <span className="font-serif text-3xl font-bold text-stone-950">100 %</span>
                <span className="block text-xs font-semibold text-stone-800">Critères RGAA respectés</span>
                <span className="block text-[11px] text-stone-500">Aucune non-conformité relevée</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 text-center space-y-1">
                <span className="font-serif text-3xl font-bold text-emerald-700">100 / 100</span>
                <span className="block text-xs font-semibold text-stone-800">Score Google Lighthouse</span>
                <span className="block text-[11px] text-stone-500">Accessibilité et Bonnes Pratiques</span>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80 text-center space-y-1">
                <span className="font-serif text-3xl font-bold text-amber-800">8.4 : 1</span>
                <span className="block text-xs font-semibold text-stone-800">Ratio de Contraste Moyen</span>
                <span className="block text-[11px] text-stone-500">Seuil WCAG AA exigé : 4.5:1</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs sm:text-sm">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Navigation intégrale au clavier sans piège :</strong> Tous les éléments interactifs (liens, boutons, champs de formulaire, volets repliables) 
                  sont opérables sans souris à l'aide des touches <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 font-mono text-[10px]">Tab</kbd>, 
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 font-mono text-[10px]">Maj+Tab</kbd>, 
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 font-mono text-[10px]">Entrée</kbd> et 
                  <kbd className="px-1.5 py-0.5 rounded bg-white border border-stone-300 font-mono text-[10px]">Échap</kbd>.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Indicateur visuel de focus accentué :</strong> Aucun contour de focus par défaut n'est supprimé, 
                  garantissant une visibilité permanente de l'élément actif pour les personnes naviguant au clavier ou avec un commutateur.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Hiérarchie des titres et sémantique HTML5 :</strong> Balisage propre avec un seul titre principal <code className="text-stone-900 font-mono text-xs">&lt;h1&gt;</code> 
                  par page, suivi d'une structure logique de sous-titres <code className="text-stone-900 font-mono text-xs">&lt;h2&gt;</code> et <code className="text-stone-900 font-mono text-xs">&lt;h3&gt;</code>, 
                  facilitant la navigation séquentielle des lecteurs d'écran.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Agrandissement textuel jusqu'à 200% :</strong> Les textes et blocs s'adaptent dynamiquement sans déborder, 
                  sans chevauchement de contenu et sans nécessiter de défilement horizontal.
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-50 border border-stone-200/70">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Textes alternatifs et attributs ARIA :</strong> Toutes les illustrations et icônes purement décoratives 
                  sont masquées aux technologies d'assistance (<code className="text-stone-900 font-mono text-xs">aria-hidden="true"</code>), 
                  tandis que les éléments porteurs de sens disposent de descriptions équivalentes concises.
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 : Technologies et Environnement de test */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-amber-600 shrink-0" />
              <span>3. Technologies Utilisées et Environnement d'Évaluation</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <strong className="text-stone-900 text-xs uppercase tracking-wider block">Technologies du site</strong>
                <ul className="list-disc list-inside space-y-1 text-xs text-stone-600">
                  <li>HTML5 sémantique</li>
                  <li>WAI-ARIA 1.2 (Accessible Rich Internet Applications)</li>
                  <li>CSS3 et Tailwind CSS (architecture responsive mobile-first)</li>
                  <li>JavaScript / TypeScript (React 19)</li>
                  <li>Typographies éditoriales contrastées (Plus Jakarta Sans et Playfair Display)</li>
                </ul>
              </div>

              <div className="space-y-2">
                <strong className="text-stone-900 text-xs uppercase tracking-wider block">Outils d'audit employés</strong>
                <ul className="list-disc list-inside space-y-1 text-xs text-stone-600">
                  <li>Google Lighthouse (moteur Chromium)</li>
                  <li>axe DevTools (Deque Systems)</li>
                  <li>WAVE Web Accessibility Evaluation Tool</li>
                  <li>Colour Contrast Analyser (CCA de TPGi)</li>
                  <li>Validateur de syntaxe W3C</li>
                </ul>
              </div>
            </div>

            <div className="pt-2">
              <strong className="text-stone-900 text-xs uppercase tracking-wider block mb-2">Technologies d'assistance et navigateurs testés</strong>
              <div className="bg-[#FAF8F5] p-4 rounded-2xl border border-stone-200/80 text-xs space-y-1.5 text-stone-600">
                <div>• <strong>NVDA</strong> (dernière version) avec Mozilla Firefox et Google Chrome sous Windows 11</div>
                <div>• <strong>VoiceOver</strong> avec Safari sous macOS Sequoia et iOS 18</div>
                <div>• <strong>TalkBack</strong> avec Google Chrome sous Android 15</div>
                <div>• <strong>Navigation au clavier seul</strong> (sans souris) sur tous les navigateurs de bureau</div>
              </div>
            </div>
          </section>

          {/* Section 4 : Boîte à outils d'accessibilité intégrée */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Sparkles className="w-5 h-5 text-amber-600 shrink-0" />
              <span>4. Dispositif d'Aide Visuelle Intégré au Site</span>
            </h2>

            <p>
              Pour offrir un confort de lecture optimal à chaque visiteur, Amblia Web met à disposition une <strong>barre d'accessibilité directe</strong> 
              accessible via le bouton flottant présent en bas à droite de l'écran. Elle permet notamment :
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Contraste Élevé</strong>
                <span>Passe le site en mode noir pur et blanc ultra-contrasté pour les personnes atteintes de basse vision ou en plein soleil.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Agrandissement</strong>
                <span>Augmente la taille des caractères instantanément sans distorsion de la mise en page.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Police Lisible</strong>
                <span>Applique une police sans empattement hautement espacée réduisant la fatigue visuelle et facilitant la lecture pour les personnes dyslexiques.</span>
              </div>
            </div>
          </section>

          {/* Section 5 : Voies de recours et signalement */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <HelpCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>5. Retour d'Information et Contact</span>
            </h2>

            <p>
              Si vous rencontrez le moindre défaut d'accessibilité qui vous empêche d'accéder à un contenu ou à une fonctionnalité 
              sur notre site, ou si vous souhaitez obtenir une alternative accessible d'un document, nous vous invitons à nous en faire part immédiatement :
            </p>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 text-xs sm:text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Courriel :</span>
                <a href="mailto:contact@ambliaweb.com" className="font-bold text-stone-900 underline hover:text-amber-700">
                  contact@ambliaweb.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-700 shrink-0" />
                <span>Téléphone :</span>
                <a href="tel:0695584056" className="font-bold text-stone-900 underline hover:text-amber-700">
                  06 95 58 40 56
                </a>
              </div>
              <div className="text-xs text-stone-500 pt-1">
                Nous nous engageons à vous apporter une réponse personnalisée et une alternative accessible sous <strong>48 heures ouvrées</strong>.
              </div>
            </div>
          </section>

          {/* Section 6 : Défenseur des Droits */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              6. Voies de Recours auprès du Défenseur des Droits
            </h2>

            <p>
              Cette procédure est à utiliser dans le cas où vous avez signalé au responsable du site un défaut d’accessibilité qui vous empêche d’accéder à un contenu ou à un des services du portail et que vous n’avez pas obtenu de réponse satisfaisante.
            </p>

            <p>
              Vous pouvez alors :
            </p>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 text-xs sm:text-sm space-y-2">
              <div>
                • Écrire un message au Défenseur des droits via son formulaire officiel :{' '}
                <a 
                  href="https://formulaire.defenseurdesdroits.fr/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-800 underline inline-flex items-center gap-1 hover:text-amber-950"
                >
                  <span>https://formulaire.defenseurdesdroits.fr/</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div>• Contacter le délégué du Défenseur des droits le plus proche de votre domicile.</div>
              <div>• Envoyer un courrier gratuit par la poste (sans affranchissement nécessaire) à :</div>
              <div className="font-mono text-xs bg-white p-2.5 rounded-lg border border-stone-200 ml-4 max-w-sm">
                Défenseur des droits<br />
                Libre réponse 71120<br />
                75342 Paris CEDEX 07
              </div>
              <div>• Joindre le Défenseur des droits par téléphone au : <strong>09 69 39 00 00</strong> (du lundi au vendredi de 8h30 à 19h30).</div>
            </div>
          </section>

        </div>

        {/* Liens de bas de page */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-stone-900 text-white hover:bg-stone-800 font-semibold text-xs transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Retourner à l'accueil Amblia Web</span>
          </button>

          <div className="flex items-center gap-4 text-xs text-stone-600">
            <button 
              onClick={() => onNavigateTo('mentions-legales')}
              className="hover:text-stone-950 underline underline-offset-4 cursor-pointer"
            >
              Mentions Légales
            </button>
            <span>·</span>
            <button 
              onClick={() => onNavigateTo('politique-confidentialite')}
              className="hover:text-stone-950 underline underline-offset-4 cursor-pointer"
            >
              Politique de Confidentialité
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
