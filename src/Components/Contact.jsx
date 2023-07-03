import React from 'react'
import Footer2 from './Footer'

export default function Contact() {
  return (
    <>
      <div className='px-3 py-1 pb-20 pt-16'>
        <div className='w-[40%] md:w-[70%] sm:w-[90%] mx-auto border-2 p-8 flex flex-col gap-5 shadow-lg pb-28'>
            <h1 className='text-center font-bold text-3xl md:text-2xl sm:text-xl'>Contact Us</h1>
            <div className=' flex flex-col gap-5'>
                <div>
                    <span>Name</span>
                    <input type="text" className='w-full outline-none border-2 px-3 py-1 shadow-inner'/>
                </div>
                <div>
                    <span>Email</span>
                    <input type="text" className='w-full outline-none border-2 px-3 py-1 shadow-inner'/>
                </div>
                <div>
                    <span>Message</span>
                    <textarea type="text" rows='5' className='w-full border-2 shadow-inner outline-none px-3 py-2'/>
                </div>
                <div className='text-center pt-12 '>
                    <button type='submit' className='bg-pink-600 p-2 text-white rounded px-5 w-full font-semibold text-lg ' style={{
//          background: 'rgb(184,25,158)',
// background: 'linear-gradient(90deg, rgba(184,25,158,1) 0%, rgba(248,118,239,1) 100%, rgba(36,0,30,1) 100%)'
        }}>Submit</button> '
                </div>
            </div>
        </div>
      </div>
      <Footer2/>
    </>
  )
}
