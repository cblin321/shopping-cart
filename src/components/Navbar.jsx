import styled from "styled-components"
import { Link } from "react-router-dom"
import { accessTheme } from "../BaseStyles"

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-evenly;
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: ${accessTheme("colors", "gray-900")};
    color: ${accessTheme("colors", "font-color-dark")};
`
function Navbar() {

    return <StyledNavbar>
        <Link to="/">Home</Link>
        <Link to="./shop">Products</Link>
        <Link to="./cart">Cart</Link>
    </StyledNavbar>
}

export default Navbar