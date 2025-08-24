import styled from "styled-components"
import { accessTheme } from "../BaseStyles"

const ReviewInfo = styled.p`
`

const StarContainer = styled.div`
   display: flex;
   /* justify-content: space-evenly; */
    margin-bottom: ${accessTheme("fontSizes", "base")};
    gap: ${accessTheme("fontSizes", "xs")};
    font-size: ${accessTheme("fontSizes", "base")};
    color: ${accessTheme("colors", "gray-600")};
`

const BlankStars = styled.div`
    --font-size: ${accessTheme("fontSizes", "base")};
    position: relative;
    display: inline-block;
    width: fit-content;
    font-size: var(--font-size);
    height: var(--font-size);
    letter-spacing: -.07em;
    color: ${accessTheme("colors", "gray-400")};
    /* line-height: 1; */
`

const ColoredStars = styled.label`
    position: absolute;
    height: 100%;
    display: inline-block;
    /* width: 50%; */
    width: 100%;
    top: 0;
    left: 0;
    --font-size: ${accessTheme("fontSizes", "base")};
    &::before {
        letter-spacing: -.07em;
        position: absolute;
        content: "★★★★★";
        display: inline-block;        
        width:  ${props => props.$rate * 100}%;
        overflow: hidden;
        top: 0;
        left: 0;
        color: ${accessTheme("colors", "star-color")};
        font-size: var(--font-size);
        /* line-height: 1; */
    }

`

function ReviewStars({id, rate, count}) {

    return <StarContainer>
        <ReviewInfo>{rate.toFixed(1)}</ReviewInfo>
       <BlankStars>
            ★★★★★
            <ColoredStars $rate={rate / 5}></ColoredStars>
        </BlankStars> 
        <ReviewInfo>({count})</ReviewInfo>
    </StarContainer>
}

export default ReviewStars