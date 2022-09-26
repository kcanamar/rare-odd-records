import {
  StyledContactSection,
  StyledContactWrapper
} from '../styled-components/Contact'
import { StyledContainer } from '../styled-components/Layout'
import { MdEmail } from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'

export default function Contact () {
  return (
    <StyledContactSection>
      <StyledContainer className='contact_container'>
        <StyledContactWrapper>
          <a
            href='mailto:support@rareoddrecords.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <MdEmail />
          </a>
          <a
            href='https://www.facebook.com/nathan.yi.14/'
            target='_blank'
            rel='noreferrer noopener'
          >
            <BsMessenger />
          </a>
          <a
            href='mailto:support@rareoddrecords.com'
            target='_blank'
            rel='noreferrer noopener'
          >
            <IoLogoWhatsapp />
          </a>
        </StyledContactWrapper>
      </StyledContainer>
    </StyledContactSection>
  )
}
