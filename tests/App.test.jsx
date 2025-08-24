import { describe, it, expect, afterEach, beforeEach, test } from 'vitest';
import { render, screen } from '@testing-library/react'
import {within, TestingLibraryElementError} from "@testing-library/dom"
import { vi } from "vitest"
import userEvent from '@testing-library/user-event';
import App from "../src/App"
import { useProducts } from '../src/useProducts';
import { useOutletContext } from 'react-router-dom';
import { useEffect, useState } from 'react';

const getMockedItems = () => {
   const mockedItems =   [
        {
            price: 2,
            image: "/url1",
            rating: {
              rate: 3.2,
              count: 21
            },
            title: "Title 1",
            id: 1
        },
        {
            price: 3,
            image: "/url2",
            rating: {
              rate: 5.0,
              count: 21
            },
            title: "Title 2",
            id: 2
        },
        {
            price: 10.29,
            image: "/url3",
            rating: {
              rate: 5.0,
              count: 20
            },
            title: "Title 3",
            id: 3
        }
      ]

      return mockedItems
    }

describe('hero page', () => {
  afterEach(() => {
    window.history.pushState({}, '', '/')
  })

  it('renders main content', () => {
    render(<App></App>)
    const subheading = screen.getByRole("heading", {name: /One stop shop for all your needs/i})
    const mainContainer = screen.getByRole("main")
    const shopNameHeading = within(mainContainer).getByRole("heading", {name: /Shop Name/i})
    const redirectBtn = within(mainContainer).getByRole("link", {name: /Shop Catalogue/i})
    expect(subheading).toBeInTheDocument()
    expect(shopNameHeading).toBeInTheDocument()
    expect(redirectBtn).toBeInTheDocument()
  })

  it('working shop redirect', async () => {
    render(<App></App>)
    const user = userEvent.setup()
    const mainContainer = screen.getByRole("main")
    const redirectBtn = within(mainContainer).getByRole("link", {name: /Shop Catalogue/i})
    
    await user.click(redirectBtn)
    expect(window.location.pathname).toBe("/shop")
  })

  it('renders complemntary content', () => {
    render(<App></App>)
    const complementaryContainer = screen.getByRole("complementary")
    expect(complementaryContainer).toBeInTheDocument()

    const showcaseData = [
      {
          title: "Jewlery",
          id: 2,
          subtitle: "Handcrafted Luxury",
          name: "John Hardy Gold & Silver Naga Bracelet",
          rating: {
              rate: 4.6,
              count: 400
          }
      },
      {
          title: "Tech",
          id: 1,
          subtitle: "Latest Tech Gear",
          name: "WD 4TB Gaming Drive",
          rating: {
              rate: 4.8,
              count: 400 
          }
      },
      {
          title: "Clothing",
          id: 3,
          subtitle: "Everyday Fashion",
          name: "Mens Premium Slim Fit T-Shirt",
          rating: {
              rate: 4.1,
              count: 259,
          }
      }
    ]

    showcaseData.forEach(entry => {
      const showcaseHeader = screen.getByRole("heading", { name: new RegExp(entry.title, 'i') })
      const subtitle = screen.getByText(entry.subtitle)
      const name = screen.getByText(entry.name)
      const img = screen.getByAltText(entry.name)

      const showcaseElements = [showcaseHeader, subtitle, name, img]
      showcaseElements.forEach(element => expect(element).toBeInTheDocument())
    })
  })
})

describe('shop page', () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/shop")
    vi.clearAllMocks()
    vi.resetModules()
  })

  it("renders loading screen", async () => {
    vi.doMock("../src/useProducts.jsx", () => ({
      useProducts: () => ({
        data: {},
        loading: true,
        error: null
        })
      })
    )
    const { default: App} = await import("../src/App")
    render(<App></App>)
    expect(screen.getByText("Loading...")).toBeInTheDocument()
  })

  it("renders product info", () => {
    const HoistedMockItems = vi.hoisted(() => {

      const mockedItems =   [
        {
            price: 2,
            image: "/url1",
            rating: {
              rate: 3.2,
              count: 21
            },
            title: "Title 1",
            id: 1
        },
        {
            price: 3,
            image: "/url2",
            rating: {
              rate: 5.0,
              count: 21
            },
            title: "Title 2",
            id: 2
        },
        {
            price: 10.29,
            image: "/url3",
            rating: {
              rate: 5.0,
              count: 20
            },
            title: "Title 3",
            id: 3
        }
      ]

      return mockedItems
    })
    vi.mock("../src/useProducts.jsx", () => (
      {
        useProducts: () => {
          return {
            data: HoistedMockItems,
            loading: false,
            error: null
          }
        }
      })
  )

    render(<App></App>)
      const mockedItems = getMockedItems()
      mockedItems.forEach(item => {
        const itemName = screen.getByText(item.title)
        const itemPrice = screen.getByText(`$${parseFloat(item.price).toFixed(2)}`)
        const itemImg = screen.getByAltText(item.title)
        expect(itemName).toBeInTheDocument()
        expect(itemPrice).toBeInTheDocument()
        expect(itemImg.src).toMatch(`${item.image}`)
      })
    
  })


})


