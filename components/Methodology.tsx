'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Methodology() {
  const { language } = useLanguage()
  const t = translations[language]

  const steps = [
    {
      number: '01',
      title: language === 'fr' ? 'Discovery & Stratégie' : 'Discovery & Strategy',
      description: language === 'fr' ? 'Audit complet de votre situation actuelle. Compréhension de vos objectifs business et de votre audience.' : 'Complete audit of your current situation. Understanding your business goals and audience.',
      icon: '🔍',
      details: language === 'fr' ? ['Audit digital', 'Analyse concurrence', 'Objectifs clairs'] : ['Digital Audit', 'Competitor Analysis', 'Clear Goals']
    },
    {
      number: '02',
      title: language === 'fr' ? 'Planning & Design' : 'Planning & Design',
      description: language === 'fr' ? 'Création d\'une roadmap détaillée. Design & UX pensés pour convertir, pas juste pour plaire.' : 'Detailed roadmap creation. Design & UX built to convert, not just please.',
      icon: '📐',
      details: language === 'fr' ? ['Wireframing', 'Design system', 'User journeys'] : ['Wireframing', 'Design System', 'User Journeys']
    },
    {
      number: '03',
      title: language === 'fr' ? 'Development Premium' : 'Premium Development',
      description: language === 'fr' ? 'Code production-ready. Performance, sécurité, et SEO intégrés dès le départ, pas en afterthought.' : 'Production-ready code. Performance, security, and SEO built-in from the start.',
      icon: '⚙️',
      details: language === 'fr' ? ['Clean code', '100/100 Lighthouse', 'Sécurité'] : ['Clean Code', '100/100 Lighthouse', 'Security']
    },
    {
      number: '04',
      title: language === 'fr' ? 'Testing & Optimization' : 'Testing & Optimization',
      description: language === 'fr' ? 'Tests exhaustifs sur tous les appareils. Optimisations performance et conversion continus.' : 'Exhaustive testing across all devices. Continuous performance and conversion optimization.',
      icon: '🧪',
      details: language === 'fr' ? ['QA rigoureuse', 'A/B testing', 'Performance'] : ['Rigorous QA', 'A/B Testing', 'Performance']
    },
    {
      number: '05',
      title: language === 'fr' ? 'Launch & Monitoring' : 'Launch & Monitoring',
      description: language === 'fr' ? 'Déploiement smooth. Monitoring en temps réel des performances et des conversions post-launch.' : 'Smooth deployment. Real-time monitoring of performance and conversions post-launch.',
      icon: '🚀',
      details: language === 'fr' ? ['Zero-downtime deploy', 'Analytics setup', 'Monitoring'] : ['Zero-Downtime Deploy', 'Analytics Setup', 'Monitoring']
    },
    {
      number: '06',
      title: language === 'fr' ? 'Support & Growth' : 'Support & Growth',
      description: language === 'fr' ? 'Support continu. Optimisations basées sur les données réelles. Scaling préparé d\'avance.' : 'Continuous support. Real-data based optimizations. Pre-planned scaling.',
      icon: '📈',
      details: language === 'fr' ? ['Support SLA', 'Growth hacking', 'Scaling'] : ['Support SLA', 'Growth Hacking', 'Scaling']
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {language === 'fr' ? 'Ma Méthode de Travail' : 'My Methodology'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.methodology.description}
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Timeline Steps */}
        <div className="space-y-6 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`group relative animate-fade-in-up ${
                index === 0 ? 'stagger-1' : index === 1 ? 'stagger-2' : index === 2 ? 'stagger-3' : 'stagger-4'
              }`}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-24 w-1 h-12 bg-gradient-to-b from-primary to-transparent md:block hidden"></div>
              )}

              <div className="flex gap-6 md:gap-8">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 relative z-10 group-hover:animate-glow shadow-lg shadow-primary/30">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="pt-2 flex-1 pb-8">
                  <div className="p-6 rounded-xl border border-border bg-gradient-to-br from-white to-secondary/20 group-hover:border-primary/50 group-hover:shadow-lg group-hover:shadow-primary/20 group-hover:lift transition-all duration-300 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    <div className="relative">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-sm font-bold text-primary mb-1 group-hover:scale-110 transition-transform">Étape {step.number}</div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed group-hover:text-foreground transition-colors">
                        {step.description}
                      </p>

                      {/* Details */}
                      <div className="flex flex-wrap gap-2">
                        {step.details.map((detail, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 hover:scale-110 transform"
                          >
                            ✓ {detail}
                          </span>
                        ))}
                      </div>
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
            <h3 className="text-2xl font-bold text-foreground mb-8 group-hover:text-primary transition-colors">Garanties Qualité</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Délais respectés ± 5%',
                'Budget transparent',
                'Code documenté',
                'Tests complets',
                'Support 30j gratuit',
                'Revisions illimitées (fase dev)',
                'Performance 90+ Lighthouse',
                'SEO On-Page optimisé',
                'Mobile First Responsive',
                'Sécurité standards OWASP',
                'Backup & Recovery plan',
                'Formation client incluse',
              ].map((item, i) => (
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
