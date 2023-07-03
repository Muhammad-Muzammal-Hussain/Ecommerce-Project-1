import React from 'react'
import { addToWishlist, removeFromWishlist, setDecreaseWishItem, setIncreaseWishItem } from '../../features/slices/WishSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { truncate } from 'lodash';
import { setDecreaseItem, setIncreaseItem } from '../../features/slices/cartSlice';
import {MinusIcon,
  PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
export default function WishListItem({ item: { id, name, text, img, color,  price, wishQuantity }}) {
    // const addItemToWishlist = () => {
    //     const item = { id, name, text, color,img, price };
    //     dispatch(addToWishlist(item));
    //   };
    const dispatch=useDispatch()
    const removeItem = () => {
      dispatch(removeFromWishlist({
        id, name, text, img, color, price, wishQuantity 
      }))
      
    }
    const onIncreaseItem = () => {
      dispatch(setIncreaseWishItem(
        {
          id,name,  text, img, color,  price, wishQuantity 
        }
      ))
    }
    const onDecreaseItem = () => {
      dispatch(setDecreaseWishItem(
        {
          id, name, text, img, color,  price, wishQuantity 
        }
      ))
    }
  return (
    <>

     <div className='border shadow-lg flex p-5 items-center '>
      <div className='w-[45%] sm:w-[100%]  xsm:w-[200%]'>

<img src={img} alt="" className='w-full shadow-lg shadow-gray-400 '/>
</div>
{/* <div className='flex gap-10'>
<div className='flex gap-1 p-5'>

</div>
</div> */}
<div className='p-5 pt-0 pb-5'>

<h1 className='text-xl font-semibold pb-2 p'>{name}</h1>
<p className='text-gray-500 pb-5'>{truncate(text, {length: 60})}</p>
{/* <button className='flex items-center gap-1 justify-center'>View More <ArrowRightIcon className='w-5'/></button> */}
<div className='flex gap-6 py-3'>
              <button onClick={onDecreaseItem} className='bg-black w-6 h-6 rounded text-white'>
            <MinusIcon/>
            {/* - */}
              </button>
              <div className='text-center bg-black w-6 h-6 rounded text-white'>
            {wishQuantity}
              </div>
              <button onClick={onIncreaseItem}   className='bg-black w-6 h-6 rounded text-white'>
          <PlusIcon/>
          {/* + */}
              </button>
            </div>
           
</div>
 <div className='flex flex-col gap-16 items-center '>
          <h1 className='font-medium'>${price*wishQuantity}</h1>
          <button onClick={removeItem} className='bg-black w-6 h-6 rounded text-white p-0.5'>
            <TrashIcon/>
            {/* Delete */}
          </button>
        </div>
</div>

      {/* </Link> */}
    </>
  )
}
