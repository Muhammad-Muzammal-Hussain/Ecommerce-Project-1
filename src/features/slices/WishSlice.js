import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlistItems: sessionStorage.getItem("wishlist")
      ? JSON.parse(sessionStorage.getItem("wishlist"))
      : [],
      // wishlistCount: 0,
  },
  reducers: {
    addToWishlist(state, action) {
      // const item = action.payload;
      // state.wishlistItems.push(item);
      // // if(added){
      //   toast.success(`${item.name} added to wishList`)
      // // }else{
      //     // toast.error(`${item.name} added to wishList`)
      //     // return false;

      // // }
      // // state.wishlistCount += 1; 
      // sessionStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
      const itemIndex=state.wishlistItems.findIndex((item)=>item.id===action.payload.id)
      if(itemIndex>=0){
          // state.wishlistItems[itemIndex].wishQuantity +=1
          toast.error(`${action.payload.name} already has added to WishList`)
          return ;

      }else{
          const item={...action.payload,wishQuantity:1}
          state.wishlistItems.push(item)
          toast.success(`${action.payload.name} added to WishList`)
      }
      sessionStorage.setItem('wishlist',JSON.stringify(state.wishlistItems))
    },
    removeFromWishlist(state, action) {
      // const itemId = action.payload;
      // state.wishlistItems = state.wishlistItems.filter(
      //   (item) => item.id !== itemId
      // );
      // sessionStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
      const items=state.wishlistItems.filter((item)=>item.id!==action.payload.id)
      state.wishlistItems=items
      sessionStorage.setItem("wishlist", JSON.stringify(state.wishlistItems));
   toast.success(`${action.payload.name} removed from `)
    },
    clearWishlist(state) {
      state.wishlistItems = [];
      toast.success('All Items Cleared')
      sessionStorage.removeItem("wishlist");
    },
    setTotalAmount:(state,action)=>{
      let {totalAmount,totalQuantity}=state.wishlistItems.reduce((wishTotal,wishItem)=>{
     const{price,wishQuantity}=wishItem;
     const totalPrice=price * wishQuantity;

     wishTotal.totalAmount+=totalPrice
     wishTotal.totalQuantity+=wishQuantity
     return wishTotal;
      },{
          totalAmount:0,
          totalQuantity:0,
      });
      state.wishTotalAmount=totalAmount;
      state.totalwishQuantity=totalQuantity
  },
  setIncreaseWishItem(state,action){
    const itemIndex=state.wishlistItems.findIndex((item)=>item.id===action.payload.id)
    if(itemIndex>=0){
      state.wishlistItems[itemIndex].wishQuantity +=1
      toast.success('Item Quantity Increased')
    }
    sessionStorage.setItem('wishlist',JSON.stringify(state.wishlistItems))
  },
  setDecreaseWishItem(state,action){
    const itemIndex=state.wishlistItems.findIndex((item)=>item.id===action.payload.id)
    if(state.wishlistItems[itemIndex].wishQuantity>1){
      state.wishlistItems[itemIndex].wishQuantity -=1
      toast.success('Item Quantity Decreased')
    }
    sessionStorage.setItem('wishlist',JSON.stringify(state.wishlistItems))
  },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  clearWishlist,
  setTotalAmount,
  setDecreaseWishItem,
  setIncreaseWishItem
} = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.wishlistItems;
// export const setWishItems=(state)=> state.wishlist.wishlistItems;
export const selectTotalAmount=(state)=>state.wishlist.cartTotalAmount
export const selectTotalQuantity=(state)=>state.wishlist.totalCartQUantity

export default wishlistSlice.reducer;
