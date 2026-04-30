import React from 'react'
import Navbar from '../components/Navbar'
import Footereds from '../components/Servicefooter'
import Testimonials from '../components/Testimonials'
import ProcessSection from '../components/ouprocess'

const ourteams = () => {
  return (
    <div>
      <Navbar/>
      <ProcessSection />
      <Testimonials />
      

      <Footereds/>
    </div>
  )
}

export default ourteams
