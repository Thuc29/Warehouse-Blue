import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import HighLevel from '../components/HighLevel'
import Footer from '../components/Footer'
import Header from '../components/Header'
function HomePages() {
  return (
    <div>
      <Header/>
     <Hero/>
     <HighLevel/>
     <Features/>
     <Testimonials/>
     <hr/>
     <Footer/>
    </div>
  )
}

export default HomePages