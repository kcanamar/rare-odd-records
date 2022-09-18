import React from 'react'
import { StyledNav, StyledLink, NavLinkList, NavItem, StyledNavLink } from '../styled-components/Nav.jsx'
import { Button, Container, StyledImage } from '../styled-components/Layout.jsx'
import {useState} from "react"
import { links } from '../testing.js'
import {VscChromeClose, VscThreeBars} from 'react-icons/vsc'
import logo from "../assets/images/logo-black.png"
export default function Nav () {

  const [activeNav, setActiveNav] = useState('#')
  const [navShow, setNavShow] = useState(false)

  return (
    <StyledNav>
      <Container className='nav'>
        <StyledLink
          to="/"
          onClick={() => setActiveNav('#')}
        >
          <StyledImage className="logo" src={logo} alt="Nav Logo"/>
        </StyledLink>
        <NavLinkList className={navShow ? 'show' : 'hide'}>
          {
            links.map(({name, path}, index) => {
              return (
                <NavItem key={index}>
                  <StyledNavLink className={activeNav === name ? 'active' : ''} to={path}>{name}</StyledNavLink>
                </NavItem>
              )
            })
          }
        </NavLinkList>
        <Button className="nav-menu" onClick={() => setNavShow(!navShow)}>
          {
            navShow ? <VscChromeClose/> : <VscThreeBars/>
          }
        </Button>
      </Container>
    </StyledNav>
  )
}
