import React from 'react'
import Navbar from '../components/Navbar'

import Footereds from '../components/Servicefooter'
import ClientTestimoniales from '../components/ClientTestimoniales'
import Testimonials from '../components/Testimonials'


const ongoingprojec = () => {
  return (
    <div>
      <Navbar/>
      <ClientTestimoniales/>
      <Testimonials />
      <Footereds/>
    </div>
  )
}

export default ongoingprojec
