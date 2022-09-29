import { artists } from "../testing"
import { BsInstagram } from "react-icons/bs"
import { AiOutlineTwitter } from "react-icons/ai"
import { FaFacebookF } from "react-icons/fa"
import { BsSpotify } from "react-icons/bs"
import { StyledArtistsSection } from "../styled-components/Artists"
import { StyledContainer } from "../styled-components/Layout"
import Artist from "./Artist"



export default function Artists() {
    return(
        <>
        <StyledArtistsSection>
            <StyledContainer className="artists_container">
            {
                artists.map(({ id, image, name, genre, socials }) => {
                    return <Artist key={id} image={image} name={name} genre={genre} socials={[
                        {icon: <BsInstagram />, link: socials[0]},
                        {icon: <AiOutlineTwitter />, link: socials[1]},
                        {icon: <FaFacebookF />, link: socials[2]},
                        {icon: <BsSpotify />, link: socials[3]}
                    ]}/>


                    
                })
            }
            </StyledContainer>
        </StyledArtistsSection>
        
        
        </>
    )
}