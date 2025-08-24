import styled from "styled-components"
import { accessTheme } from "../BaseStyles"

const SectionContainer = styled.div`
    & p:first-of-type {
        margin-top: ${accessTheme("fontSizes", "base")};
    }

    display: flex;    
    flex-direction: column;
    gap: ${accessTheme("fontSizes", "xs")};
`

const SectionHeader = styled.h1`
    font-size: ${props => props.$headerSize};
`

const SectionEntry = styled.p`
    
`

function FooterSection({sectionInfo, $headerSize}) {

    return <SectionContainer>
        <SectionHeader $headerSize={$headerSize}>{sectionInfo.header}</SectionHeader>
        {
            sectionInfo.content.map((entry, index) => <SectionEntry key={index}>{entry}</SectionEntry>)
        }
    </SectionContainer>
}

export default FooterSection