import React from 'react'

import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer
} from '../styles/Global.styled'

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%">
      <FlexContainer align="center" fullWidthChild>
        <div>
          <Heading size="h4" as='h4'>Hello!</Heading>

          <Heading as='h1' size='h1'
          top='0.5rem'
          bottom='1rem'>
            I'm <BlueText>
            Noah Vaughn
            </BlueText>
          </Heading>

          <Heading size='h3'>
            I'm a <BlueText>Fullstack Developer </BlueText>
          </Heading>
          <ParaText>
            Hello, my name is Noah Vaughn and I am a fullstack developer with 
          </ParaText>
        </div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase
