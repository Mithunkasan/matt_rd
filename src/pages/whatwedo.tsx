import React from 'react'
import Navbar from '../components/Navbar'
import Footereds from '../components/Servicefooter'
import Whatwedo from '../components/Whatwedo'
import WhatWeDoBest from '../components/whatweabout'
import WhoWeAre from '../components/whoweare'
import ReviewPointsComponent from '../components/whatwematt'
import InfoSection from '../components/whatwewritting'
import AboutUsComponent from '../components/aboutusbanner'
import Timeline from '../components/OurHistroy'
import Testimonials from '../components/Testimonials'
import useScrollTransition from '../templates/usescrolltransition'


const aboutus = () => {
  return (
    <div>
      <Navbar/>
      <AboutUsComponent />
      <Whatwedo />
      <WhatWeDoBest/>
      <Timeline/> 

      <WhoWeAre/>
      <ReviewPointsComponent />
      <InfoSection />
      {/* <BenefitsComponent /> */}

      <Testimonials />
      
      <Footereds/>
    </div>
  )
}

export default aboutus
