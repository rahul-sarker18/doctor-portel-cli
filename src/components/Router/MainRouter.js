import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Appoinment from "../Page/Appoinment/Appoinment/Appoinment";
import Login from "../Page/Authencation/Login";
import Home from "../Page/Home/Home/Home";

export const router = createBrowserRouter([
    {path:'/' , element:<Main/> , children:[
        {path:'/' , element:<Home/>},
        {path:'/home' , element:<Home/>},
        {path:'/login' , element:<Login/>},
        {path:'/appoinment' , element:<Appoinment/>},
        {path:'/home' , element:<Home/>},
        {path:'/home' , element:<Home/>},
    ]}
])