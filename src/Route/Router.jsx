import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Minlayout/MainLayout";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path: "/",
          element:<Home/>
        }
      ]
    },
  ]);

  export default router