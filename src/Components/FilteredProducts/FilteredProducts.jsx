import {  Menu, MenuHandler, MenuList,MenuItem, button } from '@material-tailwind/react'
// import { FormControl, InputLabel ,Select
//     ,MenuItem} from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
// import Select from '@mui/material/Select';
// import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Select from 'react-select'
import { useDispatch, useSelector } from 'react-redux';
import ProductsCard from './ProductsCard';
import { filterByColor, filterByGender, filterByPrice, filterBySize, filterProducts } from '../../features/slices/ProductSlice';
import Error from '../Error';
import { Mic } from '@mui/icons-material';
import { useSpeechContext } from '@speechly/react-client';
import NavigateButtons from '../NavigateButtons';
export default function FilteredProducts() {
    const { segment, listening, attachMicrophone, start, stop } = useSpeechContext();
    const [transcripts, setTranscripts] = useState([])
    const [tentative, setTentative] = useState('')
    useEffect(() => {
        if (segment) {
          const transcript = segment.words.map((word) => word.value).join(' ');
          setTentative(transcript);
          if (segment.isFinal) {
            setTentative('');
            setTranscripts((current) => [...current, segment]);
          }
        }
      }, [segment]);
    // const options = [
    //     { value: 'red', label: 'Red' },
    //     { value: 'green', label: 'Green' },
    //     { value: 'purple', label: 'Redpurple'},
    //     { value: 'orange', label: 'Orange' },
    //     { value: 'blue', label: 'Blue' },
    //     { value: 'black', label: 'Black' },
    //     { value: 'brown', label: 'Brown' },
    //   ]
const products=useSelector((state)=>state.products.filteredProducts)

  const dispatch=useDispatch()
    const colorButtons = [
        "red",
        "green",
        "purple",
        "yellow",
        "orange",
        "blue",
        "black",
        "brown",
      ];
    const {type}=useParams()
    const error=useSelector((state)=>state.products.error)
    const genderButtons=['male','female']
  const sizeButtons = ["S", "M", "L", "XL"];
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
      <div className='md:pt-24 pt-12'>
      <NavigateButtons/>
        <div>
            <div className=' pl-12'>
                <h1 className='text-gray-600 font-bold text-4xl'>{type}</h1>
            </div>
            <div className='flex pl-12 gap-3 justify-between p-2 px-10 md:pt-20'>
            <div className=' gap-3   p-5 px-10 flex flex-wrap'>

            <div className='flex  gap-3 md:flex-wrap'>
                {
                    genderButtons.map((genderButton,i)=>{
                        return(
                            <>
                            <button key={i}
                   
                   className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 rounded font-medium shadow-md sm:w-full shadow-pink-200'
                    onClick={()=>dispatch(filterByGender(genderButton))}>
                    {genderButton}
                   </button>
                            </>
                        )
                    })
                }
            </div>
            <button
                   className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 w-fit rounded font-medium shadow-md sm:w-[95%] shadow-pink-200'
                   onClick={()=>dispatch(filterByPrice())}>
                    High Price
                   </button>
                   <Menu>
                    <MenuHandler>
                    <button
                 
                 className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 w-fit rounded font-medium shadow-md sm:w-[95%] shadow-pink-200'
                   >
                    Select a color
                   </button>
                    </MenuHandler>
                    <MenuList
                    style={{display:'flex',padding:'1rem'}}>
                   {
                    colorButtons.map((colorbtn,i)=>{
                        return(
                            <>
                                <MenuItem
                                 id='menu-Item'
                                key={i}
                                style={{color:colorbtn,width:'150px',height:'',display:'flex',padding:'13px',paddingBottom:'20px'}}
                                onClick={()=>dispatch(filterByColor(colorbtn))}
                                >
                                    {colorbtn}
                                </MenuItem>
                            </>
                        )
                    })
                   }
                    </MenuList>
                   </Menu>
                   <Menu>
                    <MenuHandler>
                    <button
                  disabled={type === "Bags" || type === "Shoes"}
                  className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 w-fit rounded font-medium shadow-md sm:w-[95%]  shadow-pink-200'
                    >
                    Select a Size
                   </button>
                    </MenuHandler>
                    <MenuList
                      className='text-left p-4 w-[20%]'>
                   {
                    sizeButtons.map((sizeButtons,i)=>{
                        return(
                            <>
                                <MenuItem
                                onClick={()=>dispatch(filterBySize(sizeButtons))}
                                key={i}
                                style={{color:sizeButtons,width:'',height:'',display:'flex',padding:'15px',paddingBottom:'20px',}}
                                >
                                    {sizeButtons}
                                </MenuItem>
                            </>
                        )
                    })
                   }
                    </MenuList>
                   </Menu>
                   {/* <div  className="flex flex-col  gap-6">

                   <Select variant="" label="Select a Color" className={`text-black`}
                   >
         {
           colorButtons.map((item,i)=>{
            return(
                <>
                    <Option
                    style={{color:item}}
                    key={i}
                    className={` bg-n`}
                    >
                        {item}
                    </Option>
                </>
            )
           })
         }
      </Select> */}
     
{/* <select className='cursor-pointer  rounded-lg  border-2 border-gray-300 w-[170px] outline-none p-4 pr-10'>
<option  className='' disabled selected>Select a Color</option>
  {
    colorButtons.map((item,i)=>{
        return(
            <>
<option value={item}  key={i} style={option}>
    {item}
</option> */}
{/* <MDBSelect
      data={[
        { text: 'One', value: 1 },
        { text: 'Two', value: 2 },
        { text: 'Three', value: 3 },
        { text: 'Four', value: 4 },
        { text: 'Five', value: 5 },
        { text: 'Six', value: 6 },
        { text: 'Seven', value: 7 },
        { text: 'Eight', value: 8 },
      ]}
    /> */}

            {/* </>
        )
    })
  }
</select> */}

{/* <Select options={options} className=' ' style={{color:options.value}}/> */}
            </div>
<div >
<button
                  onClick={() => dispatch(filterProducts(type))}
                 className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 rounded font-medium shadow-md mt-6 shadow-pink-200'
                    >
                    Clear Filter
                   </button>
</div>
            </div>
        </div>
        {
            error?(
                <Error></Error>
            ):
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   grid-cols-4     pt-10  p-10 gap-5'>
        {/* <div className='grid lg:grid-cols-2  md:grid-cols-1 grid-cols-4 xl:grid-cols-3    pt-10 gap-x-0 gap-y-16 p- overflow-auto'> */}
            {
               products.filter((product)=>product.type===type).map((product,i)=>{
                return(
                    <>
                        <ProductsCard
                        key={i}
                     id={product.id}
                      name={product.name}
                      text={product.text}
                      img={product.img}
                      price={product.price}
                      color={product.color} 

                        />
                    </>
                )
               }) 
            }
        </div>
        }
      </div>
      {/* <button onClick={handleClick} className='fixed bottom-10 left-[50%] text-white bg-black text-3xl'>
        {listening ? <Mic/> : <Mic/>} microphone
      </button>
      <div className='fixed top-12 z-[1000] bg-black text-white font-bold text-2xl'>
        {transcripts.map((transcript) => <p>{transcript}</p>)}
        <h1>{tentative}</h1>
     </div> */}
    </>
  )
}
// import {  Menu, MenuHandler, MenuList,MenuItem, button } from '@material-tailwind/react'
// // import { FormControl, InputLabel ,Select
// //     ,MenuItem} from '@mui/material';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// // import Select from '@mui/material/Select';
// // import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';
// import Select from 'react-select'
// import { useDispatch, useSelector } from 'react-redux';
// import ProductsCard from './ProductsCard';
// import { filterByColor, filterByGender, filterByPrice, filterBySize, filterProducts } from '../../features/slices/ProductSlice';
// import Error from '../Error';
// import { Mic } from '@mui/icons-material';
// import { useSpeechContext } from '@speechly/react-client';
// import NavigateButtons from '../NavigateButtons';
// export default function FilteredProducts() {
//     const [filterText, setFilterText] = useState('');

