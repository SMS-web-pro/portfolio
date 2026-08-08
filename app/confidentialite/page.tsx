'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import Link from 'next/link'
import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function ConfidentialiteContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === 'fr' 
              ? 'Notre engagement envers la protection de vos données personnelles'
              : 'Our commitment to protecting your personal data'}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 animate-fade-in-up">
          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Collecte des données' : 'Data Collection'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'Nous collectons uniquement les informations nécessaires à la prestation de nos services : nom, email, téléphone, entreprise, et détails du projet via notre formulaire de contact.'
                : 'We only collect information necessary for providing our services: name, email, phone, company, and project details through our contact form.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'fr' 
                ? 'Ces données sont collectées avec votre consentement explicite et ne sont utilisées que pour répondre à vos demandes.'
                : 'This data is collected with your explicit consent and is only used to respond to your inquiries.'}
            </p>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Utilisation des données' : 'Data Usage'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'Vos informations sont utilisées exclusivement pour :'
                : 'Your information is used exclusively for:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{language === 'fr' ? 'Répondre à vos demandes de contact' : 'Responding to your contact inquiries'}</li>
              <li>{language === 'fr' ? 'Établir des devis pour vos projets' : 'Creating quotes for your projects'}</li>
              <li>{language === 'fr' ? 'Vous fournir nos services de développement' : 'Providing you with development services'}</li>
              <li>{language === 'fr' ? 'Communication professionnelle liée aux projets' : 'Professional project-related communication'}</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Protection des données' : 'Data Protection'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre l\'accès non autorisé, la modification, la divulgation ou la destruction.'
                : 'We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, modification, disclosure, or destruction.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'fr' 
                ? 'Vos données sont stockées sur des serveurs sécurisés et ne sont partagées avec des tiers sans votre consentement préalable.'
                : 'Your data is stored on secure servers and is not shared with third parties without your prior consent.'}
            </p>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Vos droits' : 'Your Rights'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :'
                : 'In accordance with GDPR, you have the following rights regarding your personal data:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{language === 'fr' ? 'Droit d\'accès et de consultation' : 'Right of access and consultation'}</li>
              <li>{language === 'fr' ? 'Droit de rectification' : 'Right of rectification'}</li>
              <li>{language === 'fr' ? 'Droit à l\'effacement' : 'Right to erasure'}</li>
              <li>{language === 'fr' ? 'Droit à la portabilité' : 'Right to portability'}</li>
              <li>{language === 'fr' ? 'Droit d\'opposition' : 'Right to objection'}</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Contact pour la confidentialité' : 'Privacy Contact'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'fr' 
                ? 'Pour toute question concernant cette politique de confidentialité ou l\'exercice de vos droits, contactez-nous à :'
                : 'For any questions about this privacy policy or exercising your rights, contact us at:'}
            </p>
            <div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="font-semibold text-primary">📧 contact@gosite.digital</p>
              <p className="font-semibold text-primary mt-2">📞 +212 751 134318</p>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Mise à jour de la politique' : 'Policy Updates'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'fr' 
                ? 'Cette politique de confidentialité peut être mise à jour pour refléter les changements dans nos pratiques. Nous vous informerons de toute modification significative.'
                : 'This privacy policy may be updated to reflect changes in our practices. We will notify you of any significant changes.'}
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {language === 'fr' 
                ? 'Dernière mise à jour : Décembre 2024'
                : 'Last updated: December 2024'}
            </p>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0047ab] text-white rounded-lg hover:bg-[#003366] transition-colors duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {language === 'fr' ? 'Retour à l\'accueil' : 'Back to Home'}
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function Confidentialite() {
  return (
    <LanguageProvider>
      <ConfidentialiteContent />
    </LanguageProvider>
  )
}
