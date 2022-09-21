import styled from 'styled-components'
import theme from '../assets/theme'

export const StyledHeader = styled.header`
//   margin-top: 5rem;
  height: 20rem;
  overflow: hidden;
  border-bottom: 2px solid ${theme.gray4};

  @media screen and (max-width: 600px) {
    height: fit-content;
  }
`
export const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  place-items: center;
  background: black;
`
export const StyledHeaderContainerBg = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
`

export const StyledHeaderImage = styled.img`
  opacity: 0.6;
`
export const StyledHeaderContent = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  text-align: center;

  p {
    color: rgba(255, 255, 255, 0.8);

    media screen and (max-width: 600px) {
        font-size: 0.85;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 76%;
  }

  @media screen and (max-width: 600px) {
    width: ${theme.wmd};
    padding: 3rem 0;
  }
`


