const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Smart Technology',
      description: 'AI-powered coaching and performance tracking for optimal results',
    },
    {
      icon: '🌐',
      title: 'Connected Ecosystem',
      description: 'Seamlessly sync your workouts across all devices and platforms',
    },
    {
      icon: '🎨',
      title: 'Premium Design',
      description: 'Italian craftsmanship meets cutting-edge engineering',
    },
    {
      icon: '🔧',
      title: 'Built to Last',
      description: 'Commercial-grade quality for home and professional use',
    },
    {
      icon: '📱',
      title: 'Mobile Integration',
      description: 'Track progress, set goals, and stay motivated on the go',
    },
    {
      icon: '🏆',
      title: 'Trusted by Pros',
      description: 'Official supplier to Olympic athletes and elite sports teams',
    },
  ]

  return (
    <section id="technology" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the difference that premium quality and innovation make
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 border border-white/10 hover:border-white/20"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-2 group-hover:text-gray-200 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-12 border border-white/10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Fitness?
            </h3>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and experience the future of fitness
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
                Request a Quote
              </button>
              <button className="px-8 py-4 bg-transparent text-white rounded-full font-medium text-lg border-2 border-white hover:bg-white/10 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
