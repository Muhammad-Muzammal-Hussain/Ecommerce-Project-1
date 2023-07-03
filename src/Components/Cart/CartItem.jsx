import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart, setDecreaseItem, setIncreaseItem } from '../../features/slices/cartSlice'
import {MinusIcon,
    PlusIcon, TrashIcon } from '@heroicons/react/24/outline'
export default function CartItem({ item: { id, name, text, img, color,  price, cartQuantity,size }}) {
  // const product=useSelector((state)=>state.cart.cartItems)
  const dispatch=useDispatch()
  const removeItem = () => {
    dispatch(removeFromCart({
      id, name, text, img, color, price,size, cartQuantity 
    }))
    
  }
  const onIncreaseItem = () => {
    dispatch(setIncreaseItem(
      {
        id,name,  text, img, color, size, price, cartQuantity 
      }
    ))
  }
  const onDecreaseItem = () => {
    dispatch(setDecreaseItem(
      {
        id, name, text, img, color, size, price, cartQuantity 
      }
    ))
  }
  return (
    <>
<div className='flex p-3 justify-around gap-2 items-center w-[60%] border shadow-lg mx-auto mb-2 mt-5 md:flex-col'>
    <div className='w-[15%] md:w-[80%] md:mb-5'>
      <img src={img} alt="" className='shadow-lg shadow-gray-400' />
    </div>
    <div>

    <p className='font-bold text-gray-400'>{name}</p>
    <div className='flex gap-6 py-3'>
              <button onClick={onDecreaseItem} className='bg-black w-6 h-6 rounded text-white'>
            <MinusIcon/>
            {/* - */}
              </button>
              <div className='text-center bg-black w-6 h-6 rounded text-white'>
            {cartQuantity}
              </div>
              <button onClick={onIncreaseItem}   className='bg-black w-6 h-6 rounded text-white'>
          <PlusIcon/>
          {/* + */}
              </button>
            </div>
    </div>
<div>
   <p className='font-semibold'>Selected Color:{''}
   <span style={{color:color}} className='font-normal'>{color}</span>
   </p>
   <p className='font-semibold'>Selected Size:{''}
   <span className='font-normal'>{size}</span>
   </p>
</div>
 <div className='flex flex-col md:flex-row gap-6 items-center'>
          <h1 className='font-medium'>${price*cartQuantity}</h1>
          <button onClick={removeItem} className='bg-black w-6 h-6 rounded text-white p-0.5'>
            <TrashIcon/>
            {/* Delete */}
          </button>
        </div>
</div>
    </>
  )
}
