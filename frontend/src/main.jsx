import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HairColor from "./pages/HairColor";
import { ProfileProvider } from "./context/profileContext";

import Login from "./pages/login/Login";
import Disclaimer from "./pages/disclaimer/Disclaimer";
import Cares from "./pages/cares/Cares";
import Q1Color from "./pages/q1-color/Q1Color";
import Q2Type from "./pages/q2-type/Q2Type";
import Q3Cut from "./pages/q3-cut/Q3Cut";
import Q4Conditions from "./pages/q4-conditions/Q4Conditions";
import Q5Wash from "./pages/q5-wash/Q5Wash";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
    path: "/hair-color",
    element: <HairColor />,
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
