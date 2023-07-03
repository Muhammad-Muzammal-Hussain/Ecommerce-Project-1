import React from 'react'
import { storeData } from '../assets/data/dummyData'
import ProductSectionItem from './ProductSectionItem'
import clothes from '../assets/images/clothes.jpg'

export default function ProductSection() {
  return (
    <>
     <div>
     <div className='flex text-center w-[50%] md:w-[80%] mx-auto'>
            <h1 className='bg-black text-red-400 w-full  rounded-lg p-1 mb-5 font-bold text-lg'>SALES UP TO 50%</h1>
        </div>
        <div className='w-[63%] md:w-[80%] mx-auto '>
            <img src={clothes} alt="" className='rounded-lg  mb-5 shadow-lg shadow-gray-600'/>
        </div>
        <div className='flex text-center w-[47%] md:w-[80%] mx-auto'>
            <h1 className='bg-black text-red-400 w-full  rounded-lg p-1 mb-5 font-bold text-lg '>SUMMER T-Shirt SALE 30%</h1>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   grid-cols-3 w-full    pt-10 p-5 sm:p-10 gap-10'>
            {
                storeData.slice(0,6).map((product,i)=>{
                    return(
                        <>
                            <div key={i} className=''>
                                <ProductSectionItem
                                     id={product.id}
                name={product.name}
                img={product.img}
                text={product.text}
                price={product.price}
                totalPrice={product.totalPrice}
                color={product.color}
                size={product.size}
                                />
                            </div>
                        </>
                    )
                })
            }
        </div>
     </div> 
    </>
  )
}
