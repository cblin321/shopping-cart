import Navbar from "../components/Navbar"
import { useProducts } from "../useProducts"
import ProductCard from "./ProductCard"
import styled from "styled-components"
import { useOutletContext } from "react-router-dom"


const QuantityLabel = styled.p`
    
`

const QuantityContainer = styled.div`
    display: flex;
`

const QuantityButton = styled.button`
    
`

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


    return <ProductsContainer>
                <p>Shop</p>
                {
                    data.map(product => {
                        console.log("fjasdklfjkl")
                        const cartEntry = cart.find(item => product.id === item.id)
                        const cartQuantity = cartEntry ? cartEntry.quantity : 0
                        console.log(cart)
                        return <>
                            <ProductCard updateCartQuantity={updateCartQuantity} key={product.id} {...product}>
                                
                            </ProductCard>

                            <QuantityContainer>
                                <QuantityButton onClick={() => updateCartQuantity(
                                    product.title, product.id, 1, product.img
                                )}>+</QuantityButton>

                                <QuantityLabel>{cartQuantity}</QuantityLabel>

                                <QuantityButton onClick={() => updateCartQuantity(
                                    product.title, product.id, -1, product.img
                                )} disabled={cartQuantity <= 0}>-</QuantityButton>
                            </QuantityContainer>

                        </>                    })
                }
            </ProductsContainer>

}

export default Shop