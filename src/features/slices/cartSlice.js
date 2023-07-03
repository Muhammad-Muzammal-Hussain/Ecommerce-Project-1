import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';

export const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cartItems:sessionStorage.getItem('cart')? JSON.parse(sessionStorage.getItem('cart')):[],
        // totalAmount:0,
        // amount:0,
        // totalPrice:0,
    },
    reducers:{
        // addToCart(state,action){
        //     const productId=action.payload
        //     try {
        //         const exist=state.cart.find((product)=>product.id===productId.id&&
        //         product.size===productId.size &&
        //         product.color===productId.color
        //         )
        //         if(exist){
        //             exist.amount++;
        //             exist.totalPrice+=productId.price
        //             exist.totalAmount++;
        //             exist.totalPrice+=productId.price

        //         }else{
        //             state.cart.push({
        //                 price: productId.price,
        //                 size: productId.size,
        //                 amount: 1,
        //                 img: productId.img,
        //                 totalPrice: productId.price,
        //                 name: productId.name,
        //                 text: productId.text,
        //                 color: productId.color,
        //             })
        //             state.totalAmount++;
        //             state.totalPrice += productId.price;
                    
        //         }
        //     } catch (error) {
        //         return error
        //     }
        // },

        addToCart(state,action){
        const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id)
        if(itemIndex>=0){
            state.cartItems[itemIndex].cartQuantity +=1
            toast.success('Item Quantity Increased')
        }else{
            const item={...action.payload,cartQuantity:1}
            state.cartItems.push(item)
            toast.success(`${action.payload.name} added to cart`)
        }
        sessionStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        removeFromCart(state,action){
               const items=state.cartItems.filter((item)=>item.id!==action.payload.id)
               state.cartItems=items
               sessionStorage.setItem("cart", JSON.stringify(state.cartItems));
            toast.success(`${action.payload.name} removed from cart`)
        },
        // removeFromCart(state,action){
        //     const productId=action.payload
        //     try {
        //         const exist=state.cart.find((product)=>product.id===productId.id &&
        //         product.size===productId.size &&
        //         product.color===productId.color
        //         )
        //         if(exist.amount===1){
        //             state.cart=state.cart.filter((product)=>
        //             product.id !==productId.id ||
        //         product.size !==productId.size ||
        //         product.color !==productId.color
        //             )
        //             state.totalAmount--;
        //             state.totalPrice -= productId.price;
        //         }else{
        //             exist.amount--;
        //             exist.totalPrice-=productId.price
        //             exist.totalAmount--;
        //             exist.totalPrice-=productId.price

                    
        //         }
        //     } catch (error) {
        //         return error
        //     }
        // },
        setIncreaseItem(state,action){
          const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id)
          if(itemIndex>=0){
            state.cartItems[itemIndex].cartQuantity +=1
            toast.success('Item Quantity Increased')
          }
          sessionStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        setDecreaseItem(state,action){
          const itemIndex=state.cartItems.findIndex((item)=>item.id===action.payload.id)
          if(state.cartItems[itemIndex].cartQuantity>1){
            state.cartItems[itemIndex].cartQuantity -=1
            toast.success('Item Quantity Decreased')
          }
          sessionStorage.setItem('cart',JSON.stringify(state.cartItems))
        },
        setClearItems:(state,action)=>{
            state.cartItems=[]
        toast.success(`Items Cleared`)
        sessionStorage.setItem('cart',JSON.stringify(state.cartItems))
    },
    setTotalAmount:(state,action)=>{
        let {totalAmount,totalQuantity}=state.cartItems.reduce((cartTotal,cartItem)=>{
       const{price,cartQuantity}=cartItem;
       const totalPrice=price * cartQuantity;

       cartTotal.totalAmount+=totalPrice
       cartTotal.totalQuantity+=cartQuantity
       return cartTotal;
        },{
            totalAmount:0,
            totalQuantity:0,
        });
        state.cartTotalAmount=totalAmount;
        state.totalCartQUantity=totalQuantity
    },
    // addToCartFromWishlist: (state, action) => {
       
        
    //     const itemIndex=state.cartItems.findIndex((item)=>item===action.payload)
    //     if(itemIndex>=0){
    //         state.cartItems[itemIndex].cartQuantity +=1
    //         toast.success('Item Quantity Increased')
    //     }else{
    //         const item={...action.payload,cartQuantity:1}
    //         state.cartItems.push(item)
    //         toast.success(`${action.payload.name} added to cart`)
    //     }
    //     sessionStorage.setItem('cart',JSON.stringify(state.cartItems))
    //     toast.success("All items added to cart");
    // }

},
})
export const {addToCart,removeFromCart,setDecreaseItem,setIncreaseItem,setTotalAmount,setClearItems}=cartSlice.actions
export const setCartItems=(state)=> state.cart.cartItems;
export const selectTotalAmount=(state)=>state.cart.cartTotalAmount
export const selectTotalQuantity=(state)=>state.cart.totalCartQUantity
export default cartSlice.reducer