import React from 'react'
// import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Footer2() {
  return (
    <>
      <div className='footer-color text-white p-10 rounded-t-2xl'>
        <div className='flex md:flex-wrap justify-between items-center gap-5 w-[90%] mx-auto pb-10 opacity-80'>
        <div>

            <h1 className='text-2xl font-semibold'>Join Our Newsletter for future updates</h1>
        </div>
        <div className='flex items-center relative'>
            <input type="text" className='w-[35rem] md:w-[29rem] sm:w-[16rem] p-5 text-black rounded-full ' placeholder='Enter Your Email'

                
            />
           <button className='footer-color rounded-full w-16  h-16 text-xs  absolute right-0 border'>
            Subscribe
           </button>

        </div>
        </div>
        <hr className='w-[80%] opacity-[0.5] pt-5' />
        <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 pt-10 w-[90%] mx-auto pb-10 opacity-80'>
            <div className='border-r border-gray-600'>
                <ul className='flex flex-col gap-5'>
                    <li className='font-bold'>About</li>
                    <li>
                    <Link to='/about'>
                    About us

                    
                    </Link>
                    </li>
                    <li className='w-[70%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, cum.lorem2
                    Lorem ipsum dolor sit amet 
                    </li>
                </ul>
            </div>
            <div className='border-r border-gray-600 '>
                <ul className='flex flex-col gap-5'>
                    <li className='font-bold'>Quick Links</li>
                    <li>
                   
                    <Link to='/contact'>
                    Contact Us
                    </Link>
                    </li>
                    <li>
                    {/* <Link to='/'> */}

                    Privacy and Policy
                    {/* </Link> */}
                    </li>
                    <li>
                    <Link to='/terms'>
                        
                    Terms and conditions
                    </Link>
                    </li>
                </ul>
            </div>
            <div >
                <ul className='flex flex-col gap-5 '>
                    <li className='font-bold'>Follow us</li>
                    <li>
                        {/* <FaFacebook/> */}
                    </li>
                    <li>
                        {/* <FaTwitter/> */}
                    </li>
                    <li>

                    {/* <FaInstagram/> */}
                    </li>
                </ul>
            </div>
            
        </div>
        <hr className='w-[80%] opacity-[0.5] pt-5' />
  <div className='text-center'>
    <p>© Copyright 2023 All Rights Reserved Muzammal</p>
  </div>
      </div>
      
    </>
  )
}
