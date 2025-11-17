import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProductCategories from './components/ProductCategories'
import FeaturedProducts from './components/FeaturedProducts'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <Features />
      <Footer />
    </div>
  )
}

export default App
