'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/lib/translations'
import ProjectModal from './ProjectModal'

export default function CaseStudies() {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [selectedLiveProject, setSelectedLiveProject] = useState<any | null>(null)
  const [modalOpen, setModalOpen] = useState(false)

  const projects = [
    {
      id: 1,
      title: language === 'fr' ? t.caseStudies.project1.title : t.caseStudies.project1.title,
      category: language === 'fr' ? t.caseStudies.project1.category : t.caseStudies.project1.category,
      description: language === 'fr' ? t.caseStudies.project1.description : t.caseStudies.project1.description,
      detail: language === 'fr' ? t.caseStudies.project1.detail : t.caseStudies.project1.detail,
      image: '/mockup-wordpress.jpg',
      results: t.caseStudies.project1.results,
      tags: t.caseStudies.project1.tags,
      budget: t.caseStudies.project1.budget,
      timeline: t.caseStudies.project1.timeline,
    },
    {
      id: 2,
      title: language === 'fr' ? t.caseStudies.project2.title : t.caseStudies.project2.title,
      category: language === 'fr' ? t.caseStudies.project2.category : t.caseStudies.project2.category,
      description: language === 'fr' ? t.caseStudies.project2.description : t.caseStudies.project2.description,
      detail: language === 'fr' ? t.caseStudies.project2.detail : t.caseStudies.project2.detail,
      image: '/mockup-react.jpg',
      results: t.caseStudies.project2.results,
      tags: t.caseStudies.project2.tags,
      budget: t.caseStudies.project2.budget,
      timeline: t.caseStudies.project2.timeline,
    },
    {
      id: 3,
      title: language === 'fr' ? t.caseStudies.project3.title : t.caseStudies.project3.title,
      category: language === 'fr' ? t.caseStudies.project3.category : t.caseStudies.project3.category,
      description: language === 'fr' ? t.caseStudies.project3.description : t.caseStudies.project3.description,
      detail: language === 'fr' ? t.caseStudies.project3.detail : t.caseStudies.project3.detail,
      image: '/mockup-seo.jpg',
      results: t.caseStudies.project3.results,
      tags: t.caseStudies.project3.tags,
      budget: t.caseStudies.project3.budget,
      timeline: t.caseStudies.project3.timeline,
    },
    {
      id: 4,
      title: language === 'fr' ? t.caseStudies.project4.title : t.caseStudies.project4.title,
      category: language === 'fr' ? t.caseStudies.project4.category : t.caseStudies.project4.category,
      description: language === 'fr' ? t.caseStudies.project4.description : t.caseStudies.project4.description,
      detail: language === 'fr' ? t.caseStudies.project4.detail : t.caseStudies.project4.detail,
      image: '/mockup-ai.jpg',
      results: t.caseStudies.project4.results,
      tags: t.caseStudies.project4.tags,
      budget: t.caseStudies.project4.budget,
      timeline: t.caseStudies.project4.timeline,
    },
    {
      id: 5,
      title: language === 'fr' ? t.caseStudies.project5.title : t.caseStudies.project5.title,
      category: language === 'fr' ? t.caseStudies.project5.category : t.caseStudies.project5.category,
      description: language === 'fr' ? t.caseStudies.project5.description : t.caseStudies.project5.description,
      detail: language === 'fr' ? t.caseStudies.project5.detail : t.caseStudies.project5.detail,
      image: '/mockup-ecommerce.jpg',
      results: t.caseStudies.project5.results,
      tags: t.caseStudies.project5.tags,
      budget: t.caseStudies.project5.budget,
      timeline: t.caseStudies.project5.timeline,
    },
    {
      id: 6,
      title: language === 'fr' ? t.caseStudies.project6.title : t.caseStudies.project6.title,
      category: language === 'fr' ? t.caseStudies.project6.category : t.caseStudies.project6.category,
      description: language === 'fr' ? t.caseStudies.project6.description : t.caseStudies.project6.description,
      detail: language === 'fr' ? t.caseStudies.project6.detail : t.caseStudies.project6.detail,
      image: '/mockup-saas.jpg',
      results: t.caseStudies.project6.results,
      tags: t.caseStudies.project6.tags,
      budget: t.caseStudies.project6.budget,
      timeline: t.caseStudies.project6.timeline,
    },
  ]

  const handleViewDetails = (project: any) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-secondary/20 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            {t.caseStudies.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            {t.caseStudies.description}
          </p>
          <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden border border-border bg-white hover:border-primary/50 transition-all duration-300 animate-fade-in-up hover:shadow-xl-custom"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-primary/10 to-accent/10">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col gap-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3 w-fit border border-primary/20">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20 hover:bg-primary/20 transition-colors duration-200">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Quick Results Preview - All Results */}
                <div className="p-3 rounded-lg bg-gradient-to-br from-accent/10 to-primary/10 border border-accent/20">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wider mb-3">
                    {language === 'fr' ? '⭐ Résultats Clés' : '⭐ Key Results'}
                  </p>
                  <div className="space-y-2">
                    {project.results.map((result, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-accent font-bold text-sm flex-shrink-0 mt-0.5">→</span>
                        <span className="text-sm font-semibold text-foreground">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Budget & Timeline Info */}
                <div className="grid grid-cols-2 gap-2 p-3 rounded-lg bg-secondary/30 border border-border">
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Budget</p>
                    <p className="text-sm font-bold text-primary">{project.budget}</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-1">Durée</p>
                    <p className="text-sm font-bold text-accent">{project.timeline}</p>
                  </div>
                </div>

                {/* View Details CTA */}
                <button
                  onClick={() => handleViewDetails(project)}
                  className="w-full px-4 py-3 bg-gradient-to-r from-primary to-primary/90 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 group/btn"
                >
                  <span>{language === 'fr' ? 'Voir le détail' : 'View Details'}</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Live Projects Section */}
        <div className="mt-20 animate-fade-in-up">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              {language === 'fr' ? 'Projets en Action' : 'Live Projects'}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'fr' 
                ? 'Explorez mes réalisations en direct. Cliquez pour voir les projets fonctionnels.' 
                : 'Explore my live work. Click to see functional projects in action.'}
            </p>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Home Service Hub',
                description: language === 'fr' ? 'Platforme services domicile' : 'Home services platform',
                url: 'https://home-service-hub-nu.vercel.app/',
                category: 'WordPress/React',
                color: 'from-blue-500/20 to-blue-500/5'
              },
              {
                title: 'Assure AI Connect',
                description: language === 'fr' ? 'Connecteur IA assurance' : 'Insurance AI connector',
                url: 'https://assure-ai-connect-83-23.vercel.app/',
                category: 'AI/React',
                color: 'from-purple-500/20 to-purple-500/5'
              },
              {
                title: 'ProspectAI',
                description: language === 'fr' ? 'Plateforme IA prospection' : 'AI prospecting platform',
                url: 'https://v0-website-redesign-platform-fy.vercel.app/',
                category: 'AI/Next.js',
                color: 'from-green-500/20 to-green-500/5'
              },
              {
                title: 'MarocLearn',
                description: language === 'fr' ? 'E-learning Maroc' : 'Moroccan e-learning',
                url: 'https://maroclearn.vercel.app/',
                category: 'Education/React',
                color: 'from-orange-500/20 to-orange-500/5'
              }
            ].map((project, i) => (
              <div
                key={i}
                className="group rounded-xl border border-border bg-white hover:border-primary/50 transition-all duration-300 cursor-pointer animate-fade-in-up hover:shadow-lg hover:shadow-primary/10"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setSelectedLiveProject(project)}
              >
                {/* Preview Image */}
                <div className="relative h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-t-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl mb-2">🌐</div>
                      <p className="text-xs text-muted-foreground font-medium">{project.category}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4">
                  <h4 className="font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <span>{language === 'fr' ? 'Voir en direct' : 'View Live'}</span>
                    <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Project Modal */}
        {selectedLiveProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden animate-scale-in">
              {/* Header */}
              <div className="p-6 border-b border-border bg-gradient-to-r from-primary/10 to-accent/10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{selectedLiveProject.title}</h3>
                    <p className="text-muted-foreground">{selectedLiveProject.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedLiveProject(null)}
                    className="w-10 h-10 rounded-full bg-white border border-border hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* iframe Container */}
              <div className="relative h-[600px] bg-gray-100">
                <iframe
                  src={selectedLiveProject.url}
                  className="w-full h-full border-0"
                  title={selectedLiveProject.title}
                  loading="lazy"
                  onLoad={() => {
                    const loader = document.getElementById('iframe-loader');
                    if (loader) loader.style.display = 'none';
                  }}
                />
                {/* Loading indicator */}
                <div className="absolute inset-0 flex items-center justify-center bg-white/90 pointer-events-none" id="iframe-loader">
                  <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-muted-foreground">
                      {language === 'fr' ? 'Chargement du projet...' : 'Loading project...'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-border bg-secondary/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">
                      {language === 'fr' ? 'URL:' : 'URL:'}
                    </span>
                    <code className="text-sm font-mono bg-primary/10 text-primary px-2 py-1 rounded">
                      {selectedLiveProject.url}
                    </code>
                  </div>
                  <a
                    href={selectedLiveProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 flex items-center gap-2"
                  >
                    <span>{language === 'fr' ? 'Ouvrir dans un nouvel onglet' : 'Open in new tab'}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Project Modal */}
      {modalOpen && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setModalOpen(false)}
          language={language}
        />
      )}
    </section>
  )
}
