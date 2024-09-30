import React from 'react'
import Navbar from './components/Navbar'
import Introduction from './pages/Introduction'
import Features from './pages/Features'
import Footer from './components/Footer'
import Categories from './pages/Categories'
import Faqs from './pages/Faqs'
import Testimonials from './pages/Testimonials'
import Steps from './pages/Steps'

const App = () => {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Steps />
      <Features />
      <Testimonials />
      {/* <Categories /> */}
      <Faqs />
      <Footer />
    </div>
  )
}

export default App
