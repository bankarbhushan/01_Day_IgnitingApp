import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "./NewCartSlice";
// const store = configureStore({
//   reducer: {
//     cart: cartSlice,
//   },
// });

// export default store;

// this is Store.js file src\utils\Store.js

const store = configureStore({
  reducer: {
    cart: cartSlice, // Use the default export
  },
});

export default store;
