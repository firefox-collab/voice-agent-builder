'use client'

import { useState } from 'react'

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-primary-300 transition-all"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <h3 className="text-lg font-bold text-gray-900 pr-8">
              {item.question}
            </h3>
            <svg
              className={`w-6 h-6 text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                openIndex === index ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <div
            className={`transition-all duration-300 ease-in-out ${
              openIndex === index
                ? 'max-h-96 opacity-100'
                : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 pb-5">
              <p className="text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
