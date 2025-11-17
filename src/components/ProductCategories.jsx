const ProductCategories = () => {
  const categories = [
    {
      title: 'Cardio',
      description: 'Treadmills, bikes, and ellipticals',
      image: '🏃',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Strength',
      description: 'Weight machines and equipment',
      image: '💪',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Functional',
      description: 'Training rigs and accessories',
      image: '🎯',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Recovery',
      description: 'Massage and wellness tools',
      image: '🧘',
      gradient: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our complete range of professional fitness equipment
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon */}
                <div className="text-6xl mb-4">{category.image}</div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-900">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center text-black font-medium group-hover:translate-x-2 transition-transform duration-300">
                  Explore
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductCategories
