import { StyledH2, StyledHead, StyledHeadSpan } from "../styled-components/Layout";

export default function SectionHead({icon, title, className}){
    return (
        <StyledHead className={className}>
            <StyledHeadSpan>{icon}</StyledHeadSpan>
            <StyledH2>{title}</StyledH2>
        </StyledHead>
    )
}