import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home'
import FilteredProducts from './Components/FilteredProducts/FilteredProducts'
import { ThemeProvider } from '@material-tailwind/react'
import SingleProduct from './Components/FilteredProducts/SingleProduct'
import Cart from './Components/Cart/Cart'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Contact from './Components/Contact'
import Checkout2 from './Components/Checkout'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import NavigateButtons from './Components/NavigateButtons'
import About from './Components/AboutUs/AboutUs'
import Wishlist from './Components/Wishlist/WishList'
import AllProducts from './Components/AllProducts'
import { storeData } from './assets/data/dummyData'
// import WishList from './Components/Wishlist/WishList'
import { useSpeechContext } from '@speechly/react-client';
export default function App() {
  // const { listening, attachMicrophone, start, stop } = useSpeechContext();
  return (
    <>
      <>
        <div>
        {/* <ThemeProvider> */}

          <BrowserRouter>
          <Navbar storeData={storeData}/>
            <Routes>
              <Route path='/' element={<Home/>}/>
            <Route
            path="/filteredProducts/:type" ifexist
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
            <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
            <Route
            path="/contact"
            element={<Contact></Contact>}
          ></Route>
            <Route
            path="/signup"
            element={<Signup></Signup>}
          ></Route>
            <Route
            path="/products"
            element={<NavigateButtons></NavigateButtons>}
          ></Route>
            <Route
            path="/about"
            element={<About></About>}
          ></Route>
            <Route
            path="/checkout"
            element={<Checkout2></Checkout2>}
          ></Route>
            <Route
            path="/cart"
            element={<Cart></Cart>}
          ></Route>
            <Route
            path="/wishlist"
            element={<Wishlist></Wishlist>}
          ></Route>
            <Route
            path="/login"
            element={<Login></Login>}
          ></Route>
            <Route
            path="/allproducts"
            element={<AllProducts></AllProducts>}
          ></Route>
            </Routes>
            <ToastContainer />
          </BrowserRouter>
        {/* </ThemeProvider> */}
        </div>
      </>
    </>
  )
}
