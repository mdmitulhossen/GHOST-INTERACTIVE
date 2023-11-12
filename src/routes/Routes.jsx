import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";


const Routes = createBrowserRouter([
    {
        path: '/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<h1>About</h1>
            },
            {
                path:'/#head6',
            }
        ]
    }
])
export default Routes;