import styled from "styled-components"
import theme from "../assets/theme"

export const StyledContactSection = styled.section`

`

export const StyledContactWrapper = styled.div`
    width: fit-content;
    display: flex;
    gap: 2rem;

    a{
       background: ${theme.primary};
       font-size: 2rem;
       border: 2px solid transparent;
       transition: ${theme.transition};
       padding: 2rem;
       border-radius: 1.5rem;

       @media screen and (max-width: 600px) {
        padding: 1rem;
        font-size: 1.2rem;
        border-radius: 1rem;
       }
    }

    a:hover {
        background: transparent;
        border-color: ${theme.gray1};
    }


    @media screen and (max-width: 600px) {
        gap: 1.5rem;
    }
`