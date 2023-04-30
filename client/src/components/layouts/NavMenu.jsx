import React from 'react'
import {
  PaddingContainer, FlexContainer
} from '../../styles/Global.styled'

import {AiOutlineClose} from 'react-icons/ai'
import { MenuIcon, NavMenuContainer, MenuItem } from '../../styles/Navbar.styled'
import { navLinks } from '../../utils/Data'
import { motion } from 'framer-motion'
import { slideInLeft } from '../../utils/Variants'

const NavMenu = ({setOpenMenu}) => {
  return (
    <NavMenuContainer as={motion.div} variants={slideInLeft} initial='hidden' animate='visible' exit='exit'>
      <PaddingContainer left='5%' right='5%' top='2rem'>
        <FlexContainer justify='flex-end' responsiveFlex>
          <MenuIcon as={motion.a} whileHover={{scale: 1.2}}>
            <AiOutlineClose  onClick={()=> {
              setOpenMenu(false)
            }}/>
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>


      <PaddingContainer top='8%'>
            <FlexContainer direction='column' align='center' responsiveFlex>
              {navLinks.map((link)=>(
              <MenuItem href={link.href} target={link.target}  as={motion.a} whileHover={{scale: 1.2}} key={link.id} onClick={()=> {
                setOpenMenu(false)
              }}>{link.name}</MenuItem>
              ))}
            </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu