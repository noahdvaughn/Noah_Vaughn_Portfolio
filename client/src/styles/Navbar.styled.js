import styled from 'styled-components'

export const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  transition: all 0.3s ease-in;
  background-color: ${({ bgColor }) => bgColor};
`
export const Logo = styled.a`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;

  text-decoration: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
`
export const MainLogo = styled.a`
  font-size: 1.7rem;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: white;
  text-decoration: none;
`
export const MenuIcon = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 1.6rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
`
export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  z-index: 1;
`
export const MenuItem = styled.a`
  color: #fff;
  font-size: 2.5rem;
  margin-top: 3rem;
  cursor: pointer;
  text-decoration: none;
`
export const ResumeDiv = styled.div`
  text-align: center;

  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`
