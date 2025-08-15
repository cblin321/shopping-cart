import { useState } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from "./Navbar"

function AppLayout() {
    const [cart, setCart] = useState([])

    const updateCartQuantity = (title, id, sign, img, price) => {
        setCart((oldCart) => {
            const itemIndex = oldCart.findIndex(item => item.id === id)
            const newVal = (itemIndex === -1 ? 0 : oldCart[itemIndex].quantity) + sign
                const newItem = {
                title: title,
                quantity: newVal,
                price: price,
                id: id,
                img: img,
            }

            const newCart = [...oldCart]

            if (newVal === 0) {
                newCart.splice(itemIndex, 1)
                return newCart
            }

            if (itemIndex === -1)
                newCart.push(newItem)
            else 
                newCart[itemIndex] = newItem


            return newCart
        })
    }

    return <>
        <Navbar cart={cart}></Navbar>
        <Outlet context={{cart, updateCartQuantity}}></Outlet>
    </>
}

export default AppLayout