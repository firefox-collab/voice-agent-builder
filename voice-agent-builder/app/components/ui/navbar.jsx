'use client'

import { useState } from 'react'
import Logo from './Logo'

/**
 * Navbar Component
 * Main navigation bar for Voice-Agent-Builder
 * Features:
 * - Responsive design (mobile hamburger menu)
 * - Sticky positioning
 * - Glassmorphism effect
 * - Call-to-action button
 */
export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Navigation links
  const navLinks = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#faq', label: 'FAQs' }
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            
            {/* CTA Button */}
            <a
              href="#cta"
              className="bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Start Free Trial
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                // X icon when menu is open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when menu is closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block text-gray-700 hover:text-primary-600 py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile CTA Button */}
            <a
              href="#cta"
              className="block bg-primary-600 text-white px-6 py-2.5 rounded-lg font-semibold text-center hover:bg-primary-700 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

/**
 * NavbarSimple Component
 * Simpler version without mobile menu for internal pages
 */
export function NavbarSimple() {
  return (
    <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="flex items-center space-x-4">
            <a
              href="/dashboard"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Dashboard
            </a>
            <a
              href="/logout"
              className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}