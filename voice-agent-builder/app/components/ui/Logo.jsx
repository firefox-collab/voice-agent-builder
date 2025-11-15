import React from 'react'

/**
 * Logo Component
 * Reusable brand logo for Voice-Agent-Builder
 * Can be used in Navbar, Footer, or anywhere else
 */
export default function Logo({ className = "", size = "default" }) {
  // Size variants
  const sizes = {
    small: "text-lg",
    default: "text-2xl",
    large: "text-3xl"
  }

  return (
    <div className={`flex items-center ${className}`}>
      {/* Logo Icon/Symbol - You can replace this with an actual logo image */}
      <div className="flex items-center gap-2">
        {/* Voice Wave Icon */}
        <div className="relative">
          <svg 
            className={`${sizes[size] || sizes.default} text-primary-600`} 
            width="32" 
            height="32" 
            viewBox="0 0 32 32" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Microphone/Voice Wave Design */}
            <path 
              d="M16 2C14.3431 2 13 3.34315 13 5V16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16V5C19 3.34315 17.6569 2 16 2Z" 
              fill="currentColor"
            />
            <path 
              d="M10 14C10 10.6863 12.6863 8 16 8C19.3137 8 22 10.6863 22 14V16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16V14Z" 
              stroke="currentColor" 
              strokeWidth="2"
              fill="none"
            />
            <path 
              d="M16 22V28M12 28H20" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round"
            />
          </svg>
        </div>
        
        {/* Brand Text */}
        <span className={`${sizes[size] || sizes.default} font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent`}>
          Voice-Agent-Builder
        </span>
      </div>
    </div>
  )
}

/**
 * LogoMini Component - Compact version for mobile or small spaces
 */
export function LogoMini({ className = "" }) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg 
        className="w-8 h-8 text-primary-600" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M16 2C14.3431 2 13 3.34315 13 5V16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16V5C19 3.34315 17.6569 2 16 2Z" 
          fill="currentColor"
        />
        <path 
          d="M10 14C10 10.6863 12.6863 8 16 8C19.3137 8 22 10.6863 22 14V16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16V14Z" 
          stroke="currentColor" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M16 22V28M12 28H20" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round"
        />
      </svg>
      <span className="ml-2 text-xl font-bold text-primary-600">VAB</span>
    </div>
  )
}
