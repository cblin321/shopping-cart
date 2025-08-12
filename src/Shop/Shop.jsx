import Navbar from "../components/Navbar"
import { useProducts } from "../useProducts"
import ProductCard from "./ProductCard"
import styled from "styled-components"
import { useOutletContext } from "react-router-dom"
import "../App.css"
import { useTheme } from "styled-components"
import { accessTheme } from "../BaseStyles"



const ProductsContainer = styled.div`
    --vertical-padding: ${(props) => props.theme.fontSizes["5xl"]};
    --horizontal-padding: ${accessTheme("fontSizes", "8xl")};
    display: grid;
    grid-template-columns : repeat(auto-fill, minmax(${(props) => props.theme.fontSizes["8xl"]}, 1fr));
    width: calc(100% - calc(2 * var(--horizontal-padding)));
    gap: ${(props) => props.theme.fontSizes["2xl"]};
    padding: var(--vertical-padding);
    padding-left: var(--horizontal-padding);
    padding-right: var(--horizontal-padding);
`

function Shop() {
    const theme = useTheme()
    const {data, loading, error} = useProducts() 
    const {updateCartQuantity, cart} = useOutletContext()
    console.log(cart)
    if (loading) {
       return <p>Loading...</p> 
    }

    if (error)
        return <p>There was an error fetching product data, please try again!</p>


    return <>
            <ProductsContainer theme={theme}>
                {
                    data.map(product => {
                        return <>
                            <ProductCard cart={cart} updateCartQuantity={updateCartQuantity} key={product.id} {...product}>
                                
                            </ProductCard>


                        </>                    
                    })
                }
            </ProductsContainer>

    </>
}

export default Shop