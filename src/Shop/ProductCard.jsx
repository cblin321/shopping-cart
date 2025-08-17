import styled, {css} from "styled-components"
import { baseStyles, accessTheme } from "../BaseStyles"
import { useTheme } from "styled-components"
import { ShoppingCart } from "lucide-react"
import ReviewStars from "../components/ReviewStars"


const baseBtnStyles = css`
    
`

const ProductImgContainer = styled.div`
    /* --neg-margin: calc(calc(-1 * ${accessTheme("fontSizes", "2xl")}) - 1.5px); */
    --neg-margin: calc(calc(-1 * ${accessTheme("fontSizes", "2xl")}));
    margin: 0  var(--neg-margin) 0 var(--neg-margin);
    background-color: ${accessTheme("colors", "gray-200")};
    border-top-left-radius: calc(${accessTheme("fontSizes", "sm")} - 2px);
    border-top-right-radius: calc(${accessTheme("fontSizes", "sm")} - 2px);
    display: flex;
    justify-content: center;
    padding-top: ${accessTheme("fontSizes", "lg")};
    /* padding-bottom: ${accessTheme("fontSizes", "lg")}; */
    z-index: -1;
`

const ProductImg = styled.img`
    object-fit: contain;
    position: relative;
    width: 200px;
    height: 200px;
`

const ProductTitle = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3;           /* Number of lines you want */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: ${(props) => props.theme.fontSizes["7xl"]};
    font-size: 20px;
   color: ${accessTheme("colors", "gray-800")};
`

const ProductRating = styled.p`
    margin-bottom: ${accessTheme("fontSizes", "lg")};
    font-size: ${accessTheme("fontSizes", "base")};
`

const ProductPrice = styled.p`
   font-size: ${accessTheme("fontSizes", "xl")};
   color: ${accessTheme("colors", "gray-800")};
   /* margin-bottom: ${accessTheme("fontSizes", "lg")}; */
`

const AddBtn = styled.button`
    &:hover {
        cursor: pointer;
    }

    height: ${accessTheme("fontSizes", "3xl")};
    /* background-color: ${accessTheme("colors", "primary")}; */
    background-color: ${accessTheme("colors", "accent-500")};
    border: none;
    border-radius: ${accessTheme("fontSizes", "sm")};
    color: ${accessTheme("colors", "font-color-dark")};
    font-size: ${accessTheme("fontSizes", "lg")};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${accessTheme("fontSizes", "sm")};

    & svg {
        color: ${accessTheme("colors", "font-color-dark")};
    }
`
const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    justify-content: flex-start;
    /* align-items: center; */
    text-overflow: ellipsis;
    padding: 0 ${(props) => props.theme.fontSizes["2xl"]} 0 ${(props) => props.theme.fontSizes["2xl"]};
    position: relative;
    gap: ${accessTheme("fontSizes", "base")};
    border: 1px solid ${accessTheme("colors", "gray-400")};
    max-height: ${(props) => props.theme.fontSizes["10xl"]};
    padding-bottom: ${accessTheme("fontSizes", "lg")};
    border-radius: ${accessTheme("fontSizes", "sm")};
    /* z-index: -1; */
`

const QuantityLabel = styled.p`
    
`

const QuantityContainer = styled.div`
    display: flex;
`

const QuantityButton = styled.button`
    
`

function ProductCard(props) {
    const {price, image, rating, title, 
        updateCartQuantity, id, cart
    } = props

    const theme = useTheme()

    const renderQuantityController = () => {
        const cartEntry = cart.find(item => id === item.id)
        const cartQuantity = cartEntry ? cartEntry.quantity : 0

        return <QuantityContainer>
            <QuantityButton onClick={() => updateCartQuantity(
                title, id, 1, image, price
            )}>+</QuantityButton>

            <QuantityLabel>{cartQuantity}</QuantityLabel>

            <QuantityButton onClick={() => updateCartQuantity(
                title, id, -1, image, price
            )} disabled={cartQuantity <= 0}>-</QuantityButton>
        </QuantityContainer>
    }


    return <ProductContainer theme={theme}>

        <ProductImgContainer>
            <ProductImg src={image}></ProductImg>
        </ProductImgContainer>

        <ProductTitle>{title}</ProductTitle>
        {/* <ProductRating>{rating.rate} - ({rating.count})</ProductRating> */}
        <ReviewStars rate={rating.rate} count={rating.count} id={id}></ReviewStars>
        <ProductPrice>${price}</ProductPrice>
        <AddBtn onClick={() => updateCartQuantity(title, id, 1, image, price)}>
            <ShoppingCart></ShoppingCart>
            Add to Cart
        </AddBtn>
        {/* {renderQuantityController()} */}
    </ProductContainer>


}

export default ProductCard