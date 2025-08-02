import styled from "styled-components"
function Navbar() {
    const Navbar = styled.nav`
        display: flex;
        justify-content: space-evenly;
    `
    return <Navbar>
        <a href="./">Home</a>
        <a href="./shop">Products</a>
        <a href="./cart">Cart</a>
    </Navbar>
}

export default Navbar