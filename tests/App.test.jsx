import { describe, it, expect, afterEach, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react'
import {within} from "@testing-library/dom"
import { vi } from "vitest"
import userEvent from '@testing-library/user-event';
import App from "../src/App"
import { MockItems } from './MockData';


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
  })

  it("renders loading screen", () => {

  })

  it("renders product info", () => {
    vi.mock("./src/usePorudcts.jsx", {
      data: MockItems,
      loading: false,
      error: null
    })
  })
})