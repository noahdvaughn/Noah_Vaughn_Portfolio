import styled from 'styled-components'

export const ShowcaseParticleContainer = styled.div`
  position: relative;
`
// @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//   display: none;
// }
export const ShowcaseImageCard = styled.div`
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  width: max-content;
  padding-top: 1rem;
  padding-right: 1rem;

  border-radius: 1rem;
  position: relative;
  overflow: hidden;
`
export const Particle = styled.img`
  position: absolute;
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  transform: rotate(${({ rotate }) => rotate});

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`
