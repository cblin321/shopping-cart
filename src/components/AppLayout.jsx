import { useState } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from "./Navbar"

function AppLayout() {
    const [cart, setCart] = useState([])

    const updateCartQuantity = (title, id, sign, img) => {
        setCart((oldCart) => {
            const itemIndex = oldCart.findIndex(item => item.id === id)
            const newVal = (itemIndex === -1 ? 0 : oldCart[itemIndex].quantity) + sign
                const newItem = {
                title: title,
                quantity: newVal,
                id: id,
                img: img,
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