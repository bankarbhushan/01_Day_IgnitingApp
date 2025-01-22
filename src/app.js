import React, { lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import HeaderComponent from "./Components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./Components/About";
import Error from "./Components/Error";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import RestaurantMenu from "./Components/RestaurantMenu";
import Reg from "./Components/Reg";
import Profile from "./Components/Profile";
import MainBody from "./Components/MainBody";
import userContext from "./utils/userContext";
import Simmer from "./Components/Simmer";
import { Provider } from "react-redux";
import store from "./utils/Store";

const Cart = lazy(() => import("./Components/Cart"));

// Main layout of the app with Header, dynamic content, and Footer
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "bhushan",
  });
  return (
    <Provider store={store}>
      {/*this Provider mean we provide all the information to the whole app .... suppose i write header outside of it so 
      header is unable to access the Store   */}
      <userContext.Provider value={{ user: user }}>
        <HeaderComponent />
        <Outlet />
        <Footer />
      </userContext.Provider>
    </Provider>
  );
};

// Defining routes for the application
const AppRouter = createBrowserRouter([
  {
    path: "/", // Base route for the layout
    element: <AppLayout />, // AppLayout renders Header, Footer, and dynamic content in between
    errorElement: <Error />, // This page will be shown for any invalid route
    children: [
      {
        path: "/", // When the user visits the base URL
        element: <MainBody user={{ name: "Food Villa" }} />, // The Body component will be displayed
      },
      {
        path: "/About", // When the user visits /About
        element: <About />, // The About component will be displayed
        children: [
          {
            path: "/About/Profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/Contact", // When the user visits /Contact
        element: <Contact />, // The Contact component will be displayed
      },
      {
        path: "/restaurant/:id", // When the user visits /restaurant/:id
        element: <RestaurantMenu />, // The RestaurantMenu component will be displayed
      },
      {
        path: "/reg", // When the user visits /reg
        element: <Reg />, // The Reg component will be displayed
      },

      {
        path: "/cart/",

        element: (
          <Suspense fallback={<Simmer />}>
            <Cart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = createRoot(document.getElementById("root"));

// Render the RouterProvider with the router configuration (AppRouter)
root.render(<RouterProvider router={AppRouter} />);
