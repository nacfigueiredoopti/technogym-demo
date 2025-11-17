import { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black">FITPRO</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#products" className="text-gray-700 hover:text-black transition-colors font-medium">
              Products
            </a>
            <a href="#solutions" className="text-gray-700 hover:text-black transition-colors font-medium">
              Solutions
            </a>
            <a href="#technology" className="text-gray-700 hover:text-black transition-colors font-medium">
              Technology
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-gray-700 hover:text-black transition-colors font-medium">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#products"
              className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md font-medium"
            >
              Products
            </a>
            <a
              href="#solutions"
              className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md font-medium"
            >
              Solutions
            </a>
            <a
              href="#technology"
              className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md font-medium"
            >
              Technology
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md font-medium"
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-md font-medium"
            >
              Contact
            </a>
            <button className="w-full mt-2 bg-black text-white px-6 py-2.5 rounded-full hover:bg-gray-800 transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
