import styled from "styled-components";
import theme from "../assets/theme";

export const MissionSection = styled.section`
    margin-top: 10rem;
`

export const MissionLeft = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MissionRight = styled.div`
    p {
        margin: 1.5rem 0 5rem;
    }
`

export const MissionImage = styled.div`
    filter: saturate(0.25);
    transition: ${theme.transition};

    &:hover{
        filter: saturate(1);
    }
    @media screen and (max-width: 1024px) {
        display: none;
    }
      
    @media screen and (max-width: 600px) {
    }
`

export const MissionWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3.4rem 2.4rem;
    @media screen and (max-width: 1024px) {
        gap: 4rem 3rem;

    }
      
    @media screen and (max-width: 600px) {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
`

export const StyledMissionSpan = styled.span`
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

export const StyledMissionSmall = styled.small`
margin-top: 1rem;
display: block;
font-weight: 300;
`