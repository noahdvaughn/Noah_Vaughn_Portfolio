import React from 'react'
import {
  PaddingContainer, FlexContainer
} from '../../styles/Global.styled'

import {AiOutlineClose} from 'react-icons/ai'
import { MenuIcon, NavMenuContainer, MenuItem } from '../../styles/Navbar.styled'

const NavMenu = ({setOpenMenu}) => {
  return (
    <NavMenuContainer>
      <PaddingContainer left='5%' right='5%' top='2rem'>
        <FlexContainer justify='flex-end'>
          <MenuIcon>
            <AiOutlineClose onClick={()=> {
              setOpenMenu(false)
            }}/>
          </MenuIcon>
        </FlexContainer>
      </PaddingContainer>

      <PaddingContainer top='8%'>
            <FlexContainer direction='column' align='center'>
              <MenuItem href='#Home' onClick={()=> {
                setOpenMenu(false)
              }}>Home</MenuItem>
              <MenuItem href='#Skills' onClick={()=> {
                setOpenMenu(false)
              }}>My Skills</MenuItem>
              <MenuItem href='#Projects' onClick={()=> {
                setOpenMenu(false)
              }}>My Projects</MenuItem>
              <MenuItem href='#Contact' onClick={()=> {
                setOpenMenu(false)
              }}>Contact Me</MenuItem>
            </FlexContainer>
      </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu