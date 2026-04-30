import { Box, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react'
import Whome1 from '../assets/Whome-1.jpg';
import Whome2 from '../assets/Whome-2.jpg';
import Whome3 from '../assets/Whome-3.jpg';
import Whome4 from '../assets/Whome-4.jpg';
import Whome5 from '../assets/Whome-5.jpg';
import Whome6 from '../assets/Whome-6.jpg';

export default function WhoWeServe() {
// const WhoWeServe = () => {
    return (
        <Box mt={0} id="serve" className='component1'>
            <section className="servicess">
                <div className="container">
                    <Heading color={'white'} p={16} className='component1'>Whom We Serve?</Heading>
                    {/* <h2 className="tittle text-center pt-5 mt-5 mb-3 text-white">Whom We Serve?</h2> */}
                    <div className="w3-service-grids text-center">
                        <div className="row w3-service-grid-top1">
                            <div className="col-lg-4 w3-services-grid1">
                                <div className="row">
                                    <div className="col-sm-12 w3-services-heading component1">
                                        <a className="text-decoration-none" href=""><p className="text-center"><Image src={Whome1} alt="whome1" className="img-responsive color1" />Researchers</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 w3-services-grid1">
                                <div className="row">
                                    <div className="col-sm-12 w3-services-heading component1">
                                        <a className="text-decoration-none" href=""><p className="text-center"><Image src={Whome2} alt="whome2" className="img-responsive color2" />Professionals/Academicians</p></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 w3-services-grid1">


                                <div className="row">
                                    <div className="col-sm-12 w3-services-heading component1">
                                        <a className="text-decoration-none" href=""><p className="text-center"><Image src={Whome3} alt="whome3" className="img-responsive color3" />Graduates/Post Graduates</p></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="row pb-5 w3-service-grid-top1 text-center component1">
                        <div className="col-lg-4 w3-services-grid1">
                            <div className="row">
                                <div className="col-sm-12 w3-services-heading">
                                    <a className="text-decoration-none" href=""><p className="text-center"><Image src={Whome4} className="img-responsive color4" alt="Institute" />Students</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 w3-services-grid1">
                            <div className="row">
                                <div className="col-sm-12 w3-services-heading">
                                    <a className="text-decoration-none" href=""><p className="text-center"><Image src={Whome5} className="img-responsive color5" alt="Company" />Universities/Institutions</p></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 w3-services-grid1">
                            <div className="row">
                                <div className="col-sm-12 w3-services-heading">
                                    <a className="text-decoration-none" href=""><p className="text-center"><Image src={Whome6} className="img-responsive color6" alt="Employee" />Joint Supervisors</p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Box>
    );
}

// export default WhoWeServe