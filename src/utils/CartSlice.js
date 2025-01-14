import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    // ()=>{} when some one will click on the add item it call the function so its is an those function
    clearCart: (state) => {
      state.items = [];
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
  },
});
export default cartSlice.reducer;
export const { addItem, clearCart, removeItems } = cartSlice.actions;

//src\utils\CartSlice.js
// this is CartSlice File
