import { createBrowserRouter } from "react-router-dom";
import DasBordlayout from "../Layout/DasBordlayout/DasBordlayout";
import Main from "../Layout/Main";
import Appoinment from "../Page/Appoinment/Appoinment/Appoinment";
import Login from "../Page/Authencation/Login";
import Signup from "../Page/Authencation/Signup";
import Allusers from "../Page/DasBord/Allusers/Allusers";
import DasBord from "../Page/DasBord/DasBord/DasBord";
import Home from "../Page/Home/Home/Home";
import PrivateRout from "./PrivateRout";

export const router = createBrowserRouter([
    {path:'/' , element:<Main/> , children:[
        {path:'/' , element:<Home/>},
        {path:'/home' , element:<Home/>},
        {path:'/login' , element:<Login/>},
        {path:'/appoinment' , element:<Appoinment/>},
        {path:'/signup' , element:<Signup/>},
        {path:'/home' , element:<Home/>},
    ]},
    {path:'/dasbord' , element:<PrivateRout><DasBordlayout></DasBordlayout></PrivateRout>, children:[
        {path:'/dasbord' , element:<DasBord/>},
        {path:'/dasbord/alluser' , element:<Allusers/>},
    ]},
])