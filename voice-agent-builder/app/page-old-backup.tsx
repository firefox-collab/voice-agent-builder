import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">
          Voice Agent Builder
        </h1>
        <p className="text-2xl text-white/90 mb-8">
          AI Voice Agents for Filipino Small Businesses
        </p>
        <p className="text-lg text-white/80 mb-12">
          By AI CORE IT Solutions
        </p>
        
        <div className="flex gap-4 justify-center">
          <Link
            href="/auth"
            className="px-8 py-4 bg-white text-indigo-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition transform hover:scale-105"
          >
            Start Free Trial →
          </Link>
          
          <Link
            href="/auth"
            className="px-8 py-4 bg-indigo-600 text-white rounded-lg font-semibold shadow-lg hover:bg-indigo-700 transition"
          >
            Sign In
          </Link>
        </div>

        <div className="mt-12">
          <span className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold backdrop-blur-sm">
            🚀 Day 2: Authentication Ready
          </span>
        </div>
      </div>
    </main>
  )
}