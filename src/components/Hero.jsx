import { OptimizelyContext } from '@optimizely/react-sdk'
import { useEffect, useState, useContext } from 'react'

const Hero = () => {
  const { optimizely } = useContext(OptimizelyContext)
  const [flagState, setFlagState] = useState({
    enabled: false,
    variationKey: null,
    variables: {}
  })

  // Get or create a consistent user ID
  const [userId] = useState(() => {
    let id = localStorage.getItem('optimizely_user_id')
    if (!id) {
      id = 'demo_user_' + Math.random().toString(36).substring(7)
      localStorage.setItem('optimizely_user_id', id)
    }
    return id
  })

  // Poll every second to get fresh decision from Optimizely
  useEffect(() => {
    const updateDecision = () => {
      if (!optimizely) return

      // Create user context
      const user = optimizely.createUserContext(userId)
      const decision = user.decide('hero_cta')

      console.log('🔄 Decision update:', decision)

      setFlagState({
        enabled: decision.enabled,
        variationKey: decision.variationKey,
        variables: decision.variables
      })
    }

    // Initial fetch
    updateDecision()

    // Poll every second
    const interval = setInterval(updateDecision, 1000)

    return () => clearInterval(interval)
  }, [optimizely, userId])

  // Get button configuration from feature flag variables
  // When flag is disabled, use default values
  const buttonText = flagState.enabled ? (flagState.variables?.button_text || 'Explore Products') : 'Explore Products'
  const buttonAction = flagState.enabled ? (flagState.variables?.button_action || 'scroll') : 'scroll'
  const buttonColor = flagState.enabled ? (flagState.variables?.button_color || 'black') : 'black'
  const externalUrl = flagState.enabled ? (flagState.variables?.external_url || 'https://technogym.com') : 'https://technogym.com'

  // Log flag values for debugging
  useEffect(() => {
    console.log('🚩 Feature Flag Update:', {
      enabled: flagState.enabled,
      variationKey: flagState.variationKey,
      variables: flagState.variables,
      buttonText,
      buttonAction,
      buttonColor,
      externalUrl
    })
  }, [flagState, buttonText, buttonAction, buttonColor, externalUrl])

  // Handle button click based on feature flag configuration
  const handleExploreClick = () => {
    if (buttonAction === 'scroll') {
      // Scroll to products section
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
    } else if (buttonAction === 'external') {
      // Navigate to external URL
      window.open(externalUrl, '_blank')
    } else if (buttonAction === 'modal') {
      // Show alert (you can replace this with a modal)
      alert('Contact us for product information!')
    }
  }

  // Determine button styling based on feature flag
  const getButtonClasses = () => {
    const baseClasses = 'group relative px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 shadow-xl'

    const colorClasses = {
      black: 'bg-black text-white hover:bg-gray-800',
      blue: 'bg-blue-600 text-white hover:bg-blue-700',
      red: 'bg-red-600 text-white hover:bg-red-700',
      green: 'bg-green-600 text-white hover:bg-green-700',
    }

    return `${baseClasses} ${colorClasses[buttonColor] || colorClasses.black}`
  }

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-black/5 rounded-full mb-8">
            <span className="text-sm font-medium text-gray-700">
              Premium Fitness Equipment
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-black mb-6 leading-tight">
            Transform Your
            <br />
            <span className="text-gradient bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent">
              Fitness Journey
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience cutting-edge technology and design. Elevate your workout with professional-grade equipment trusted by athletes worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleExploreClick}
              className={getButtonClasses()}
            >
              {buttonText}
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-50 transition-all duration-300 border-2 border-gray-200 shadow-lg">
              Watch Video
            </button>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">35+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">100K+</div>
              <div className="text-gray-600 font-medium">Global Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">200+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-black mb-2">98%</div>
              <div className="text-gray-600 font-medium">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  )
}

export default Hero
