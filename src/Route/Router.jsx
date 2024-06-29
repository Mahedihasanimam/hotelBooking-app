import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Minlayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import Details from "../Pages/hotelDetails/Details";
import About from "../Pages/about/About";
import Hotels from "../Pages/hotel/Hotels";
import MyBookings from "../Pages/mybookings/MyBookings";


const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: "/",
          element:<Home/>
        },
        {
          path: "/about",
          element:<About/>
        },
        {
          path: "/hotel",
          element:<Hotels/>
        },
        {
          path: "/mybookings",
          element:<MyBookings/>
        },
        {
          path: "/login",
          element:<Login/>
        },
        {
          path: "/registar/reg",
          element:<Register/>
        },
        {
          path: "/details/:id",
          element:<Details/>
        }
      ]
    },
  ]);

  export default router