import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Hero from "./components/Hero/Hero" 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Shop from "./Shop/Shop"
import Cart from "./components/Cart/Cart"

console.log("fdjskfjkl")
const routes = [
    {
        path: "/",
        element: <App></App>
    },

    {
        path: "shop",
        element: <Shop></Shop>
    },

    {
        path: "cart",
        element: <Cart></Cart>
    }
]
const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>fdjkslfjsl</p>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
