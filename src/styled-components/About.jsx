import styled from 'styled-components'
import theme from '../assets/theme'

export const StyledAboutSection = styled.section`
  margin-top: 7rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;

  }

  @media screen and (max-width: 600px) {
    gap: 2rem;

  }
`
export const StyledAboutImageSection = styled.div`
 

`
export const StyledAboutImage = styled.img`
  border-radius: 50%;
  overflow: hidden;
  transform: skew(-15deg);
  transition: ${theme.transition};

  &:hover {
    transform: skew(0);
  }

  &.vision {
    transform: skew(15deg);

    &:hover {
      transform: skew(0);
    }
  }
  @media screen and (max-width: 1024px) {
    width: 80%;
  }

  @media screen and (max-width: 600px) {
    width: 80%;
    margin-inline: auto;
  }
`

export const StyledAboutSectionContent = styled.div`
  h1 {
    margin-bottom: 2rem;

    @media screen and (max-width: 1024px) {
      margin-bottom: 1.2rem;
    }
  }
  p {
    margin-bottom: 1rem;
  }
`
// Vision Section

export const StyledVisionSection = styled.section`
  margin-top: 7rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  @media screen and (max-width: 600px) {
    gap: 2rem;
  }
`
export const StyledVisionImageSection = styled.div``

// Mission Section

export const StyledMissionSection = styled.section`
  margin-top: 7rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  @media screen and (max-width: 600px) {
    gap: 2rem;
  }
`
export const StyledMissionImageSection = styled.div``
