import React, { lazy, Suspense } from "react"
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import Login from "./components/Login";
import Profile from "./components/Profile";
// import Instamart from "./components/Instamart";

//lazy load of Instamart Component
const Instamart = React.lazy(() => import("./components/Instamart"))
const AppLayout = ()=>{
    return(
        <div className="bg-teal-600">
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
    )
}
const appRouter =  createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>,
                children:[
                    {
                        path:'profile',
                        element:<Profile/>
                    }
                ]
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurant/:id",
                element:<RestaurantMenu/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/instamart',
                element:
                    <Suspense fallback={<h1>loading ...</h1>} >
                        <Instamart/>
                    </Suspense>
                
            }
            
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)