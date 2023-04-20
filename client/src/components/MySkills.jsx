import React from 'react'
import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer
} from '../styles/Global.styled'

import {SkillsCardContainer, SkillsCard} from '../styles/MySkills.styled'

import { Skills } from '../utils/Data'

const MySkills = () => {
  return (
    <PaddingContainer id='Skills' top='10%' bottom='10%'>
      <FlexContainer fullWidthChild>

      <SkillsCardContainer>
      {Skills.map((skill)=>(
        <SkillsCard></SkillsCard>
      ))}

      </SkillsCardContainer>
      <div>

      </div>


      </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills