import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;

// this is Store.js file src\utils\Store.js
