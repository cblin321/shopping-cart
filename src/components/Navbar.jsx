import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledNavbar = styled.nav`
    display: flex;
    justify-content: space-evenly;
`
function Navbar() {

    return <StyledNavbar>
        <Link to="/">Home</Link>
        <Link to="./shop">Products</Link>
        <Link to="./cart">Cart</Link>
    </StyledNavbar>
}

export default Navbar