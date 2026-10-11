import React from 'react';
import { Phone, Mail, MapPin, Heart, ShieldCheck, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif text-xl font-bold border border-stone-700">
                C
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                CLARTÉ & ACCESSIBILITÉ
              </span>
            </div>
            
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Studio spécialisé dans la refonte de sites web et landing pages pour commerces, restaurants et PME. 
              Inspiré par la sobriété et l'élégance de <em>mabonneadresse.com</em>, au service de l'inclusion et de la conversion.
            </p>

            <div className="flex items-center gap-2 text-xs text-amber-400/90 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Conforme Directive Européenne Accessibilité (Juin 2025)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-100 font-serif">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li><a href="#constat" className="hover:text-white transition-colors">Le Constat & Pertes de Clients</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Ce que nous proposons</a></li>
              <li><a href="#comparatif" className="hover:text-white transition-colors">Comparateur Avant / Après</a></li>
              <li><a href="#benefices" className="hover:text-white transition-colors">Bénéfices & ROI pour votre entreprise</a></li>
              <li><a href="#formules" className="hover:text-white transition-colors">Formules & Tarifs Clairs</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Questions Fréquentes</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Demander un audit gratuit</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-100 font-serif">
              Contact & Permanence
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:0189712345" className="hover:text-white transition-colors">01 89 71 23 45 (Lundi au Vendredi, 9h-19h)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:contact@clarte-accessibilite.fr" className="hover:text-white transition-colors">contact@clarte-accessibilite.fr</a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Interventions partout en France métropolitaine</span>
              </li>
            </ul>

            <div className="p-3 rounded-xl bg-stone-900 border border-stone-800 text-[11px] text-stone-400 mt-2">
              <strong className="text-stone-200">Audit offert sans engagement :</strong> recevez l'analyse vidéo ou écrite de votre site sous 24h ouvrées.
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Clarté & Accessibilité. Tous droits réservés.</span>
            <span>·</span>
            <span className="hover:text-stone-400">Mentions Légales</span>
            <span>·</span>
            <span className="hover:text-stone-400">Politique de Confidentialité</span>
            <span>·</span>
            <span className="hover:text-stone-400">Déclaration d'Accessibilité (WCAG 2.2 AA)</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-stone-400 hover:text-white transition-colors cursor-pointer py-1"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
