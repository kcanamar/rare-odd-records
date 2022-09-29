import SectionHead from "../components/util/SectionHead"
import { GiFleurDeLys } from "react-icons/gi"
import { feed } from "../testing"
import FeedItem from "./FeedItem"
import { FeedWrapper, StyledFeedSection } from "../styled-components/Feed"
import { StyledContainer } from "../styled-components/Layout"

export default function Feed(){
    return (
        <StyledFeedSection>
            <StyledContainer className="feed">
                <SectionHead icon={<GiFleurDeLys/>} title="Feed" />
                <FeedWrapper>
                    {
                        feed.map(({id, question, answer}) => {
                            return <FeedItem key={id} question={question} answer={answer}/>
                        })
                    }
                </FeedWrapper>
            </StyledContainer>
        </StyledFeedSection>
    )
}