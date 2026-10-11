import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Mon entreprise est-elle obligée d'appliquer la Directive Européenne de Juin 2025 ?",
      answer: "La directive européenne (European Accessibility Act) s'applique strictement aux services en ligne, à l'e-commerce et aux entreprises de plus de 10 salariés. Si les microentreprises bénéficient d'exemptions de sanctions directes, les habitudes des consommateurs et les algorithmes de Google changent dès maintenant. Un site inaccessible exclut 20% de votre audience et donne immédiatement une impression d'amateurisme face à un concurrent qui a modernisé sa vitrine."
    },
    {
      question: "Dois-je réécrire tous mes textes et refaire mes photos ?",
      answer: "Absolument pas ! Nous conservons l'essentiel de vos contenus existants, vos visuels et votre histoire. Notre travail consiste à les valoriser, à nettoyer la structure, à rehausser les contrastes pour les rendre lisibles au soleil et par les personnes âgées, et à ajouter les éléments de conversion qui manquent à votre site actuel."
    },
    {
      question: "Vais-je perdre mon référencement Google actuel ?",
      answer: "Bien au contraire. L'accessibilité numérique et la propreté du code HTML sémantique sont précisément les critères que Google récompense le plus (Core Web Vitals). Nous mettons en place des redirections propres (301) pour conserver tout votre historique. Vos positions sur les recherches locales s'en trouveront consolidées."
    },
    {
      question: "Combien de temps dure la refonte ? Mon site sera-t-il indisponible ?",
      answer: "Pour une Landing Page Express, comptez 5 à 7 jours ouvrés. Pour un site vitrine multi-pages, entre 10 et 15 jours. Pendant toute la phase de conception, votre site actuel reste 100% actif et accessible pour vos clients. La bascule finale prend moins de 15 minutes, sans aucune interruption."
    },
    {
      question: "Pourquoi privilégier un style sobre et épuré pour mon site web ?",
      answer: "Parce que l'élégance intemporelle et la clarté surpassent toujours les effets de mode éphémères. Le style épuré, les contrastes nobles et la lisibilité typographique permettent à vos visiteurs de trouver l'information en 3 secondes : vos horaires, votre savoir-faire, vos prix et comment vous contacter. Moins de fioritures techniques inutiles, c'est aussi un site beaucoup plus rapide et qui convertit bien mieux."
    },
    {
      question: "En quoi consiste l'audit flash gratuit ?",
      answer: "Nous examinons manuellement et techniquement votre page d'accueil : analyse des contrastes colorimétriques, test de fluidité sur mobile, clarté des appels à l'action et conformité des mentions. Vous recevez un compte-rendu clair et sans jargon sous 24h ouvrées, sans aucune obligation d'achat."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-white border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 text-stone-700 text-xs font-semibold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-stone-600" />
            <span>Foire Aux Questions</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight">
            Tout ce que vous devez savoir avant de refondre votre site
          </h2>

          <p className="text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Des réponses claires, sans détour et sans jargon technique.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-stone-200/90 bg-[#FAF8F5] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-stone-100/50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-stone-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-stone-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-stone-900' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-200/60 pt-4 animate-in fade-in duration-150">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
