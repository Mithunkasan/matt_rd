import React from 'react'
import Navbar from '../components/Navbar'
import AboutUsComponent from '../components/PhdToolsAndResearch'
import Testimonials from '../components/Testimonials'
import Footereds from '../components/Servicefooter'

const phdtoolsandresearch = () => {
  return (
    <div>
      <Navbar/>
      <AboutUsComponent/>
      <Testimonials />
      <Footereds />
    </div>
  )
}

export default phdtoolsandresearch
