import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, Eye, FileText, CheckCircle2, Mail, Phone, ExternalLink } from 'lucide-react';

interface PolitiqueConfidentialiteProps {
  onBackToHome: () => void;
  onNavigateTo: (page: string) => void;
}

export const PolitiqueConfidentialite: React.FC<PolitiqueConfidentialiteProps> = ({ onBackToHome, onNavigateTo }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = "Politique de Confidentialité | Amblia Web - Protection des Données et RGPD";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 py-10 md:py-16 font-sans">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
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

        {/* Header principal */}
        <header className="space-y-4 pb-8 mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            <span>Protection des Données Personnelles et RGPD</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Politique de Confidentialité
          </h1>

          <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-3xl">
            La présente politique de confidentialité a pour objet d'informer les visiteurs et clients du site <strong>ambliaweb.com</strong> de 
            la manière dont leurs données à caractère personnel sont collectées, traitées et protégées par l'<strong>EI EDGAR DUPRAT</strong> (exploitant sous le nom commercial <strong>Amblia Web</strong>), 
            en stricte conformité avec le Règlement Général sur la Protection des Données (RGPD n° 2016/679) et la loi française Informatique et Libertés modifiée.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-stone-500 pt-2 border-t border-stone-200/60">
            <div>Dernière mise à jour : <strong>12 octobre 2026</strong></div>
            <div>·</div>
            <div>Statut : <strong>Conformité RGPD garantie</strong></div>
            <div>·</div>
            <div>Traceurs publicitaires : <strong>Zéro cookie intrusif</strong></div>
          </div>
        </header>

        {/* Corps de la Politique */}
        <div className="space-y-8 text-sm text-stone-700 leading-relaxed">

          {/* Section 1 : Responsable de Traitement */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Lock className="w-5 h-5 text-amber-600 shrink-0" />
              <span>1. Identité du Responsable de Traitement</span>
            </h2>

            <p>
              Le responsable du traitement des données personnelles collectées sur le site ambliaweb.com est :
            </p>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 text-xs sm:text-sm grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Entité juridique</span>
                <strong className="text-stone-900 font-semibold text-base">EI EDGAR DUPRAT</strong>
              </div>
              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Nom commercial</span>
                <strong className="text-stone-900 font-semibold">Amblia Web (Amblia)</strong>
              </div>
              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Responsable désigné</span>
                <strong className="text-stone-900 font-semibold">Edgar Duprat</strong>
              </div>
              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Courriel dédié RGPD</span>
                <a href="mailto:contact@ambliaweb.com" className="text-stone-900 font-medium underline hover:text-amber-700">
                  contact@ambliaweb.com
                </a>
              </div>
              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Téléphone professionnel</span>
                <a href="tel:0695584056" className="text-stone-900 font-medium underline hover:text-amber-700">
                  06 95 58 40 56
                </a>
              </div>
              <div>
                <span className="text-stone-500 block text-xs uppercase tracking-wider">Territoire d'activité</span>
                <span className="text-stone-800">France et Union Européenne</span>
              </div>
            </div>
          </section>

          {/* Section 2 : Données collectées */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <FileText className="w-5 h-5 text-amber-600 shrink-0" />
              <span>2. Données Personnelles Collectées</span>
            </h2>

            <p>
              Amblia Web applique le principe de <strong>minimisation des données</strong> (art. 5.1.c du RGPD). 
              Seules les données strictement nécessaires au traitement de vos demandes d'audit, devis ou échanges commerciaux sont collectées :
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
                <div className="font-semibold text-stone-900 mb-1">Formulaire de demande d'audit gratuit et prise de contact :</div>
                <ul className="list-disc list-inside space-y-1 text-xs text-stone-600">
                  <li><strong>Identité :</strong> Nom et prénom du demandeur.</li>
                  <li><strong>Structure :</strong> Nom de l'établissement, commerce ou entreprise.</li>
                  <li><strong>Coordonnées :</strong> Adresse email professionnelle et numéro de téléphone de contact.</li>
                  <li><strong>Informations techniques :</strong> URL ou adresse du site internet actuel à auditer, secteur d'activité (restaurant, boutique, services, artisanat, santé, autre).</li>
                  <li><strong>Projet :</strong> Échéance estimée et précisions ou besoins exprimés dans le champ libre.</li>
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200/80">
                <div className="font-semibold text-stone-900 mb-1">Données techniques de connexion et d'hébergement :</div>
                <p className="text-xs text-stone-600">
                  Lors de votre navigation, les serveurs d'infrastructure Vercel peuvent enregistrer des journaux techniques d'accès 
                  (adresse IP anonymisée ou pseudonymisée, horodatage, pages consultées, type de navigateur). 
                  Ces journaux sont utilisés exclusivement à des fins de sécurité, de prévention des attaques par déni de service et d'intégrité opérationnelle.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 : Finalités et bases légales */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
              <span>3. Finalités des Traitements et Bases Légales</span>
            </h2>

            <p>
              Chaque traitement de données réalisé par Amblia Web repose sur une base légale déterminée conformément à l'article 6 du RGPD :
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-stone-100 text-stone-800 border-b border-stone-200">
                    <th className="p-3 font-semibold">Finalité du traitement</th>
                    <th className="p-3 font-semibold">Base légale (RGPD)</th>
                    <th className="p-3 font-semibold">Durée de conservation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-200">
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-medium text-stone-900">
                      Réalisation et envoi de l'audit gratuit de votre site (contrastes, accessibilité, mobile)
                    </td>
                    <td className="p-3 text-stone-600">
                      Exécution de mesures précontractuelles sollicitées par le prospect (Art. 6.1.b)
                    </td>
                    <td className="p-3 text-stone-600">
                      3 ans à compter du dernier contact émanant du prospect
                    </td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-medium text-stone-900">
                      Établissement des devis personnalisés, contractualisation et suivi de projet de refonte
                    </td>
                    <td className="p-3 text-stone-600">
                      Exécution d'un contrat ou mesures précontractuelles (Art. 6.1.b)
                    </td>
                    <td className="p-3 text-stone-600">
                      Pendant toute la durée de la relation contractuelle
                    </td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-medium text-stone-900">
                      Facturation, tenue de la comptabilité et gestion administrative légale
                    </td>
                    <td className="p-3 text-stone-600">
                      Obligation légale comptable et fiscale (Art. 6.1.c et Code de Commerce)
                    </td>
                    <td className="p-3 text-stone-600">
                      10 ans à compter de la clôture de l'exercice comptable
                    </td>
                  </tr>
                  <tr className="hover:bg-stone-50">
                    <td className="p-3 font-medium text-stone-900">
                      Sécurité des infrastructures, détection d'anomalies et prévention des fraudes
                    </td>
                    <td className="p-3 text-stone-600">
                      Intérêt légitime de l'éditeur à sécuriser ses outils numériques (Art. 6.1.f)
                    </td>
                    <td className="p-3 text-stone-600">
                      12 mois maximum pour les journaux techniques serveurs
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 4 : Destinataires et sous-traitance */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              4. Destinataires des Données et Sous-traitants
            </h2>

            <p>
              <strong>Engagement de confidentialité absolu :</strong> Vos données personnelles ne sont jamais vendues, louées, cédées 
              ni transmises à des courtiers de données ou à des tiers à des fins publicitaires.
            </p>

            <p>
              Les seules entités pouvant avoir accès à vos données sont :
            </p>

            <ul className="list-disc list-inside space-y-2 text-xs sm:text-sm pl-2">
              <li>
                <strong>Edgar Duprat :</strong> Dirigeant de l'EI EDGAR DUPRAT, en charge de l'analyse technique, de la gestion commerciale et du développement.
              </li>
              <li>
                <strong>Vercel Inc. :</strong> Fournisseur d'hébergement web (440 N Barranca Ave #4133, Covina, CA 91723, USA). 
                L'hébergement repose sur des protocoles chiffrés avec respect du Data Privacy Framework UE-USA et des Clauses Contractuelles Types de la Commission Européenne.
              </li>
              <li>
                <strong>Autorités administratives ou judiciaires compétentes :</strong> Uniquement en cas d'obligation légale impérative ou de réquisition judiciaire officielle.
              </li>
            </ul>
          </section>

          {/* Section 5 : Politique de Cookies */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900 flex items-center gap-2.5">
              <Eye className="w-5 h-5 text-amber-600 shrink-0" />
              <span>5. Gestion des Cookies et Respect de la Vie Privée</span>
            </h2>

            <p>
              Dans une démarche d'éthique numérique et de respect de vos visiteurs, <strong>le site ambliaweb.com n'utilise AUCUN cookie traceur publicitaire, 
              aucun cookie de ciblage commercial et aucun outil intrusif de profilage</strong>.
            </p>

            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 text-xs sm:text-sm space-y-2">
              <div className="font-semibold text-emerald-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                <span>Zéro bandeau cookie encombrant : navigation fluide et sereine</span>
              </div>
              <p className="text-emerald-900 text-xs leading-relaxed">
                Conformément aux lignes directrices et recommandations de la CNIL (Commission Nationale de l'Informatique et des Libertés), 
                notre site est dispensé de bandeau de recueil de consentement aux cookies car il ne dépose que des éléments strictement techniques nécessaires au fonctionnement 
                (ex. préférences d'affichage temporaires d'accessibilité stockées localement sur votre terminal dans le localStorage du navigateur).
              </p>
            </div>
          </section>

          {/* Section 6 : Sécurité des Données */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              6. Sécurité et Mesures Techniques de Protection
            </h2>

            <p>
              Amblia Web met en œuvre toutes les mesures techniques et organisationnelles appropriées pour garantir un niveau de sécurité adapté au risque :
            </p>

            <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm pl-2">
              <li>Chiffrement systématique des flux via protocole sécurisé <strong>HTTPS / TLS 1.3</strong> avec certificat SSL valide.</li>
              <li>Protection contre les injections de code et en-têtes de sécurité conformes aux meilleures pratiques du web.</li>
              <li>Accès aux données réservé strictement à l'exploitant du site, avec authentification forte multifacteurs.</li>
              <li>Surveillance régulière de l'infrastructure d'hébergement par Vercel.</li>
            </ul>
          </section>

          {/* Section 7 : Vos Droits RGPD */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              7. Vos Droits au Titre du RGPD et Modalités d'Exercice
            </h2>

            <p>
              Conformément à la réglementation européenne et française, vous disposez des droits suivants sur vos données personnelles :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Droit d'accès (Art. 15 RGPD)</strong>
                <span>Obtenir la confirmation que des données vous concernant sont traitées et en recevoir une copie intégrale.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Droit de rectification (Art. 16 RGPD)</strong>
                <span>Demander la correction immédiate de données inexactes, incomplètes ou obsolètes.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Droit à l'effacement / Oubli (Art. 17 RGPD)</strong>
                <span>Obtenir la suppression définitive de vos données, sous réserve des obligations légales de conservation.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Droit à la limitation (Art. 18 RGPD)</strong>
                <span>Demander le gel temporaire du traitement de vos données dans les cas prévus par le règlement.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Droit d'opposition (Art. 21 RGPD)</strong>
                <span>Vous opposer à tout moment à l'utilisation de vos données pour des motifs liés à votre situation particulière.</span>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-stone-200">
                <strong className="text-stone-900 block mb-1">Droit à la portabilité (Art. 20 RGPD)</strong>
                <span>Recevoir vos données dans un format structuré, couramment utilisé et lisible par machine.</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs space-y-2 mt-4">
              <div className="font-semibold text-amber-950">Comment exercer vos droits en pratique ?</div>
              <p className="text-amber-900">
                Pour toute demande relative à vos données personnelles, adressez simplement votre requête par courriel à : 
                <a href="mailto:contact@ambliaweb.com" className="font-bold underline ml-1">contact@ambliaweb.com</a> ou par téléphone au <a href="tel:0695584056" className="font-bold underline ml-1">06 95 58 40 56</a>.
              </p>
              <p className="text-amber-800 text-[11px]">
                Nous nous engageons à vous apporter une réponse documentée dans un délai maximum de <strong>30 jours</strong> suivant la réception de votre demande.
              </p>
            </div>
          </section>

          {/* Section 8 : Recours CNIL */}
          <section className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200/90 shadow-2xs space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              8. Droit de Réclamation auprès de l'Autorité de Contrôle (CNIL)
            </h2>

            <p>
              Si vous estimez, après nous avoir contactés, que vos droits Informatique et Libertés ne sont pas respectés, 
              vous disposez du droit d'introduire une réclamation officielle auprès de l'autorité de protection des données compétente en France :
            </p>

            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/80 text-xs sm:text-sm space-y-1.5">
              <div className="font-semibold text-stone-900">Commission Nationale de l'Informatique et des Libertés (CNIL)</div>
              <div>3 Place de Fontenoy - TSA 80715 - 75334 Paris CEDEX 07</div>
              <div>Téléphone : 01 53 73 22 22</div>
              <div>
                Plainte en ligne :{' '}
                <a 
                  href="https://www.cnil.fr/fr/plaintes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-amber-800 underline inline-flex items-center gap-1 hover:text-amber-950"
                >
                  <span>https://www.cnil.fr/fr/plaintes</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
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
              onClick={() => onNavigateTo('declaration-accessibilite')}
              className="hover:text-stone-950 underline underline-offset-4 cursor-pointer"
            >
              Déclaration d'Accessibilité
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