describe('cart page', () => {
  beforeEach(() => {
    window.history.pushState({}, "", "/cart")
    vi.clearAllMocks()
    vi.resetModules()
  })

  it("renders empty cart", () => {
    const mockUseOutletContext = vi.fn()
    const mockUpdateCartQuantity = vi.fn()
    mockUseOutletContext.mockImplementation(() => {
      return {
        updateCartQuantity: mockUpdateCartQuantity,
        cart: []
      } 
    })

    vi.doMock("react-router-dom", async (importOriginal) => {
      const original = await importOriginal()
      return {
        ...original,
        useOutletContext: mockUseOutletContext
      }
    })

    render(<App></App>)

    const heading = screen.getByRole("heading", {name: /Your cart is empty/i})
    expect(heading).toBeInTheDocument()
  })

  it("renders multiple items", async () => {
    const mockUseOutletContext = vi.fn()
    const mockUpdateCartQuantity = vi.fn()
    const mockedItems = getMockedItems().map((item, index) => ({...item, quantity: index + 1, img: item.image}))
    mockUseOutletContext.mockImplementation(() => {
      return {
        updateCartQuantity: mockUpdateCartQuantity,
        cart: mockedItems
      } 
    })


    vi.doMock("react-router-dom", async (importOriginal) => {
      const original = await importOriginal()
      return {
        ...original,
        useOutletContext: mockUseOutletContext
      }
    })

    const { default: App } = await import("../src/App")

    render(<App></App>)

    mockedItems.forEach((item, index) => {
      const title = screen.getByText(item.title)
      const price = screen.getByText(`$${parseFloat(item.price * item.quantity).toFixed(2)}`)
      const quantity = screen.getByText(item.quantity)
      const img = screen.getByAltText(item.title)

      expect(price).toBeInTheDocument()
      expect(title).toBeInTheDocument()
      expect(quantity).toBeInTheDocument()
      expect(img.src).toMatch(item.image)

    })

  })

  it("should make updates when adjusting quantity", async () => {
    const mockUseOutletContext = vi.fn()
    const mockUpdateCartQuantity = vi.fn()
    
    let setCartRef = null 

    mockUpdateCartQuantity.mockImplementation((title, id, sign, img, price) => {
      if (setCartRef) {
        setCartRef((oldCart) => {
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
    })   

    const mockedItems = getMockedItems().map((item, index) => ({
      ...item, 
      quantity: index + 1, 
      img: item.image
    }))

  const TestWrapper = ({ children }) => {

    const [cart, setCart] = useState(mockedItems)
    setCartRef = setCart
    // cartRef = cart
    mockUseOutletContext.mockReturnValue({
        cart: cart,
        updateCartQuantity: mockUpdateCartQuantity
      })
      
   

    
    
    return children
  }




      vi.doMock("react-router-dom", async (importOriginal) => {
        const original = await importOriginal()
        return {
          ...original,
          useOutletContext: mockUseOutletContext
        }
      })

      const { default: App } = await import("../src/App")


      const { rerender } = render(<TestWrapper><App /></TestWrapper>)

      const addBtn = screen.getAllByRole("button", {name: /\+/i})[0]
      const removeBtn = screen.getAllByRole("button", {name: /\-/i})[0]

      const itemQuantity = screen.getByText("1")
      const totalPrice = screen.getAllByText(`$${parseFloat(mockedItems.reduce((acc, curr) =>
        acc + curr.price * curr.quantity, 0)).toFixed(2)}`)[0]
      const oldTotalPrice = parseFloat(totalPrice.textContent.substring(1))
      const numCartItems = screen.getByText("Items (6)")
      const user = userEvent.setup()
      const itemPrice = screen.getByText(`$${parseFloat(2).toFixed(2)}`)

      await user.click(addBtn)
      await vi.waitFor(() => {
        expect(mockUpdateCartQuantity).toHaveBeenCalled()
      })
      rerender(<TestWrapper><App></App></TestWrapper>)
      // expect(itemPrice).toBeInTheDocument()
      expect(`${totalPrice.textContent}`).toBe(`$${parseFloat(oldTotalPrice + 2)}`)
      expect(itemQuantity.textContent).toBe("2")
      expect(numCartItems.textContent).toBe("Items (7)")
      expect(itemPrice.textContent).toBe(`$${parseFloat(4).toFixed(2)}`)

      await user.click(removeBtn)
      rerender(<TestWrapper><App></App></TestWrapper>)
      expect(`${totalPrice.textContent}`).toBe(`$${parseFloat(oldTotalPrice)}`)
      expect(itemQuantity.textContent).toBe("1")
      expect(numCartItems.textContent).toBe("Items (6)")
      expect(itemPrice.textContent).toBe(`$${parseFloat(2).toFixed(2)}`)



      await user.click(removeBtn)

      rerender(<TestWrapper><App></App></TestWrapper>)

      const getItemTitle = () => screen.getByText("Title 1")

      expect(getItemTitle).toThrow("Unable to find an element with the text: Title 1.")

      expect(`${totalPrice.textContent}`).toBe(`$${parseFloat(oldTotalPrice - 2)}`)
      expect(numCartItems.textContent).toBe("Items (5)")

    })
  })
    



  describe('integration', () => {
    beforeEach(() => {
      vi.clearAllMocks()
      vi.resetModules()
    })


    it("shoud update nav & cart based on interaction w/ shop page", async () => {
      const user = userEvent.setup()
      window.history.pushState({}, "", "/shop")
      const mockUseProducts = vi.fn()
      mockUseProducts.mockReturnValue({
        data: getMockedItems(),
        error: null,
        loading: false
      })

      vi.doMock("../src/useProducts", () => {
        return {
          useProducts: mockUseProducts
        }
      })
      let setCartRef;
      const mockUseOutletContext = vi.fn()
      const mockUpdateCartQuantity = vi.fn()
      mockUseOutletContext.mockImplementation(() => ({
        updateCartQuantity: mockUpdateCartQuantity,
        cart: []
      }))

      mockUpdateCartQuantity.mockImplementation((title, id, sign, img, price) => {
        if (setCartRef) {
          setCartRef((oldCart) => {
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
    })   

      

    const TestWrapper = ({children}) => {
      const [cart, setCart] = useState([])
      setCartRef = setCart
      mockUseOutletContext.mockReturnValue({
        cart: cart,
        updateCartQuantity: mockUpdateCartQuantity
      })
      return children

    }

    vi.doMock("react-router-dom", async () => {
      const actual = await import("react-router-dom")
      return {
        ...actual,
        useOutletContext: mockUseOutletContext,
      }
    })
    const { default: App } = await import("../src/App")

    const { rerender } = render(<TestWrapper><App></App></TestWrapper>)
    const navContainer = screen.getByRole("navigation")
    const buttons = screen.getAllByText("Add to Cart")
    const navCartQuantity = within(navContainer).getByText("0")
    const cartLink = screen.getByTestId("cart-link")

    let i = 1
    for (const button of buttons) {
      for (let j = 0; j < i; j++) {
        await user.click(button)
        await vi.waitFor(() => {
          expect(mockUpdateCartQuantity).toHaveBeenCalled()
        })
        }
      rerender(<TestWrapper><App /></TestWrapper>) // Force re-render after each click
      i++
    }

    rerender(<TestWrapper><App></App></TestWrapper>)
    expect(navCartQuantity.textContent).toBe("6")

    await user.click(cartLink)

    expect(screen.getByText("Your Cart")).toBeInTheDocument()

    expect(screen.getByText("1")).toBeInTheDocument()
    expect(screen.getByText("2")).toBeInTheDocument()
    expect(screen.getByText("3")).toBeInTheDocument()
    expect(screen.getByText("6")).toBeInTheDocument()

    expect(screen.getByText("Title 1")).toBeInTheDocument()
    expect(screen.getByText("Title 2")).toBeInTheDocument()
    expect(screen.getByText("Title 3")).toBeInTheDocument()

    expect(screen.getAllByText("$38.87")).toHaveLength(2)

    expect(screen.getByText("Items (6)")).toBeInTheDocument()



  })


})