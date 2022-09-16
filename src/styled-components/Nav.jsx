import styled from 'styled-components'
import theme from '../assets/theme.js'

export const StyledNav = styled.nav`
height: 5rem;
width: 100vw;
background: ${theme.primary};
display: flex;
justify-content: space-between;
place-items: center;
position: relative;
top: 0;
left: 0;
z-index: 99;
  `
  export const Link = styled.a `
    display: flex;
    gap: 3.5rem;
    align-items: center;
    text-decoration: none
    }

    &.active {
      background: ${theme.primaryVar};
      color: ${theme.white};
    }
  }
`
