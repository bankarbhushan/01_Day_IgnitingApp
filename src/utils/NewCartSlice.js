import { createSlice } from "@reduxjs/toolkit";

const NewCartSlice = createSlice({
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
export default NewCartSlice.reducer;
export const { addItem, clearCart, removeItems } = NewCartSlice.actions;

//src\utils\CartSlice.js
// this is CartSlice File
