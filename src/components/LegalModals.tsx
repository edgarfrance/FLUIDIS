import React, { useEffect } from 'react';
import { X, ShieldCheck, Scale, FileText, CheckCircle2 } from 'lucide-react';

export type LegalModalType = 'mentions' | 'privacy' | 'accessibility' | null;

interface LegalModalsProps {
  activeModal: LegalModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="bg-[#FAF8F5] text-stone-900 w-full max-w-3xl max-h-[85vh] rounded-3xl shadow-2xl border border-stone-200 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-stone-200 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center">
              {activeModal === 'mentions' && <Scale className="w-5 h-5" />}
              {activeModal === 'privacy' && <ShieldCheck className="w-5 h-5" />}
              {activeModal === 'accessibility' && <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                {activeModal === 'mentions' && 'Mentions Légales'}
                {activeModal === 'privacy' && 'Politique de Confidentialité'}
                {activeModal === 'accessibility' && "Déclaration d'Accessibilité (WCAG 2.2 AA)"}
              </h3>
              <p className="text-xs text-stone-500">Amblia Web · ambliaweb.com</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-900 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Fermer la fenêtre"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-stone-700 leading-relaxed">
          
          {/* CONTENT: MENTIONS LÉGALES */}
          {activeModal === 'mentions' && (
            <div className="space-y-6">
              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">1. Éditeur du site</h4>
                <p>
                  Le site internet <strong>ambliaweb.com</strong> est édité par l'entreprise :
                </p>
                <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm space-y-1">
                  <div><strong>Dénomination commerciale :</strong> Amblia Web (Amblia)</div>
                  <div><strong>Structure juridique :</strong> Entreprise Individuelle (EI) EDGAR DUPRAT</div>
                  <div><strong>Responsable de la publication :</strong> Edgar Duprat</div>
                  <div><strong>Courriel :</strong> contact@ambliaweb.com</div>
                  <div><strong>Téléphone :</strong> 01 89 71 23 45</div>
                  <div><strong>Localisation :</strong> France métropolitaine</div>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">2. Hébergement</h4>
                <p>
                  Le site est hébergé par la société :
                </p>
                <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm space-y-1">
                  <div><strong>Hébergeur :</strong> Vercel Inc.</div>
                  <div><strong>Adresse :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</div>
                  <div><strong>Site web :</strong> <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline">https://vercel.com</a></div>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">3. Propriété intellectuelle</h4>
                <p>
                  L'ensemble des contenus, marques, logos, graphismes, textes, icônes et architectures présents sur le site <strong>ambliaweb.com</strong> sont la propriété exclusive de l'EI EDGAR DUPRAT ou font l'objet d'un droit d'utilisation concédé. Toute reproduction, représentation ou modification sans autorisation écrite préalable est strictement interdite.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">4. Activité</h4>
                <p>
                  Amblia Web propose des prestations de conseil, conception et refonte de sites internet, landing pages et interfaces numériques adaptées aux normes d'accessibilité (WCAG / RGAA) et aux impératifs d'ergonomie pour professionnels, commerces et PME.
                </p>
              </section>
            </div>
          )}

          {/* CONTENT: POLITIQUE DE CONFIDENTIALITÉ */}
          {activeModal === 'privacy' && (
            <div className="space-y-6">
              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">1. Engagement de protection des données (RGPD)</h4>
                <p>
                  Chez <strong>Amblia Web</strong> (EI EDGAR DUPRAT), nous accordons une importance primordiale au respect de votre vie privée et à la stricte conformité avec le Règlement Général sur la Protection des Données (RGPD n° 2016/679) et la loi Informatique et Libertés.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">2. Données personnelles collectées</h4>
                <p>
                  Dans le cadre d'une demande d'audit gratuit ou d'un devis via notre formulaire de contact, nous collectons uniquement les informations suivantes :
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2 text-stone-700">
                  <li>Votre Nom et Prénom</li>
                  <li>Le Nom de votre entreprise ou établissement</li>
                  <li>L'adresse URL de votre site web actuel</li>
                  <li>Votre adresse email professionnelle</li>
                  <li>Votre numéro de téléphone professionnel</li>
                  <li>Le secteur d'activité et vos précisions de projet</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">3. Finalité du traitement</h4>
                <p>
                  Ces informations sont strictement utilisées pour :
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2 text-stone-700">
                  <li>Réaliser l'analyse technique et le rapport d'audit gratuit de votre site.</li>
                  <li>Vous contacter sous 24h ouvrées pour vous restituer ce diagnostic et répondre à vos questions.</li>
                  <li>Établir un devis personnalisé si vous souhaitez faire appel à nos services.</li>
                </ul>
                <p className="text-xs font-semibold text-emerald-800 bg-emerald-50 p-3 rounded-lg border border-emerald-200">
                  Vos coordonnées ne sont jamais vendues, louées ni cédées à aucun tiers.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">4. Durée de conservation</h4>
                <p>
                  Les données de contact sont conservées pendant une durée maximale de 3 ans à compter du dernier contact émanant de votre part, puis supprimées définitivement.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">5. Vos droits (Accès, Rectification, Suppression)</h4>
                <p>
                  Conformément à la réglementation, vous bénéficiez à tout moment d'un droit d'accès, de rectification, de portabilité et de suppression de vos données personnelles. Pour exercer ce droit, adressez simplement un courriel à : <strong>contact@ambliaweb.com</strong>.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">6. Traceurs et Cookies</h4>
                <p>
                  Le site ambliaweb.com n'utilise aucun cookie publicitaire ni traceur intrusif. Seules des technologies d'affichage fonctionnelles requises pour l'exécution fluide du site sont mises en œuvre.
                </p>
              </section>
            </div>
          )}

          {/* CONTENT: DÉCLARATION D'ACCESSIBILITÉ */}
          {activeModal === 'accessibility' && (
            <div className="space-y-6">
              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">1. Déclaration de conformité</h4>
                <p>
                  <strong>Amblia Web</strong> s'engage à rendre ses services et son site internet accessibles à tous, conformément aux directives européennes et aux standards internationaux du W3C (Web Content Accessibility Guidelines - WCAG 2.2 niveau AA).
                </p>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs sm:text-sm font-medium text-emerald-900 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Statut : <strong>Totalement conforme</strong> aux règles WCAG 2.2 niveau AA.</span>
                </div>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">2. Dispositifs techniques déployés</h4>
                <ul className="list-disc list-inside space-y-1 text-xs sm:text-sm pl-2 text-stone-700">
                  <li><strong>Contrastes certifiés :</strong> Ratios de contraste supérieurs à 4.5:1 pour les textes courants et 7:1 pour les textes clés (fond lin doux #FAF8F5 et noir pierre #1C1917).</li>
                  <li><strong>Typographies éditoriales lisibles :</strong> Polices à empattement doux et sans-serif optimisées pour éviter la fatigue visuelle.</li>
                  <li><strong>Navigation clavier complète :</strong> Tous les éléments interactifs possèdent un indicateur de focus visible et sont manipulables sans souris.</li>
                  <li><strong>Balises WAI-ARIA :</strong> Lecteurs d'écran (NVDA, VoiceOver, JAWS) pris en charge avec descriptions complètes de chaque élément.</li>
                  <li><strong>Outils de confort intégrés :</strong> Barre d'accessibilité flottante permettant l'agrandissement de texte, le contraste renforcé et la police facilitée pour la dyslexie.</li>
                </ul>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">3. Cadre réglementaire 2025</h4>
                <p>
                  Cette déclaration atteste du respect des exigences de la Directive Européenne sur l'Accessibilité (EAA - Directive UE 2019/882) et de l'article 47 de la loi française n° 2005-102.
                </p>
              </section>

              <section className="space-y-2">
                <h4 className="font-serif text-lg font-bold text-stone-900">4. Retour d'information et contact</h4>
                <p>
                  Si vous constatez un défaut d'accessibilité vous empêchant d'accéder à un contenu ou à une fonctionnalité, vous pouvez contacter notre référent accessibilité :
                </p>
                <div className="p-4 rounded-xl bg-white border border-stone-200 text-xs sm:text-sm space-y-1">
                  <div><strong>Référent :</strong> Edgar Duprat</div>
                  <div><strong>Courriel :</strong> contact@ambliaweb.com</div>
                  <div><strong>Téléphone :</strong> 01 89 71 23 45</div>
                  <div><strong>Délai de réponse garanti :</strong> Sous 24 heures ouvrées</div>
                </div>
              </section>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-stone-100 border-t border-stone-200 flex items-center justify-between shrink-0">
          <span className="text-xs text-stone-500">Amblia Web · EI EDGAR DUPRAT</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
