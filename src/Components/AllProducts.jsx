import React from 'react'
import NavigateButtons from './NavigateButtons'
import { storeData } from '../assets/data/dummyData'
import AllProductitem from './AllProductitem'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Mic } from '@mui/icons-material';
import { useSpeechContext } from '@speechly/react-client';
export default function AllProducts() {
  const { listening, attachMicrophone, start, stop } = useSpeechContext();
  // const products=useSelector((state)=>state.products.filteredProducts)

  // const dispatch=useDispatch()
  //   const colorButtons = [
  //       "red",
  //       "green",
  //       "purple",
  //       "yellow",
  //       "orange",
  //       "blue",
  //       "black",
  //       "brown",
  //     ];
  //   const {type}=useParams()
  //   const error=useSelector((state)=>state.products.error)
  //   const genderButtons=['male','female']
  // const sizeButtons = ["S", "M", "L", "XL"];
  const handleClick = async () => {
    if (listening) {
      await stop();
    } else {
      await attachMicrophone();
      await start();
    }
  };
  return (
    <>
    <div className='pt-16'>

      <NavigateButtons/>
      <div className='grid grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 p-5 gap-5'>

      {
        storeData.map((product,i)=>{
            return(
                <AllProductitem
                     id={product.id}
                      type={product.type}
                        key={i}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      color={product.color} 
                      size={product.size}
/>
            )
        })
      }
      </div>
    </div>
    {/* <button onClick={handleClick} className='fixed bottom-10'>
        {listening ? <Mic/> : <Mic/>} microphone
      </button> */}
    </>
  )
}
