import styled from "styled-components";
import theme from "../assets/theme";

export const StyledArtistsSection = styled.section `

`

export const StyledArtistImgDiv = styled.div`
    border-radius: 0 2rem;
    overflow: hidden;
    
    img {
        height: 15rem;
        width: 20rem;
        
    }
`

export const StyledArtistSocials = styled.div `
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;


    a {
        font-size: 1.5rem;
        background: ${theme.gray6};
        padding: 0.8rem;
        border-radius: 0.7rem;
        transition: ${theme.transition};
    }

    hover a {
        background: ${theme.gray5}
    }
`