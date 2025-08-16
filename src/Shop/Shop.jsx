import Navbar from "../components/Navbar"
import { useProducts } from "../useProducts"
import ProductCard from "./ProductCard"
import styled from "styled-components"
import { useOutletContext } from "react-router-dom"
import "../App.css"
import { useTheme } from "styled-components"
import { accessTheme } from "../BaseStyles"
import Loading from "../components/Loading"



const ProductsContainer = styled.div`
    --bottom-padding: ${(props) => props.theme.fontSizes["6xl"]};
    --top-padding: ${accessTheme("fontSizes", "xl")};
    --horizontal-padding: ${accessTheme("fontSizes", "8xl")};
    display: grid;
    grid-template-columns : repeat(auto-fill, minmax(${(props) => props.theme.fontSizes["8xl"]}, 1fr));
    width: calc(100% - calc(2 * var(--horizontal-padding)));
    gap: ${(props) => props.theme.fontSizes["2xl"]};
    padding: var(--top-padding) var(--horizontal-padding)
        var(--bottom-padding);
    padding-left: var(--horizontal-padding);
    padding-right: var(--horizontal-padding);
`

const ShopHeader = styled.h1`
    --vertical-padding: ${(props) => props.theme.fontSizes["6xl"]};
    --horizontal-padding: ${accessTheme("fontSizes", "8xl")};

    font-size: ${accessTheme("fontSizes", "xl")};
    font-weight: 500;
    padding-top: var(--vertical-padding);
    padding-left: var(--horizontal-padding);
`

function Shop() {
    const theme = useTheme()
    const {data, loading, error} = useProducts() 
    const {updateCartQuantity, cart} = useOutletContext()
    if (loading) {
        return <Loading></Loading>
    }

    if (error)
        return <p>There was an error fetching product data, please try again!</p>


    return <>
            <ShopHeader>Catalogue</ShopHeader>
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