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

    const brandingInfo = {
            header: "Shop Name",
            content: [
                "test"
            ]
    }

    const footerSectionInfo = [

        {
            header: "Contact us",
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

        {
            header: "About us",
            content: [
                "Team",
                "Our Mission"
            ]
        }

    ]



    // console.log(footerInfo)

    return <>
        <Navbar cart={cart}></Navbar>
        <Outlet context={{cart, updateCartQuantity}}></Outlet>
        <Footer brandingInfo={brandingInfo} footerSectionInfo={footerSectionInfo}></Footer>
    </>
}

export default AppLayout