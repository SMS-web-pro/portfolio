'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Differentiation() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-accent/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.differentiation.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.differentiation.description}
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Comparison Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Left: Traditional Dev */}
          <div className="p-8 rounded-xl border-2 border-gray-300 bg-white animate-slide-in-left hover:lift transition-all duration-300 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {language === 'fr' ? 'Développeur Classique' : 'Traditional Developer'}
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: '✗', text: language === 'fr' ? 'Fait ce qu\'on lui demande exactement' : 'Does exactly what you ask' },
                  { icon: '✗', text: language === 'fr' ? 'SEO/Performance? À voir après...' : 'SEO/Performance? We\'ll see later...' },
                  { icon: '✗', text: language === 'fr' ? 'Peut partir à la fin du projet' : 'May leave after project ends' },
                  { icon: '✗', text: language === 'fr' ? 'Code surtout compris par lui' : 'Code only understood by them' },
                  { icon: '✗', text: language === 'fr' ? 'Suivre les tendances, rarement.' : 'Rarely follows trends.' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-lg text-red-500">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Sahab - Consultant Developer */}
          <div className="p-8 rounded-xl border-2 border-primary bg-gradient-to-br from-primary/10 to-accent/10 animate-slide-in-right group hover:border-primary hover:shadow-xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none animate-pulse"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold text-primary mb-6 group-hover:text-primary transition-colors">
                🚀 {language === 'fr' ? 'Sahab - Consultant Developer' : 'Sahab - Consultant Developer'}
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: '✓', text: language === 'fr' ? 'Pense en businessperson d\'abord' : 'Thinks like a businessperson first' },
                  { icon: '✓', text: language === 'fr' ? 'SEO & Performance intégrés dès le start' : 'SEO & Performance built-in from day 1' },
                  { icon: '✓', text: language === 'fr' ? 'Support & croissance continue' : 'Continuous support & growth' },
                  { icon: '✓', text: language === 'fr' ? 'Code lisible, documenté, maintenable' : 'Clean, documented, maintainable code' },
                  { icon: '✓', text: language === 'fr' ? 'Toujours apprendre, latest tech' : 'Always learning, latest tech stack' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-lg text-accent group-hover:scale-150 transition-transform duration-300">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Differentiators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: language === 'fr' ? 'T-Shaped Expert' : 'T-Shaped Expert',
              description: language === 'fr' ? 'Profond en React/WordPress, large en SEO/Automation/AI. Je peux gérer un projet entièrement seul.' : 'Deep in React/WordPress, broad in SEO/Automation/AI. I can manage a complete project solo.',
              icon: '📊',
            },
            {
              title: language === 'fr' ? 'Business Thinking' : 'Business Thinking',
              description: language === 'fr' ? 'Pas juste du code beau. Chaque décision tech est motivée par du ROI business concret.' : 'Not just beautiful code. Every tech decision is driven by concrete business ROI.',
              icon: '💼',
            },
            {
              title: language === 'fr' ? 'Growth Focused' : 'Growth Focused',
              description: language === 'fr' ? 'Vos résultats sont mes résultats. Je livre des solutions qui génèrent de vraies conversions.' : 'Your results are my results. I deliver solutions that generate real conversions.',
              icon: '📈',
            },
            {
              title: language === 'fr' ? 'Full Stack Autonomy' : 'Full Stack Autonomy',
              description: language === 'fr' ? 'De la stratégie au hosting, je gère. Pas besoin de 5 autres prestataires pour un projet.' : 'From strategy to hosting, I handle it. No need for 5 other vendors for one project.',
              icon: '⚙️',
            },
            {
              title: language === 'fr' ? 'Bleeding Edge' : 'Bleeding Edge',
              description: language === 'fr' ? 'Toujours à jour sur React, Next.js, Vercel, Bricks, automation. Premium first.' : 'Always up-to-date on React, Next.js, Vercel, Bricks, automation. Premium first.',
              icon: '⚡',
            },
            {
              title: language === 'fr' ? 'Client Success' : 'Client Success',
              description: language === 'fr' ? 'Mon succès = votre succès. Support rapide, documenté, durable. Pas de ghosting post-project.' : 'My success = Your success. Fast support, documented, lasting. No post-project ghosting.',
              icon: '🤝',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl border border-border bg-white hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group animate-fade-in-up hover:lift relative overflow-hidden ${
                i === 0 ? 'stagger-1' : i === 1 ? 'stagger-2' : i === 2 ? 'stagger-3' : i === 3 ? 'stagger-4' : 'stagger-5'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="relative">
                <div className="text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300 inline-block">{item.icon}</div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="mt-16 bg-white rounded-2xl border border-border p-12 animate-fade-in-up">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Ce que disent mes clients
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                quote: 'Sahab a transformé notre WordPress en une machine de conversion. +320% en 4 mois.',
                author: 'Marie, Founder e-commerce',
              },
              {
                quote: 'Consultant veritable, pas juste dev. Il m\'a aidé a penser autrement mon business.',
                author: 'Pierre, CEO SaaS',
              },
              {
                quote: 'Support rapide, code impeccable, ROI impressionant. Je recommande vraiment.',
                author: 'Sophie, Marketing Director',
              },
              {
                quote: 'Expert technique rare. Il a modernisé notre stack et boosté nos performances x3.',
                author: 'Youssef, CEO Tech Maroc',
              },
              {
                quote: 'La meilleure décision pour notre projet. Livraison avant délai, budget respecté.',
                author: 'Fatima, Directrice Marketing',
              },
              {
                quote: 'Code propre, documentation parfaite. On peut reprendre facilement son travail.',
                author: 'Karim, CTO Startup',
              },
            ].map((testimonial, i) => (
              <div key={i} className="p-6 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 group">
                <p className="text-foreground font-medium mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-primary font-semibold group-hover:text-primary transition-colors">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
