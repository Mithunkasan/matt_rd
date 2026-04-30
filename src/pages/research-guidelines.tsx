import React from 'react'
import Navbar from '../components/Navbar'
import AboutUsComponent from '../components/ResearchGuidelines'
import Testimonials from '../components/Testimonials'
import Footereds from '../components/Servicefooter'

const researchgiudelines = () => {
  return (
    <div>
      <Navbar/>
      <AboutUsComponent/>
      <Testimonials />
      <Footereds />
    </div>
  )
}

export default researchgiudelines
