import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

import {Applayout} from './components/layout/Applayout';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import {ErrorPage} from "./pages/ErrorPage";


const router = createBrowserRouter([
  {
    path:"/",
    element:<Applayout/>,
    errorElement:<ErrorPage/>,  
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contact",
        element: <Contact/> 
      }
    ]
  }

]);

function App() { 
  return (
    <>
      <RouterProvider router={router}> </RouterProvider>
    </>
  )
}

export default App;
