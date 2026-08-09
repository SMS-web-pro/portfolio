'use client'

import React from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import SectionPattern from '@/components/SectionPattern'
import { Globe, Code2, Search, Zap, Lightbulb, Settings } from 'lucide-react'

export default function Services() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      number: '01',
      title: t.services.service1.title,
      description: t.services.service1.desc,
      icon: Globe,
    },
    {
      number: '02',
      title: t.services.service2.title,
      description: t.services.service2.desc,
      icon: Code2,
    },
    {
      number: '03',
      title: t.services.service3.title,
      description: t.services.service3.desc,
      icon: Search,
    },
    {
      number: '04',
      title: t.services.service4.title,
      description: t.services.service4.desc,
      icon: Zap,
    },
    {
      number: '05',
      title: t.services.service5.title,
      description: t.services.service5.desc,
      icon: Lightbulb,
    },
    {
      number: '06',
      title: t.services.service6.title,
      description: t.services.service6.desc,
      icon: Settings,
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9] relative overflow-hidden">
      <SectionPattern variant="services" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0047ab] uppercase tracking-[0.2em] mb-3">{language === 'fr' ? 'Services' : 'Services'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1419] mb-4 text-balance font-heading">
            {t.services.title}
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto text-pretty">
            {t.services.description}
          </p>
          <div className="w-12 h-0.5 bg-[#0047ab] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group p-8 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#0047ab]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0047ab]/10 flex items-center justify-center mb-4 group-hover:bg-[#0047ab] group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#0047ab] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-[#0f1419] mb-3 group-hover:text-[#0047ab] transition-colors font-heading">
                  {service.title}
                </h3>
                <p className="text-[#6b7280] leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Micro CTA */}
        <div className="text-center mt-12">
          <p className="text-[#6b7280] mb-4">
            {language === 'fr' ? 'Vous cherchez un de ces services pour votre projet ?' : 'Looking for one of these services for your project?'}
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-[#0047ab] font-semibold hover:underline">
            {language === 'fr' ? 'Parlons-en gratuitement →' : 'Let\'s discuss it for free →'}
          </a>
        </div>
      </div>
    </section>
  )
}
