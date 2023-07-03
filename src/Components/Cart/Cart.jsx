import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectTotalAmount, selectTotalQuantity, setCartItems, setTotalAmount } from '../../features/slices/cartSlice'
import CartItem from './CartItem'
import CartEmpty from './CartEmpty'
import NavigateButtons from '../NavigateButtons'
import { Link } from 'react-router-dom'

export default function Cart() {
  let dispatch=useDispatch()
  const totalQuantity=useSelector(selectTotalQuantity)
  // const ifCartState=useSelector(selectMycartState)
  const totalAmount=useSelector(selectTotalAmount)
  const cartItems=useSelector(setCartItems)
  
  const product=useSelector((state)=>state.cart.cartItems)
  useEffect(() => {
    dispatch(setTotalAmount())  
  },[])
  return (
    <>
     <div className=' pt-12'>
     <NavigateButtons/>
     {cartItems?.length===0?
            <CartEmpty
          />: <div className='mb-32'>

      {
        product.map((item,i)=>{
          return(
            <>
                <CartItem key={i} item={item}/>
            </>
          )
        })
      }
     </div>}
     <div className='fixed bottom-0 w-full px-5 py-1  shadow-inner shadow-gray-300  bg-white left-0 right-0 z-[100] '>
            <div className='flex justify-between'>
              <h1 className='font-semibold'>SUBTOTAL</h1>
            
            <button className='bg-black text-white rounded p-1 md:text-sm'>${totalAmount}</button>
            </div>
              <Link to='/checkout'>
            <p className='font-medium text-center md:text-sm pb-2'>Taxes and Shipping Will Calculate At Shipping</p>
            <button className='bg-black w-full text-white rounded p-1'>Check Out</button>
            </Link> 
            </div>
     </div>
     
    </>
  )
}
