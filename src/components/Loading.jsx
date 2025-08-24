import styled from "styled-components"
import { accessTheme } from "../BaseStyles"

const Throbber = styled.div`
    border: 2px solid ${accessTheme("colors", "gray-700")};
    display: inline-block;
    min-width: 4em;
    min-height: 4em;
    padding: 0.5em;
    border-radius: 4em;
    border-bottom-color: transparent;
    animation: 1s ease-in-out spin infinite;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }    
`

const LoadingContainer = styled.div`
    padding-top: ${accessTheme("fontSizes", "2xl")};
    gap: ${accessTheme("fontSizes", "2xl")};
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

function Loading() {
    return <LoadingContainer>
        <Throbber></Throbber>
        <h1>Loading...</h1>
    </LoadingContainer>
}

export default Loading