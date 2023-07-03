import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../features/slices/ProductSlice';
export default function NavigateButtons() {
    const buttons = [
        "Hoodies",
        "Dresses",
        "Suits",
        "Shoes",
        "T-Shirts",
        "Jeans",
        "Jackets",
        "Bags",
      ];
      let dispatch=useDispatch()
  return (
    <>
     <div >
        <h1  className='text-center pt-5  font-bold text-3xl text-pink-400'>Product Categories</h1>
        <div className='flex p-5 justify-center gap-5 flex-wrap'>
        <Link to='/allproducts'>

        <button
                 
                 className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 rounded font-medium shadow-md  shadow-pink-200'
                    >
                    All Products
                   </button>
        </Link>
          {
            buttons.map((button,index)=>{
                return(
                    <>
                    <Link to={'/filteredProducts/'+button}>

                        <div key={index} className=''>
                   <button
                 
                 className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 rounded font-medium shadow-md  shadow-pink-200'
                    onClick={()=>dispatch(filterProducts(button))}>
                    {button}
                   </button>
                        </div>
                    </Link>
                    </>
                )
            })
          }
        </div>
      
     </div> 
    </>
  )
}
