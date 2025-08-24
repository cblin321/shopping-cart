import styled from "styled-components"
import { accessTheme } from "../BaseStyles"
import ReviewStars from "./ReviewStars"

const ProductShowcaseContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: ${accessTheme("fontSizes", "9xl")};
    gap: ${accessTheme("fontSizes", "sm")};
`

const ProductTitle = styled.h1`
    font-weight: 600;
    font-size: ${accessTheme("fontSizes", "xl")};
`

const ProductSubtitle = styled.p`
    margin-bottom: ${accessTheme("fontSizes", "xl")};
    color: ${accessTheme("colors", "gray-700")};
`

const ProductName = styled.p`
    /* font-weight: 600; */
    margin-top: ${accessTheme("fontSizes", "xl")};
    font-size: ${accessTheme("fontSizes", "lg")};
    width: 50%;
`

const ProductImg = styled.img`
    width: 60%;
    height: 60%;
`

function HeroProductShowcase({id, img, subtitle, title, name, rating}) {
    return <ProductShowcaseContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductSubtitle>{subtitle}</ProductSubtitle>
        <ProductImg src={img} alt={name}></ProductImg>
        <ProductName>{name}</ProductName>
        <ReviewStars id={id} {...rating}></ReviewStars>
    </ProductShowcaseContainer>
    
}

export default HeroProductShowcase