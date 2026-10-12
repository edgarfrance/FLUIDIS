import React, { useEffect } from 'react';
import { ArrowLeft, Scale, ShieldCheck, Building, Globe, Mail, Phone, ExternalLink } from 'lucide-react';

interface MentionsLegalesProps {
  onBackToHome: () => void;
  onNavigateTo?: (page: string) => void;
}

export const MentionsLegales: React.FC<MentionsLegalesProps> = ({ onBackToHome, onNavigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Mentions Légales | Amblia Web - EI EDGAR DUPRAT";
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

        {/* En-tête de la page */}
        <header className="space-y-4 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-stone-600" />
            <span>Informations Légales Réglementaires</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Mentions Légales
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-3xl">
            Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la Confiance dans l'Économie Numérique (LCEN), 
            il est porté à la connaissance des utilisateurs et visiteurs du site <strong>ambliaweb.com</strong> les présentes mentions légales complètes.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-stone-500 pt-2 border-t border-stone-200/60">
            <div>Dernière mise à jour : <strong>12 octobre 2026</strong></div>
            <div>·</div>
            <div>Statut : <strong>Entreprise Individuelle</strong></div>
            <div>·</div>
            <div>Régime fiscal : <strong>TVA non applicable (art. 293 B du CGI)</strong></div>
          </div>
        </header>

        {/* Corps des Mentions Légales */}
        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">

          {/* 1. Éditeur */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Building className="w-5 h-5 text-amber-600 shrink-0" />
              <span>1. Éditeur du Site Internet</span>
            </h2>

            <p>
              Le site internet accessible à l'adresse URL <strong>https://ambliaweb.com</strong> est édité et exploité par :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 text-xs sm:text-sm">
              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Dénomination Commerciale</span>
                <strong className="text-stone-900 font-semibold text-base">Amblia Web (Amblia)</strong>
              </div>

              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Forme Juridique</span>
                <strong className="text-stone-900 font-semibold">Entreprise Individuelle (EI)</strong>
              </div>

              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Exploitant et Dirigeant</span>
                <strong className="text-stone-900 font-semibold">EDGAR DUPRAT</strong>
              </div>

              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Directeur de la Publication</span>
                <strong className="text-stone-900 font-semibold">Edgar Duprat</strong>
              </div>

              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Courriel de Contact</span>
                <a href="mailto:contact@ambliaweb.com" className="text-stone-900 font-medium underline hover:text-amber-700">
                  contact@ambliaweb.com
                </a>
              </div>

              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Téléphone Professionnel</span>
                <a href="tel:0695584056" className="text-stone-900 font-medium underline hover:text-amber-700">
                  06 95 58 40 56
                </a>
              </div>

              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Immatriculation</span>
                <span className="text-stone-800">Inscrit au Registre National des Entreprises (RNE)</span>
              </div>

              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Régime Fiscal TVA</span>
                <span className="text-stone-800">Franchise en base de TVA (Art. 293 B du Code Général des Impôts)</span>
              </div>
            </div>

            <p className="text-xs text-stone-500">
              L'éditeur est joignable du lundi au vendredi de 9h00 à 19h00 par téléphone au 06 95 58 40 56 ou par messagerie électronique.
            </p>
          </section>

          {/* 2. Hébergement */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Globe className="w-5 h-5 text-amber-600 shrink-0" />
              <span>2. Prestataire d'Hébergement</span>
            </h2>

            <p>
              Le site <strong>ambliaweb.com</strong> est hébergé sur les infrastructures haute disponibilité de la société :
            </p>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 text-xs sm:text-sm space-y-2">
              <div><strong>Hébergeur :</strong> Vercel Inc.</div>
              <div><strong>Siège social :</strong> 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</div>
              <div>
                <strong>Site internet officiel :</strong>{' '}
                <a 
                  href="https://vercel.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-800 underline inline-flex items-center gap-1 hover:text-amber-950"
                >
                  <span>https://vercel.com</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="text-xs text-stone-500 pt-1">
                L'infrastructure Vercel assure la diffusion des contenus via un réseau mondial de distribution (Edge Network CDN) 
                avec protocole chiffré SSL/TLS 1.3 garantissant l'intégrité et la confidentialité des échanges de données.
              </div>
            </div>
          </section>

          {/* 3. Activité et Services */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-600 shrink-0" />
              <span>3. Activité de l'Entreprise et Tarification</span>
            </h2>

            <p>
              <strong>Amblia Web</strong> propose des prestations de conseil, conception technique, refonte ergonomique 
              et mise en conformité avec les standards internationaux d'accessibilité numérique (WCAG 2.2 et RGAA) 
              au profit d'entreprises, commerces de proximité, restaurants et PME.
            </p>

            <p>
              Tous les tarifs mentionnés sur le site sont exprimés en <strong>Euros Toutes Taxes Comprises (TTC)</strong>. 
              En application de l'article 293 B du Code Général des Impôts, la TVA n'est pas applicable sur les factures émises 
              par l'EI EDGAR DUPRAT. Tout devis personnalisé fait l'objet d'un accord écrit préalable avant tout début d'exécution.
            </p>
          </section>

          {/* 4. Propriété intellectuelle */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              4. Propriété Intellectuelle et Droits Réservés
            </h2>

            <p>
              La structure générale du site <strong>ambliaweb.com</strong>, ainsi que l'ensemble des textes, photographies, 
              marques déposées ou d'usage, logotypes, charte graphique, maquettes de démonstration, modules interactifs, 
              codes sources et feuilles de styles sont la propriété exclusive de l'<strong>EI EDGAR DUPRAT</strong>, 
              sauf mention contraire explicite.
            </p>

            <p>
              Toute reproduction, représentation, diffusion, adaptation ou exploitation, totale ou partielle, 
              par quelque procédé que ce soit, sans l'accord exprès, préalable et écrit d'Edgar Duprat, est formellement interdite 
              au sens des articles L.122-4, L.335-2 et suivants du Code de la Propriété Intellectuelle et constitue une contrefaçon 
              passible de sanctions civiles et pénales.
            </p>
          </section>

          {/* 5. Responsabilité et Liens Hypertextes */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              5. Limitation de Responsabilité et Liens Hypertextes
            </h2>

            <p>
              Les informations, simulateurs et estimations fournis sur le site ambliaweb.com sont communiqués à titre indicatif 
              pour aider les dirigeants d'entreprises à appréhender les enjeux d'ergonomie et de la Directive Européenne sur l'Accessibilité. 
              Bien qu'Amblia Web s'efforce de maintenir ces informations à jour, elle ne saurait être tenue responsable des erreurs fortuites, 
              omissions ou des conséquences de l'utilisation de ces données sans audit technique préalable approfondi.
            </p>

            <p>
              Des liens hypertextes peuvent renvoyer vers des sites tiers (ex. plateformes gouvernementales, législation européenne). 
              L'EI EDGAR DUPRAT n'exerçant aucun contrôle éditorial sur ces ressources externes, elle décline toute responsabilité quant à leurs contenus.
            </p>
          </section>

          {/* 6. Droit applicable et litiges */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              6. Droit Applicable et Règlement des Différends
            </h2>

            <p>
              Le présent site internet et ses mentions légales sont régis et interprétés conformément au <strong>droit français</strong>.
            </p>

            <p>
              En cas de réclamation ou de désaccord relatif à l'interprétation ou l'exécution d'une prestation, le client s'engage à contacter 
              en priorité Amblia Web à l'adresse <strong>contact@ambliaweb.com</strong> afin de rechercher une issue amiable.
            </p>

            <p>
              Conformément aux articles L.616-1 et R.616-1 du Code de la consommation, les clients consommateurs peuvent recourir gratuitement 
              à un dispositif de médiation de la consommation ou utiliser la plateforme européenne de règlement en ligne des litiges : 
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-amber-800 underline ml-1">
                https://ec.europa.eu/consumers/odr
              </a>.
            </p>

            <p className="text-xs text-stone-500 pt-2">
              À défaut d'accord amiable, les tribunaux français compétents seront seuls habilités à trancher le litige.
            </p>
          </section>

        </div>

        {/* Liens de bas de page */}
        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-stone-900 text-white hover:bg-stone-800 font-semibold text-xs transition-all shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" />
            <span>Retourner à l'accueil Amblia Web</span>
          </button>

          {onNavigateTo && (
            <div className="flex items-center gap-4 text-xs text-stone-600">
              <button 
                onClick={() => onNavigateTo('politique-confidentialite')}
                className="hover:text-stone-950 underline underline-offset-4 cursor-pointer"
              >
                Politique de Confidentialité
              </button>
              <span>·</span>
              <button 
                onClick={() => onNavigateTo('declaration-accessibilite')}
                className="hover:text-stone-950 underline underline-offset-4 cursor-pointer"
              >
                Déclaration d'Accessibilité
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
