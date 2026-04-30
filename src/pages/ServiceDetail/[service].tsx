import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { DarkModeSwitch } from '../../components/DarkModeSwitch'
// import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
// import { Footer } from '../components/FooterOld'
import ProjectDevelopment from '../../components/ServiceDetails/ProjectDevelopment'
import PublicationSupport from '../../components/ServiceDetails/PublicationSupport'
import ThesisWriting from '../../components/ServiceDetails/ThesisWriting'
import StickyHeader from '../../components/StickyHeader'
import Testimonials from '../../components/Testimonials'
import WhoWeServe from '../../components/WhoWeServe'
import ScrollToTop from '../../components/ScrollToTop';
import Footereds from '../../components/Servicefooter'
import GrantWritingEthicalCompliance from '../../components/ServiceDetails/GrantWritingEthicalCompliance'
import ResearchProposalWriting from '../../components/ServiceDetails/ResearchProposalWriting'
import LiteratureReviewDesign from '../../components/ServiceDetails/LiteratureReviewDesign'
import WrokshopsTraining from '../../components/ServiceDetails/WrokshopsTraining'
import DataCollection from '../../components/ServiceDetails/DataCollection'
import ProjectDevelopments from '../../components/ServiceDetails/ProjectDevelopments '

const ServiceDetail = () => {
    const router = useRouter();
    const { service } = router.query;

    const renderService = () => {
        let page = service
        switch (page) {
            case "Research-Proposal-Writing":
                console.log("called research")
                return (<ResearchProposalWriting />)
            case "Literature-Review-Research-Design":
                console.log("called research")
                return (<LiteratureReviewDesign />)
            case "Thesis-and-Dissertation-Writing":
                console.log("called research")
                return (<ThesisWriting />)
            case "Publication-Journal-Support":
                console.log("called research")
                return (<PublicationSupport />)
            case "Grant-Writing-Ethical-Compliance":
                console.log("called research")
                return (<GrantWritingEthicalCompliance />)
            case "Wrokshops-Training:":
                console.log("called research")
                return (<WrokshopsTraining />)
            case "Data-Collection-Analysis":
                console.log("called research")
                return (<DataCollection/>)
            case "Project-Development-Implementation":
                console.log("called research")
                return (<ProjectDevelopments />)
            case "Project-Development-and-Implementation":
                console.log("called research")
                return (<ProjectDevelopment />)
        }

    }

    return (
        <div>
            
            <StickyHeader />
            <Navbar />
            <ScrollToTop />
            {renderService()}
            <Testimonials />
            {/* <Footer /> */}
            <Footereds/>
            <DarkModeSwitch />
        </div>
    )
}

export default ServiceDetail