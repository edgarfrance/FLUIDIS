import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateTo?: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateTo }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-stone-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif text-xl font-bold border border-stone-700">
                A
              </div>
              <span className="font-serif text-xl font-bold text-white tracking-tight">
                AMBLIA WEB
              </span>
            </div>
            
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Studio spécialisé dans la refonte de sites web et landing pages pour commerces, restaurants et PME. 
              Conception de sites sobres, rapides et universellement accessibles, au service de l'inclusion et de la conversion.
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
              <li><a href="#constat" className="hover:text-white transition-colors">Le Constat et Pertes de Clients</a></li>
              <li><a href="#risques" className="hover:text-white transition-colors">Risques Légaux et Amendes</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Ce que nous proposons</a></li>
              <li><a href="#comparatif" className="hover:text-white transition-colors">Comparateur Avant / Après</a></li>
              <li><a href="#benefices" className="hover:text-white transition-colors">Bénéfices et ROI pour votre entreprise</a></li>
              <li><a href="#formules" className="hover:text-white transition-colors">Formules et Tarifs Clairs</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Questions Fréquentes</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Demander un audit gratuit</a></li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-100 font-serif">
              Contact et Permanence
            </h4>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:0695584056" className="hover:text-white transition-colors font-medium">06 95 58 40 56 (Lundi au Dimanche, 10h-20h)</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:contact@ambliaweb.com" className="hover:text-white transition-colors">contact@ambliaweb.com</a>
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

        {/* Bottom bar with dedicated legal page links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <span>© {new Date().getFullYear()} Amblia Web · EI EDGAR DUPRAT. Tous droits réservés.</span>
            <span>·</span>
            <button
              onClick={() => onNavigateTo ? onNavigateTo('mentions-legales') : window.location.hash = '#mentions-legales'}
              className="hover:text-stone-300 transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Mentions Légales
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigateTo ? onNavigateTo('politique-confidentialite') : window.location.hash = '#politique-confidentialite'}
              className="hover:text-stone-300 transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Politique de Confidentialité
            </button>
            <span>·</span>
            <button
              onClick={() => onNavigateTo ? onNavigateTo('declaration-accessibilite') : window.location.hash = '#declaration-accessibilite'}
              className="hover:text-stone-300 transition-colors cursor-pointer underline-offset-2 hover:underline"
            >
              Déclaration d'Accessibilité (WCAG 2.2 AA)
            </button>
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
