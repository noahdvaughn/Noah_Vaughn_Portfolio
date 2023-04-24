import React, {useState} from 'react'

import {
  FlexContainer,
  PaddingContainer,
  Container,
  BlueText
} from '../styles/Global.styled'

import { NavbarContainer, Logo, MenuIcon  } from '../styles/Navbar.styled'

import {GiHamburgerMenu} from 'react-icons/gi'
import { Theme} from '../utils/Theme'

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <NavbarContainer bgColor='transparent'>
        <PaddingContainer top='1.2rem' bottom='1.2rem'>
        <Container>
          <FlexContainer justify='space-between'>

            <Logo>
              Noah Vaughn, <BlueText>Fullstack Developer</BlueText>
            </Logo>

            <MenuIcon onClick={()=>{
              setOpenMenu(!openMenu)
            }}>
              <GiHamburgerMenu/>
            </MenuIcon>

          </FlexContainer>
        </Container>

        {openMenu && <NavMenu/>}
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar