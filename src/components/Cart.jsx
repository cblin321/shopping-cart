import { useOutletContext } from "react-router-dom"
import styled from "styled-components"
import { accessTheme } from "../BaseStyles"

const CartContainer = styled.div`
    --sidebar-length: ${accessTheme("fontSizes", "8xl")};
    --horizontal-padding: ${accessTheme("fontSizes", "8xl")};
    --vertical-padding: ${accessTheme("fontSizes", "6xl")};
    padding: var(--vertical-padding) var(--horizontal-padding) 
        var(--vertical-padding);
    display: flex;
`

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${accessTheme("fontSizes", "base")};
`

const ItemCartContainer = styled.div`
    --vertical-padding: ${accessTheme("fontSizes", "xl")};
    display: flex;
    align-items: center;
    padding: var(--vertical-padding);
    gap: ${accessTheme("fontSizes", "xl")};
    width: ${accessTheme("fontSizes", "11xl")};
    border: 1px solid var(--gray-400);
    border-radius: ${accessTheme("fontSizes", "sm")};
`

const QuantityLabel = styled.p`
    
`

const ItemName = styled.p`
    width: 18em;
    font-size: 20px;
`

const CartProductImg = styled.img`
   width: ${accessTheme("fontSizes", "5xl")};
   height: ${accessTheme("fontSizes", "5xl")};
   object-fit: contain;
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${accessTheme("fontSizes", "lg")};
`

const QuantityAddBtn = styled.button`
    &:before {
        content: "+";
        position: absolute;
        bottom: 15%;
        left: 30;
    }
    position: relative;
   --side-length: ${accessTheme("fontSizes", "xl")};
   font-size: ${accessTheme("fontSizes", "lg")};
   font-weight: 500;
   background-color: ${accessTheme("colors", "accent-500")};
   color: ${accessTheme("colors", "font-color-dark")};
   border: none;
   border-radius: ${accessTheme("fontSizes", "xs")};
   height: var(--side-length);
   width: var(--side-length);
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   line-height: 1;
`

const QuantityRemoveBtn = styled.button`
    &:before {
        content: "-";
        position: absolute;
        bottom: 15%;
        left: 30%;
    }

    position: relative;
    margin: 0;
    padding: 0;
   --side-length: ${accessTheme("fontSizes", "xl")};
   font-size: ${accessTheme("fontSizes", "lg")};
   font-weight: 500;
    background-color: transparent;
   border: 2px solid ${accessTheme("colors", "accent-500")};
   color: ${accessTheme("colors", "accent-500")};
   border-radius: ${accessTheme("fontSizes", "xs")};
   height: var(--side-length);
   width: var(--side-length);
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   line-height: 1;
`

const SubTotal = styled.p`
   font-size: ${accessTheme("fontSizes", "lg")};
`

const PageHeading = styled.h1`
    
`

const Sidebar = styled.div`
    
`

const TotalPrice = styled.p`
    
`

const CheckoutBtn = styled.button`
    
`


function Cart() {
    const { updateCartQuantity, cart} = useOutletContext()

    return <>
        <PageHeading>Your Cart</PageHeading>
        <CartContainer>
            {cart.length === 0 ? <h1>Your cart is empty</h1> : <ItemsContainer>
                {cart.map(item => <ItemCartContainer>
                    <CartProductImg src={item.img}></CartProductImg>
                    <ItemName>{item.title}</ItemName>
                    <QuantityContainer>
                        <QuantityAddBtn onClick={() => updateCartQuantity(
                            item.title, item.id, 1, item.img, item.price
                        )}></QuantityAddBtn>

                        <QuantityLabel>{item.quantity}</QuantityLabel>

                        <QuantityRemoveBtn onClick={() => updateCartQuantity(
                            item.title, item.id, -1, item.img, item.price
                        )} disabled={item.quantity <= 0}></QuantityRemoveBtn>
                    </QuantityContainer>
                    <SubTotal>${(item.price * item.quantity).toFixed(2)}</SubTotal>
                </ItemCartContainer>)}
            </ItemsContainer>}

            <Sidebar>
                    <TotalPrice>${cart.reduce((prev, curr) => (prev + curr.quantity * curr.price), 0).toFixed(2)}</TotalPrice>
                    <CheckoutBtn>Checkout Cart</CheckoutBtn>
            </Sidebar>
        </CartContainer>
    </>
}

export default Cart