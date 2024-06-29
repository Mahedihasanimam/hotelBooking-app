import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Minlayout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import Details from "../Pages/hotelDetails/Details";


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