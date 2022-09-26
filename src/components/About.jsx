import {
  StyledAboutImage,
  StyledAboutImageSection,
  StyledAboutSection,
  StyledAboutSectionContent
} from '../styled-components/About'
import { StyledContainer } from '../styled-components/Layout'
import logo from '../assets/images/logo-red.png'
import { StyledVisionSection, StyledVisionImageSection } from '../styled-components/About'
import { StyledMissionSection, StyledMissionImageSection } from '../styled-components/About'

export default function About () {
  return (
    <>
      <StyledAboutSection>
        <StyledContainer className='about_story_container'>
          <StyledAboutImageSection>
            <StyledAboutImage src={logo} alt='Our Story Image' />
          </StyledAboutImageSection>
          <StyledAboutSectionContent>
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error
              quasi, laborum eaque tenetur obcaecati nemo. Ipsa quas obcaecati
              at et dolores inventore autem neque quis similique distinctio qui
              eveniet cupiditate aut, maxime quo aliquid consequuntur.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
              suscipit corrupti eligendi, amet aperiam sapiente dolorem
              excepturi placeat numquam quos.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos,
              iusto.
            </p>
          </StyledAboutSectionContent>
        </StyledContainer>
      </StyledAboutSection>
      

      <StyledVisionSection>
  <StyledContainer className='vision vision_story_container'>

    <StyledAboutSectionContent>
      <h1>Our Vision</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error quasi,
        laborum eaque tenetur obcaecati nemo. Ipsa quas obcaecati at et dolores
        inventore autem neque quis similique distinctio qui eveniet cupiditate
        aut, maxime quo aliquid consequuntur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque suscipit
        corrupti eligendi, amet aperiam sapiente dolorem excepturi placeat
        numquam quos.
      </p>

    </StyledAboutSectionContent>
    <StyledVisionImageSection>
  <StyledAboutImage src={logo} alt='Our Story Image' className=''/>
</StyledVisionImageSection>

  </StyledContainer>
</StyledVisionSection>



<StyledMissionSection>
  <StyledContainer className='mission_story_container'>
    <StyledMissionImageSection>
      <StyledAboutImage src={logo} alt='Our Story Image' />
    </StyledMissionImageSection>
    <StyledAboutSectionContent>
      <h1>Our Mission</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea error quasi,
        laborum eaque tenetur obcaecati nemo. Ipsa quas obcaecati at et dolores
        inventore autem neque quis similique distinctio qui eveniet cupiditate
        aut, maxime quo aliquid consequuntur.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque suscipit
        corrupti eligendi, amet aperiam sapiente dolorem excepturi placeat
        numquam quos.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quos, iusto.
      </p>
    </StyledAboutSectionContent>
  </StyledContainer>
</StyledMissionSection>

    </>
  )
}
