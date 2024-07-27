import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart: (state , action) =>{
            const inCart= state.cart.find((item) => item.rank === action.payload.rank);
                if (inCart) {
                    inCart.qty += action.payload.qty;
                } else {
                    state.cart.push(action.payload);
                }
        },
        removeItem: (state, action)=>{
            state.cart = state.cart.filter(item => item.rank !== action.payload);
        }
}});

export default  cartSlice.reducer;
export const {addToCart , removeItem} = cartSlice.actions;

