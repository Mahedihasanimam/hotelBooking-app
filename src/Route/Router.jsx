import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Minlayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import Details from "../Pages/hotelDetails/Details";

import Hotels from "../Pages/hotel/Hotels";
import MyBookings from "../Pages/mybookings/MyBookings";
import AboutUs from "../Pages/aboutus/AboutUs";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/hotel",
        element: <Hotels />,
      },
      {
        path: "/mybookings",
        element: <MyBookings />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registar/reg",
        element: <Register />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
    ],
  },
]);

export default router;
