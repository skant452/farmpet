import React from 'react'
import Header from '../../Header'
import Hero from '../Hero/Hero'
import About from '../About/About'
import Featured from '../Featured/Featured'
import Tabsection from '../Tabsection/Tabsection'
import Farmpet from '../Farmpet/Farmpet'
import Testimonial from '../Testimonial/Testimonial'
import Download from '../Download/Download'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <About/>
      <Featured/>
      <Tabsection/>
      <Farmpet/>
      <Testimonial/>
      <Download/>
      <Newsletter/>
      <Footer/>
    </>
  )
}

export default Home