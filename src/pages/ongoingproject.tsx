import React from 'react'
import Navbar from '../components/Navbar'
import Testimonials from '../components/Testimonials'
import Footereds from '../components/Servicefooter'
import OngoingProjects from '../components/OngoingProjects'

const ongoingprojec = () => {
  return (
    <div>
      <Navbar/>
      <OngoingProjects />
      <Testimonials/>
      <Footereds/>
    </div>
  )
}

export default ongoingprojec
