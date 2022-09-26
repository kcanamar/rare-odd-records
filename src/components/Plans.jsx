import { StyledButton, StyledContainer, StyledH4, StyledLink, StyledSection } from "../styled-components/Layout"
import { FaCrown } from "react-icons/fa"
import {BsFillCaretRightFill} from "react-icons/bs"
import SectionHead from "./util/SectionHead"
import { StyledPlanSmall, StyledPlanWrapper, StyledPlanSpan } from "../styled-components/Plans"
import { plans } from "../testing"
import Card from "./util/Card"

export default function Plans(){
    return (
        <StyledSection className="plans">
            <StyledContainer className="plans">
                <SectionHead icon={<FaCrown/>} title="Plans"/>
                <StyledPlanWrapper>
                    {
                        plans.map(({id, icon, title, info, path}) => {
                            return (
                                <Card className='plans' key={id}>
                                    <StyledPlanSpan>{icon}</StyledPlanSpan>
                                    <StyledH4 className="plans">{title}</StyledH4>
                                    <StyledPlanSmall>{info}</StyledPlanSmall>
                                    <StyledButton className="plans sm">
                                        <StyledLink to={path} className="plans">Learn More <BsFillCaretRightFill/></StyledLink>
                                    </StyledButton>
                                </Card>
                            )
                        })
                    }
                </StyledPlanWrapper>
            </StyledContainer>
        </StyledSection>
    )
}