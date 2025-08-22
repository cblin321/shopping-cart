import styled, {keyframes} from "styled-components"
import { Link } from "react-router-dom"
import { accessTheme } from "../BaseStyles"
import { ChevronDown, TextSearch } from "lucide-react"
import HeroProductShowcase from "./HeroProductShowcase"
import fashionShowcase from "../assets/fashion_showcase.png"
import jewerlyShowcase from "../assets/jewelery_showcase.png"
import techShowcase from "../assets/tech_showcase.png"

const HeroContainer = styled.div`
    --vertical-padding: ${accessTheme("fontSizes", "8xl")};
    width: 100%;
    display: grid;
    grid-template-rows: ${accessTheme("fontSizes", "2xl")} ${accessTheme("fontSizes", "3xl")};
    place-content: center;
    height: 100vh;
    text-align: center;
    position: relative;
    padding: var(--vertical-padding) var(--horizontal-padding) 
        var(--vertical-padding) var(--horizontal-padding);
    
`


const HeroText = styled.h1`
    font-size: ${accessTheme("fontSizes", "3xl")};
`

const HeroSubtitle = styled.h2`
    font-size: ${accessTheme("fontSizes", "2xl")};
    background: linear-gradient(90deg,rgba(148, 87, 219, 1) 0%, rgba(203, 87, 219, 1) 65%, rgba(219, 87, 180, 1) 100%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent; 
    padding-bottom: 3em;
`

const bounce = keyframes`
    0% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(10px);
    }

    75% {
        transform: translateY(10px);
    }

    100% {
        transform: translateY(0);
    }
`

const StyledChevron = styled(ChevronDown)`
    position: absolute;
    bottom: 30px;
    animation: ${bounce} 1s infinite alternate ease;
    left: 50%;
`

const ShowcaseContainer = styled.div`
    --horizontal-padding: 11%;
    --vertical-padding: ${accessTheme("fontSizes", "4xl")};
    display: flex;
    justify-content: space-between;
    padding: var(--vertical-padding) var(--horizontal-padding) var(--vertical-padding);

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: ${accessTheme("fontSizes", "4xl")};
        --vertical-padding: ${accessTheme("fontSizes", "5xl")};
        --horizontal-padding: ${accessTheme("fontSizes", "xl")};
        padding: var(--vertical-padding) var(--horizontal-padding)
            var(--vertical-padding);
    }
    /* width: calc(100vw - calc(var(--horizontal-padding) * 2)); */
`

const showcaseData = [
    {
        title: "Jewlery",
        id: 2,
        subtitle: "Handcrafted Luxury",
        name: "John Hardy Gold & Silver Naga Bracelet",
        img: jewerlyShowcase,
        rating: {
            rate: 4.6,
            count: 400
        }
    },
    {
        title: "Tech",
        id: 1,
        subtitle: "Latest Tech Gear",
        name: "WD 4TB Gaming Drive",
        img: techShowcase,
        rating: {
            rate: 4.8,
            count: 400 
        }
    },
    {
        title: "Clothing",
        id: 3,
        subtitle: "Everyday Fashion",
        name: "Mens Premium Slim Fit T-Shirt",
        img: fashionShowcase,
        rating: {
            rate: 4.1,
            count: 259,
        }
    }
]


const RedirectBtn = styled.button`
`

const ButtonLink = styled(Link)`
    &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        box-shadow: hsla(243, 65%, 60%, .9) 0 0 70px -10px;
    }

    margin: auto;
    margin-top: ${accessTheme("fontSizes", "4xl")};
    font-weight: 500;
    height: ${accessTheme("fontSizes", "3xl")};
    background-color: ${accessTheme("colors", "accent-500")};
    font-size: 20px;
    width: 50%;
    padding: ${accessTheme("fontSizes", "base")} ${accessTheme("fontSizes", "2xl")} ${accessTheme("fontSizes", "base")};
    color: ${accessTheme("colors", "font-color-dark")};
    border: none;
    border-radius: ${accessTheme("fontSizes", "sm")};
    transform: translateY(0);
    transition: box-shadow .2s ease-out, transform .2s ease-out;
    display: flex;
    align-items: center;
    justify-content: center;
`

function Hero({props}) {

    return <>

    <HeroContainer role="main">
        <HeroSubtitle>One stop shop for all your needs</HeroSubtitle>
        <HeroText>Shop Name</HeroText>
        <StyledChevron></StyledChevron>
            <ButtonLink to="./shop">Shop Catalogue</ButtonLink>
            </HeroContainer> 

     <ShowcaseContainer role="complementary">
        {showcaseData.map((showcase, index) => {
            return <HeroProductShowcase key={showcase.id} {...showcase}></HeroProductShowcase>
        })} 
    </ShowcaseContainer>

    </>
}

export default Hero