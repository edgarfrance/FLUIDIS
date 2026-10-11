import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TheProblem } from './components/TheProblem';
import { TheSolution } from './components/TheSolution';
import { BeforeAfterComparison } from './components/BeforeAfterComparison';
import { Benefits } from './components/Benefits';
import { AuditSimulator } from './components/AuditSimulator';
import { PricingPackages } from './components/PricingPackages';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { AccessibilityToolbar } from './components/AccessibilityToolbar';
import { ActivitySector } from './types';

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);
  const [prefilledAnswers, setPrefilledAnswers] = useState<any>(undefined);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToComparison = () => {
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
      {/* Navigation */}
      <Navbar onOpenAudit={scrollToContact} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Hero Section percutant */}
        <Hero 
          onOpenAudit={scrollToContact} 
          onExploreComparison={scrollToComparison} 
        />

        {/* 2. Le Constat / Le Problème (Directive 2025 & clients perdus) */}
        <TheProblem 
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

        {/* 4. Les Bénéfices & ROI pour l'entreprise */}
        <Benefits 
          onOpenAudit={scrollToContact} 
        />

        {/* Diagnostic interactif express (Générateur de leads) */}
        <AuditSimulator 
          onPreFillForm={handlePreFillFromSimulator} 
        />

        {/* Les Formules & Tarifs clairs */}
        <PricingPackages 
          onSelectPlan={handleSelectPlan} 
        />

        {/* Foire Aux Questions & Réassurance */}
        <FAQ />

        {/* 5. Formulaire de contact / Appel à l'action final */}
        <ContactForm 
          initialPlan={selectedPlan} 
          initialAnswers={prefilledAnswers} 
        />
      </main>

      {/* Footer sobre et élégant */}
      <Footer />

      {/* Barre d'accessibilité flottante en temps réel */}
      <AccessibilityToolbar />
    </div>
  );
}
