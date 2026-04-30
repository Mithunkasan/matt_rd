import React from 'react'
import Navbar from '../components/Navbar'

import Footereds from '../components/Servicefooter'
import ClientTestimoniales from '../components/ClientTestimoniales'
import Testimonials from '../components/Testimonials'
import Head from 'next/head'


const ongoingprojec = () => {
  return (
    <div>
      <Head>
        <meta name="title" content="Gallery of Research Activities | MATT Solutions" />
        <meta
          name="description"
          content="View our gallery featuring workshops, training programs, and research activities conducted by MATT Research Solutions."
        />
        <meta
          name="keywords"
          content="research gallery, workshops, training programs, research activities, MATT Solutions"
        />
        <meta charSet="UTF-8" />
      </Head>

      <Navbar/>
      <ClientTestimoniales/>
      <Testimonials />
      <Footereds/>
    </div>
  )
}

export default ongoingprojec
