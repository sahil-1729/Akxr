import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { JSX } from "react/jsx-runtime";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"
import About from "./components/About"
import Contact from "./components/Contact";
import Error from "./components/Error"
import RestaurantMenu from "./components/RestarauntMenu";

// create react element, hwihc is an obj
const a = React.createElement("div", {}, "Namaste BRO");
// console.log(a);

const root = ReactDOM.createRoot(document.getElementById("root"));

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = (): JSX.Element => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Body />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "grocery",
        element: <Grocery />
      },
      {
        path: "restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }

])

root.render(<RouterProvider router={appRouter} />);
