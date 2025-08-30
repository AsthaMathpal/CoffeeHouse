import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SpecialPastry from './components/SpecialPastry'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Menu/>
      <SpecialPastry/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
