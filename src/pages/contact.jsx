import Header from '../components/Header'
import logo from '../assets/images/logo-red.png'
import ContactContent from '../components/Contact'

export default function Contact () {
  return (
    <>
      <Header title='Get In Touch' image={logo}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione harum
        amet aut? Laboriosam quidem iure dolore. Facilis velit ab voluptatem.
      </Header>
      <ContactContent />
    </>
  )
}
