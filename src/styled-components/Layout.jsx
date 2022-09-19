import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "../assets/theme";

export const StyledContainer = styled.div` 
    width: ${theme.wlg};
    max-width: 1920px;
    margin-inline: auto;

    &.nav {
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        @media screen and (max-width: 1024px){

        }
      
        @media screen and (max-width: 600px){
          
        }
    }
    
    
`

export const StyledButton = styled.button`
    &.nav-menu{
        display: none;

        @media screen and (max-width: 1024px){
            display: inline-block;
            background: transparent;
            font-size: 1.8rem;
            cursor: pointer;
            color: ${theme.gray1};
        }
      
        @media screen and (max-width: 600px){
          
        }
    }
`

export const StyledImage = styled.img`
    display: block;
    object-fit: cover;
    width: 100%;

    &.logo{
        width:5rem;
    }
`


export const StyledH1 = styled.h1`
    line-height: 1.2;
    color: ${theme.gray1};
    font-size: 3rem;
`

export const StyledH2 = styled.h2`
    line-height: 1.2;
    color: ${theme.gray1};
    font-size: 2rem
`

export const StyledH3 = styled.h3`
    line-height: 1.2;
    color: ${theme.gray1};

`

export const StyledH4 = styled.h4`
    line-height: 1.2;
    color: ${theme.gray1};

`

export const StyledH5 = styled.h5`
    line-height: 1.2;
    color: ${theme.gray1};

`

export const StyledH6 = styled.h6`
    line-height: 1.2;
    color: ${theme.gray1};

`

export const StyledLink = styled(Link)`
    text-decoration: none

`