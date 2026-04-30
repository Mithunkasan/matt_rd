import React from 'react'
import Testimonials from '../components/Testimonials'
import ServiceCard from '../components/ServiceCard'
import ServiceList from '../components/ServiceList'
import OurFeatures from '../components/OurFeatures'
import OurClients from '../components/OurExpertise'
import OurExpertise from '../components/OurExpertise'
import FeatureBanner from '../components/FeatureBanner'
import OurStory from '../components/OurStory'
import StepByStep from '../components/StepByStep'
import WhoWeServe from '../components/WhoWeServe'
import ImageSlider from '../components/ImageSlider'
import ScrollToTop from '../components/ScrollToTop'
import ScrollingText from '../components/running'
import Timeline from '../components/OurHistroy'
import CourseCategories from '../components/carditems'
import OfferBanner from '../components/bg_yellow'
import GuaranteesSection from '../components/Service-Cards'
import ResponsiveComponent from '../components/ServiceList-Card'
import WorkshopsPage from '../components/WorkshopsPage'
import DissertationServiceComponent from '../components/WhyChooseUsSection'
import OurGuarantees from '../components/OurService'
import PlaygroundComponent from '../components/imagessection'
import CreativeHouseComponent from '../components/imagewriting'
import FAQComponent from '../components/askingquestion'
import HomeBlogs from '../components/HomeBlogs'
import useScrollTransition from '../templates/usescrolltransition'
import ServiceSection from '../components/projected'
import DissertationSubjects from '../components/Achivements'



const Home = (props) => {
    useScrollTransition()
    return (
        <div>
            <ImageSlider />
            
            <ScrollToTop />
          
            <OurStory />           
            {/* <ResponsiveComponent /> */}
            <ServiceList />
            <FeatureBanner />
            <Timeline/> 
            {/* <ServiceSectioned /> */}
            <ScrollingText/>
            <OurExpertise />
            <ServiceSection />
            <DissertationSubjects />
            <OurFeatures />
            <CreativeHouseComponent /> 
            <PlaygroundComponent />
            <DissertationServiceComponent/>  
            <WorkshopsPage/>        
            <CourseCategories/>           
            <OfferBanner/>
            <WhoWeServe />
            <StepByStep />
            <OurGuarantees /> 
            
            <HomeBlogs />
            <FAQComponent />
             
            {/* <Testimonials /> */}
            {/* <GuaranteesSection/> */}
            
        </div>
    )
}

export default Home