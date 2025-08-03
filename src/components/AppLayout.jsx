import { useState } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Shop from "../Shop/Shop"
import Cart from "./Cart"
import Hero from "./Hero"
import Navbar from "./Navbar"

function AppLayout() {
    const [cart, setCart] = useState([])

    const updateCartQuantity = (title, id, sign) => {
        setCart((oldCart) => {
            const itemIndex = oldCart.findIndex(item => item.id === id)
            const newVal = (itemIndex === -1 ? 0 : oldCart[itemIndex].quantity) + sign

            const newItem = {
            title: title,
            quantity: newVal,
            id: id,
            }

            const newCart = [...oldCart]

            if (itemIndex === -1)
            newCart.push(newItem)
            else 
            newCart[itemIndex] = newItem


            return newCart
        })
    }

    return <>
        <Navbar></Navbar>
        <Outlet context={{cart, updateCartQuantity}}></Outlet>
    </>
}

export default AppLayout