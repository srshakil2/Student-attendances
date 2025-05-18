import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import LogIn from "./Componnent/LogIn/LogIn";
import SingUp from "./Componnent/SingUp/SingUp";
import Attendance from "./Componnent/Attendance/Attendance";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LogIn></LogIn>,
  },
  {
    path: "/singUp",
    element: <SingUp></SingUp>,
  },
  {
    path: "/Attendance",
    element: <Attendance></Attendance>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
