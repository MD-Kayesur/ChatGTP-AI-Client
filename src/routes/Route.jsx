import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../component/Home";
import About from "../component/About";
import GenarateImg from "../component/GenarateImg";





export  const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/About",
            element:<About></About>
        },
        {
            path:"/GenarateImg",
            element:<GenarateImg></GenarateImg>
        },
    ]
  },
]);