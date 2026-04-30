import { useState } from 'react'
import { DarkModeSwitch } from '../components/DarkModeSwitch'
import Footereds from '../components/Servicefooter'
import FooteredsUpdated from '../components/Servicefooter'
import Navbar from '../components/Navbar'
// import Footer from '../components/footer'
// import FooterUpdated from '../components/footer'
import StickyHeader from '../components/StickyHeader'
import Testimonials from '../components/Testimonials'
import Home from './Home'
import ServiceDetail from '../pages/ServiceDetail/[service]'
import HeaderComponent from '../components/TopNavbar'

const Index = () => {
  const [selectedPage, setSelectedPage] = useState("Home")
  const handleServiceSelect = () => {
    console.log("service called")
  }
  const handilePageSwitching = (Page) => {
    switch (Page) {
      case "Home":
        return <Home />

      case "Service":
        return <ServiceDetail />
    }
  }
  return (
    <div>
      <StickyHeader />
      <HeaderComponent/>
      <Navbar />
      {handilePageSwitching(selectedPage)}
      <DarkModeSwitch />
      <Testimonials />
      {/* <Footer /> */}
      <Footereds />

    </div>
  )
}

export default Index
