import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home/Home";
import Booking from "../pages/Bookig/Booking";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Hotels from "../pages/Hotels/Hotels";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/booking',
                element:<Booking></Booking>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'hotels',
                element:<Hotels></Hotels>
            }

        ]
    }
])

export default router;