'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'

export default function Stack() {
  const { language } = useLanguage()
  const t = translations[language]

  const stackCategories = [
    {
      title: language === 'fr' ? 'Frontend' : 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      title: language === 'fr' ? 'CMS & Builder' : 'CMS & Builder',
      items: ['WordPress', 'Bricks Builder', 'Elementor Pro', 'ACF', language === 'fr' ? 'Plugins Custom' : 'Custom Plugins'],
      color: 'from-purple-500/20 to-purple-500/5'
    },
    {
      title: language === 'fr' ? 'Backend & Base de Données' : 'Backend & DB',
      items: ['Node.js', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'],
      color: 'from-green-500/20 to-green-500/5'
    },
    {
      title: language === 'fr' ? 'Automation & IA' : 'Automation & AI',
      items: ['Zapier', 'Make', 'N8N', 'GitHub Actions', language === 'fr' ? 'Intégration GPT' : 'GPT Integration', language === 'fr' ? 'Scripts Custom' : 'Custom Scripts'],
      color: 'from-orange-500/20 to-orange-500/5'
    },
    {
      title: language === 'fr' ? 'SEO & Analytics' : 'SEO & Analytics',
      items: ['Google Analytics', 'SEMrush', 'Ahrefs', 'Schema Markup', 'Core Web Vitals'],
      color: 'from-pink-500/20 to-pink-500/5'
    },
    {
      title: language === 'fr' ? 'Déploiement & DevOps' : 'Deployment & DevOps',
      items: ['Vercel', 'GitHub', 'Docker', 'CI/CD', 'Netlify'],
      color: 'from-cyan-500/20 to-cyan-500/5'
    },
  ]

  return (
    <section id="expertise" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
            {t.stack.title}
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {language === 'fr' ? 'Technologies & Expertise' : 'Tech Stack & Expertise'}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.stack.description}
          </p>
        </div>

        {/* Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stackCategories.map((category, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border border-border bg-gradient-to-br ${category.color} hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 animate-fade-in-up group hover:lift relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"></div>
              
              <div className="relative">
                <h3 className="text-lg font-bold text-foreground mb-6 group-hover:text-primary transition-colors">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white border border-border rounded-full text-sm font-medium text-foreground hover:border-primary hover:text-primary hover:shadow-md hover:shadow-primary/20 hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-primary hover:text-white"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Credentials Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { number: '96%', label: t.stack.stats.projects },
            { number: '7+', label: t.stack.stats.experience },
            { number: '95%', label: t.stack.stats.satisfaction },
            { number: '100% ± 5%', label: t.stack.stats.timeline },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 text-center group hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 animate-scale-in hover:lift relative overflow-hidden"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative">
                <div className="text-4xl font-bold text-primary mb-2 group-hover:scale-125 group-hover:animate-bounce-delayed transition-transform">
                  {stat.number.includes('±') ? (
                    <>
                      <span className="text-4xl">{stat.number.split('±')[0]}</span>
                      <span className="text-sm ml-1">± 5%</span>
                    </>
                  ) : (
                    stat.number
                  )}
                </div>
                <p className="text-muted-foreground text-sm group-hover:text-primary/70 transition-colors">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
