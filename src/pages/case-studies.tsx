import React from 'react'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footereds from '../components/Servicefooter'
import CaseStudiesProject from '../components/CaseStudiesProject'

const project = () => {
  return (
    <div>
      <Navbar/>
      <CaseStudiesProject />
      <Testimonials />
      <Footereds/>
    </div>
  )
}

export default project
