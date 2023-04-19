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
          <Heading size="h4">Hello!</Heading>
        </div>
      </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase
