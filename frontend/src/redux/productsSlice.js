import { products } from "../assets/assets";
import { createSlice } from "@reduxjs/toolkit";




const productsSlice = createSlice({
    name: 'products',
    initialState:products,
    reducers: {},
    selectors: {
    selectAllProducts: (state) => state,

    selectBestSellers: (state) =>
      state.filter((p) => p.bestseller),

    selectLatestProducts: (state) =>
      [...state]
        .sort((a, b) => b.date - a.date) 
        .slice(0, 10),
  },
})


export const {
  selectAllProducts,
  selectBestSellers,
  selectLatestProducts,
} = productsSlice.selectors;

export default productsSlice.reducer;