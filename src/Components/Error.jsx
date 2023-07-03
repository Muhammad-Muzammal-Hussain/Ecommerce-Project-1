import React from 'react'

export default function Error() {
  return (
    <>
     <div>
        <div className=' text-center p-20  pt-32 flex items-center justify-center'>
            <p className='bg-red-500 rounded-lg p-3 px-5  text-white text-2xl font-bold w-fit'>
            Sorry no products match your filter search ... Clear the filter and
          try again 😀.
            </p>
        </div>
     </div> 
    </>
  )
}
