import React from 'react'
import { Link } from 'react-router-dom'
import Footer2 from '../Footer'
import { splideAbout } from '../../assets/data/dummyData'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AboutSlide from '../AboutSlide';
import Aboutcard from './Aboutcard';
// import '@splidejs/splide/css/skyblue';


export default function About() {
    
  return (
    <>
    <div id='about'>

      <div className='pt-12 sm:pt-0'>
      <h1 className='text-3xl font-bold text-center pt-5 pb-6'>About Us</h1>
        <div className='grid grid-cols-2 md:grid-cols-1 items-center sm:p-10 md:p-16 p-28 pt-5 gap-10'>
            <img src="../../public/images/about-banner.png" alt="" />
            <div className=''>
                <h1 className='text-2xl font-semibold pb-5'>What is e-commerce business?</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting.</p>
                <ul className='pt-5'>
                    <li className='list-disc list-inside '>slim body with metal cover</li>
                    <li className='list-disc list-inside '>latest Intel Core i5-1135G7 processor (4 cores / 8 threads)
</li>
                    <li className='list-disc list-inside '>8GB DDR4 RAM and fast 512GB PCIe SSD</li>
                    <li className='list-disc list-inside '>NVIDIA GeForce MX350 2GB GDDR5 graphics card backlit keyboard</li>
                </ul>
                <Link to='/contact'>

                <button  className='text-white p-3 bg-pink-600 mt-5  px-8 '>Contact Us</button>
                </Link>
            </div>
        </div>
      </div> 
      </div>
     <AboutSlide/>
     <div>
          <h1 className='text-center pt-5 font-bold text-2xl'>My Latest News</h1>
          <div className='flex gap-10 md:flex-wrap p-10'>
         <Aboutcard/>
         <Aboutcard/>
        </div>
        </div>

    </>
  )
}
