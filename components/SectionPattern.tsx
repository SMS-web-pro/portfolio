'use client'

import React from 'react'

interface SectionPatternProps {
  variant?: 'hero' | 'identity' | 'services' | 'stack' | 'projects' | 'methodology' | 'differentiation' | 'contact' | 'none'
  className?: string
}

export default function SectionPattern({ variant = 'identity', className = '' }: SectionPatternProps) {
  if (variant === 'none') return null

  const patterns: Record<string, React.ReactNode> = {
    hero: (
      <>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-[10%] left-[5%] w-72 h-72 border-2 border-[#0047ab]/15 rounded-full animate-[spin_40s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
          <div className="absolute top-[10%] left-[5%] w-72 h-72 border border-[#0047ab]/10 rounded-full animate-[spin_60s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
          <div className="absolute bottom-[15%] right-[10%] w-96 h-96 border-2 border-[#0047ab]/12 rounded-full animate-[spin_50s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
          <div className="absolute bottom-[15%] right-[10%] w-96 h-96 border border-[#0047ab]/8 rounded-full animate-[spin_70s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
          <div className="absolute top-[40%] left-[50%] w-48 h-48 border-2 border-[#0047ab]/10 rounded-2xl rotate-45 animate-[spin_35s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
          <div className="absolute top-[20%] right-[20%] w-32 h-32 bg-gradient-to-br from-[#0047ab]/12 to-transparent rounded-xl rotate-12 animate-[float_8s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
          <div className="absolute bottom-[30%] left-[15%] w-24 h-24 bg-gradient-to-br from-[#0047ab]/10 to-transparent rounded-full animate-[float_6s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
          <div className="absolute top-[60%] right-[5%] w-40 h-40 bg-gradient-to-tl from-[#0047ab]/8 to-transparent rounded-2xl rotate-30 animate-[float_10s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0047ab]/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#0047ab]/5 rounded-full blur-[100px]" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1.2" fill="#0047ab" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-dots)" />
          </svg>
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hero-grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#0047ab" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#hero-grid)" />
          </svg>
        </div>
      </>
    ),

    identity: (
      <>
        <div className="absolute top-10 right-[10%] w-48 h-48 border-2 border-[#0047ab]/15 rounded-2xl rotate-45 animate-[spin_25s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-10 right-[10%] w-48 h-48 border border-[#0047ab]/8 rounded-2xl rotate-45 animate-[spin_35s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg) rotateY(30deg)' }} />
        <div className="absolute bottom-10 left-[5%] w-32 h-32 border-2 border-[#0047ab]/12 rounded-full animate-[spin_20s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute bottom-10 left-[5%] w-32 h-32 border border-[#0047ab]/6 rounded-full animate-[spin_30s_linear_infinite]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
        <div className="absolute top-1/3 left-[8%] w-20 h-20 bg-gradient-to-br from-[#0047ab]/12 to-transparent rounded-xl rotate-12 animate-[float_6s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/4 right-[25%] w-16 h-16 bg-gradient-to-bl from-[#0047ab]/10 to-transparent rounded-lg -rotate-12 animate-[float_8s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute bottom-1/4 right-[15%] w-28 h-28 bg-gradient-to-tl from-[#0047ab]/8 to-transparent rounded-2xl rotate-30 animate-[float_7s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0047ab]/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0047ab]/5 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="identity-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="#0047ab" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#identity-dots)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="identity-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0047ab" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#identity-grid)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="100%" x2="100%" y2="0" stroke="#0047ab" strokeWidth="1.5">
            <animate attributeName="y1" values="100%;0%;100%" dur="15s" repeatCount="indefinite" />
          </line>
        </svg>
      </>
    ),

    services: (
      <>
        <div className="absolute top-20 left-[5%] w-40 h-40 border-2 border-[#0047ab]/12 rounded-2xl rotate-12 animate-[spin_30s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-20 left-[5%] w-40 h-40 border border-[#0047ab]/6 rounded-2xl rotate-12 animate-[spin_45s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
        <div className="absolute bottom-20 right-[8%] w-28 h-28 bg-gradient-to-br from-[#0047ab]/10 to-transparent rounded-full animate-[float_5s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/2 left-[20%] w-20 h-20 bg-gradient-to-tr from-[#0047ab]/8 to-transparent rounded-xl rotate-45 animate-[float_7s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/4 right-[15%] w-36 h-36 bg-gradient-to-bl from-[#0047ab]/6 to-transparent rounded-2xl -rotate-12 animate-[float_9s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/2 right-[15%] w-48 h-48 bg-[#0047ab]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[10%] w-64 h-64 bg-[#0047ab]/4 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0047ab" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-grid)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="svc-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#0047ab" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#svc-dots)" />
        </svg>
      </>
    ),

    stack: (
      <>
        <div className="absolute -top-10 -right-10 w-80 h-80 border-2 border-[#0047ab]/10 rounded-full animate-[spin_40s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute -top-10 -right-10 w-80 h-80 border border-[#0047ab]/6 rounded-full animate-[spin_60s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border-2 border-[#0047ab]/8 rounded-full animate-[spin_50s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 border border-[#0047ab]/4 rounded-full animate-[spin_70s_linear_infinite]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
        <div className="absolute top-1/4 left-[10%] w-16 h-16 bg-gradient-to-br from-[#0047ab]/12 to-transparent rounded-lg rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/3 right-[20%] w-24 h-24 bg-gradient-to-bl from-[#0047ab]/8 to-transparent rounded-xl -rotate-30 animate-[float_9s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute bottom-1/4 left-[25%] w-32 h-32 bg-gradient-to-tr from-[#0047ab]/6 to-transparent rounded-2xl rotate-15 animate-[float_11s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0047ab]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0047ab]/4 rounded-full blur-[80px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stack-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#0047ab" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stack-dots)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="stack-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0047ab" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#stack-grid)" />
        </svg>
      </>
    ),

    projects: (
      <>
        <div className="absolute top-10 left-[3%] w-48 h-48 border-2 border-[#0047ab]/10 rounded-full animate-[spin_35s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-10 left-[3%] w-48 h-48 border border-[#0047ab]/6 rounded-full animate-[spin_50s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
        <div className="absolute bottom-10 right-[5%] w-36 h-36 bg-gradient-to-br from-[#0047ab]/10 to-transparent rounded-2xl rotate-45 animate-[float_8s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/3 left-[15%] w-24 h-24 bg-gradient-to-tr from-[#0047ab]/8 to-transparent rounded-xl -rotate-12 animate-[float_6s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute bottom-1/3 left-[10%] w-20 h-20 bg-gradient-to-bl from-[#0047ab]/6 to-transparent rounded-lg rotate-30 animate-[float_10s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/2 right-[10%] w-64 h-64 bg-[#0047ab]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-[20%] w-48 h-48 bg-[#0047ab]/4 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="proj-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#0047ab" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#proj-grid)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="proj-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#0047ab" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#proj-dots)" />
        </svg>
      </>
    ),

    methodology: (
      <>
        <div className="absolute top-20 right-[8%] w-28 h-28 border-2 border-[#0047ab]/12 rounded-xl rotate-12 animate-[spin_25s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-20 right-[8%] w-28 h-28 border border-[#0047ab]/6 rounded-xl rotate-12 animate-[spin_40s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
        <div className="absolute bottom-20 left-[5%] w-44 h-44 bg-gradient-to-br from-[#0047ab]/8 to-transparent rounded-full blur-2xl animate-[float_6s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/2 left-[12%] w-20 h-20 border-2 border-[#0047ab]/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/3 right-[20%] w-32 h-32 bg-gradient-to-bl from-[#0047ab]/6 to-transparent rounded-2xl rotate-45 animate-[float_8s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute bottom-1/4 right-[10%] w-24 h-24 bg-gradient-to-tr from-[#0047ab]/8 to-transparent rounded-xl -rotate-30 animate-[float_10s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-0 left-[20%] w-72 h-72 bg-[#0047ab]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-[15%] w-56 h-56 bg-[#0047ab]/4 rounded-full blur-[80px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="meth-dots" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#0047ab" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#meth-dots)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="meth-grid" x="0" y="0" width="45" height="45" patternUnits="userSpaceOnUse">
              <path d="M 45 0 L 0 0 0 45" fill="none" stroke="#0047ab" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#meth-grid)" />
        </svg>
      </>
    ),

    differentiation: (
      <>
        <div className="absolute top-0 left-[10%] w-80 h-80 bg-[#0047ab]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-[5%] w-64 h-64 bg-[#0047ab]/5 rounded-full blur-3xl" />
        <div className="absolute top-10 right-[15%] w-32 h-32 border-2 border-[#0047ab]/12 rounded-2xl rotate-45 animate-[float_7s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-10 right-[15%] w-32 h-32 border border-[#0047ab]/6 rounded-2xl rotate-45 animate-[float_10s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
        <div className="absolute bottom-10 left-[8%] w-20 h-20 bg-gradient-to-br from-[#0047ab]/10 to-transparent rounded-xl animate-[spin_20s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/3 left-[15%] w-28 h-28 bg-gradient-to-tr from-[#0047ab]/8 to-transparent rounded-2xl -rotate-12 animate-[float_9s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute bottom-1/3 right-[12%] w-36 h-36 bg-gradient-to-bl from-[#0047ab]/6 to-transparent rounded-xl rotate-30 animate-[float_11s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-[40%] left-[5%] w-16 h-16 bg-gradient-to-br from-[#0047ab]/8 to-transparent rounded-lg rotate-60 animate-[float_8s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diff-grid" x="0" y="0" width="45" height="45" patternUnits="userSpaceOnUse">
              <path d="M 45 0 L 0 0 0 45" fill="none" stroke="#0047ab" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diff-grid)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="diff-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="#0047ab" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diff-dots)" />
        </svg>
      </>
    ),

    contact: (
      <>
        <div className="absolute top-10 left-[5%] w-40 h-40 border-2 border-white/10 rounded-full animate-[spin_30s_linear_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-10 left-[5%] w-40 h-40 border border-white/6 rounded-full animate-[spin_45s_linear_infinite_reverse]" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }} />
        <div className="absolute bottom-20 right-[10%] w-56 h-56 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-[8%] w-20 h-20 bg-gradient-to-bl from-white/10 to-transparent rounded-xl rotate-45 animate-[float_5s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-1/4 left-[15%] w-28 h-28 bg-gradient-to-tr from-white/6 to-transparent rounded-2xl -rotate-30 animate-[float_8s_ease-in-out_infinite_reverse]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute bottom-1/4 left-[10%] w-24 h-24 bg-gradient-to-br from-white/8 to-transparent rounded-xl rotate-15 animate-[float_7s_ease-in-out_infinite]" style={{ transformStyle: 'preserve-3d' }} />
        <div className="absolute top-0 right-[20%] w-48 h-48 bg-white/4 rounded-full blur-[80px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.06]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="0.8" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-dots)" />
        </svg>
        <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="contact-grid" x="0" y="0" width="55" height="55" patternUnits="userSpaceOnUse">
              <path d="M 55 0 L 0 0 0 55" fill="none" stroke="white" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#contact-grid)" />
        </svg>
      </>
    ),
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {patterns[variant]}
    </div>
  )
}
