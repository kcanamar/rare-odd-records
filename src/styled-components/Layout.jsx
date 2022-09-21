import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from '../assets/theme'

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

    @media screen and (max-width: 1024px) {
    }

    @media screen and (max-width: 600px) {
    }
  }

  &.home-header {
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-bewtween;
    gap: 6rem;
  }

  &.about_story_container{
    display: grid;
    grid-template-columns: 40% 50%;
    gap: 10%;
  }

  &.mission_story_container{
    display: grid;
    grid-template-columns: 40% 50%;
    gap: 10%;
  }

  &.vision_story_container{
    display: grid;
    grid-template-columns: 50% 40%;
    gap: 10%;
  }

  &.contact_container{
    margin-top: 7rem;
    display: grid;
    place-items: center;
  }
`

export const StyledButton = styled.button`
  &.nav-menu {
    display: none;

    @media screen and (max-width: 1024px) {
      display: inline-block;
      background: transparent;
      font-size: 1.8rem;
      cursor: pointer;
      color: ${theme.gray1};
    }

    @media screen and (max-width: 600px) {
    }
  }

  &.hh-button {
    color: ${theme.gray1};
    width: fit-content;
    margin: 0 auto;
    padding: 0.9rem 2rem;
    background: ${theme.primary};
    border-radius: 1.5rem;
    transition: ${theme.transition}
  }

  &.hh-button:hover {
    background: ${theme.secondary};
    color: ${theme.gray6};
  }

  &.lg {
    padding: 1.2rem 3rem;
    border-radius: 2rem;
    font-size: 1.1rem;
  }

  &.sm {
    padding: 0.4rem 1.2rem;
    font-size: 0.9rem;
  }

  &.sm:hover {
    background: ${theme.gray1}
  }
`

export const StyledImage = styled.img`
  display: block;
  object-fit: cover;
  width: 100%;

  &.logo {
    width: 5rem;
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
  font-size: 2rem;

  &.header {
    margin-bottom: 1rem;
  }
`

export const StyledH3 = styled.h3`
  line-height: 1.2;
  color: ${theme.gray1};
`

export const StyledH4 = styled.h4`
  line-height: 1.2;
  color: ${theme.gray1};

  &.hh {
    margin-bottom: 1rem;
    color: ${theme.secondary};
    font-weight: 400;
  }
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
  text-decoration: none;
`
