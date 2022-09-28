import styled from "styled-components"
import theme from "../../assets/theme.js"
import { StyledMissionSpan } from "../../styled-components/Mission.jsx"

const StyledCardArticle = styled.article`
    background: ${theme.gray5};
    border: 2px solid transparent;
    text-align: center;
    padding: 3rem 2rem;
    border-radius: 0 3rem 0 3rem;
    transition: ${theme.transition};

    &:hover {
        background: transparent;
        border-color: ${theme.gray4};
        cursor: default;

        span, button {
            background: ${theme.secondary};
            color: ${theme.gray6};
        }

        a {
            color: ${theme.gray6};
            transition: ${theme.transition};
        }
    }

    &.plans {
        @media screen and (max-width: 600px) {
            width: 84%;
            margin: 0 auto;
        }
    }

    &.mission {
        padding-top: 3.5rem;
        text-align: left;
        position: relative;

        ${StyledMissionSpan} {
            position: absolute;
            top: -1.5rem;
        }

        @media screen and (max-width: 1024px) {
        
        }
          
        @media screen and (max-width: 600px) {
            width: 84%;
            margin-inline: auto;
        }
    }
    
`

export default function Card({className, children}){
    return (
        <StyledCardArticle className={className}>
            {children}
        </StyledCardArticle>
    )
}