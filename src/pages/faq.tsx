import React from 'react'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footereds from '../components/Servicefooter'
import AboutUsComponent from '../components/Faq'



const faq = () => {
  return (
    <div>
      <Navbar/>
      <AboutUsComponent/>
      <Testimonials />
      <Footereds />
    </div>
  )
}

export default faq
