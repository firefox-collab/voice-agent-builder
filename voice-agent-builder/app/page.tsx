'use client'

import ShaderBackground from './components/ShaderBackground'
import Accordion from './components/ui/Accordion'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="relative bg-white">
      <ShaderBackground />

      <nav className="fixed top-0 w-full bg-white/98 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Voice-Agent-Builder</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Solutions</a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Pricing</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">How It Works</a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">FAQs</a>
              <a href="#cta" className="bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Start Free Trial
              </a>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-4 space-y-3">
              <a href="#solutions" className="block text-gray-700 hover:text-primary-600">Solutions</a>
              <a href="#pricing" className="block text-gray-700 hover:text-primary-600">Pricing</a>
              <a href="#how-it-works" className="block text-gray-700 hover:text-primary-600">How It Works</a>
              <a href="#faq" className="block text-gray-700 hover:text-primary-600">FAQs</a>
              <a href="#cta" className="block bg-primary-700 text-white px-6 py-2.5 rounded-lg font-semibold text-center">
                Start Free Trial
              </a>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-primary-500 rounded-full mr-2 animate-pulse"></span>
              Built for Philippine Small Businesses
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 text-balance">
              Your 24/7 Voice Assistant,<br />
              <span className="text-primary-600">Ready in 5 Minutes</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto">
              No coding required. No expensive setup. Just choose your industry, customize, and launch your AI voice agent that handles calls while you focus on growing your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a href="#cta" className="bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-all shadow-lg hover:shadow-2xl transform hover:-translate-y-1 w-full sm:w-auto">
                Start Your Free Trial
              </a>
              <a href="#demo" className="bg-white/90 backdrop-blur-sm border-2 border-primary-200 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-primary-600 hover:text-primary-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                Watch Demo
              </a>
            </div>

            <div className="text-sm text-gray-500">
              No credit card required • 30-day free trial • Cancel anytime
            </div>
          </div>

          <div className="mt-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-100 to-blue-100 rounded-3xl transform rotate-1 opacity-80"></div>
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-gray-200">
              <div className="aspect-video bg-gradient-to-br from-primary-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                  <p className="text-gray-600 font-medium">Product Demo Video</p>
                  <p className="text-sm text-gray-500 mt-1">See how easy it is to set up your voice agent</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-white/98 backdrop-blur-md" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">&lt;5 min</div>
              <div className="text-gray-600">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">24/7</div>
              <div className="text-gray-600">Always Available</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">[X]%</div>
              <div className="text-gray-600">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3,500</div>
              <div className="text-gray-600">Starting Price</div>
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/98 backdrop-blur-md" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Perfect For Your Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pre-built templates designed specifically for Philippine businesses. No generic solutions — just industry-specific voice agents that understand your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🍽️',
                title: 'Restaurants & Cafes',
                description: 'Take reservations, answer menu questions, and handle delivery inquiries while your staff focuses on serving customers.',
                features: ['Table reservations', 'Menu information', 'Operating hours', 'Delivery status']
              },
              {
                icon: '🏥',
                title: 'Medical Clinics',
                description: 'Book appointments, send reminders, and answer common patient questions professionally and securely.',
                features: ['Appointment scheduling', 'Prescription reminders', 'Clinic hours', 'Doctor availability']
              },
              {
                icon: '🏠',
                title: 'Real Estate',
                description: 'Qualify leads, schedule viewings, and provide property information even when you\'re showing other properties.',
                features: ['Property inquiries', 'Viewing schedules', 'Price information', 'Location details']
              },
              {
                icon: '💇',
                title: 'Salons & Spas',
                description: 'Manage bookings, handle cancellations, and share service information without interrupting client sessions.',
                features: ['Service booking', 'Stylist availability', 'Package pricing', 'Booking changes']
              },
              {
                icon: '🚗',
                title: 'Auto Repair Shops',
                description: 'Schedule maintenance, provide service updates, and answer pricing questions while mechanics work.',
                features: ['Service scheduling', 'Status updates', 'Quote requests', 'Warranty info']
              },
              {
                icon: '🏪',
                title: 'Retail Stores',
                description: 'Check product availability, share store hours, and handle basic inquiries so staff can focus on in-store customers.',
                features: ['Product availability', 'Store locations', 'Return policy', 'Promo information']
              }
            ].map((industry, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all group">
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {industry.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-success mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-gray-50/98 backdrop-blur-md px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Problems You Face Every Day
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We understand the daily struggles of running a small business in the Philippines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '📞',
                pain: 'Missing Important Calls',
                description: 'Customers hang up when you\'re busy. Lost calls mean lost revenue and frustrated clients who go to your competitors.'
              },
              {
                icon: '⏰',
                pain: 'After-Hours Inquiries',
                description: 'Your phone rings at 9 PM with appointment requests. You want work-life balance but can\'t afford to miss opportunities.'
              },
              {
                icon: '💰',
                pain: 'Expensive Receptionists',
                description: 'Hiring full-time staff costs ₱15,000-25,000/month plus benefits. That\'s money you could invest back into your business.'
              },
              {
                icon: '😰',
                pain: 'Overwhelmed Staff',
                description: 'Your team is juggling walk-ins, phone calls, and their core work. Quality suffers when everyone is stretched too thin.'
              },
              {
                icon: '📝',
                pain: 'Manual Appointment Tracking',
                description: 'Sticky notes and messy notebooks lead to double-bookings and missed appointments. It\'s unprofessional and stressful.'
              },
              {
                icon: '🌏',
                pain: 'Language Barriers',
                description: 'Some customers prefer English, others Tagalog. You need consistent, professional communication in both languages.'
              }
            ].map((pain, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border-2 border-red-100">
                <div className="text-5xl mb-4">{pain.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {pain.pain}
                </h3>
                <p className="text-gray-600">
                  {pain.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/98 backdrop-blur-md" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Voice-Agent-Builder?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re not just another AI tool. We&apos;re your partner in business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {[
              {
                title: 'Industry-Specific, Not Generic',
                description: 'Forget blank templates. Our voice agents come pre-configured for your industry with the right questions, responses, and workflows built-in.',
                icon: '🎯'
              },
              {
                title: 'Setup in Minutes, Not Days',
                description: 'No technical knowledge needed. Answer a few questions, customize your preferences, and you\'re live. Seriously, it takes less time than making pancit canton.',
                icon: '⚡'
              },
              {
                title: 'Affordable for Small Businesses',
                description: 'Enterprise AI costs ₱50,000+/month. Developer tools require expensive programmers. We start at a fraction of that — pricing built for Philippine SMBs.',
                icon: '💵'
              },
              {
                title: 'Try Before You Pay',
                description: 'Start with a full-featured 30-day trial. No credit card. No commitment. Just results. See the value before spending a single peso.',
                icon: '🎁'
              }
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="text-5xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-lg">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="relative py-20 bg-gradient-to-br from-primary-50/98 to-blue-50/98 backdrop-blur-md px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get Started in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No complicated setup. No technical jargon. Just a straightforward path to your 24/7 voice assistant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-primary-200" style={{zIndex: 0}}></div>

            {[
              {
                step: '1',
                title: 'Choose Your Industry',
                description: 'Select from restaurant, clinic, salon, retail, and more. We\'ll load the perfect template for your business type.',
                icon: '🏢'
              },
              {
                step: '2',
                title: 'Customize Your Agent',
                description: 'Add your business info, set operating hours, choose voice style, and pick features. We guide you through every option.',
                icon: '⚙️'
              },
              {
                step: '3',
                title: 'Launch and Relax',
                description: 'Get your dedicated phone number and start receiving calls. Your AI assistant handles the rest while you focus on what matters.',
                icon: '🚀'
              }
            ].map((step, idx) => (
              <div key={idx} className="relative" style={{zIndex: 1}}>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
                    {step.step}
                  </div>
                  <div className="text-5xl mb-4 text-center">{step.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/98 backdrop-blur-md" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Everything Your Business Needs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features that work together to give your customers the best experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: '🗣️',
                title: 'Natural Conversations',
                description: 'AI that sounds human, not robotic. Understands Taglish and context.'
              },
              {
                icon: '📅',
                title: 'Smart Scheduling',
                description: 'Book, reschedule, and confirm appointments automatically.'
              },
              {
                icon: '📊',
                title: 'Call Analytics',
                description: 'See what customers ask about, peak hours, and missed opportunities.'
              },
              {
                icon: '📧',
                title: 'Email & SMS Alerts',
                description: 'Get notified for important calls and appointments instantly.'
              },
              {
                icon: '🔗',
                title: 'Google Sheets Sync',
                description: 'All call logs and appointments automatically saved to your spreadsheet.'
              },
              {
                icon: '💬',
                title: 'Multi-Language',
                description: 'Switch between English and Tagalog seamlessly during calls.'
              },
              {
                icon: '🔒',
                title: 'Secure & Private',
                description: 'Your business data is encrypted and never shared with anyone.'
              },
              {
                icon: '📱',
                title: 'Mobile Dashboard',
                description: 'Manage everything from your phone. Monitor calls anywhere, anytime.'
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="relative py-20 bg-gray-50/98 backdrop-blur-md px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No hidden fees. No surprise charges. Just honest pricing that grows with your business.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  3,500
                  <span className="text-xl text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600">Perfect for getting started</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  '200 calls per month',
                  'Industry-specific template',
                  'Basic scheduling',
                  'Email notifications',
                  'Call recordings',
                  'Dashboard access'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#cta" className="block w-full bg-gray-100 text-gray-900 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Start Free Trial
              </a>
            </div>

            <div className="bg-gradient-to-br from-primary-600 to-blue-600 p-8 rounded-2xl border-2 border-primary-600 shadow-2xl transform md:scale-105 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-warning text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Professional</h3>
                <div className="text-5xl font-bold text-white mb-2">
                  7,000
                  <span className="text-xl text-primary-100 font-normal">/month</span>
                </div>
                <p className="text-primary-100">For growing businesses</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  '500 calls per month',
                  'All Starter features',
                  'Advanced scheduling',
                  'SMS notifications',
                  'Google Sheets integration',
                  'Custom voice options',
                  'Priority support',
                  'Call analytics'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-white mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#cta" className="block w-full bg-white text-primary-600 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg">
                Start Free Trial
              </a>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <div className="text-5xl font-bold text-gray-900 mb-2">
                  15,000
                  <span className="text-xl text-gray-500 font-normal">/month</span>
                </div>
                <p className="text-gray-600">For established businesses</p>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited calls',
                  'All Professional features',
                  'Multi-location support',
                  'CRM integration',
                  'Custom workflows',
                  'Dedicated account manager',
                  'White-label option',
                  'API access'
                ].map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-success mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#cta" className="block w-full bg-gray-100 text-gray-900 text-center px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all">
                Contact Sales
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 text-lg">
              All plans include a 30-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/98 backdrop-blur-md" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Voice-Agent-Builder
            </p>
          </div>

          <Accordion items={[
            {
              question: 'Do I need any technical knowledge to set this up?',
              answer: 'None at all. If you can use Facebook, you can use Voice-Agent-Builder. Our guided setup walks you through every step in plain English (or Tagalog!).'
            },
            {
              question: 'How does the 30-day free trial work?',
              answer: 'Sign up, set up your voice agent, and use all features for 30 days completely free. No credit card required. After the trial, choose a plan or cancel — no questions asked.'
            },
            {
              question: 'Can it handle both English and Tagalog calls?',
              answer: 'Yes! Our AI understands Taglish (code-switching) and responds naturally in whatever language your customer prefers.'
            },
            {
              question: 'What happens to calls when my business is closed?',
              answer: 'Your voice agent politely informs callers of your business hours, can take messages or schedule appointments for when you reopen, and sends you a summary.'
            },
            {
              question: 'Can I transfer urgent calls to my phone?',
              answer: 'Absolutely. Set up rules for what constitutes an urgent call, and the system will forward it to your mobile number immediately.'
            },
            {
              question: 'Is my customer data safe?',
              answer: 'Yes. We use bank-level encryption, comply with data privacy laws, and never share your data with third parties. Your information stays yours.'
            },
            {
              question: 'What if I need help setting things up?',
              answer: 'We offer email support for all users, and Professional/Enterprise plans get priority support. We typically respond within 2 hours during business hours.'
            },
            {
              question: 'Can I cancel anytime?',
              answer: 'Yes. No long-term contracts. Cancel anytime from your dashboard with one click. You\'ll keep access until the end of your billing period.'
            }
          ]} />
          </div>
      </section>

      <section id="cta" className="relative py-20 bg-gradient-to-br from-primary-600 to-blue-600 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Never Miss Another Call?
          </h2>
          <p className="text-xl text-primary-100 mb-12 max-w-2xl mx-auto">
            Join Philippine businesses who are saving time, money, and sanity with their 24/7 AI voice assistants. Start your free trial today — no credit card needed.
          </p>

          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md mx-auto">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-gray-700">
                  <option>Select Your Industry</option>
                  <option>Restaurant/Cafe</option>
                  <option>Medical Clinic</option>
                  <option>Salon/Spa</option>
                  <option>Retail Store</option>
                  <option>Real Estate</option>
                  <option>Auto Repair</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="w-full bg-primary-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl">
                Start My Free Trial
              </button>
              <p className="text-sm text-gray-500 mt-4">
                30 days free • No credit card required • Cancel anytime
              </p>
            </form>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-100">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free setup support</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Live in 5 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Philippine support team</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8" style={{ zIndex: 1 }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Voice-Agent-Builder</h3>
              <p className="text-sm text-gray-400">
                Empowering Philippine small businesses with AI voice technology that works.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#solutions" className="hover:text-primary-400 transition-colors">Solutions</a></li>
                <li><a href="#pricing" className="hover:text-primary-400 transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</a></li>
                <li><a href="#demo" className="hover:text-primary-400 transition-colors">Demo</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-primary-400 transition-colors">FAQs</a></li>
                <li><a href="#contact" className="hover:text-primary-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">API Docs</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary-400 transition-colors">Data Security</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 Voice-Agent-Builder. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