//     const { segment, listening, attachMicrophone, start, stop } = useSpeechContext();
//     const [transcripts, setTranscripts] = useState([])
//     const [tentative, setTentative] = useState('')
//     useEffect(() => {
//         if (segment) {
//           const transcript = segment.words.map((word) => word.value).join(' ');
//           setTentative(transcript);
//           if (segment.isFinal) {
//             setTentative('');
//             setFilterText(transcript);
//             setTranscripts((current) => [...current, transcript]);
//           }
//         }
//       }, [segment]);
      
   
// const products=useSelector((state)=>state.products.filteredProducts)

//   const dispatch=useDispatch()
//     const colorButtons = [
//         "red",
//         "green",
//         "purple",
//         "yellow",
//         "orange",
//         "blue",
//         "black",
//         "brown",
//       ];
//     const {type}=useParams()
//     const error=useSelector((state)=>state.products.error)
//     const genderButtons=['male','female']
//   const sizeButtons = ["S", "M", "L", "XL"];
//   const handleClick = async () => {
//     if (listening) {
//       await stop();
//       setFilterText('');
//     } else {
//       await attachMicrophone();
//       await start();
//     }
  
  
//   };
//   return (
//     <>
//       <div className='md:pt-24 pt-12'>
//       <NavigateButtons/>
//         <div>
//             <div className=' pl-12'>
//                 <h1 className='text-gray-600 font-bold text-4xl'>{type}</h1>
//             </div>
//             <div className='flex pl-12 gap-3 justify-between p-2 px-10 md:pt-20'>
//             <div className=' gap-3   p-5 px-10 flex flex-wrap'>

