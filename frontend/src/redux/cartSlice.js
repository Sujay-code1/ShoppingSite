
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      let existitem = state.find((item) => item.id === action.payload.id);
      if (existitem) {
        existitem.qty += 1;
      } else {
        state.push({ ...action.payload, qty: 1 });
      }
    },
    IncrementQty: (state, action) => {
      let item = state.find((i) => String(i.id) === action.payload);
      if (item) {
        item.qty += 1;
      }
    },
    DecrementQty: (state, action) => {
      const index = state.findIndex(i => i.id === action.payload)

  if (state[index].qty > 1) {
    state[index].qty -= 1
  } else {
    state.splice(index,1)
  }
    },
    RemoveItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
     clearCart: () => [],
  },
});

export const { AddItem, IncrementQty, DecrementQty, RemoveItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;