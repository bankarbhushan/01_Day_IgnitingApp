import { render, waitFor, fireEvent, act } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu"; // Update the path as needed
import store from "../../store"; // Update the path as needed
import { MENU_DATA } from "../../Mocks/data";
import { act } from "react-dom/test-utils";

// Mock API call
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MENU_DATA),
  })
);

test("test for restaurant menu should load on restaurant menu", async () => {
  let menuBody;
  await act(async () => {
    menuBody = render(
      <StaticRouter>
        <Provider store={store}>
          <RestaurantMenu />
        </Provider>
      </StaticRouter>
    );
  });

  // Ensure the menu is rendered
  const menu = await waitFor(() => menuBody.getByTestId("menu"));
  expect(menu).toBeInTheDocument();

  // Simulate clicking the "Add" button
  const addBtn = menuBody.getAllByTestId("addBtn");
  fireEvent.click(addBtn[0]);

  // Verify cart updates
  const cart = menuBody.getByTestId("cartItem");
  expect(cart.innerHTML).toBe("Cart -1");
});
