'use client'

import React from 'react'

interface AnimatedLogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function AnimatedLogo({ size = 'md', showText = true }: AnimatedLogoProps) {
  const sizes = {
    sm: { wrapper: 'h-12 w-12', svg: 48, text: 'text-xl', sub: 'text-[0.5rem]' },
    md: { wrapper: 'h-[50px] w-[50px]', svg: 50, text: 'text-2xl', sub: 'text-[0.6rem]' },
    lg: { wrapper: 'h-16 w-16', svg: 64, text: 'text-3xl', sub: 'text-xs' },
  }

  const s = sizes[size]

  return (
    <div className="flex items-center gap-1.5 group cursor-pointer">
      {/* Logo Mark */}
      <div className={`${s.wrapper} relative flex-shrink-0`}>
        <svg
          viewBox="0 0 48 48"
          className="w-full h-full drop-shadow-md"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="hex-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0047ab" />
              <stop offset="100%" stopColor="#0047ab" />
            </linearGradient>
          </defs>

          {/* Hexagon */}
          <path
            d="M24 2 L44 13 L44 35 L24 46 L4 35 L4 13 Z"
            fill="#0047ab"
          >
            <animate
              attributeName="fill"
              values="#0047ab;#0052c4;#0047ab"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          {/* Inner highlight for depth */}
          <path
            d="M24 5 L42 14.5 L42 33.5 L24 43 L6 33.5 L6 14.5 Z"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="0.5"
          />

          {/* G */}
          <text
            x="9.5" y="32"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="23"
            fill="white"
          >
            G
          </text>

          {/* S */}
          <text
            x="25" y="32"
            fontFamily="Inter, system-ui, -apple-system, sans-serif"
            fontWeight="800"
            fontSize="23"
            fill="white"
            opacity="0.88"
          >
            S
          </text>

        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`${s.text} font-extrabold tracking-tight`}>
            <span className="text-[#0047ab]">Go</span>
            <span className="text-[#000000]">Site</span>
          </span>
          <span className={`${s.sub} font-semibold text-muted-foreground tracking-[0.18em] uppercase mt-0.5`}>
            Digital Services
          </span>
        </div>
      )}
    </div>
  )
}
