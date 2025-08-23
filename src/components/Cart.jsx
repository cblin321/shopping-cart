import { useOutletContext } from "react-router-dom"
import styled, {css} from "styled-components"
import { accessTheme } from "../BaseStyles"
import Navbar from "./Navbar"

const center = css`
    display: flex !important;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const CartContainer = styled.div`
    --sidebar-length: ${accessTheme("fontSizes", "8xl")};
    --horizontal-padding: ${accessTheme("fontSizes", "8xl")};
        --horizontal-padding: 14%;
    --bottom-padding: ${accessTheme("fontSizes", "6xl")};
    --top-padding: ${accessTheme("fontSizes", "6xl")};
    padding: var(--top-padding) var(--horizontal-padding) 
        var(--bottom-padding);
    gap: ${accessTheme("fontSizes", "2xl")};
    ${(props) => props.$isEmpty && center}
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: ${accessTheme("fontSizes", "xl")} 1fr;
    grid-template-areas: 
    "header header"
    "items sidebar";
    min-height: 100vh;

    @media (max-width: 1000px) {
        padding: var(--top-padding) var(--horizontal-padding) 
            var(--bottom-padding);
        display: flex;
        flex-direction: column;
    }


`

const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: ${accessTheme("fontSizes", "base")};
    width: 100%;
    grid-area: items;
`

const ItemCartContainer = styled.div`
    --vertical-padding: ${accessTheme("fontSizes", "xl")};
    display: flex;
    align-items: center;
    padding: var(--vertical-padding);
    gap: ${accessTheme("fontSizes", "xl")};
    /* width: ${accessTheme("fontSizes", "11xl")}; */
    width: 40vw;
    border: 1px solid var(--gray-400);
    border-radius: ${accessTheme("fontSizes", "sm")};

    @media (max-width: 1000px) {
        width: 100%;
    }

`

const QuantityLabel = styled.p`
    
`

const ItemName = styled.p`
    width: 18em;
    font-size: 20px;

    @media (max-width: 600px) {
        width: 12em;
        font-size: ${accessTheme("fontSizes", "lg")};
    }
`

const CartProductImg = styled.img`
   width: ${accessTheme("fontSizes", "5xl")};
   height: ${accessTheme("fontSizes", "5xl")};
   object-fit: contain;
`

const QuantityContainer = styled.div`
    display: flex;
    align-items: center;
    gap: ${accessTheme("fontSizes", "sm")};
`

const QuantityAddBtn = styled.button`
    &:before {
        content: "+";
        position: absolute;
        bottom: 17%;
        left: 30;
        color: ${accessTheme("colors", "font-color-dark")};
    }
    position: relative;
   --side-length: ${accessTheme("fontSizes", "xl")};
   font-size: ${accessTheme("fontSizes", "lg")};
   font-weight: 500;
   background-color: ${accessTheme("colors", "accent-500")};
   border: none;
   border-radius: ${accessTheme("fontSizes", "xs")};
   height: var(--side-length);
   width: var(--side-length);
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   line-height: 1;
   color: transparent;
`

const QuantityRemoveBtn = styled.button`
    &:before {
        content: "-";
        position: absolute;
        bottom: 17%;
        left: 33%;
        color: ${accessTheme("colors", "accent-500")};
    }

    position: relative;
    margin: 0;
    padding: 0;
   --side-length: ${accessTheme("fontSizes", "xl")};
   font-size: ${accessTheme("fontSizes", "lg")};
   font-weight: 500;
    background-color: transparent;
   border: 2px solid ${accessTheme("colors", "accent-500")};
   border-radius: ${accessTheme("fontSizes", "xs")};
   height: var(--side-length);
   width: var(--side-length);
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   line-height: 1;
   color: transparent;
`

const SubTotal = styled.p`
   font-size: ${accessTheme("fontSizes", "xl")};

    @media (max-width: 1000px) {
        font-size: 18px;
        font-weight: 500px;
    }
`

const PageHeading = styled.h1`
    font-size: ${accessTheme("fontSizes", "xl")};
    line-height: ${accessTheme("fontSizes", "lg")};
    font-weight: 500;
    grid-area: header;
`

