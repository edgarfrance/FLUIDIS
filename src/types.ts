export type ActivitySector = 
  | 'restaurant'
  | 'commerce'
  | 'artisan'
  | 'services'
  | 'sante'
  | 'autre';

export interface AuditFormData {
  fullName: string;
  businessName: string;
  websiteUrl: string;
  email: string;
  phone: string;
  sector: ActivitySector;
  hasCurrentSite: 'yes' | 'no' | 'redesign_needed';
  urgency: 'immediate' | 'month' | 'info';
  message: string;
  auditQuestionsAnswers?: {
    mobileEasy: boolean;
    contrastGood: boolean;
    fastLoading: boolean;
    accessibilityDeclaration: boolean;
  };
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  badge?: string;
  highlighted?: boolean;
  features: string[];
  timeline: string;
  ctaText: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}
