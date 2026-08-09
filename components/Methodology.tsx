'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import SectionPattern from '@/components/SectionPattern'

export default function Methodology() {
  const { language } = useLanguage()
  const t = translations[language]

  const steps = [
    {
      number: '01',
      title: language === 'fr' ? 'Discovery & Stratégie' : 'Discovery & Strategy',
      description: language === 'fr' 
        ? 'Audit complet de votre écosystème digital. Analyse de la concurrence, de votre audience cible et de vos objectifs business. Définition des KPIs et roadmap stratégique pour maximiser votre ROI.' 
        : 'Complete audit of your digital ecosystem. Competitor analysis, target audience study, and business objectives. KPI definition and strategic roadmap to maximize your ROI.',
      details: language === 'fr' ? ['Audit SEO & technique', 'Analyse concurrentielle', 'Persona & user journeys', 'KPIs & objectifs mesurables'] : ['SEO & Technical Audit', 'Competitor Analysis', 'Persona & User Journeys', 'KPIs & Measurable Goals'],
    },
    {
      number: '02',
      title: language === 'fr' ? 'Planning & Design' : 'Planning & Design',
      description: language === 'fr' 
        ? 'Création d\'une architecture technique robuste. Design UI/UX orienté conversion avec wireframes, prototypes interactifs et design system cohérent.' 
        : 'Robust technical architecture creation. Conversion-focused UI/UX design with wireframes, interactive prototypes, and cohesive design system.',
      details: language === 'fr' ? ['Architecture technique', 'Wireframes & prototypes', 'Design system', 'UI/UX optimisé conversion'] : ['Technical Architecture', 'Wireframes & Prototypes', 'Design System', 'Conversion-Optimized UI/UX'],
    },
    {
      number: '03',
      title: language === 'fr' ? 'Development Premium' : 'Premium Development',
      description: language === 'fr' 
        ? 'Développement avec les meilleures pratiques industry. Code propre, maintenable et documenté. Intégration SEO, performance et sécurité dès la première ligne de code.' 
        : 'Development with industry best practices. Clean, maintainable, documented code. SEO, performance, and security integration from the first line of code.',
      details: language === 'fr' ? ['Clean code & documentation', '100/100 Lighthouse', 'Sécurité renforcée', 'CI/CD & Git workflow'] : ['Clean Code & Documentation', '100/100 Lighthouse', 'Enhanced Security', 'CI/CD & Git Workflow'],
    },
    {
      number: '04',
      title: language === 'fr' ? 'Testing & Optimization' : 'Testing & Optimization',
      description: language === 'fr' 
        ? 'Tests rigoureux sur tous les appareils et navigateurs. Optimisation des performances, accessibilité WCAG et tests A/B pour maximiser les conversions.' 
        : 'Rigorous testing across all devices and browsers. Performance optimization, WCAG accessibility, and A/B testing to maximize conversions.',
      details: language === 'fr' ? ['Tests multi-navigateurs', 'Optimisation vitesse', 'Accessibilité WCAG', 'A/B testing & analytics'] : ['Cross-Browser Testing', 'Speed Optimization', 'WCAG Accessibility', 'A/B Testing & Analytics'],
    },
    {
      number: '05',
      title: language === 'fr' ? 'Launch & Monitoring' : 'Launch & Monitoring',
      description: language === 'fr' 
        ? 'Déploiement zéro downtime avec monitoring en temps réel. Configuration des analytics, tracking des conversions et alertes performance.' 
        : 'Zero downtime deployment with real-time monitoring. Analytics setup, conversion tracking, and performance alerts.',
      details: language === 'fr' ? ['Déploiement zero-downtime', 'Analytics & tracking', 'Monitoring temps réel', 'Alertes performance'] : ['Zero-Downtime Deploy', 'Analytics & Tracking', 'Real-Time Monitoring', 'Performance Alerts'],
    },
    {
      number: '06',
      title: language === 'fr' ? 'Support & Growth' : 'Support & Growth',
      description: language === 'fr' 
        ? 'Support continu et optimisations basées sur les données réelles. Évolutions fonctionnelles, scaling infrastructure et growth hacking pour accélérer votre croissance.' 
        : 'Continuous support and data-driven optimizations. Functional evolutions, infrastructure scaling, and growth hacking to accelerate your growth.',
      details: language === 'fr' ? ['Support SLA garanti', 'Évolutions fonctionnelles', 'Scaling infrastructure', 'Growth hacking data-driven'] : ['Guaranteed SLA Support', 'Functional Evolutions', 'Infrastructure Scaling', 'Data-Driven Growth Hacking'],
    },
  ]

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9] relative overflow-hidden">
      <SectionPattern variant="methodology" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0047ab] uppercase tracking-[0.2em] mb-3">{language === 'fr' ? 'Méthodologie' : 'Methodology'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1419] mb-4 text-balance font-heading">
            {language === 'fr' ? 'Ma Méthode de Travail' : 'My Methodology'}
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto text-pretty">
            {t.methodology.description}
          </p>
          <div className="w-12 h-0.5 bg-[#0047ab] mx-auto mt-6"></div>
        </div>

        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative"
            >
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-12 bg-[#0047ab]/20 md:block hidden"></div>
              )}

              <div className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#0047ab] flex items-center justify-center text-white font-bold text-lg relative z-10">
                  {step.number}
                </div>

                <div className="pt-2 flex-1 pb-8">
                  <div className="p-6 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#0047ab]/30 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-[#0f1419] mb-3 font-heading">
                      {step.title}
                    </h3>
                    <p className="text-[#6b7280] leading-relaxed text-sm mb-4">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.details.map((detail, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-full text-xs font-medium bg-[#f0f9ff] text-[#0047ab] border border-[#0047ab]/10"
                        >
                          {detail}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quality Assurance Checklist */}
        <div className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/5 rounded-2xl p-8 md:p-12 border border-primary/20 animate-fade-in-up hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"></div>
          <div className="relative">
            <h3 className="text-2xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors">{language === 'fr' ? 'Garanties Qualité' : 'Quality Guarantees'}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(language === 'fr' ? [
                'Délais respectés ± 5%',
                'Budget transparent',
                'Code documenté',
                'Tests complets',
                'Support 30j gratuit',
                'Révisions illimitées (phase de développement)',
                'Performance 90+ Lighthouse',
                'SEO On-Page optimisé',
                'Mobile First Responsive',
                'Sécurité standards OWASP',
                'Backup & Recovery plan',
                'Formation client incluse',
              ] : [
                'Deadlines met ± 5%',
                'Transparent budget',
                'Documented code',
                'Complete testing',
                '30-day free support',
                'Unlimited revisions (dev phase)',
                '90+ Lighthouse performance',
                'On-Page SEO optimized',
                'Mobile First Responsive',
                'OWASP security standards',
                'Backup & Recovery plan',
                'Client training included',
              ]).map((item, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-3 group/item animate-fade-in-up hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center flex-shrink-0 group-hover/item:bg-accent group-hover/item:text-white group-hover/item:scale-125 transition-all duration-300">
                    ✓
                  </div>
                  <span className="text-foreground font-medium group-hover/item:text-primary transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
