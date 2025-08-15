import { useState } from "react"
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from "./Footer"

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

    const footerInfo = [
        {
            header: "Shop Name",
            content: [
                "test"
            ]
        },

        {
            header: "Contact Us",
            content: [
                "Help center",
                "Email",
                "Phone"
            ]
        },

        {
            header: "Pages",
            content: [
                "Homepage",
                "Products",
                "Cart",
            ]
        },

    ]

    // console.log(footerInfo)

    return <>
        <Navbar cart={cart}></Navbar>
        <Outlet context={{cart, updateCartQuantity}}></Outlet>
        <Footer footerInfo={footerInfo}></Footer>
    </>
}

export default AppLayout