import styled, { css } from "styled-components"
import { Link, useLocation} from "react-router-dom"
import { accessTheme } from "../BaseStyles"
import { ShoppingCart } from "lucide-react"

const StyledNavbar = styled.nav`
    --vertical-padding: ${accessTheme("fontSizes", "xl")};
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    width: 100vw;
    top: 0;
    z-index: 1;
    background-color: ${accessTheme("colors", "gray-900")};
    color: ${accessTheme("colors", "font-color-dark")};
    font-size: 20px;
    padding: var(--vertical-padding) 0 var(--vertical-padding);
    box-shadow: hsla(0, 0%, 0%, .5) 0 ${accessTheme("fontSizes", "xs")}
        20px 3px;
`

const CartNavContainer = styled.div`
    position: relative; 
`

const CartQuantity = styled.p`
    position: absolute;
    font-size: 12px;
    background-color: ${accessTheme("colors", "accent-500")};
    padding: ${accessTheme("fontSizes", "xs")};
    width: 12px;
    height: 12px;
    /* border-radius:calc(${accessTheme("fontSizes", "xs")} + ${accessTheme("fontSizes", "lg")}); */
    border-radius: 50px;
    text-align: center;
    top: -10px;
    right: -12px;
    line-height: 12px;
    color: ${accessTheme("colors", "font-color-dark")}
`

const ActiveOptionStyles = css`
    &:after {
        content: "";
        display: block;
        width: 100%;
        inset: 0;
        height: 1.5px;
        border-radius: 2px;
        background-color: ${accessTheme("colors", "font-color-dark")};
        margin-top: 2px;
    }
`

const InactiveOptionStyles = css`
    color: ${accessTheme("colors", "font-color-dark-disabled")};
`

const NavOption = styled(Link)`
    ${props => props.$active ? ActiveOptionStyles : InactiveOptionStyles}
`

function Navbar({cart}) {
    const location = useLocation()


    return <StyledNavbar role="navigation">
        <NavOption $active={location.pathname === "/"} to="/">Home</NavOption>
        <NavOption $active={location.pathname === "/shop"} to="/shop">Products</NavOption>
        <NavOption $active={location.pathname === "/cart"} to="/cart" data-testid="cart-link">
            <CartNavContainer>
                <CartQuantity>{cart.reduce((prev, curr) => (prev + curr.quantity), 0)}</CartQuantity>
                <ShoppingCart></ShoppingCart>
            </CartNavContainer>
        </NavOption>
    </StyledNavbar>
}

export default Navbar