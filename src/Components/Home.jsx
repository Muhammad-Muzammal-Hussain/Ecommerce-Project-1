import React from 'react'
import Slider from './Navbar/Slider'
import { sliderData } from '../assets/data/dummyData'
import NavigateButtons from './NavigateButtons'
import ProductSection from './ProductSection'
import Footer2 from './Footer'
import NavbarSales from './Navbar/NavbarSales'
import About from './AboutUs/AboutUs'

export default function Home() {
  return (
    <>
    <div className='pt-11 sm:pt-0'>

      <Slider slideData={sliderData}/>
      <NavbarSales/>
      <NavigateButtons/>
      <ProductSection/>
      <About/>
      <Footer2/>
    </div>
    </>
  )
}
