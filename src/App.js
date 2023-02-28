import React, { lazy, Suspense, useState } from "react"
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
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart.js";
// import Instamart from "./components/Instamart";

//lazy load of Instamart Component
const Instamart = React.lazy(() => import("./components/Instamart"))
const AppLayout = ()=>{
    const [user,setUser] = useState({
        name:"Roshan Singh",
        email:"singhroshan704@gmail.com"
    })
    return(
       <Provider store={store}>
       <UserContext.Provider value={{user:user,setUser:setUser}}>
       <div className="bg-teal-600">
       <Header/>
       <Outlet/>
       <Footer/>
       </div>
       </UserContext.Provider>
       </Provider>
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
                
            },
            {
                path:'/cart',
                element:<Cart/>
            }
            
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)