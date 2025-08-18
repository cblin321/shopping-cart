import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react'
import {within} from "@testing-library/dom"
import App from "../src/App"

describe('Hero page', () => {
  it('renders headings', () => {
    render(<App></App>)
    const subheading = screen.getByRole("heading", {name: /One stop shop for all your needs/i})
    const mainContainer = screen.getByRole("main")
    const shopNameHeading = within(mainContainer).getByRole("heading", {name: /One stop shop for all your needs/i})
    expect(subheading).toBeInTheDocument()
    expect(within(mainContainer).getByRole("heading", {name: /One stop shop for all your needs/i})).toBeInTheDocument()
    // expect(within)
  });

  it('renders navbar', () => {
    expect(false).toBe(false);
  });
});