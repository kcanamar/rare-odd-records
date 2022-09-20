import styled from 'styled-components'
import { theme } from '../assets/theme'

export const StyledHomeHeader = styled.header`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  margin-top: 3rem;
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

`

export const HomeHeaderCircle = styled.div`
    width: 25rem;
    height: 25rem;
    // background: linear-gradient(75deg, #ffb116, transparent);
    border-radius: 50%;
    position: absolute;
    filter: blur(15px);
`

export const HomeHeaderImage = styled.div`
    position: relative;

`
