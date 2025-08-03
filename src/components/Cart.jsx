import { useOutletContext } from "react-router-dom"
import styled from "styled-components"
const QuantityLabel = styled.p`
    
`

const ItemName = styled.p`
    
`

const CartProductImg = styled.img`
    
`

const QuantityContainer = styled.div`
    display: flex;
`

const QuantityButton = styled.button`
    
`

function Cart() {
    const { updateCartQuantity, cart} = useOutletContext()
    console.log(cart)

    return <>
        {cart.map(item => <>
            <CartProductImg src={item.img}></CartProductImg>
            <ItemName>{item.title}</ItemName>
            <QuantityContainer>
                <QuantityButton onClick={() => updateCartQuantity(
                    item.title, item.id, 1, item.img
                )}>+</QuantityButton>

                <QuantityLabel>{item.quantity}</QuantityLabel>

                <QuantityButton onClick={() => updateCartQuantity(
                    item.title, item.id, -1, item.img
                )} disabled={item.quantity <= 0}>-</QuantityButton>
            </QuantityContainer>
        </>)}
    </>
}

export default Cart