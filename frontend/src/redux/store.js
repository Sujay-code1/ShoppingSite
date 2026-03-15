import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productsSlice";
import cartSlice from "./cartSlice";



export const store = configureStore({
    reducer: {
        products: productReducer,
        cart:cartSlice,
    }
})