const Sidebar = styled.div`
    & p:nth-child(odd), p:nth-child(8) {
        justify-self: end;
    }

    & p:nth-child(7) {
        justify-self: start;
    }

    width: 90%; 
    background-color: ${accessTheme("colors", "gray-100")};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* grid-template-rows: repeat(4, 1fr); */
    grid-template-areas: 
    "header header"
    "item-total-label item-total"
    "shipping-label shipping"
    "divider divider"
    "subtotal-label subtotal"
    "checkout-btn checkout-btn";
    border-radius: ${accessTheme("fontSizes", "sm")};
    align-items: center;
    height: fit-content; 
    padding: ${accessTheme("fontSizes", "xl")};
    gap: ${accessTheme("fontSizes", "base")};
    grid-area: sidebar;

    @media (max-width: 1000px) {
        width: 100%;
        margin-top: ${accessTheme("fontSizes", "5xl")};
    }
`

const SubtotalLabel = styled.p`
    grid-area: subtotal-label;
`

const SidebarSubtotal = styled.p`
   grid-area: subtotal;
`

const SidebarHeader = styled.h1`
    grid-area: header;
    margin-bottom: ${accessTheme("fontSizes", "sm")};
    font-weight: 500;
    font-size: ${accessTheme("fontSizes", "xl")};
`

const ShippingLabel = styled.p`
    grid-area: shipping-label;
`

const ItemTotal = styled.p`
    grid-area: item-total;
`

const ItemTotalLabel = styled.p`
    grid-area: item-total-label;
`

const Shipping = styled.p`
    grid-area: shipping;
`

const CheckoutBtn = styled.button`
    grid-area: checkout-btn;
    height: ${accessTheme("fontSizes", "3xl")};
    width: 70%;
    margin: auto;
    border-radius: ${accessTheme("fontSizes", "xl")};
    font-size: 20px;
    border: none;
    margin-top: ${accessTheme("fontSizes", "sm")};
    background-color: ${accessTheme("colors", "accent-500")};
    color: ${accessTheme("colors", "font-color-dark")};

    @media (max-width: 1500px) {
        font-size: ${accessTheme("fontSizes", "lg")};
    }

    @media (max-width: 700px) {
        font-size: ${accessTheme("fontSizes", "base")};
    }
`

const Divider = styled.span`
    &:after {
        content: "";
        inset: 0;
        border-top: 2px solid ${accessTheme("colors", "gray-600")};
        border-radius: 2px;
        display: block;
        position: absolute;
        top: 50%;
    }
    grid-area: divider;
    position: relative;
`


function Cart() {
    const { updateCartQuantity, cart} = useOutletContext()
    console.log(cart)
    return <>
        <Navbar cart={cart}></Navbar>
        <CartContainer $isEmpty={cart.length === 0}>
        {!(cart.length === 0) && <PageHeading>Your Cart</PageHeading>}
            {
            cart.length === 0 ? <>
                <h1>Your cart is empty</h1>
                <p>Visit the shop page to add items to the cart!</p>
            </> : <>
                <ItemsContainer>
                    {cart.map(item => <ItemCartContainer>
                        <CartProductImg alt={item.title} src={item.img}></CartProductImg>
                        <ItemName>{item.title}</ItemName>
                        <QuantityContainer>
                            <QuantityRemoveBtn onClick={() => updateCartQuantity(
                                item.title, item.id, -1, item.img, item.price
                            )} disabled={item.quantity <= 0}>-</QuantityRemoveBtn>

                            <QuantityLabel>{item.quantity}</QuantityLabel>
                            <QuantityAddBtn onClick={() => updateCartQuantity(
                                item.title, item.id, 1, item.img, item.price
                            )}>+</QuantityAddBtn>

                        </QuantityContainer>
                        <SubTotal>${(item.price * item.quantity).toFixed(2)}</SubTotal>
                    </ItemCartContainer>)}
                </ItemsContainer>

            <Sidebar>
                    <SidebarHeader>Order Summary</SidebarHeader>
                    <ItemTotalLabel>Items ({cart.reduce((acc, curr) => acc + curr.quantity, 0)})</ItemTotalLabel>
                    <ItemTotal>${cart.reduce((prev, curr) => (prev + curr.quantity * curr.price), 0).toFixed(2)}</ItemTotal>

                    <ShippingLabel>Shipping</ShippingLabel>
                    <Shipping>Free</Shipping>
                    <Divider></Divider>
                    <SubtotalLabel>Subtotal</SubtotalLabel>
                    <SidebarSubtotal>${cart.reduce((prev, curr) => (prev + curr.quantity * curr.price), 0).toFixed(2)}</SidebarSubtotal>
                    <CheckoutBtn>Checkout Cart</CheckoutBtn>
            </Sidebar>
            </>
            }
        </CartContainer>
    </>
}

export default Cart