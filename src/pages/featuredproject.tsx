import React from 'react'
import Navbar from '../components/Navbar'
import Footereds from '../components/Servicefooter'
import Testimonials from '../components/Testimonials'
import Featuredproject from '../components/Featuredproject'

const featuredproject = () => {
  return (
    <div>
      <Navbar />
      <Featuredproject />
      <Testimonials/>
      <Footereds />
    </div>
  )
}

export default featuredproject
