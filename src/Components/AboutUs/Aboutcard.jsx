import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Aboutcard() {
  return (
    <>
      <div className='border'>
      <div>

<img src="../../public/images/blog-img-1.jpg" alt="" className='w-full'/>
</div>
<div className='flex gap-10'>
<div className='flex gap-1 p-5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#db2777" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
</svg>
<p>By Admin</p>
</div>
<div className='flex gap-1 p-5'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#db2777" class="w-6 h-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
</svg>
<p>6 Comments</p>
</div>
</div>
<div className='p-5 pt-0 pb-5'>

<h1 className='text-xl font-semibold pb-2 p'>Reprehenderit Non Esse Anim Laboris Reprehenderit Officia</h1>
<p className='text-gray-500 pb-5'>irure laborum qui deserunt excepteur id ad sit quis laboris duis ut cillum eiusmod non sint exercitation nulla tempor nostrud eiusmod commodo</p>
<button className='flex items-center gap-1 justify-center'>View More <ArrowRightIcon className='w-5'/></button>
</div>
</div>

      
    </>
  )
}
