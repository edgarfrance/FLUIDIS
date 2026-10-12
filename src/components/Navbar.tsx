import React, { useState } from 'react';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAudit }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* Top micro-bar */}
      <div className="bg-stone-900 text-stone-300 text-xs py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span className="text-stone-300">Directive Européenne Accessibilité 2025</span>
            <span className="hidden md:inline text-stone-500">·</span>
            <span className="hidden md:inline text-stone-400">Ne perdez plus 20% de vos clients sur le web</span>
          </div>
          <div className="flex items-center gap-4 text-stone-300">
            <a 
              href="tel:0695584056" 
              className="hover:text-amber-300 transition-colors flex items-center gap-1.5 font-medium"
            >
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>06 95 58 40 56</span>
            </a>
            <span className="text-stone-600">|</span>
            <span className="text-stone-400">Audit offert sous 24h</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand identity */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-stone-900 text-amber-400 flex items-center justify-center font-serif text-xl font-bold tracking-tight shadow-sm border border-stone-800">
            A
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold text-stone-900 tracking-tight group-hover:text-stone-800 transition-colors">
              AMBLIA <span className="font-light italic text-stone-600">WEB</span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-stone-500 font-medium">
              Refonte Web et Accessibilité pour PME
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-700">
          <button 
            onClick={() => scrollTo('constat')} 
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Le Constat
          </button>
          <button 
            onClick={() => scrollTo('solution')} 
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Notre Solution
          </button>
          <button 
            onClick={() => scrollTo('comparatif')} 
            className="hover:text-stone-950 transition-colors cursor-pointer py-1 flex items-center gap-1"
          >
            <span>Avant / Après</span>
            <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-semibold">Interactif</span>
          </button>
          <button 
            onClick={() => scrollTo('benefices')} 
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Vos Bénéfices
          </button>
          <button 
            onClick={() => scrollTo('formules')} 
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            Formules
          </button>
          <button 
            onClick={() => scrollTo('faq')} 
            className="hover:text-stone-950 transition-colors cursor-pointer py-1"
          >
            FAQ
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAudit}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 text-stone-100 hover:bg-stone-800 active:bg-stone-950 transition-all text-xs font-semibold shadow-sm hover:shadow-md cursor-pointer border border-stone-800"
          >
            <span>Demander un audit gratuit</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-stone-700 hover:text-stone-950 rounded-lg"
          aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-stone-200 px-4 pt-3 pb-6 space-y-3">
          <button
            onClick={() => scrollTo('constat')}
            className="block w-full text-left py-2.5 text-sm font-medium text-stone-800 hover:text-amber-800 border-b border-stone-100"
          >
            Le Constat et La Directive 2025
          </button>
          <button
            onClick={() => scrollTo('solution')}
            className="block w-full text-left py-2.5 text-sm font-medium text-stone-800 hover:text-amber-800 border-b border-stone-100"
          >
            Ce que nous proposons
          </button>
          <button
            onClick={() => scrollTo('comparatif')}
            className="block w-full text-left py-2.5 text-sm font-medium text-stone-800 hover:text-amber-800 border-b border-stone-100 flex items-center justify-between"
          >
            <span>Comparateur Avant / Après</span>
            <span className="text-[10px] bg-amber-100 text-amber-900 px-1.5 py-0.5 rounded font-semibold">Interactif</span>
          </button>
          <button
            onClick={() => scrollTo('benefices')}
            className="block w-full text-left py-2.5 text-sm font-medium text-stone-800 hover:text-amber-800 border-b border-stone-100"
          >
            Bénéfices et ROI
          </button>
          <button
            onClick={() => scrollTo('formules')}
            className="block w-full text-left py-2.5 text-sm font-medium text-stone-800 hover:text-amber-800 border-b border-stone-100"
          >
            Formules et Tarifs
          </button>
          <button
            onClick={() => scrollTo('faq')}
            className="block w-full text-left py-2.5 text-sm font-medium text-stone-800 hover:text-amber-800 border-b border-stone-100"
          >
            Questions Fréquentes
          </button>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="w-full py-3 px-4 rounded-xl bg-stone-900 text-stone-100 text-sm font-medium text-center flex items-center justify-center gap-2"
            >
              <span>Demander un audit gratuit de mon site</span>
              <ArrowRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
