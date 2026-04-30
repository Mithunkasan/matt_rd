import React ,{useState, useEffect } from 'react';
import GuaranteeCard from './Service-Cards'
import ServiceComponent from "./ServiceList"
import ZodiacCard from './ServiceList'

const ResponsiveComponent: React.FC = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false); // Initialize state

    useEffect(() => {
        // Function to check window size
        const handleResize = () => {
            setIsMobile(window.innerWidth < 460); // Adjust the breakpoint as needed
        };

        // Set initial value
        handleResize(); 

        // Add event listener for resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div>
            {isMobile ? <GuaranteeCard/> : <ZodiacCard/>}
        </div>
    );
};

export default ResponsiveComponent;
