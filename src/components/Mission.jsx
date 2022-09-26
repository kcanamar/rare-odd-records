import SectionHead from "../components/util/SectionHead"
import Card from "../components/util/Card"
import { StyledContainer, StyledH4 } from "../styled-components/Layout"
import { MissionImage, MissionLeft, MissionRight, MissionSection, MissionWrapper, StyledMissionSmall, StyledMissionSpan } from "../styled-components/Mission"
import { BsMic } from "react-icons/bs"
import { mission } from "../testing"
import image from "../assets/images/logo-black.png"

export default function Mission() {
    return (
        <MissionSection>
            <StyledContainer className="mission">
                <MissionLeft>
                    <MissionImage>
                        <img src={image} alt="Mission Image" />
                    </MissionImage>
                </MissionLeft>
                <MissionRight>
                    <SectionHead icon={<BsMic/>} title="Mission" />
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente pariatur provident tempore aliquam laudantium quae ipsam, quo possimus enim, architecto quibusdam nemo consequuntur voluptate nam ipsa reiciendis voluptatibus! Repellat, nobis ratione inventore qui enim fugiat laboriosam eum unde placeat. Itaque amet exercitationem illo doloremque quia cumque quos ullam nisi saepe.
                    </p>
                    <MissionWrapper>
                        {
                            mission.map(({id, icon, title, desc}) => {
                                return <Card className="mission" key={id}>
                                    <StyledMissionSpan className="icon" >{icon}</StyledMissionSpan>
                                    <StyledH4>{title}</StyledH4>
                                    <StyledMissionSmall>{desc}</StyledMissionSmall>
                                </Card>
                            })
                        }
                    </MissionWrapper>
                </MissionRight>
            </StyledContainer>
        </MissionSection>
    )
}