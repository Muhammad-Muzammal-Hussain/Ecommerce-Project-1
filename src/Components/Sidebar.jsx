import React from 'react'
import {
useDisclosure,
Input,
Button,
Drawer,
DrawerOverlay,
DrawerContent,
DrawerCloseButton,
DrawerHeader,
DrawerBody,
DrawerFooter,
position} from '@chakra-ui/react'
import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
// import { FaSocks } from 'react-icons/fa'
export default function SideBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

    return (

    <>
      <Button ref={btnRef}   onClick={onOpen}>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"></path></svg>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        
        
      >
        <DrawerOverlay />

        <DrawerContent >
          <DrawerCloseButton style={{marginBottom:'-18px', position:'absolute',top:'20px',right:'20px'}}/>
        <div className=''>
          <DrawerHeader>
          <div className='flex gap-3 items-center'>
           
<Link to='/login'>

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer ">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</Link>



            </div>
          </DrawerHeader>
        </div>

          <DrawerBody>
          {/* <div className='flex items-center pt-4'>
                <input type="text" className='border p-2 px-2 outline-none' placeholder='Search product'/>
                <button className='btn-bgcolor p-2 px-5'><Search2Icon className='w-7 h-7 translate-y-[-2px]'/></button>
            </div> */}
            <ul className='flex flex-col gap-5 pt-5'>
             
              <li className='flex gap-3 items-center'>
              <Link to='/'>Home</Link></li>
              <li className='flex gap-3 items-center'>
              <Link to='/signup'>Sign Up</Link></li>
              <li className='flex gap-3 items-center'>
              <Link to='/login'>Login</Link></li>
              <li className=' gap-3 items-center hidden sm:block'>
              <Link to='/about'>About Us</Link></li>
              <li className='hidden sm:block gap-3 items-center'>
              <Link to='/contact'>Contact Us</Link></li>
              <li className='hidden sm:block gap-3 items-center'>
              <Link to='/allproducts'>All Products</Link></li>
            </ul>
          </DrawerBody>
 
          <DrawerFooter>
           
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
   

// import React from 'react'
// import {
//   Drawer,
//   DrawerBody,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   useDisclosure,
//   Button
// } from '@chakra-ui/react'
// export default function Sidebar() {
//   const { isOpen, onOpen, onClose } = useDisclosure()
//   const btnRef = React.useRef()

//   return (
//     <>
//      <Button ref={btnRef}  onClick={onOpen}>
//      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7"></path></svg>
//       </Button>
//       <Drawer
//         isOpen={isOpen}
//         placement='left'
//         onClose={onClose}
//         finalFocusRef={btnRef}
//       >
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />
//           <DrawerHeader></DrawerHeader>

//           <DrawerBody>
//             {/* <Input placeholder='Type here...' /> */}
//           </DrawerBody>

//           <DrawerFooter>
//             {/* <Button variant='outline' mr={3} onClick={onClose}>
//               Cancel
//             </Button>
//             <Button colorScheme='blue'>Save</Button> */}
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer> 
//     </>
//   )
// }
