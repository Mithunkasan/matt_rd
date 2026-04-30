import React from 'react'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footereds from '../components/Servicefooter'
import AboutUsComponent from '../components/WhitePapers'

const whitepaper = () => {
  return (
    <div>
      <Navbar/>
      <AboutUsComponent />
      <Testimonials />
      <Footereds />
    </div>
  )
}

export default whitepaper
