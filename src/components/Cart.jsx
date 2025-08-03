import { useOutletContext } from "react-router-dom"
import styled from "styled-components"
const QuantityLabel = styled.p`
    
`

const ItemName = styled.p`
    
`
function Cart() {
    const { updateCartQuantity, cart} = useOutletContext()
    console.log(cart)

    return <>
        {cart.map(item => <>
            <ItemName>{item.title}</ItemName>
            <QuantityLabel>{item.quantity}</QuantityLabel>
        </>)}
    </>
}

export default Cart