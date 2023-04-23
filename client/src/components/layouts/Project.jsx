import React from 'react'
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer
} from '../../styles/Global.styled'
import { FaGithub } from 'react-icons/fa'

const Project = () => {
  return (
    <FlexContainer fullWidthChild>
      <div>
          <FlexContainer align='center' gap='1rem'>
            <Heading as='h3' size='h3' bottom='1rem'>
              Project Name
            </Heading>
            <IconContainer color="blue" size='2rem'>
              <FaGithub/>
            </IconContainer>
          </FlexContainer>

          <PaddingContainer top='1rem'>
            <FlexContainer gap='1.5rem'>
              <TechStackCard>Technology</TechStackCard>
            </FlexContainer>

          </PaddingContainer>
      </div>
      <div>

      </div>
    </FlexContainer>
  )
}

export default Project