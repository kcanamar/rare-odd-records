import styled from 'styled-components'
import theme from '../assets/theme.js'
import { NavLink } from 'react-router-dom'

export const StyledNav = styled.nav`
height: 5rem;
width: 100vw;
background: ${theme.primary};
display: grid;
place-items: center;
top: 0;
left: 0;
z-index: 99;
`

export const NavLinkList = styled.ul`
  display: flex;
  gap: 3.5rem;
  align-items: center;

  @media screen and (max-width: 1024px){
    position: absolute;
    top: 100%;
    right: 0;
    flex-direction: column;
    gap: 0;

    &.show{
      display: flex;
    }

    &.hide{
      display: none;
    }
  }

  @media screen and (max-width: 600px){
    
  }
`

export const NavItem = styled.li`
  @media screen and (max-width: 1024px){
    height: 4rem;
    width: 100%;
    box-shadow: -2rem 2rem 5rem rgba(0, 0, 0, 0.4);
  }

  @media screen and (max-width: 600px){
    
  }
`

export const StyledNavLink  = styled(NavLink)`
  color: ${theme.gray1};
  transition: ${theme.transition};

  &:hover {
    color: ${theme.secondary};
  }
  // &.active{
  //   position: relative;
  // }

  // &.active:after {
  //   {
  //     content: '';
  //     display: block;
  //     width: 1.2rem;
  //     height: 1.2rem;
  //     background: ${theme.primary};
  //     color: ${theme.white};
  //     position: absolute;
  //     left: calc(50% - 0.6rem);
  //     transform: rotate(45deg);
  //     margin-top: 0.9rem;
  //   }
  }

  @media screen and (max-width: 1024px){
    // &.active {
    //   color: ${theme.secondary};
    // }
    // &.active:after {
    //   display: none;
    // }
    background: ${theme.primary};
    height: 100%;
    width: 100%;
    display: flex;
    align-itmes: center;
    padding: 1rem 5rem 1rem 3rem;
  }

  @media screen and (max-width: 600px){
    
  }
`
