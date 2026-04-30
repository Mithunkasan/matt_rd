
import React from 'react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StickyHeader from '../components/StickyHeader'
import OurExpertise from '../components/OurExpertise'
import ScrollToTop from '../components/ScrollToTop'

const WeAreSpecialized = () => {
      

    return (
        <div>
            <StickyHeader />
            <Navbar />
            <ScrollToTop />
            <OurExpertise />
            <Footer />
            <DarkModeSwitch />
        </div>
    )
}

export default WeAreSpecialized