import styled from 'styled-components'

export const TechStackCard = styled.div`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 0.3rem 1rem;
  border-radius: 5px;
`
export const ProjectImageContainer = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
`

export const ProjectImage = styled.img`
  border: 1px solid #fff;
  border-radius: 10px;
  max-width: 90%;
  height: 40vh;
  object-fit: cover;
  object-position: left;
`
