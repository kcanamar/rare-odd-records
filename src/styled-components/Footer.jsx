import styled from "styled-components";
import theme from "../assets/theme";

export const StyledFooter = styled.footer`
    margin-top: 7rem;
    background: ${theme.primary};
    padding-top: 7rem;
    font-size: 0.9rem;
    color: ${theme.gray1};

`

export const FooterArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7rem;
`

export const StyledFooterP = styled.p`
    margin-top: 0.5rem;
`

export const FooterSocials = styled.div`
    margin-top: 1.5rem;
    display: flex;
    gap: 1rem;
    align-items: center;

    a {
        display: flex;
        color: ${theme.gray6};
        background: ${theme.gray1};
        font-size: 1.5rem;
        padding: 0.7rem;
        border: 1px solid transparent;
        border-radius: 0.6rem;
        transition: ${theme.transition};

        &:hover {
            border-color: ${theme.gray1};
            background: transparent;
        }

    }
`

export const CopyRight = styled.div`
    color: ${theme.gray1};
    text-align: center;
    padding: 1.5rem 0;
    border-top: 2px solid ${theme.primaryVariant};
    margin-top: 5rem;
`