import React from 'react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import StickyHeader from '../components/StickyHeader'
import WhoWeServe from '../components/WhoWeServe'
import ScrollToTop from '../components/ScrollToTop'

const WeServe = () => {
      

    return (
        <div>
            <StickyHeader />
            <Navbar />
            <ScrollToTop />
            <WhoWeServe />
            <Footer />
            <DarkModeSwitch />
        </div>
    )
}

export default WeServe