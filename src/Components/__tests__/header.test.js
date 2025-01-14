// import { Provider } from "react-redux";
// import Header from "../Header";
// import { render } from "@testing-library/react";
// import store from "../../utils/Store";
// import { StaticRouter } from "react-router-dom/server";
// import { RESTAURANT_DATA } from "../../Mocks/data";

// // // ---------- test for logo  -----------//

// test("Logo Should load on rendering header", () => {
//   // load header
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </StaticRouter>
//   );
//   // console.log(header);

//   // expect logo should load

//   const logo = header.getAllByTestId("logo");
//   // console.log(logo[0]);

//   // expect(logo[0].src).toBe("http://localhost/dummy.png");
//   expect(logo[0].src).toBe(
//     "https://assets.foodhub.com/static/48a74dec2132bcc4600f97a38937be05/img/1632762945phpx7NP9L.jpg"
//   );
// });

// // // ------ test for isOnline  -----//

// test("user interNet connection is ON then show green on ui", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </StaticRouter>
//   );

//   // expect

//   const isOnline = header.getByTestId("isOnline");
//   expect(isOnline.innerHTML).toBe(" ✅ ");

//   // console.log((isOnline.innerHTML = "✅"));
// });

// // //  ----- test for Store --------------- //

// test("In the header the cart initially it should be 0", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </StaticRouter>
//   );

//   // expect
//   const cartItem = header.getByTestId("cartItem");

//   expect(cartItem.innerHTML).toBe("Cart - 0");
//   console.log(cartItem);
// });

// // ----------- Test for User ----------- //

// test("Header load user name should user name should : bhushan  ", () => {
//   const header = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Header />
//       </Provider>
//     </StaticRouter>
//   );

//   const user = header.getByTestId("user");
//   // console.log(user);

//   expect(user.innerHTML).toBe("Dummy");
// });
