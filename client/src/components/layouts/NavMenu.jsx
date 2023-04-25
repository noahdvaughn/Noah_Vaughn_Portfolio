import React from 'react'
import {
  PaddingContainer, FlexContainer
} from '../../styles/Global.styled'

import {AiOutlineClose} from 'react-icons/ai'
import { MenuIcon, NavMenuContainer, MenuItem } from '../../styles/Navbar.styled'
import { navLinks } from '../../utils/Data'

const NavMenu = ({setOpenMenu}) => {
  return (
    <NavMenuContainer>
      <PaddingContainer left='5%' right='5%' top='2rem'>
        <FlexContainer justify='flex-end' >
          <MenuIcon>
            <AiOutlineClose onClick={()=> {
              setOpenMenu(false)
            }}/>
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>


      <PaddingContainer top='8%'>
            <FlexContainer direction='column' align='center' responsiveFlex>
              {navLinks.map((link)=>(
              <MenuItem href={link.href} key={link.id} onClick={()=> {
                setOpenMenu(false)
              }}>{link.name}</MenuItem>
              ))}
            </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu