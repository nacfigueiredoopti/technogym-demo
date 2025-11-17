const FeaturedProducts = () => {
  const products = [
    {
      name: 'SKILLRUN',
      category: 'Treadmill',
      description: 'Revolutionary treadmill for running and power training',
      price: '$8,999',
      features: ['Smart coaching', 'Performance tracking', 'Multi-drive technology'],
    },
    {
      name: 'SKILLROW',
      category: 'Rowing Machine',
      description: 'Advanced rowing machine with biofeedback technology',
      price: '$3,499',
      features: ['Real-time feedback', 'Connected training', 'Compact design'],
    },
    {
      name: 'KINESIS',
      category: 'Functional Trainer',
      description: '360° freedom of movement for functional training',
      price: '$12,999',
      features: ['Cable-based resistance', 'Versatile workouts', 'Space efficient'],
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovative equipment designed for peak performance
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group-hover:from-gray-200 group-hover:to-gray-300 transition-all duration-300">
                <div className="text-6xl">🏋️</div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-sm font-medium text-gray-500 mb-2">
                  {product.category}
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-600">
                      <svg
                        className="w-4 h-4 mr-2 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-black">
                    {product.price}
                  </div>
                  <button className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
