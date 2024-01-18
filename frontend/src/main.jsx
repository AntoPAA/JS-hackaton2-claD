import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import { ProfileProvider } from "./context/profileContext";

import Welcome from "./pages/welcome/Welcome";
import Login from "./pages/login/Login";
import Disclaimer from "./pages/disclaimer/Disclaimer";
import Cares from "./pages/cares/Cares";
import Q1Color from "./pages/q1-color/Q1Color";
import Q2Type from "./pages/q2-type/Q2Type";
import Q3Cut from "./pages/q3-cut/Q3Cut";
import Q4Conditions from "./pages/q4-conditions/Q4Conditions";
import Q5Wash from "./pages/q5-wash/Q5Wash";
import Navigation from "./pages/Navigation";
import Market from "./pages/market/Market";
import Camera from "./pages/camera/Camera";
import Cart from "./pages/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/disclaimer",
        element: <Disclaimer />,
      },
      {
        path: "/cares",
        element: <Cares />,
      },
      {
        path: "/q1",
        element: <Q1Color />,
      },
      {
        path: "/q2",
        element: <Q2Type />,
      },
      {
        path: "/q3",
        element: <Q3Cut />,
      },
      {
        path: "/q4",
        element: <Q4Conditions />,
      },
      {
        path: "/q5",
        element: <Q5Wash />,
      },
    ],
  },
  {
    path: "/",
    element: <Navigation />,
    children: [
      {
        path: "/market",
        element: <Market />,
      },
      {
        path: "/camera",
        element: <Camera />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ProfileProvider>
      <RouterProvider router={router} />
    </ProfileProvider>
  </React.StrictMode>
);
