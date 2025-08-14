import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { useProducts } from './useProducts'
import Shop from "./Shop/Shop"
import Cart from "./components/Cart.jsx"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from './components/AppLayout.jsx'
import { ThemeProvider } from 'styled-components'

function App() {

  const routes = [
      {
          path: "/",
          element: <AppLayout></AppLayout>,
          children: [
            {
              path: "/",
              element: <Hero></Hero>
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
      },

  ]

  const router = createBrowserRouter(routes)

  const theme = {
    fontSizes: {
      xs: '4px',
      sm: '8px',
      base: '12px',
      lg: '16px',
      xl: '24px',
      '2xl': '32px',
      '3xl': '48px',
      '4xl': '64px',
      '5xl': '96px',
      '6xl': '128px',
      '7xl': '192px',
      '8xl': '256px',
      '9xl': '384px',
      '10xl': '512px',
      '11xl': '640px',
      '12xl': '768px',
    },
    colors: {
      primary: '#6b6c73',
      secondary: '#95969b',
      tertiary: '#c1c2c5',
      background: '#f4f4f5',
      accent: 'hsl(30, 34%, 95%)',
      'accent-2': 'hsl(30, 34%, 85%)',
      "gray-900": "hsl(235, 14%, 20%)",
      "gray-800": "hsl(235, 17%, 35%)",
      "gray-700": "hsl(235, 18%, 50%)",
      "gray-600": "hsl(235, 19%, 60%)",
      "gray-500": "hsl(235, 20%, 70%)",
      "gray-400": "hsl(235, 22%, 75%)",
      "gray-300": "hsl(235, 15%, 85%)",
      "gray-200": "hsl(235, 10%, 88%)",
      "gray-100": "hsl(235, 20%, 90%)",
      "font-color-dark": "hsl(263, 52%, 95%)",
      "accent-600": "hsl(243, 52%, 50%)",
      "accent-500": "hsl(243, 65%, 60%)",
      "star-color": "rgb(234, 177, 11)",
    }
  }




  return <>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </>
}

export default App
