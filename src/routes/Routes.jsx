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
                element:<Home/>,
                loader: () => fetch('/gameData.json')
            }
        ]
    }
])
export default Routes;