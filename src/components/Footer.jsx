import { StyledContainer, StyledLink, StyledImage, StyledH4 } from "../styled-components/Layout"
import { FaLinkedin, FaFacebook } from "react-icons/fa"
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai"
import logo from "../assets/images/lvda-king.png"
import { CopyRight, FooterArticle, FooterSocials, StyledFooter, StyledFooterP } from "../styled-components/Footer"

export default function Footer() {
    return (
        <StyledFooter>
            <StyledContainer className="footer">
                <FooterArticle className="socials">
                    <StyledLink to="/">
                        <StyledImage src={logo} alt="Rare Odd Records" className="logo"/>
                    </StyledLink>
                    <StyledFooterP>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet repellat optio ipsa tenetur odio, harum dicta expedita error laudantium quia.
                    </StyledFooterP>
                    <FooterSocials>
                        <a href="https://linkedin.com/" target="_blank" rel="noreferrer noopener"><FaLinkedin/></a>
                        <a href="https://faceboook.com/" target="_blank" rel="noreferrer noopener"><FaFacebook/></a>
                        <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener"><AiOutlineTwitter/></a>
                        <a href="https://instagram.com/" target="_blank" rel="noreferrer noopener"><AiFillInstagram/></a>
                    </FooterSocials>
                </FooterArticle>
                <FooterArticle className="links">
                    <StyledH4 className="footer-links">Perma Links</StyledH4>
                    <StyledLink to="/about" rel="noreferrer noopener">About</StyledLink>
                    <StyledLink to="/artists" rel="noreferrer noopener">Artists</StyledLink>
                    <StyledLink to="/contact" rel="noreferrer noopener">Contact</StyledLink>
                    <StyledLink to="/gallery" rel="noreferrer noopener">Gallery</StyledLink>
                </FooterArticle>
                <FooterArticle className="links">
                    <StyledH4 className="footer-links">Insights</StyledH4>
                    <StyledLink to="/s" rel="noreferrer noopener">Blog</StyledLink>
                    <StyledLink to="/s" rel="noreferrer noopener">Events</StyledLink>
                    <StyledLink to="/s" rel="noreferrer noopener">Communities</StyledLink>
                    <StyledLink to="/s" rel="noreferrer noopener">FAQs</StyledLink>
                </FooterArticle>
                <FooterArticle className="links">
                    <StyledH4 className="footer-links">Get In touch</StyledH4>
                    <StyledLink to="/contact" >Contact</StyledLink>
                    <StyledLink to="/s" >Support</StyledLink>
                </FooterArticle>
            </StyledContainer>
            <CopyRight>
                <small>2022 <a href="https://www.linkedin.com/in/kyle-canamar/" target="_blank" rel="noreferrer noopener">Kcanamar</a> & <a href="https://www.linkedin.com/in/yi-nathan/" target="_blank" rel="noreferrer noopener">Yinathan</a> &copy; All Rights Reserved</small>
            </CopyRight>
        </StyledFooter>
    )
}