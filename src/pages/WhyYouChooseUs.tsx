import React from 'react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StickyHeader from '../components/StickyHeader'
import OurFeatures from '../components/OurFeatures'
import ScrollToTop from '../components/ScrollToTop'

const WhyYouChooseUs = () => {
      

    return (
        <div>
            <StickyHeader />
            <Navbar />
            <ScrollToTop />
            <OurFeatures />
            <Footer />
            <DarkModeSwitch />
        </div>
    )
}

export default WhyYouChooseUs