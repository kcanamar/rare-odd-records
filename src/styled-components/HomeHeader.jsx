import styled from 'styled-components'
import theme from '../assets/theme.js'

export const StyledHomeHeader = styled.header`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
@media screen and (max-width: 1024px) {
    height: fit-content;
    padding: 12rem 0;
}

@media screen and (max-width: 600px) {
    margin-top: 0;
    height: 100vh;
}
`

export const HomeHeaderLeft = styled.div`
    margin-top: -3rem;

    p{
        margin: 1rem 0 3.5rem;
        font-size: 1.1rem;
    }
`

export const HomeHeaderRight = styled.div`
    display: grid;
    place-items: center;
    position: relative;
    @media screen and (max-width: 1024px) {
        
    }
      
    @media screen and (max-width: 600px) {
        display: none;
    }

`

export const HomeHeaderCircle = styled.div`
    width: 25rem;
    height: 25rem;
    // background: linear-gradient(75deg, ${theme.secondary}, transparent);
    border-radius: 50%;
    position: absolute;
    filter: blur(15px);
    @media screen and (max-width: 1024px) {
        width: 16rem;
        height: 16rem;
    }
    
    @media screen and (max-width: 600px) {
        display: none;
    }
`

export const HomeHeaderImage = styled.div`
    position: relative;
    @media screen and (max-width: 1024px) {
        
    }
      
    @media screen and (max-width: 600px) {
        display: none;
    }
`
