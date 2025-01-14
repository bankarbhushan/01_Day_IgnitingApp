// import { fireEvent, render, waitFor } from "@testing-library/react";
// import { StaticRouter } from "react-router-dom/server";
// import { Provider } from "react-redux";
// import MainBody from "../MainBody";
// import store from "../../utils/Store";
// import { RESTAURANT_DATA } from "../../Mocks/data";
// import "@testing-library/jest-dom";
// import { act } from "react-dom/test-utils";

// // Mock fetch
// global.fetch = jest.fn(() =>
//   Promise.resolve({
//     json: () => Promise.resolve(RESTAURANT_DATA),
//   })
// );

// test("Simmer should load on menu page", async () => {
//   // Mock fetch
//   global.fetch.mockImplementationOnce(() =>
//     Promise.resolve({
//       json: () => Promise.resolve([]), // Simulate no restaurant data
//     })
//   );

//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <MainBody />
//       </Provider>
//     </StaticRouter>
//   );

//   // Wait for Simmer to render
//   const simmerCards = await waitFor(() => body.getAllByTestId(/simmer-/));
//   expect(simmerCards).toHaveLength(12); // Check if all 12 cards are rendered
// });

// test("Search for string(food) on Homepage", async () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <MainBody />
//       </Provider>
//     </StaticRouter>
//   );

//   const input = await body.findByTestId("search_input");

//   // Simulate typing "food"
//   fireEvent.input(input, { target: { value: "Theobroma" } });

//   // Simulate clicking the search button
//   const searchBtn = await body.findByTestId("search-btn");
//   fireEvent.click(searchBtn);

//   // Check the number of restaurants in the filtered list
//   const resList = await body.findByTestId("res-list");
//   expect(resList.children.length).toBe(1); // Adjust this based on your mock data
// });

// test("restaurant should be on body", async () => {
//   let body;

//   await act(async () => {
//     body = render(
//       <StaticRouter>
//         <Provider store={store}>
//           <MainBody />
//         </Provider>
//       </StaticRouter>
//     );
//   });

//   const resList = await waitFor(() => body.getByTestId("res-list"));
//   expect(resList).toBeInTheDocument();
//   expect(resList.children.length).toBeGreaterThan(0); // Check if restaurants are rendered
// });
