import { StyledHomeHeader, HomeHeaderLeft, HomeHeaderRight, HomeHeaderCircle } from "../styled-components/HomeHeader"
import { StyledContainer, StyledH4, StyledH1, StyledButton, StyledLink, StyledImage } from "../styled-components/Layout"
import logo from "../assets/images/logo-red.png"

export default function HomeHeader(){
    return (
        <StyledHomeHeader>
            <StyledContainer className="home-header">
                <HomeHeaderLeft>
                    <StyledH4>#100 Days Of Music</StyledH4>
                    <StyledH1>Join the community</StyledH1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure tempora dicta et sed nemo? Laudantium ratione inventore, quaerat eveniet dolorum omnis ea aperiam voluptatem autem delectus, iusto totam voluptas velit?
                    </p>
                    <StyledButton>
                        <StyledLink to="/contact" className="hh-left">Let's Go</StyledLink>
                    </StyledButton>
                </HomeHeaderLeft>
                <HomeHeaderRight>
                    <HomeHeaderCircle></HomeHeaderCircle>
                    <StyledImage className="hh-image" src={logo} alt="Rare-Odd Records logo"/>
                </HomeHeaderRight>
            </StyledContainer>
        </StyledHomeHeader>
    )
}