//             <div className='flex  gap-3 md:flex-wrap'>
//                 {
//                     genderButtons.map((genderButton,i)=>{
//                         return(
//                             <>
//                             <button
//   onClick={() => dispatch(filterByGender(genderButton))}
//   className={`text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 rounded font-medium shadow-md sm:w-full shadow-pink-200 ${
//     filterText.toLowerCase() === genderButton.toLowerCase() ? 'bg-pink-600 text-white' : ''
//   }`}
// >
//   {genderButton}
// </button>

//                             </>
//                         )
//                     })
//                 }
//             </div>
//             <button
//                    className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 w-fit rounded font-medium shadow-md sm:w-[95%] shadow-pink-200'
//                    onClick={()=>dispatch(filterByPrice())}>
//                     High Price
//                    </button>
//                    <Menu>
//                     <MenuHandler>
//                     <button
                 
//                  className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 w-fit rounded font-medium shadow-md sm:w-[95%] shadow-pink-200'
//                    >
//                     Select a color
//                    </button>
//                     </MenuHandler>
//                     <MenuList
//                     style={{display:'flex',padding:'1rem'}}>
//                    {
//                     colorButtons.map((colorbtn,i)=>{
//                         return(
//                             <>
//                                 <MenuItem
//                                  id='menu-Item'
//                                 key={i}
//                                 style={{color:colorbtn,width:'150px',height:'',display:'flex',padding:'13px',paddingBottom:'20px'}}
//                                 onClick={()=>dispatch(filterByColor(colorbtn))}
//                                 >
//                                     {colorbtn}
//                                 </MenuItem>
//                             </>
//                         )
//                     })
//                    }
//                     </MenuList>
//                    </Menu>
//                    <Menu>
//                     <MenuHandler>
//                     <button
//                   disabled={type === "Bags" || type === "Shoes"}
//                   className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 w-fit rounded font-medium shadow-md sm:w-[95%]  shadow-pink-200'
//                     >
//                     Select a Size
//                    </button>
//                     </MenuHandler>
//                     <MenuList
//                       className='text-left p-4 w-[20%]'>
//                    {
//                     sizeButtons.map((sizeButtons,i)=>{
//                         return(
//                             <>
//                                 <MenuItem
//                                 onClick={()=>dispatch(filterBySize(sizeButtons))}
//                                 key={i}
//                                 style={{color:sizeButtons,width:'',height:'',display:'flex',padding:'15px',paddingBottom:'20px',}}
//                                 >
//                                     {sizeButtons}
//                                 </MenuItem>
//                             </>
//                         )
//                     })
//                    }
//                     </MenuList>
//                    </Menu>
                  
//             </div>
// <div >
// <button
//                   onClick={() => dispatch(filterProducts(type))}
//                  className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 rounded font-medium shadow-md mt-6 shadow-pink-200'
//                     >
//                     Clear Filter
//                    </button>
// </div>
//             </div>
//         </div>
//         {
//             error?(
//                 <Error></Error>
//             ):
//         <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   grid-cols-4     pt-10  p-10 gap-5'>
//         {/* <div className='grid lg:grid-cols-2  md:grid-cols-1 grid-cols-4 xl:grid-cols-3    pt-10 gap-x-0 gap-y-16 p- overflow-auto'> */}
//             {
//                 products
//   .filter((product) => product.type === type)
//   .filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase()))
//   .map((product, i) => {
//     return (
//       <ProductsCard
//         key={i}
//         id={product.id}
//         name={product.name}
//         text={product.text}
//         img={product.img}
//         price={product.price}
//         color={product.color}
//       />
//     )
//   })

//             }
//         </div>
//         }
//       </div>
//       <button onClick={handleClick} className='fixed bottom-10 left-[50%] text-white bg-black text-3xl'>
//         {listening ? <Mic/> : <Mic/>} microphone
//       </button>
//       <div className='fixed top-12 z-[1000] bg-black text-white font-bold text-2xl'>
//         {transcripts.map((transcript) => <p>{transcript}</p>)}
//         <h1>{tentative}</h1>
//      </div>
//     </>
//   )
// }

// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { filterByColor, filterByGender, filterByPrice, filterBySize, filterProducts } from '../../features/slices/ProductSlice';
// import ProductsCard from './ProductsCard';
// import Error from '../Error';
// import { Mic } from '@mui/icons-material';
// import { useSpeechContext } from '@speechly/react-client';
// import NavigateButtons from '../NavigateButtons';

// export default function FilteredProducts() {
//   const { type } = useParams();
//   const dispatch = useDispatch();
//   const error = useSelector((state) => state.products.error);
//   const products = useSelector((state) => state.products.filteredProducts);

//   const [filterText, setFilterText] = useState('');
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const { segment, listening, attachMicrophone, start, stop } = useSpeechContext();
//   const [transcripts, setTranscripts] = useState([]);
//   const [tentative, setTentative] = useState('');

//   useEffect(() => {
//     if (segment) {
//       const transcript = segment.words.map((word) => word.value).join(' ');
//       setTentative(transcript);
//       if (segment.isFinal) {
//         setTentative('');
//         setFilterText(transcript);
//         setTranscripts((current) => [...current, transcript]);
//         dispatch(filterProducts(type));
//       }
//     }
//   }, [segment, dispatch, type]);

//   useEffect(() => {
//     const filtered = products
//       .filter((product) => product.type === type)
//       .filter((product) => product.name.toLowerCase().includes(filterText.toLowerCase()));

//     setFilteredProducts(filtered);
//   }, [products, type, filterText]);

//   const colorButtons = ["red", "green", "purple", "yellow", "orange", "blue", "black", "brown"];
//   const genderButtons = ['male', 'female'];
//   const sizeButtons = ["S", "M", "L", "XL"];

//   const handleVoiceInput = () => {
//     if (listening) {
//       stop();
//       setFilterText('');
//     } else {
//       attachMicrophone();
//       start();
//     }
//   };

//   return (
//     <>
//       <div className='md:pt-24 pt-12'>
//         <NavigateButtons />
//         <div>
//           <div className='pl-12'>
//             <h1 className='text-gray-600 font-bold text-4xl'>{type}</h1>
//           </div>
//           <div className='flex pl-12 gap-3 justify-between p-2 px-10 md:pt-20'>
//             <div className='gap-3 p-5 px-10 flex flex-wrap'>
//               <div className='flex gap-3 md:flex-wrap'>
//                 {genderButtons.map((genderButton, i) => (
//                   <button
//                     key={i}
//                     onClick={() => {
//                       setFilterText(genderButton);
//                       dispatch(filterByGender(genderButton));
//                     }}
//                     className={`text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 rounded font-medium shadow-md sm:w-full shadow-pink-200 ${
//                       filterText.toLowerCase() === genderButton.toLowerCase() ? 'bg-pink-600 text-white' : ''
//                     }`}
//                   >
//                     {genderButton}
//                   </button>
//                 ))}
//               </div>
//               <button
//                 className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 w-fit rounded font-medium shadow-md sm:w-[95%] shadow-pink-200'
//                 onClick={() => {
//                   setFilterText('');
//                   dispatch(filterByPrice());
//                 }}
//               >
//                 High Price
//               </button>
//               {/* Rest of the code for the color and size buttons */}
//               {/* ... */}
//             </div>
//             <div>
//               <button
//                 onClick={() => {
//                   setFilterText('');
//                   dispatch(filterProducts(type));
//                 }}
//                 className='text-black hover:bg-pink-600 hover:text-white transition-all duration-700 border hover:border-none border-gray-400 p-3 px-5 rounded font-medium shadow-md mt-6 shadow-pink-200'
//               >
//                 Clear Filter
//               </button>
//             </div>
//           </div>
//         </div>
//         {error ? (
//           <Error />
//         ) : (
//           <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-cols-4 pt-10 p-10 gap-5'>
//             {filteredProducts.map((product, i) => (
//               <ProductsCard
//                 key={i}
//                 id={product.id}
//                 name={product.name}
//                 text={product.text}
//                 img={product.img}
//                 price={product.price}
//                 color={product.color}
//               />
//             ))}
//           </div>
//         )}
//       </div>
//       <button onClick={handleVoiceInput} className='fixed bottom-10 left-[50%] text-white bg-black text-3xl'>
//         {listening ? <Mic /> : <Mic />} microphone
//       </button>
//       <div className='fixed top-12 z-[1000] bg-black text-white font-bold text-2xl'>
//         {transcripts.map((transcript) => (
//           <p>{transcript}</p>
//         ))}
//         <h1>{tentative}</h1>
//       </div>
//     </>
//   );
// }


