import { createBrowserRouter } from "react-router-dom";
import Attendance from "../Componnent/Attendance/Attendance";
import LogIn from "../Componnent/LogIn/LogIn";
import SingUp from "../Componnent/SingUp/SingUp";

export const router = createBrowserRouter([
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
