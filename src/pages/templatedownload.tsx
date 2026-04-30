import React from 'react'
import Navbar from '../components/Navbar'
import AboutUsComponent from '../components/Tempaltedownloads'
import Testimonials from '../components/Testimonials'
import Footereds from '../components/Servicefooter'

const templatedownload = () => {
  return (
    <div>
      <Navbar/>
      <AboutUsComponent/>
      <Testimonials />
      <Footereds />
    </div>
  )
}

export default templatedownload
