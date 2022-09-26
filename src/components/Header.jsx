import { StyledHeader, StyledHeaderContainer, StyledHeaderContainerBg, StyledHeaderContent, StyledHeaderImage } from "../styled-components/Header";
import { StyledH2 } from "../styled-components/Layout";


export default function Header({title, image, children}) {
    return(
        <StyledHeader>
            <StyledHeaderContainer>
                <StyledHeaderContainerBg>
                    <StyledHeaderImage src={image} alt="Header Background Image"/>
                    
                </StyledHeaderContainerBg>
                <StyledHeaderContent>
                    <StyledH2 className="header">
                        {title}
                    </StyledH2>
                    <p>
                        {children}
                    </p>
                </StyledHeaderContent>
            </StyledHeaderContainer>
        </StyledHeader>
    )
}