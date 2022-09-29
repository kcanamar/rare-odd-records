import { StyledArtistImgDiv, StyledArtistSocials } from "../styled-components/Artists"
import Card from "./util/Card"

export default function Artist({image, name, genre, socials}) {
    return(
        <Card className="artist">
            <StyledArtistImgDiv>
                <img className="artist_image" src={image} alt={name} />
            </StyledArtistImgDiv>
            <h3>{name}</h3>
            <p>{genre}</p>
            <StyledArtistSocials>
                {
                    socials.map(({icon, link}, index) => {
                        return <a key={index} href={link}target="_blank" rel="noreferrer">{icon}</a>
                    })
                    
                }
            </StyledArtistSocials>
        </Card>
    )
}
