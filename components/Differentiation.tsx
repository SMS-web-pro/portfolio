'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import SectionPattern from '@/components/SectionPattern'
import { Layers, Target, Shield, DollarSign, Headphones, TrendingUp } from 'lucide-react'

export default function Differentiation() {
  const { language } = useLanguage()
  const t = translations[language]
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const advantages = [
    { icon: Layers, title: t.differentiation.advantage1, desc: t.differentiation.advantage1Desc },
    { icon: Target, title: t.differentiation.advantage2, desc: t.differentiation.advantage2Desc },
    { icon: Shield, title: t.differentiation.advantage3, desc: t.differentiation.advantage3Desc },
    { icon: DollarSign, title: t.differentiation.advantage4, desc: t.differentiation.advantage4Desc },
    { icon: Headphones, title: t.differentiation.advantage5, desc: t.differentiation.advantage5Desc },
    { icon: TrendingUp, title: t.differentiation.advantage6, desc: t.differentiation.advantage6Desc },
  ]

  const testimonials = language === 'fr' ? [
    { quote: 'GoSite a transformé notre WordPress en une machine de conversion. Le trafic a augmenté de 320% en quatre mois.', author: 'Marie', rating: 5, company: 'Fondatrice e-commerce' },
    { quote: 'Un véritable consultant, pas seulement un développeur. Il m\'a aidé à repenser entièrement mon approche commerciale.', author: 'Pierre', rating: 5, company: 'Directeur Général SaaS' },
    { quote: 'Support réactif, code impeccable, retour sur investissement impressionnant. Je recommande vivement.', author: 'Sophie', rating: 5, company: 'Directrice Marketing' },
    { quote: 'Expert technique rare. Il a modernisé notre architecture et amélioré nos performances de trois fois.', author: 'Youssef', rating: 5, company: 'Directeur Technique' },
    { quote: 'La meilleure décision pour notre projet. Livré avant les délais, budget strictement respecté.', author: 'Fatima', rating: 4, company: 'Directrice Marketing' },
    { quote: 'Code propre, documentation parfaite. Son travail est facilement maintenable par d\'autres développeurs.', author: 'Karim', rating: 5, company: 'Directeur Technique Startup' },
  ] : [
    { quote: 'GoSite transformed our WordPress into a conversion machine. Traffic increased by 320% in four months.', author: 'Marie', rating: 5, company: 'E-commerce Founder' },
    { quote: 'A true consultant, not just a developer. He helped me completely rethink my business approach.', author: 'Pierre', rating: 5, company: 'SaaS CEO' },
    { quote: 'Fast support, impeccable code, impressive return on investment. Highly recommended.', author: 'Sophie', rating: 5, company: 'Marketing Director' },
    { quote: 'Rare technical expert. He modernized our architecture and improved performance threefold.', author: 'Youssef', rating: 5, company: 'Chief Technology Officer' },
    { quote: 'Best decision for our project. Delivered ahead of schedule, budget strictly respected.', author: 'Fatima', rating: 4, company: 'Marketing Director' },
    { quote: 'Clean code, perfect documentation. His work is easily maintainable by other developers.', author: 'Karim', rating: 5, company: 'Startup CTO' },
  ]

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
      }, 4000)
    }
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current)
    }
  }, [isAutoPlaying, testimonials.length])

  const handlePrev = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoPlaying(false)
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#f1f5f9] relative overflow-hidden">
      <SectionPattern variant="differentiation" />
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-[#0047ab] uppercase tracking-[0.2em] mb-3">{language === 'fr' ? 'Différenciation' : 'Differentiation'}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1419] mb-4 text-balance font-heading">
            {t.differentiation.title}
          </h2>
          <p className="text-lg text-[#6b7280] max-w-2xl mx-auto text-pretty">
            {t.differentiation.description}
          </p>
          <div className="w-12 h-0.5 bg-[#0047ab] mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="p-8 rounded-xl border border-[#e5e7eb] bg-white">
            <h3 className="text-2xl font-bold text-[#0f1419] mb-6 font-heading">
              {language === 'fr' ? 'Développeur Classique' : 'Traditional Developer'}
            </h3>
            <ul className="space-y-3">
              {(language === 'fr' ? [
                'Fait ce qu\'on lui demande exactement',
                'SEO/Performance? À voir après...',
                'Peut partir à la fin du projet',
                'Code surtout compris par lui',
                'Suit les tendances, rarement.',
              ] : [
                'Does exactly what you ask',
                'SEO/Performance? We\'ll see later...',
                'May leave after project ends',
                'Code only understood by them',
                'Rarely follows trends.',
              ]).map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-[#6b7280]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] flex-shrink-0"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 rounded-xl border-2 border-[#0047ab] bg-[#0047ab]/5 relative overflow-hidden">
            <h3 className="text-2xl font-bold text-[#0047ab] mb-6 font-heading">
              GoSite - Consultant Developer
            </h3>
            <ul className="space-y-3">
              {(language === 'fr' ? [
                'Pense en businessperson d\'abord',
                'SEO & Performance intégrés dès le start',
                'Support & croissance continue',
                'Code lisible, documenté, maintenable',
                'Toujours apprendre, latest tech',
              ] : [
                'Thinks like a businessperson first',
                'SEO & Performance built-in from day 1',
                'Continuous support & growth',
                'Clean, documented, maintainable code',
                'Always learning, latest tech stack',
              ]).map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-[#0f1419] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0047ab] flex-shrink-0"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((advantage, i) => {
            const Icon = advantage.icon
            return (
              <div
                key={i}
                className="p-6 rounded-xl border border-[#e5e7eb] bg-white hover:border-[#0047ab]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0047ab]/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#0047ab]" />
                </div>
                <h3 className="text-lg font-bold text-[#0f1419] mb-2 font-heading">
                  {advantage.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {advantage.desc}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mt-16 bg-white rounded-2xl border border-[#e5e7eb] p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-[#0f1419] mb-4 font-heading">
              {language === 'fr' ? 'Ce que disent mes clients' : 'What my clients say'}
            </h3>
            <div className="flex items-center justify-center gap-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-[#eab308]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-[#6b7280]">4.9/5 {language === 'fr' ? 'basé sur 50+ projets' : 'based on 50+ projects'}</p>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
              {testimonials.map((testimonial, i) => (
                <div key={i} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-3xl mx-auto text-center p-8 rounded-xl bg-[#f8fafc] border border-[#e5e7eb]">
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, j) => (
                        <svg key={j} className="w-5 h-5 text-[#eab308]" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-[#0f1419] font-medium mb-6 italic text-lg leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="border-t border-[#e5e7eb] pt-4">
                      <p className="text-[#0047ab] font-semibold">{testimonial.author}</p>
                      <p className="text-xs text-[#6b7280] mt-1">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <button onClick={handlePrev} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f8fafc] transition-colors shadow-sm">
              <svg className="w-5 h-5 text-[#0f1419]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={handleNext} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-[#e5e7eb] flex items-center justify-center hover:bg-[#f8fafc] transition-colors shadow-sm">
              <svg className="w-5 h-5 text-[#0f1419]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setIsAutoPlaying(false); setCurrentTestimonial(i) }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentTestimonial ? 'bg-[#0047ab] w-6' : 'bg-[#d1d5db]'}`}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-[#e5e7eb]">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#0047ab]">50+</p>
              <p className="text-xs text-[#6b7280] mt-1">{language === 'fr' ? 'Projets livrés' : 'Projects Delivered'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#0047ab]">98%</p>
              <p className="text-xs text-[#6b7280] mt-1">{language === 'fr' ? 'Clients satisfaits' : 'Happy Clients'}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#0047ab]">4.9</p>
              <p className="text-xs text-[#6b7280] mt-1">{language === 'fr' ? 'Note moyenne' : 'Average Rating'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
