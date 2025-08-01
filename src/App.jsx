import { useState, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import { useProducts } from './useProduct'

function App() {
  useProducts() 
  return <>
    <p>fdjk</p>
    <Hero></Hero>
  </>
}

export default App
