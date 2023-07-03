import React from 'react'
import { Link } from 'react-router-dom'

export default function Checkout2() {
  return (
    <>
      <div className='bg-slate-50 pt-12 sm:pt-0'>
      <div className='bg-white w-[95%] mx-auto p-10'>

        <div className='   grid grid-cols-2 gap-40 md:gap-10 md:grid-cols-1 items-center'>
            <div>
                <h1 className='text-5xl font-semibold  pb-5'>Complete your order</h1>
                <div>
                    <h1 className='text-xl font-semibold pb-4'>Disclaimer:</h1>
                    <p>If you would like to send books to multiple addresses, please do separate orders for each address</p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>

            <div className='flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
</svg>
<p>SSL secured checkout</p>

            </div>
            <div className='flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.712 4.33a9.027 9.027 0 011.652 1.306c.51.51.944 1.064 1.306 1.652M16.712 4.33l-3.448 4.138m3.448-4.138a9.014 9.014 0 00-9.424 0M19.67 7.288l-4.138 3.448m4.138-3.448a9.014 9.014 0 010 9.424m-4.138-5.976a3.736 3.736 0 00-.88-1.388 3.737 3.737 0 00-1.388-.88m2.268 2.268a3.765 3.765 0 010 2.528m-2.268-4.796a3.765 3.765 0 00-2.528 0m4.796 4.796c-.181.506-.475.982-.88 1.388a3.736 3.736 0 01-1.388.88m2.268-2.268l4.138 3.448m0 0a9.027 9.027 0 01-1.306 1.652c-.51.51-1.064.944-1.652 1.306m0 0l-3.448-4.138m3.448 4.138a9.014 9.014 0 01-9.424 0m5.976-4.138a3.765 3.765 0 01-2.528 0m0 0a3.736 3.736 0 01-1.388-.88 3.737 3.737 0 01-.88-1.388m2.268 2.268L7.288 19.67m0 0a9.024 9.024 0 01-1.652-1.306 9.027 9.027 0 01-1.306-1.652m0 0l4.138-3.448M4.33 16.712a9.014 9.014 0 010-9.424m4.138 5.976a3.765 3.765 0 010-2.528m0 0c.181-.506.475-.982.88-1.388a3.736 3.736 0 011.388-.88m-2.268 2.268L4.33 7.288m6.406 1.18L7.288 4.33m0 0a9.024 9.024 0 00-1.652 1.306A9.025 9.025 0 004.33 7.288" />
</svg>
<p>24/7 support available</p>
            </div>
            <div className='flex gap-3'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
</svg>
<p>Payment option</p>
            </div>
            </div>
        </div>
        <hr className='w-[90%] pb-5' />
        <div>
            <div>
                <div>
                    <h1 className='font-semibold text-lg pb-2'>Customer information</h1>
                    <p className='font-medium pb-4'>Already have an account?<Link to='/login'>
                    <span className='text-blue-600 ml-1'>Log in</span>
                    </Link> </p>

                </div>
                <input type="email" placeholder='Email Address *' className='p-3 w-full border-2  rounded mb-10'/>
            </div>
            <div>
                <h1 className='font-semibold text-lg pb-5'>Billing details</h1>
                <div>
                    <div className='flex justify-between md:gap-0 gap-5  sm:flex-wrap md:flex-col'>
                        <input type="text" className='p-3 w-full  border-2 mb-5 rounded' placeholder='First Name '/>
                        <input type="text" className='p-3 w-full border-2 mb-5 rounded' placeholder='Last Name'/>
                    </div>
                    <input type="text" placeholder='Company Name' className='p-3 w-full border-2 mb-5 rounded'/>
                </div>
                <p className='text-sm text-gray-500 pb-2'>Country / Region</p>
                <h2 className='font-semibold text-gray-500 pb-6'>United States(US)</h2>
            </div>
            <div>
            <div className='flex justify-between  gap-5  sm:flex-wrap pb-5'>
                    <input type="text"  className='p-3 w-[50%]  border-2  rounded' placeholder='House number and street name'/>
                    <input type="text"  className='p-3 w-[50%]  border-2  rounded' placeholder='Apartment,suite,unit,etc.(optional)'/>
                </div>
                <div className='flex justify-between  gap-5  sm:flex-wrap pb-5'>

                <input type="text"  className='p-3 w-[33%]  border-2  rounded' placeholder='Town/City'/>
                <input type="text"  className='p-3 w-[33%]  border-2  rounded' placeholder='State'/>
                <input type="text"  className='p-3 w-[33%]  border-2  rounded' placeholder='Postcode/ZIP'/>
                </div>
                <input type="text"  className='p-3  w-full border-2  rounded mb-5' placeholder='Phone'/>
            </div>
            <div className=''>
            <div className='mb-5'>

            <input type="checkbox" name="" id="" className='mr-2 w-4 h-4'/>
            <span className='font-semibold text-lg '>Ship to a Different address?</span>
            </div>
            <div>
                <div className='flex justify-between mb-5 gap-5  sm:flex-wrap md:flex-col'>
                    <input type="text"  className='p-3 w-[50%] md:w-full border-2  rounded ' placeholder='First name'/>
                    <input type="text" placeholder='Last Name' className='p-3 w-[50%] md:w-full border-2  rounded'/>
                </div>
                <input type="text" className='p-3 w-full border-2 ' placeholder='Company Name'/>
                <p className='text-sm text-gray-500 pb-2 pt-3'>Country / Region</p>
                <h2 className='font-semibold text-gray-500 pb-4'>United States(US)</h2>
            </div>
            </div>
            <div>
                <div className='flex justify-between  gap-5  sm:flex-wrap pb-5'>
                <input type="text"  className='p-3 w-[50%]  border-2  rounded' placeholder='House number and street name'/>
                    <input type="text"  className='p-3 w-[50%]  border-2  rounded' placeholder='Apartment,suite,unit,etc.(optional)'/>
                </div>
                <div className='flex justify-between  gap-5  sm:flex-wrap pb-5'>

                <input type="text"  className='p-3 w-[33%]  border-2  rounded' placeholder='Town/City'/>
                <input type="text"  className='p-3 w-[33%]  border-2  rounded' placeholder='State'/>
                <input type="text"  className='p-3 w-[33%]  border-2  rounded' placeholder='Postcode/ZIP'/>
                </div>
                <textarea name="" id="" cols="30" rows="2" className='p-3 w-full border-2  outline-none' placeholder='Notes for your order e.g specially for your'></textarea>

            </div>
            <div className='pt-5 '>
            <h1 className='font-semibold text-lg pb-8'>Payment</h1>
                <div className='rounded border-2 mb-5'>
                    <p className='p-6 w-full  border-b-2 bg-slate-100 '>Paypal</p>
                    <p className='p-6 w-full  '>Pay via Paypal</p>
                </div>
                <p className='text-sm pb-4'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.</p>
            </div>
            <button className='w-full flex items-center justify-center   rounded' style={{backgroundColor:"#db2777 "}}>
                <img src="../images/download.png" alt="" className='w-24' />
            </button>
        </div>
      </div>
      </div>
    </>
  )
}
