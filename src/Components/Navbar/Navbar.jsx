// import React, { useState } from 'react'
// import logo from '../../assets/images/logo.png'
// import { Link } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import Cart from '../Cart/Cart'
// import { selectTotalQuantity, setCartItems, setTotalAmount } from '../../features/slices/cartSlice'
// export default function Navbar() {
//   // const totalQuantity=useSelector(selectTotalQuantity)
//   const dispatch=useDispatch()
//   // const cartItems=useSelector((state)=>state.cart.cartItems)

//   const cartItems = useSelector(setCartItems);
// const totalQuantity = cartItems.reduce((total, item) => total + item.cartQuantity, 0);

//   const [open, setOpen]=useState()
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   return (
//     <>
//      <div className='relative'>
//         {/* <div>
//             <h1 className='bg-black text-center text-white p-5 font-bold text-2xl'>Redux Toolkit Time</h1>
//         </div> */}
//         <div className='flex justify-around items-center xsm:flex-wrap md:pb-5 fixed w-full top-0 right-0 left-0 bg-white z-50'>
//             <div>
//             <Link to='/'>

//                 <img src={logo} alt="" />
//             </Link>
//             </div>
//             <div className='flex gap-1 text-base font-inter font-medium relative'>
//             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="cursor-pointer w-6 h-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
// </svg>
// <p className='md:hidden'>Wish List</p>
// <div className='relative flex gap-1 cursor-pointer' onClick={handleOpen}>
//                <Link to='/cart'>
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
//   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
// </svg>

// <div className='absolute left-2 top-4 bg-black rounded-full w-5 h-5 text-center text-white flex items-center justify-center shadow-xl shadow-gray-500 '>
//   {/* {cartItems.length} */}
//   {totalQuantity}
// </div>
//               </Link>
// <div className='flex'>
// <p className='pr-5 md:hidden'>Shopping Bag</p>
                
              
              
//             </div> 
// </div>
// <div className='flex gap-2'>
// <p>Hi</p>

// <p>Muzammal</p>
// </div>

//             </div>
//         </div>
       
//      </div> 
//     </>
//   )
// }

import React, { useEffect, useState } from 'react'
import SideBar from '../Sidebar'
import { Link, useNavigate } from 'react-router-dom'
import Dropdown from '../Dropdown';
// import {  setWishItems } from '../../features/slices/WishSlice';
import { useDispatch, useSelector } from 'react-redux';
import {   setCartItems } from '../../features/slices/cartSlice';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
// import WishListItem from '../Wishlist/WishListItem';
import Wishlist from '../Wishlist/WishList';
import { clearWishlist, selectWishlistItems } from '../../features/slices/WishSlice';
import NavbarIcons from './NavbarIcons';


export default function Header() {
   const dispatch=useDispatch()
  //  const wishlistItemCount = wishlistItems.length;
     const cartItems = useSelector(setCartItems);
   const totalQuantity = cartItems.reduce((total, item) => total + item.cartQuantity, 0);
     const wishlistItems = useSelector(selectWishlistItems);
   const totalWishQuantity = wishlistItems.reduce((total, item) => total + item.wishQuantity, 0);
   const { isOpen, onOpen, onClose } = useDisclosure()
   const [navState,setNavState]=useState(false)

  const ClearAllItems = () => {
    // const clearAll=useSelector()
    dispatch(clearWishlist())
  }
  
  const onScroll = () => {
    if(scrollY>30){
      setNavState(true)
    }else{
      setNavState(false)
    }
  }
  
  useEffect(()=>{
   window.addEventListener("scroll",onScroll)
   return ()=>{
    window.removeEventListener("scroll",onScroll)
   }

  },[])
  // const handleAddToCartAll = () => {
  //   dispatch(addToCartFromWishlist({wishlistItems}));
  // };
  return (
    <>
    <div className=' bg-white shadow-lg    '>

      <div className='w-[90%] mx-auto py-2 myheader md:p-5 '>
        <div className='flex justify-between items-center'>
        <div className='hidden md:block'>
        <SideBar/>


        </div>
        <Link to='/'>

            <div className='w-full'>
                <img src="images/logo2.png" alt="Ecommerce " className='md:self-center w-16 text-pink-600 '/>
            </div>
        </Link>
            <div className='flex md:hidden '>
                <input type="text" className='border p-2 px-4  outline-none w-[27rem] h-[3rem] ' placeholder='Search product'/>
                <button className='btn-bgcolor  px-8 p-2  hover:scale-105  overflow-x-hidden  transition-theme transition-all duration-700 bg-pink-600 text-white' style={{
//           background: 'rgb(184,25,158)',
// background: 'linear-gradient(90deg, rgba(184,25,158,1) 0%, rgba(248,118,239,1) 100%, rgba(36,0,30,1) 100%)'
        }}>Search</button>
            </div>

            <div className='items-center flex'>
        <Link to='/allproducts'>

            <button className='bg-black sm:hidden px-5 text-white py-2    flex items-center  hover:scale-105  w-full cursor-pointer transition-theme transition-all duration-700'>
           All Products 

            </button>
        </Link>
        {/* <div > */}

        <NavbarIcons/>
        {/* </div> */}
        </div>
        </div>
      </div>
        <div className={`${!navState?'absolute top-18 sm:hidden left-0 right-0 bg-pink-600 p-3 text-white z-[1000]' :'fixed top-0 left-0 right-0 z-[1000] py-3  opacity-100 justify-center items-center  bg-pink-600  text-white sm:hidden'}`} style={{
//            background: 'rgb(184,25,158)',
// background: 'linear-gradient(90deg, rgba(184,25,158,1) 0%, rgba(241,198,238,1) 100%, rgba(36,0,30,1) 100%)'
        }}>
        <div className='flex justify-between w-[90%] mx-auto items-center'>
        <div className=''>
            <ul className={`${!navState ? ' flex gap-16' :' text-white' 
             }`}>
                <li className='text-white'>
                    <Link >
                    {/* <Dropdown /> */}
                    {/* <select name="All Categories" id="" className='text-black outline-none w-[17rem] h-[3rem] mb-[-0.4rem] rounded-t-md p-3'>
                    <option value='All Categories'>All Categories</option>
                    {options.map((option) => (
                      <option value={option.value} key={option.value} className='icon-option'>
                        <span className='icon'>
                        
                        {option.icon}</span>
                        <span>
                                       {option.label}</span>
                      </option>
                    ))}

                    </select> */}
 

 

                    </Link>
                   
                </li>
                <div className='flex gap-10 items-center'>

                <li >
                    <Link to='/' className='hover:text-gray-300'>
                        Home
                    </Link>
                   
                </li>
                <li>
                    <Link to='/contact' className='hover:text-gray-300'>
                        Contact us
                    </Link>
                   
                </li>
                <li>
                    <Link to='/about' className='hover:text-gray-300'>
                        About us
                    </Link>
                    
                   
                </li>
                </div>
            </ul>
        </div>
        <div className='flex gap-3 relative'>

{/* <Link to='/wishlist'> */}
<div onClick={onOpen}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7  sm:hidden  hover:scale-105   cursor-pointer transition-theme transition-all duration-700" >
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

<div className='absolute right-10 top-4 bg-black rounded-full w-5 h-5 text-center text-white flex items-center justify-center shadow-xl shadow-gray-500 '>
{/* {cartItems.length} */}
{totalQuantity}
</div>
   </Link>


</div>
<Link to='/login'>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer   hover:scale-105 transition-theme transition-all duration-700"  >
<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg> 

</Link>


</div>
       
        </div>

        </div>
        </div>
    </>
  )
}
