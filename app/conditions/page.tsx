'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import Link from 'next/link'
import { LanguageProvider } from '@/context/LanguageContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

function ConditionsContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            {language === 'fr' ? 'Conditions Générales de Service' : 'Terms of Service'}
          </h1>
          <p className="text-lg text-muted-foreground">
            {language === 'fr' 
              ? 'Les règles régissant nos prestations de développement web'
              : 'Rules governing our web development services'}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Content */}
        <div className="space-y-8 animate-fade-in-up">
          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Objet du service' : 'Service Scope'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'GoSite propose des services de développement web spécialisés dans :'
                : 'GoSite offers specialized web development services in:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{language === 'fr' ? 'Développement de sites WordPress sur mesure' : 'Custom WordPress website development'}</li>
              <li>{language === 'fr' ? 'Applications React et Next.js' : 'React and Next.js applications'}</li>
              <li>{language === 'fr' ? 'Optimisation SEO et performance' : 'SEO and performance optimization'}</li>
              <li>{language === 'fr' ? 'Automatisation et intégration IA' : 'Automation and AI integration'}</li>
              <li>{language === 'fr' ? 'Consulting technique et stratégique' : 'Technical and strategic consulting'}</li>
            </ul>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Processus de collaboration' : 'Collaboration Process'}
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'fr' ? '1. Prise de contact et devis' : '1. Contact and Quote'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'fr' 
                    ? 'Le client nous contacte via le formulaire du site. Nous fournissons un devis détaillé sous 48h.'
                    : 'The client contacts us via the website form. We provide a detailed quote within 48 hours.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'fr' ? '2. Validation et acompte' : '2. Validation and Deposit'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'fr' 
                    ? 'Après validation du devis, un acompte de 30% est requis pour démarrer le projet.'
                    : 'After quote validation, a 30% deposit is required to start the project.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'fr' ? '3. Développement et livraisons' : '3. Development and Deliveries'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'fr' 
                    ? 'Développement par itérations avec validations régulières. Livraison selon les échéances convenues.'
                    : 'Iterative development with regular validations. Delivery according to agreed deadlines.'}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'fr' ? '4. Livraison finale et paiement' : '4. Final Delivery and Payment'}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {language === 'fr' 
                    ? 'Livraison du projet final et paiement du solde. 3 mois de support inclus.'
                    : 'Final project delivery and balance payment. 3 months of support included.'}
                </p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Tarifs et paiement' : 'Pricing and Payment'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'Nos tarifs sont établis selon la complexité et la durée du projet. Le devis comprend :'
                : 'Our rates are based on project complexity and duration. The quote includes:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{language === 'fr' ? 'Analyse et conception' : 'Analysis and design'}</li>
              <li>{language === 'fr' ? 'Développement complet' : 'Complete development'}</li>
              <li>{language === 'fr' ? 'Tests et recettes' : 'Testing and validation'}</li>
              <li>{language === 'fr' ? 'Mise en production' : 'Production deployment'}</li>
              <li>{language === 'fr' ? 'Documentation de base' : 'Basic documentation'}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {language === 'fr' 
                ? 'Les paiements s\'effectuent par virement bancaire ou PayPal. Les tarifs sont HT.'
                : 'Payments are made by bank transfer or PayPal. Prices exclude taxes.'}
            </p>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Propriété intellectuelle' : 'Intellectual Property'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'Le code source et les livrables deviennent la propriété exclusive du client après paiement intégral.'
                : 'Source code and deliverables become the exclusive property of the client after full payment.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'fr' 
                ? 'Nous nous réservons le droit d\'utiliser le projet dans notre portfolio (anonymisé si nécessaire).'
                : 'We reserve the right to use the project in our portfolio (anonymized if necessary).'}
            </p>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Garanties et support' : 'Warranties and Support'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'Nous garantissons :'
                : 'We guarantee:'}
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
              <li>{language === 'fr' ? 'Conformité avec les spécifications validées' : 'Compliance with validated specifications'}</li>
              <li>{language === 'fr' ? 'Code propre et documenté' : 'Clean and documented code'}</li>
              <li>{language === 'fr' ? 'Support technique 3 mois après livraison' : '3 months technical support after delivery'}</li>
              <li>{language === 'fr' ? 'Correction des bugs de fonctionnement' : 'Fixing functional bugs'}</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              {language === 'fr' 
                ? 'Ne sont pas garantis : les changements de spécifications, les évolutions fonctionnelles, les erreurs de manipulation.'
                : 'Not guaranteed: specification changes, functional evolutions, user errors.'}
            </p>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Responsabilités' : 'Responsibilities'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'fr' ? 'Nos responsabilités' : 'Our Responsibilities'}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{language === 'fr' ? 'Respect des délais convenus' : 'Respecting agreed deadlines'}</li>
                  <li>{language === 'fr' ? 'Qualité technique des livrables' : 'Technical quality of deliverables'}</li>
                  <li>{language === 'fr' ? 'Communication transparente' : 'Transparent communication'}</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  {language === 'fr' ? 'Responsabilités client' : 'Client Responsibilities'}
                </h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>{language === 'fr' ? 'Fournir les contenus nécessaires' : 'Provide necessary content'}</li>
                  <li>{language === 'fr' ? 'Validations aux étapes prévues' : 'Validations at planned stages'}</li>
                  <li>{language === 'fr' ? 'Paiements selon échéances' : 'Payments according to deadlines'}</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Litiges et résolution' : 'Disputes and Resolution'}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {language === 'fr' 
                ? 'En cas de désaccord, nous privilégions toujours la résolution amiable et la communication.'
                : 'In case of disagreement, we always favor amicable resolution and communication.'}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'fr' 
                ? 'Si aucune solution n\'est trouvée, les litiges relèvent de la compétence des tribunaux marocains.'
                : 'If no solution is found, disputes fall under the jurisdiction of Moroccan courts.'}
            </p>
          </section>

          <section className="bg-white rounded-xl border border-border p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Durée et modification' : 'Duration and Modification'}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {language === 'fr' 
                ? 'Ces conditions générales s\'appliquent dès la validation du devis. Nous nous réservons le droit de les modifier pour améliorer nos services.'
                : 'These terms apply from quote validation. We reserve the right to modify them to improve our services.'}
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

export default function Conditions() {
  return (
    <LanguageProvider>
      <ConditionsContent />
    </LanguageProvider>
  )
}
