import '@splidejs/splide/css';
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { splideAbout } from '../assets/data/dummyData';
import Star from '../assets/images/Star';

export default function AboutSlide() {
    const splideOptions={
        perPage:4,
        perMove:1,
        type: 'loop',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: false,
        padding:"2rem",
        breakpoints:{
          1200:{perPage:3},
          991:{perPage:2.3},
          768:{perPage:2},
          500:{perPage:1.3},
          425:{perPage:1}
        }
      }
  return (
    <>
      <div className='pb-6 border'>
    <Splide options={splideOptions}>

      {
        splideAbout.map((item,i)=>{
            return(

                <SplideSlide  key={i} className='shadow-md grid pb-4 rounded-br-lg rounded-bl-lg' style={{padding:'20px'}}>
                <div className='grid gap-4 items-center rounded-lg shadow-slate-200'>

                    {/* <div>
                        <img src="../../public/images/about-banner.png" alt="" />
                    </div> */}
                    <div className='flex'>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    (5.0)
                    </div>
                    <div className='p-2'>
                        <p>{item.text}</p>
                    </div>
                    <div className='flex gap-3'>
                        <img src={item.aboutUser} alt="" />
                        <div className=''>
                            <h1 className='font-medium'>{item.name}</h1>
                            <p className='text-gray-500 text-sm'>{item.country}</p>
                        </div>
                    </div>
                </div>
                </SplideSlide>
            )
        })
      }
    </Splide>
    </div> 
    </>
  )
}
