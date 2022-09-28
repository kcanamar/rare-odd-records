import styled from "styled-components"
import theme from "../assets/theme"


export const StyledPlanSpan = styled.span`
    width: 3rem;
    height: 3rem;
    background: ${theme.primary};
    fonst-size: 1.5rem;
    padding: 0.8rem;
    display: grid;
    place-items: center;
    margin-bottom: 1.5rem;
    margin-inline: auto;
    border-radius: 1rem;
    transition: ${theme.transition};

`

export const StyledPlanWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 4rem;
    @media screen and (max-width: 1024px) {
        grid-template-columns: 1fr 1fr;
    }
    
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 2rem;
        margin-top: 3rem;
    }
`

export const StyledPlanSmall = styled.small`
    margin-top: 1rem;
    display: block;
    font-weight: 300;
`