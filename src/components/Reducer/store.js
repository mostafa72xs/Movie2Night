import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './reducer'

const  Store = configureStore({
    reducer: {
        cart: cartSlice
    }
});

export default Store