import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

import {
  FlexContainer,
  PaddingContainer,
  Container,
  BlueText
} from '../styles/Global.styled'

import { NavbarContainer, Logo, MenuIcon  } from '../styles/Navbar.styled'

import {GiHamburgerMenu} from 'react-icons/gi'
import { Theme} from '../utils/Theme'
import NavMenu from './layouts/NavMenu'
import { motion, AnimatePresence } from 'framer-motion'


const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      window.pageYOffset > 50 ? setSticky(true) : setSticky(false)
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <NavbarContainer bgColor={ Theme.colors.primary}>
        <PaddingContainer top='1.2rem' bottom='1.2rem' resRight='1rem' resLeft='1rem'>
        <Container>
          <FlexContainer justify='space-between' responsiveFlex href='Home'>

            <Logo href='#Home'>
              Noah Vaughn 
              {/* <BlueText>Fullstack Developer</BlueText> */}
            </Logo>

            <MenuIcon as={motion.a} whileHover={{scale: 1.2}} onClick={()=>{
              setOpenMenu(true)
            }}>
              <GiHamburgerMenu/>
            </MenuIcon>

          </FlexContainer>
        </Container>

            <AnimatePresence>
        {openMenu && <NavMenu setOpenMenu={setOpenMenu}/>}

            </AnimatePresence>
        </PaddingContainer>
    </NavbarContainer>
  )
}

export default Navbar