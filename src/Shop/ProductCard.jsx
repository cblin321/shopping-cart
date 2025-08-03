import styled, {css} from "styled-components"


const baseBtnStyles = css`
    
`

const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductImg = styled.img`
    object-fit: contain;
    width: 100px;
    height: 100px;
`

const ProductTitle = styled.p`

`

const ProductRating = styled.p`
    
`

const ProductPrice = styled.p`
    
`

const AddBtn = styled.button`
    
`

function ProductCard(props) {
    const {price, image, rating, title, 
        updateCartQuantity, id
    } = props


    return <ProductContainer>
        <ProductImg src={image}></ProductImg>
        <ProductTitle>{title}</ProductTitle>
        <ProductRating>{rating.rate} - ({rating.count})</ProductRating>
        <ProductPrice>{price}</ProductPrice>
        <AddBtn onClick={() => updateCartQuantity(title, id, 1)}>Add to Cart</AddBtn>
    </ProductContainer>


}

export default ProductCard