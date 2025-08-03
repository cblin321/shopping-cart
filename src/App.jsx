import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useProducts } from './useProducts'
import Shop from "./Shop/Shop"
import Cart from "./components/Cart.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'

function App() {

  const routes = [
      {
          path: "/",
          element: <AppLayout></AppLayout>,
          children: [
            {
                path: "shop",
                element: <Shop></Shop>
            },

            {
                path: "cart",
                element: <Cart></Cart>
            }
          ]
      },

  ]

  const router = createBrowserRouter(routes)
  console.log("app reload")
  return <>
    <RouterProvider router={router}></RouterProvider>
  </>
}

export default App
