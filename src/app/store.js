import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/slices/ProductSlice'
import cartReducer from '../features/slices/cartSlice'
import WishReducer from '../features/slices/WishSlice'
export const store=configureStore({
    reducer:{
        cart:cartReducer,
        products:productReducer,
        wishlist:WishReducer
    }
})