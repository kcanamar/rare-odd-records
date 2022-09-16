import React from 'react'
import { StyledNav, Link } from '../../styled-components/Nav.jsx'

import {useState} from "react"

export default function Nav () {

    const [activeNav, setActiveNav] = useState('#')

  return (
    <StyledNav>
      <Link
        href='#'
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        Home
      </Link>
      <Link
        href='#about'
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        About
      </Link>
      <Link
        href='#gallery'
        onClick={() => setActiveNav('#gallery')}
        className={activeNav === '#gallery' ? 'active' : ''}
      >
        Gallery
      </Link>
      <Link
        href='#artists'
        onClick={() => setActiveNav('#artists')}
        className={activeNav === '#artists' ? 'active' : ''}
      >
        Artists
      </Link>
      <Link
        href='#contact'
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        Contact
      </Link>
    </StyledNav>
  )
}
