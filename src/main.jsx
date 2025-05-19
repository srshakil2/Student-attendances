import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";

import { router } from "./Route/Route";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LogIn></LogIn>,
//   },
//   {
//     path: "/singUp",
//     element: <SingUp></SingUp>,
//   },
//   {
//     path: "/Attendance",
//     element: <Attendance></Attendance>,
//   },
// ]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
