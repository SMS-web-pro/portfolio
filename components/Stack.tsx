'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import SectionPattern from '@/components/SectionPattern'

export default function Stack() {
  const { language } = useLanguage()
  const t = translations[language]

  const stackCategories = [
    {
      title: language === 'fr' ? 'Frontend' : 'Frontend',
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel', 'HTML5', 'CSS3', 'JavaScript ES6+'],
      color: 'from-blue-500/20 to-blue-500/5'
    },
    {
      title: language === 'fr' ? 'CMS & Builder' : 'CMS & Builder',
      items: ['WordPress', 'Bricks Builder', 'Elementor Pro', 'ACF', 'WooCommerce', language === 'fr' ? 'Plugins Custom' : 'Custom Plugins', 'Headless CMS'],
      color: 'from-purple-500/20 to-purple-500/5'
    },
    {
      title: language === 'fr' ? 'Backend & Base de Données' : 'Backend & Databases',
      items: ['Node.js', 'PostgreSQL', 'MongoDB', 'Supabase', 'Firebase', 'REST APIs', 'GraphQL', 'Prisma ORM'],
      color: 'from-green-500/20 to-green-500/5'
    },
    {
      title: language === 'fr' ? 'Automation & IA' : 'Automation & AI',
      items: ['Zapier', 'Make', 'N8N', 'GitHub Actions', 'OpenAI GPT', 'Claude AI', language === 'fr' ? 'Scripts Custom' : 'Custom Scripts', 'LangChain'],
      color: 'from-orange-500/20 to-orange-500/5'
    },
    {
      title: language === 'fr' ? 'SEO & Analytics' : 'SEO & Analytics',
      items: ['Google Analytics 4', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Schema Markup', 'Core Web Vitals', 'Screaming Frog'],
      color: 'from-pink-500/20 to-pink-500/5'
    },
    {
      title: language === 'fr' ? 'Déploiement & DevOps' : 'Deployment & DevOps',
      items: ['Vercel', 'GitHub', 'Docker', 'CI/CD', 'Netlify', 'AWS Basics', 'Cloudflare', 'Linux'],
      color: 'from-cyan-500/20 to-cyan-500/5'
    },
  ]

  return (
    <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] relative overflow-hidden">
      <SectionPattern variant="stack" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0047ab] uppercase tracking-[0.2em] mb-3">{language === 'fr' ? 'Expertise' : 'Expertise'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1419] mb-4 text-balance font-heading">
            {language === 'fr' ? 'Technologies & Expertise' : 'Tech Stack & Expertise'}
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto text-pretty">
            {t.stack.description}
          </p>
          <div className="w-12 h-0.5 bg-[#0047ab] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stackCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-[#e5e7eb] bg-[#f1f5f9] hover:border-[#0047ab]/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-[#0f1419] mb-6 font-heading">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-white border border-[#d1d5db] rounded-full text-sm font-medium text-[#374151] hover:bg-[#0047ab] hover:text-white hover:border-[#0047ab] transition-all duration-300 cursor-pointer"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '96%', label: t.stack.stats.projects },
            { number: '7+', label: t.stack.stats.experience },
            { number: '95%', label: t.stack.stats.satisfaction },
            { number: '100%', label: t.stack.stats.timeline },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white border border-[#e5e7eb] text-center hover:border-[#0047ab]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl font-bold text-[#0047ab] mb-2">{stat.number}</div>
              <p className="text-[#6b7280] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
