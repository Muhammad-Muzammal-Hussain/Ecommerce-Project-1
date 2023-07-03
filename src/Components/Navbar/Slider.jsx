import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';

export default function Slider({slideData}) {
    // console.log(slideData)
    const splideOptions={
        perPage:1,
        perMove:1,
        type: 'fade',
        rewind: true,
        keyboard: 'global',
        gap: '1rem',
        pagination: true,
        padding:"0rem",
        autoWidth:true,
        width:'100%',
        autoHeight:true,
        height:"100vh",
        theme:'purple',
        autoplay:'play()',
        easing:'cubic-bezier(0.5, 1, 0.5, 0.3)'
        // autoScroll: {
        //   speed: 2,
        // },
        // breakpoints:{
        //   1200:{perPage:3},
        //   991:{perPage:2.3},
        //   768:{perPage:2},
        //   500:{perPage:1.3},
        //   425:{perPage:1}
        // }
      }
  return (
    <>
      <div>
        <div className='relative flex flex-col'>
        <Splide options={splideOptions}>
  {slideData.map((slide, index) => (
    <SplideSlide key={index} style={{ background: `url(${slide.img})`, width: '100%',height:'100vh' ,backgroundPosition:'center' ,backgroundSize:'cover'}}>
      <div  className='  p-40 md:p-12 sm:pt-35 ' >
      <h1 className='text-white text-center font-bold text-4xl lg:text-3xl md:text-2xl sm:text-xl '>{slide.text}</h1>
      </div>
    </SplideSlide>
  ))}
</Splide>

        </div>
      </div>
    </>
  )
}
