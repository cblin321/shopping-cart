import styled from "styled-components"
import FooterSection from "./FooterSection"
import { accessTheme } from "../BaseStyles"
import { useEffect, useState } from "react"

const FooterContainer = styled.div`
    /* --vertical-padding: ${accessTheme("fontSizes", "4xl")};
    --horizontal-padding: ${accessTheme("fontSizes", "9xl")}; */
    --vertical-padding: 5%;
    --horizontal-padding: 15%;
    display: grid;
    grid-template-columns: .4fr .65fr;
    background-color: ${accessTheme("colors", "gray-300")};
    padding: var(--vertical-padding) var(--horizontal-padding)
        var(--vertical-padding);
    @media (max-width: 600px) {
        --vertical-padding: ${accessTheme("fontSizes", "2xl")};
        --horizontal-padding: ${accessTheme("fontSizes", "3xl")};
        padding: var(--vertical-padding) var(--horizontal-padding)
            var(--vertical-padding);
    }
`

const BrandingContainer = styled.div`
    display: flex;
`

const SectionContainer = styled.div`
    display: flex;    
    justify-content: space-between;
`

function Footer({brandingInfo, footerSectionInfo}) {
    return <FooterContainer>
        <BrandingContainer>
            <FooterSection $headerSize={"24px"} sectionInfo={brandingInfo}></FooterSection>
        </BrandingContainer>
        <SectionContainer>
            {
                footerSectionInfo.map(sectionInfo => <FooterSection 
                    $headerSize={"16px"} sectionInfo={sectionInfo} key={sectionInfo.header}></FooterSection>)
            }
        </SectionContainer>
    </FooterContainer>
}

export default Footer