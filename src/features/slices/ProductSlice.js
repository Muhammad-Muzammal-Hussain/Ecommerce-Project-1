import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice=createSlice({
    name: "products",
    initialState:{
       filteredProducts:JSON.parse(localStorage.getItem('filteredProducts'))|| storeData,
       singleProduct:JSON.parse(localStorage.getItem('singleProduct')) || storeData,
       error:false,
    },
    reducers:{
        filterProducts(state,action){
            try{
                const filter=storeData.filter((product)=>product.type===action.payload);
                state.filteredProducts=filter
                state.error=false
                const savedState=JSON.stringify(filter)
                localStorage.setItem('filteredProducts',savedState)
            }catch(err){
                return err
            }
        },
        singleProduct(state,action){
            try{
            const oneProduct=state.filteredProducts.filter((product)=>product.id===action.payload)
            state.singleProduct=oneProduct
            const savedProduct=JSON.stringify(oneProduct)
            localStorage.setItem('singleProduct',savedProduct)
            }catch(err){
                console.log(err) 
            }
        },
        filterByGender(state,action){
            try{
                const gender=state.filteredProducts.filter((product)=>product.gender===action.payload)
                state.filteredProducts=gender
                const onegenderType=gender.length>0
                if(onegenderType){
                    state.error=false
                    const savedState=JSON.stringify(gender)
                    localStorage.setItem('filteredProducts',savedState)
                }else{
                state.error=true
                state.filteredProducts=[]
                }
            }catch(err){
                return err
            }
        },
        filterByPrice(state,action){
            try {
                const price=state.filteredProducts.sort((a,b)=>a.price>b.price?-1:1)
                state.filteredProducts=price
                let count=price.length
                if(count>1){
                    let Noerror=false
                    state.error=Noerror
                    if(!Noerror){
                        state.filteredProducts=price
                        const savedState=JSON.stringify(price)
                        localStorage.setItem('filteredProducts',savedState)
                    }
                }else{
                    state.error=true
                    state.filteredProducts=[]
                }
            } catch (error) {
                return error
            }
        },
        filterByColor(state,action){
            try {
                const color=state.filteredProducts.filter((product)=>product.color.includes(action.payload))
                state.error=false
                state.filteredProducts=color
                if(color.length<=0){
                    state.error=true
                    state.filteredProducts=[]
                }else{
                    state.error=false
                    state.filteredProducts=color
                    const savedProduct=JSON.stringify(color)
                    localStorage.setItem('filteredProducts',savedProduct)
                }
            } catch (error) {
                return error
            }
        },
        setProductById: (state, action) => {
            state[action.payload.id] = action.payload.product;
          },
        filterBySize(state,action){
            try {
                const size=state.filteredProducts.filter((product)=>product.size.includes(action.payload))
                state.error = false;
        state.filteredProducts = size;
        if (size.length <= 0) {
          state.error = true;
          state.filteredProducts = [];
        } else {
          state.error = false;
          state.filteredProducts = size;
          const saveState = JSON.stringify(size);
          localStorage.setItem("filteredProducts", saveState);
        }
            } catch (error) {
                return error
            }
        }
    }
})
export const {filterProducts,singleProduct,filterByGender,filterBySize,filterByColor,filterByPrice} =productSlice.actions
export default productSlice.reducer
export const { setProductById } = productSlice.actions;

export const selectProductById = (state, id) => state.product[id];

export const getProductById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`/api/products/${id}`); // Replace with your API endpoint
    const product = await response.json();
    dispatch(setProductById({ id, product }));
  } catch (error) {
    console.error('Error fetching product:', error);
  }
};