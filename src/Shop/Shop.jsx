import Navbar from "../components/Navbar"
import { useProducts } from "../useProducts"
import ProductCard from "./ProductCard"
import styled from "styled-components"
import { useOutletContext } from "react-router-dom"

const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns : repeat(auto-fit, minmax(200px, 1fr));
    width: 90vw;
`

function Shop() {
    const {data, loading, error} = useProducts() 
    const {updateCartQuantity, cart} = useOutletContext()
    if (loading) {
       return <p>Loading...</p> 
    }

    if (error)
        return <p>There was an error fetching product data, please try again!</p>


    return <>
        <ProductsContainer>
            <p>Shop</p>
            {data.map(product => <ProductCard updateCartQuantity={updateCartQuantity} key={product.id} {...product}></ProductCard>)}
        </ProductsContainer>

    </>
}

export default Shop