import styled from 'styled-components'
import theme from '../../assets/theme.js'
// import { StyledMissionSpan } from "../../styled-components/Mission.jsx"

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

    span,
    button {
      background: ${theme.secondary};
      color: ${theme.gray6};
    }

    a {
      color: ${theme.gray6};
      transition: ${theme.transition};
    }
  }

  &.mission {
    padding-top: 3.5rem;
    text-align: left;
    position: relative;
  }

  &.artist {
    padding: 1rem;
    width: 80%;
    margin: 0 auto;
    margin-top: 2rem;
    
    &:hover {
        background: ${theme.primary}
    }

    a {
        background: ${theme.primary}
    }
    &:hover a {
        background: ${theme.secondary}
    }

    h3 {
      margin-top: 2rem;
    }

    p {
      margin-top: 0.5rem;
    }

    @media screen and (max-width: 1024px) {
        width: 100%;
        margin: 0 auto;
    }

    @media screen and (max-width: 600px) {
            width: 90%;
            margin: 0 auto;
            

    }
  }
`

export default function Card ({ className, children }) {
  return <StyledCardArticle className={className}>{children}</StyledCardArticle>
}
