import { Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../features/slices/cartSlice'

export default function SingleProduct() {
    const product=useSelector((state)=>state.products.singleProduct)
    const {id}=useParams()
    const productColor = product[0].color[0];
    const productSize=product[0].size? product[0].size[0]:''
    const [size,setproductSize]=useState(productSize)
    const [color,setProductColor]=useState(productColor)
    const dispatch=useDispatch()
  return (
    <>
      <div className='pl-20 md:pl-0 md:mt-28'>
    {
        product.filter((product)=>product.id === id)
        .map((item,i)=>{
            return(
                <>
                    <div key={i} className='grid grid-cols-2 md:grid-cols-1 items-center p-20 gap-14 pt-40'>
                        <div className=''>
                            <img src={item.img} alt={item.name} className='rounded-lg shadow-lg shadow-gray-400'/>
                        </div>
                        <div>
                            <div>
                                <h1 className='font-bold text-3xl pb-3'>{item.name}</h1>
                                <h1 className='text-red-400 font-bold text-3xl pb-6'>15% OFF</h1>
                                <h1 className='font-bold text-2xl pb-10 leading-7 text-gray-500'>{item.text}</h1>

                            </div>
                            <div>
                                {
                                    item.size? (
                         <div className='flex flex-col gap-2 pb-5'>
                      <label htmlFor="size">Pick a size</label>
                      <select name="size" id="" className='bg-gray-5 0 p-2 rounded-md' value={size} onChange={(e)=>setproductSize(e.target.value)}>
                        {
                     item.size.map((item,i)=>{
                        return(
                            <>
                                <option value={item} key={i}>{item}</option>
                            </>
                        )
                     })
                        }
                      </select>
                         </div>
                                    ):(
                                        <div className='flex flex-col gap-2 pb-5'>
                      <label htmlFor="size">Pick a size</label>
                      <select name="size" id="" disabled={true} className='bg-gray-50 p-2 rounded-md' value={size} onChange={(e)=>setproductSize(e.target.value)}>
                        {
                     item?.size?.map((item,i)=>{
                        return(
                            <>
                                <option value={item} key={i}>{item}</option>
                            </>
                        )
                     })
                        }
                      </select>
                         </div>
                                    )
                                }
                            </div>
                            <div>
                            <div className='flex flex-col gap-2 pb-8'>
                      <label htmlFor="size">Pick a Color</label>
                      <select name="size" id="" className='bg-gray-50 p-2 rounded-md' value={color} onChange={(e)=>setProductColor(e.target.value)}>
                        {
                     item.color.map((item,i)=>{
                        return(
                            <>
                                <option value={item} key={i}>{item}</option>
                            </>
                        )
                     })
                        }
                      </select>
                         </div>
                            </div>
                           
                                <button className='border border-gray-400 p-2 py-3 px-8  rounded-lg text-gray-500 font-semibold hover:bg-red-500 hover:text-white transition-all duration-500 shadow-lg'
                                onClick={()=>dispatch(addToCart({...item,size:size,color:color}))}
                                >
                                    Add To cart
                                </button>
                            
                        </div>
                    </div>
                </>
            )
        })
    }
      </div>
    </>
  )
}
