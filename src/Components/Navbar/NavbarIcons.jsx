import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCartItems } from '../../features/slices/cartSlice';
import { selectWishlistItems } from '../../features/slices/WishSlice';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import Wishlist from '../Wishlist/WishList';
import { Link } from 'react-router-dom';
export default function NavbarIcons() {
    const dispatch=useDispatch()
  const { isOpen, onOpen, onClose } = useDisclosure()
     const cartItems = useSelector(setCartItems);
   const totalQuantity = cartItems.reduce((total, item) => total + item.cartQuantity, 0);
     const wishlistItems = useSelector(selectWishlistItems);
   const totalWishQuantity = wishlistItems.reduce((total, item) => total + item.wishQuantity, 0);
//    const [navState,setNavState]=useState(false)


  return (
    <>
    <div className='hidden sm:block'>

           <div className='flex gap-3  relative  '>

{/* <Link to='/wishlist'> */}
<div onClick={onOpen} ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 hover:scale-105   cursor-pointer transition-theme transition-all duration-700" >
<path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
</svg>

<div className='bg-black rounded-full h-5 w-5  text-center flex items-center justify-center md:text-sm absolute top-4 left-2 text-white md:left-3'>
  {totalWishQuantity}
</div></div>

<Modal isOpen={isOpen} onClose={onClose}  >
<ModalOverlay  />
<ModalContent  >
<ModalHeader >WishList</ModalHeader>
<ModalCloseButton />
<ModalBody>
<Wishlist/>
</ModalBody>

<ModalFooter className='sticky bottom-0 rounded-lg px-5 py-1  shadow-inner shadow-gray-300  bg-white left-0 right-0 z-[100]'>
<button  className='bg-pink-600 text-white p-2 px-5' onClick={onClose}>
  Close
</button>
<Button variant='ghost' onClick={()=>ClearAllItems()}>Clear All Items</Button>
<div>
      {/* <button onClick={handleAddToCartAll}>Add All to Cart</button> */}
    </div>
</ModalFooter>
</ModalContent>
</Modal>


{/* </Link> */}
<div>
<Link to='/cart'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>

<div className='absolute md:right-2 right-10 top-4 bg-black rounded-full w-5 h-5 text-center text-white flex items-center justify-center shadow-xl shadow-gray-500 '>
{/* {cartItems.length} */}
{totalQuantity}
</div>
   </Link>


</div>
<Link to='/login'>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer   hover:scale-105 transition-theme transition-all duration-700 md:hidden"  >
<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> 

</Link>


</div> 
    </div>
    </>
  )
}
