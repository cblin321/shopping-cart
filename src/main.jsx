import { useState } from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from "./components/Hero.jsx" 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from "./Shop/Shop"
import Cart from "./components/Cart.jsx"


const [cart, setCart] = useState([])

const updateCartQuantity = (id, sign) => {
  setCart((oldCart) => {
    const newVal = (oldCart[id] ?? 0) + sign
    return {
      ...oldCart,
      id: newVal
    }
  })
}

const routes = [
    {
        path: "/",
        element: <App></App>
    },

    {
        path: "shop",
        element: <Shop updateCartQuantity={updateCartQuantity}></Shop>
    },

    {
        path: "cart",
        element: <Cart cart={cart} updateCartQuantity={updateCartQuantity}></Cart>
    }
]
const router = createBrowserRouter(routes)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
