import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage if available
  const initialState = {
    cart: [],
  }


const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state , action) =>{
            const inCart= state.cart.find((item) => item.id === action.payload.id);
                if (!inCart) {
                    state.cart.push(action.payload);
                }
            // Save to localStorage
        },
        removeItem: (state, action)=>{
            state.cart = state.cart.filter(item => item.id !== action.payload);
            // Save to localStorage
        }
}});

export default  cartSlice.reducer;
export const {addToCart , removeItem} = cartSlice.actions;

