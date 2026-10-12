import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { LegalRisks } from './components/LegalRisks';
import { TheSolution } from './components/TheSolution';
import { BeforeAfterComparison } from './components/BeforeAfterComparison';
import { Benefits } from './components/Benefits';
import { AuditSimulator } from './components/AuditSimulator';
import { PricingPackages } from './components/PricingPackages';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { MentionsLegales } from './pages/MentionsLegales';
import { PolitiqueConfidentialite } from './pages/PolitiqueConfidentialite';
import { DeclarationAccessibilite } from './pages/DeclarationAccessibilite';
import { ActivitySector } from './types';

export type PageRoute = 'home' | 'mentions-legales' | 'politique-confidentialite' | 'declaration-accessibilite';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [prefilledAnswers, setPrefilledAnswers] = useState<any>(undefined);

  // Synchronisation avec l'URL (hash ou chemin) pour un fonctionnement 100% autonome et fluide sur Vercel
  useEffect(() => {
    const handleUrlChange = () => {
      const hash = window.location.hash.replace('#', '').replace('/', '');
      const path = window.location.pathname.replace('/', '');

      const target = hash || path;
      if (target === 'mentions-legales' || target === 'mentions') {
        setCurrentPage('mentions-legales');
      } else if (target === 'politique-confidentialite' || target === 'confidentialite' || target === 'privacy') {
        setCurrentPage('politique-confidentialite');
      } else if (target === 'declaration-accessibilite' || target === 'accessibilite' || target === 'accessibility') {
        setCurrentPage('declaration-accessibilite');
      } else {
        setCurrentPage('home');
      }
    };

    handleUrlChange();
    window.addEventListener('hashchange', handleUrlChange);
    window.addEventListener('popstate', handleUrlChange);

    return () => {
      window.removeEventListener('hashchange', handleUrlChange);
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, []);

  const navigateTo = (page: PageRoute | string) => {
    let cleanTarget: PageRoute = 'home';
    if (page === 'mentions-legales' || page === 'mentions') {
      cleanTarget = 'mentions-legales';
    } else if (page === 'politique-confidentialite' || page === 'confidentialite' || page === 'privacy') {
      cleanTarget = 'politique-confidentialite';
    } else if (page === 'declaration-accessibilite' || page === 'accessibilite' || page === 'accessibility') {
      cleanTarget = 'declaration-accessibilite';
    }

    setCurrentPage(cleanTarget);
    if (cleanTarget === 'home') {
      window.location.hash = '';
      document.title = "Amblia Web | Refonte Web et Accessibilité pour PME, Commerces et Restaurants";
    } else {
      window.location.hash = '#' + cleanTarget;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const scrollToContact = () => {
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToComparison = () => {
    if (currentPage !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const el = document.getElementById('comparatif');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    const el = document.getElementById('comparatif');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    scrollToContact();
  };

  const handlePreFillFromSimulator = (_sector: ActivitySector, answers: any) => {
    setPrefilledAnswers(answers);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-200 selection:text-stone-900">
      
      {/* Affichage conditionnel des vraies pages dédiées */}
      {currentPage === 'mentions-legales' ? (
        <div className="flex-1">
          <MentionsLegales 
            onBackToHome={() => navigateTo('home')} 
            onNavigateTo={navigateTo}
          />
          <Footer onNavigateTo={navigateTo} />
        </div>
      ) : currentPage === 'politique-confidentialite' ? (
        <div className="flex-1">
          <PolitiqueConfidentialite 
            onBackToHome={() => navigateTo('home')} 
            onNavigateTo={navigateTo}
          />
          <Footer onNavigateTo={navigateTo} />
        </div>
      ) : currentPage === 'declaration-accessibilite' ? (
        <div className="flex-1">
          <DeclarationAccessibilite 
            onBackToHome={() => navigateTo('home')} 
            onNavigateTo={navigateTo}
          />
          <Footer onNavigateTo={navigateTo} />
        </div>
      ) : (
        /* Accueil - Landing Page Principale */
        <>
          {/* Navigation */}
          <Navbar onOpenAudit={scrollToContact} />

          {/* Main Content */}
          <main className="flex-1">
            {/* 1. Hero Section percutant */}
            <Hero 
              onOpenAudit={scrollToContact} 
              onExploreComparison={scrollToComparison} 
            />

            {/* 2. Le Constat / Le Problème (Pertes de clients et perte de trafic) */}
            <TheProblem 
              onOpenAudit={scrollToContact} 
            />

            {/* 2b. Les Risques Légaux et Sanctions Financières (Directive 2025, Amendes jusqu'à 25 000€) */}
            <LegalRisks 
              onOpenAudit={scrollToContact}
            />

            {/* 3. La Solution / Ce que nous proposons */}
            <TheSolution 
              onOpenAudit={scrollToContact} 
            />

            {/* Démonstration visuelle : Comparatif Avant / Après interactif */}
            <BeforeAfterComparison 
              onOpenAudit={scrollToContact} 
            />

            {/* 4. Les Bénéfices et ROI pour l'entreprise */}
            <Benefits 
              onOpenAudit={scrollToContact} 
            />

            {/* Diagnostic interactif express (Générateur de leads) */}
            <AuditSimulator 
              onPreFillForm={handlePreFillFromSimulator} 
            />

            {/* Les Formules et Tarifs clairs en TTC */}
            <PricingPackages 
              onSelectPlan={handleSelectPlan} 
            />

            {/* Foire Aux Questions et Réassurance */}
            <FAQ />

            {/* 5. Formulaire de contact / Appel à l'action final */}
            <ContactForm 
              initialPlan={selectedPlan} 
              initialAnswers={prefilledAnswers} 
            />
          </main>

          {/* Footer sobre et élégant avec liens vers les vraies pages légales */}
          <Footer onNavigateTo={navigateTo} />
        </>
      )}

      {/* Barre d'accessibilité flottante en temps réel */}
      <AccessibilityToolbar />
    </div>
  );
}
