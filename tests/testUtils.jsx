// test-utils.jsx
import React, { useState } from 'react'
import { render } from '@testing-library/react'
import { vi } from 'vitest'

// Mock the router hook at the module level
const mockUseOutletContext = vi.fn()

vi.mock('react-router-dom', async (importOriginal) => {
  const original = await importOriginal()
  return {
    ...original,
    useOutletContext: mockUseOutletContext
  }
})

const CartProvider = ({ children, initialCart = [], onCartUpdate }) => {
  console.log("can you hear me")
  const [cart, setCart] = useState(initialCart)
    console.log("INTIAL CART")
    console.log(initialCart)
  const updateCartQuantity = (title, id, sign, img, price) => {
    setCart((oldCart) => {
        console.log("fml")
      const itemIndex = oldCart.findIndex(item => item.id === id)
      const newVal = (itemIndex === -1 ? 0 : oldCart[itemIndex].quantity) + sign
      const newItem = { title, quantity: newVal, price, id, img }
      const newCart = [...oldCart]
      
      if (newVal === 0) {
        newCart.splice(itemIndex, 1)
      } else if (itemIndex === -1) {
        newCart.push(newItem)
      } else {
        newCart[itemIndex] = newItem
      }
      
      onCartUpdate?.(newCart) // Callback for testing
        console.log(newCart)
      return newCart
    })
  }

  // Mock the outlet context with current state
  mockUseOutletContext.mockReturnValue({
    cart,
    updateCartQuantity,
    // Add other context values you need
  })

  return children
}

const customRender = (ui, options = {}) => {
  const { initialCart, onCartUpdate, ...renderOptions } = options
  
  const Wrapper = ({ children }) => (
    <CartProvider initialCart={initialCart} onCartUpdate={onCartUpdate}>
      {children}
    </CartProvider>
  )
  
  return render(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
export { customRender }