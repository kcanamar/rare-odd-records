import { FeedItemArticle, FeedItemDescription, StyledDiv } from "../styled-components/Feed";
import { StyledButton, StyledH4 } from "../styled-components/Layout";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useState } from "react";

export default function FeedItem({question, answer}) {
    const [show, setShow] = useState(false)

    return (
        <FeedItemArticle onClick={() => {setShow(!show)}}>
            <StyledDiv>
                <StyledH4>{question}</StyledH4>
                <StyledButton className="feed-item">
                    {show ? <BiMinus /> : <BiPlus />}
                </StyledButton>
            </StyledDiv>
           {show && <FeedItemDescription>{answer}</FeedItemDescription>}
        </FeedItemArticle>
    )
}