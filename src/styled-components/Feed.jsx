import styled from "styled-components";
import theme from "../assets/theme";

export const StyledFeedSection = styled.section`
    margin-top: 4rem;
`

export const FeedWrapper = styled.div`
    margin-top: 4rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem 5rem;
    align-items: flex-start;
`

export const FeedItemArticle = styled.article`
    background: ${theme.gray5};
    padding: 2rem;
    border-radius: 1rem;
    cursor: pointer;
`

export const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FeedItemDescription = styled.p`
    margin-top: 1.5rem;
`