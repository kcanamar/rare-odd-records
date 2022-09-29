import { StyledContainer, StyledLink, StyledButton } from "../styled-components/Layout";

export default function NotFound() {
    return (
        <StyledContainer className="notfound_container">
            <h2>Page Not Found</h2>
            <StyledButton className = 'notfound'>
                <StyledLink to="/" >
                    Go Back Home
                </StyledLink>
            </StyledButton>
        </StyledContainer>
    )
}