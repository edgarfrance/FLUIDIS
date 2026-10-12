import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Clock, Phone, Mail, Globe, User, Building, Sparkles } from 'lucide-react';
import { ActivitySector, AuditFormData } from '../types';

interface ContactFormProps {
  initialPlan?: string;
  initialAnswers?: any;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialPlan, initialAnswers }) => {
  const [formData, setFormData] = useState<AuditFormData>({
    fullName: '',
    businessName: '',
    websiteUrl: '',
    email: '',
    phone: '',
    sector: 'restaurant',
    hasCurrentSite: 'yes',
    urgency: 'immediate',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (initialPlan) {
      setFormData(prev => ({
        ...prev,
        message: prev.message || `Demande relative à la formule : ${initialPlan}`
      }));
    }
  }, [initialPlan]);

  useEffect(() => {
    if (initialAnswers) {
      setFormData(prev => ({
        ...prev,
        auditQuestionsAnswers: initialAnswers
      }));
    }
  }, [initialAnswers]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable submission
    setTimeout(() => {
      const generatedRef = 'AUDIT-' + Math.floor(100000 + Math.random() * 900000);
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-12 md:py-28 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-5xl mx-auto px-5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10 md:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-900 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>Passage à l'Action · Gratuit et Sans Engagement</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-stone-900 tracking-tight leading-tight">
            Prêt à transformer votre site en vitrine accessible et performante ?
          </h2>

          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Remplissez ce formulaire en 1 minute. Vous recevrez l'analyse personnalisée de votre site actuel 
            et des recommandations claires sous 24 heures ouvrées.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl border border-stone-200/90 relative overflow-hidden">
          
          {isSubmitted ? (
            /* Success confirmation */
            <div className="py-12 text-center space-y-6 max-w-xl mx-auto animate-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono bg-stone-100 text-stone-600 px-3 py-1 rounded-md">
                  Dossier N° {referenceId}
                </span>
                <h3 className="font-serif text-3xl font-bold text-stone-900">
                  Demande d'audit bien reçue !
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  Merci <strong>{formData.fullName}</strong>. Notre équipe va examiner la conformité, 
                  les contrastes et l'ergonomie mobile de <strong>{formData.websiteUrl || formData.businessName}</strong>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-xs text-stone-700 text-left space-y-2">
                <div className="font-semibold text-stone-900">Les prochaines étapes :</div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-[10px]">1</span>
                  <span>Analyse technique des contrastes et de l'accessibilité WCAG AA.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-[10px]">2</span>
                  <span>Envoi du diagnostic détaillé par email à <em>{formData.email}</em>.</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-stone-900 text-amber-400 flex items-center justify-center font-bold text-[10px]">3</span>
                  <span>Échange téléphonique de 10 min si vous souhaitez approfondir, sans aucune pression.</span>
                </div>
              </div>

              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-stone-500 hover:text-stone-900 underline underline-offset-4 cursor-pointer"
              >
                Envoyer une autre demande pour un second établissement
              </button>
            </div>
          ) : (
            /* Contact Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {initialPlan && (
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-center justify-between">
                  <span>Formule sélectionnée : <strong>{initialPlan}</strong></span>
                  <span className="text-[11px] font-semibold text-amber-800">Prise en compte</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Nom complet */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Votre Nom et Prénom <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="fullName"
                      type="text"
                      required
                      placeholder="ex: Jean Dupont"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Nom de l'entreprise */}
                <div className="space-y-2">
                  <label htmlFor="businessName" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Nom de votre établissement ou Entreprise <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Building className="w-4 h-4" />
                    </div>
                    <input
                      id="businessName"
                      type="text"
                      required
                      placeholder="ex: Le Comptoir des Gourmets"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>
                </div>

                {/* URL du site actuel */}
                <div className="space-y-2 sm:col-span-2">
                  <label htmlFor="websiteUrl" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    URL de votre site web actuel (ou page Facebook / Instagram) <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <input
                      id="websiteUrl"
                      type="text"
                      required
                      placeholder="ex: www.moncommerce.fr ou https://..."
                      value={formData.websiteUrl}
                      onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>
                  <p className="text-[11px] text-stone-500">
                    Si vous n'avez pas encore de site, indiquez simplement "Pas encore de site en ligne".
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Adresse Email professionnelle <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="contact@monentreprise.fr"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Téléphone */}
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Numéro de Téléphone <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Type de secteur */}
                <div className="space-y-2">
                  <label htmlFor="sector" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Secteur d'activité
                  </label>
                  <select
                    id="sector"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value as ActivitySector })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors bg-white"
                  >
                    <option value="restaurant">Restaurant / Bar / Café</option>
                    <option value="commerce">Boutique et Commerce de détail</option>
                    <option value="artisan">Artisanat et Métiers de bouche</option>
                    <option value="services">PME, Profession libérale et Services</option>
                    <option value="sante">Santé, Bien-être et Médical</option>
                    <option value="autre">Autre activité</option>
                  </select>
                </div>

                {/* Délai souhaité */}
                <div className="space-y-2">
                  <label htmlFor="urgency" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                    Échéance du projet
                  </label>
                  <select
                    id="urgency"
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value as any })}
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors bg-white"
                  >
                    <option value="immediate">Dès que possible (dans les 10 jours)</option>
                    <option value="month">Dans le mois à venir</option>
                    <option value="info">Simple renseignement et audit préventif</option>
                  </select>
                </div>

              </div>

              {/* Message complémentaire */}
              <div className="space-y-2">
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Précisions éventuelles ou difficultés constatées (facultatif)
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="ex: Notre carte change souvent, nous voulons un site facile à lire pour nos clients seniors et bien classé sur Google..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-stone-300 text-stone-900 text-sm focus:border-stone-900 focus:ring-1 focus:ring-stone-900 transition-colors"
                />
              </div>

              {/* Submit CTA button with specified label */}
              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-2xl bg-stone-900 text-stone-100 hover:bg-stone-800 active:bg-stone-950 transition-all font-serif font-bold text-base sm:text-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer border border-stone-800 flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Traitement de votre demande...</span>
                  ) : (
                    <>
                      <span>Je veux un site performant et accessible</span>
                      <ArrowRight className="w-5 h-5 text-amber-400" />
                    </>
                  )}
                </button>

                {/* Trust guarantees */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center text-xs text-stone-500 pt-2">
                  <div className="flex items-center justify-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Données confidentielles (RGPD)</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Audit rendu sous 24h ouvrées</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% gratuit et sans engagement</span>
                  </div>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
