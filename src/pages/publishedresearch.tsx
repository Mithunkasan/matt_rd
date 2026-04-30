import React from 'react'
import Testimonials from '../components/Testimonials'
import Navbar from '../components/Navbar'
import Footereds from '../components/Servicefooter'
import PublishedResearchs from '../components/PublishedResearchs'

const publishedresearch = () => {
  return (
    <div>
      <Navbar/>
      <PublishedResearchs />
      <Testimonials />
      <Footereds />
    </div>
  )
}

export default publishedresearch
