import React from 'react'
import { singleProduct } from '../features/slices/ProductSlice';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/slices/cartSlice';
import { HeartIcon } from '@heroicons/react/24/outline';
import { addToWishlist } from '../features/slices/WishSlice';
export default function ProductSectionItem({ id,
    img,
    name,
    text,
    size,
    price,
    color,
    totalPrice,}) {
        const defaultSize = size[0];
  const defaultColor = color[0];
const dispatch=useDispatch()
const addItemToCart = () => {
  const item={ id, name, text, img, color,  price }
dispatch(addToCart(item))
}
// const addTowishLis = () => {
//   const item={ id, name, text, img, color,  price }
// dispatch(setAddToWishList(item))
// }
const addItemToWishlist = () => {
  const item = { id, name, text, img, color, price };
  dispatch(addToWishlist(item));
};

  return (
    <>
     {/* <div className=' relative sm:w-[65vw] h-full'>
     <Card className="w-full  h-full border shadow-lg shadow-gray-400 rounded-lg " onClick={()=>dispatch(singleProduct(id))}>
    
     <div className='p-2'>

        <CardHeader color="blue" className=" relative w-full  ">
          <img src={img} alt="img-blur-shadow" className="h-auto w-full rounded-lg transition-all hover:scale-105 duration-700 cursor-pointer" />
        </CardHeader>
     </div>
        <div className='h-full'>

        <CardBody className="text-center p-4 h-full ">
          <Typography variant="h5" className="mb-2 text-xl font-bold pt-5">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        </div>
          <div className='p-4 flex justify-between'>
            <p className='text-red-500' >Size: 
            <span className='text-gray-400 pl-1'>{defaultSize}</span></p>
            <p className='text-red-500 flex cursor-pointer items-center'  onClick={addItemToWishlist}>Like 
            <span className='text-gray-400 pl-1 '><HeartIcon className='w-6 ' fill='#db2777' stroke=''/></span></p>
            <Typography color="gray" className="font-medium" textGradient>
              Color:{" "}
              <span
                className="px-[.66rem] rounded-full ml-3 "
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        <CardFooter divider className="flex items-center justify-center py-3 border p-4 pb-5">
        <button className={`border border-gray-400 p-2 py-3 px-8 text-sm rounded-lg text-gray-500 font-semibold hover:bg-pink-600 hover:text-white transition-all duration-500 shadow-lg `}
        onClick={
            ()=>dispatch(addItemToCart())
        }
        >ADD TO CART</button>
          
        </CardFooter>
      </Card>
     </div>  */}
     <div className='border relative  services-img hover:scale-105 transition-all duration-700'>
     <div>
        <h1 className='absolute z-10 right-10 top-10 text-3xl text-red-600 font-bold -rotate-45'>SALE%</h1>
     </div>
      <div className='h-[60%] w-full pb-5'>

<img src={img} alt="" className='w-full  h-full'/>
</div>
 <div className=' example text-center  '>

 <div className='absolute  w-[90%] h-[90%] top-0 bg-gradient-to-tr bg-red   transition-all duration-[0.5s] cursor-pointer opacity-0  overlay    '></div>
 
                    <div className='absolute w-[100%] transition-all duration-[0.5s] z-10  
                        desc opacity-0  services-desc pt-[14rem]'>
                        
                        {/* <p className='text-xl font-bold'>
                            ${price}
                        </p> */}
                        <div className='flex gap-7 items-center justify-center'>

<Tooltip label='Add to cart'>

<button className='p-2  text-white transition-theme  hover:bg-black hover:scale:105 transition-all duration-700 rounded-full bg-pink-600'  onClick={()=> addItemToCart()}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

</button>
</Tooltip>
   {/* <AllProductItemDetail id={id} type={type} /> */}
                        </div>
                        <div className='pt-3'>
                        <Tooltip label='Add To WishList'>
<button className='p-2  text-white transition-theme  hover:bg-black hover:scale:105 transition-all duration-700 rounded-full bg-pink-600'  onClick={addItemToWishlist}>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

</button>
</Tooltip>
                        </div>
                            </div>

 </div>

<div className='p-5 pt-0 pb-5'>

<h1 className='text-xl font-semibold pb-2 p'>{name}</h1>
<p className='text-gray-500 pb-5'>{text}</p>
<div divider className="flex items-center justify-between py-3  p-4">
          <div variant="small">{price}$</div>
          <div variant="small" color="gray" className="flex gap-1">
            {color.map((color, index) => {
              return (
                <i
                  className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                  key={index}
                  style={{ backgroundColor: color }}
                ></i>
              );
            })}
          </div>
        </div>
{/* <div className='text-center bg-pink-600 text-white p-2'>

<button className=''> Add To Cart  </button>
</div> */}
</div>
</div>
    </>
  )
}
