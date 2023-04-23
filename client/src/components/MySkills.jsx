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
import { FaReact, FaVuejs, FaNode, FaPython } from 'react-icons/fa'

const Skills = [
  {
    id: 0,
    icon: <FaReact />,
    tech: 'React JS'
  },
  {
    id: 1,
    tech: 'Vue JS',
    icon: <FaVuejs />
  },
  {
    id: 2,
    tech: 'Node JS',
    icon: <FaNode />
  },
  {
    id: 3,
    tech: 'Python',
    icon: <FaPython />
  }
]

const MySkills = () => {
  return (
    <PaddingContainer id='Skills' top='10%' bottom='10%'>

      <FlexContainer fullWidthChild>

      

      <SkillsCardContainer>
      {Skills.map((skill)=>(
        <SkillsCard>
          <IconContainer size='5rem' color='blue'>
            {skill.icon}
          </IconContainer>

          <Heading as='h4'>
          {skill.tech}
          </Heading>
        </SkillsCard>
      ))}
      </SkillsCardContainer>



      <div>
        <Heading as='h3'>
          Skills
        </Heading>
        <Heading as='h2' size='h2' top='0.5rem'>
          What <BlueText>I can do</BlueText>
        </Heading>

        <ParaText top='2rem' bottom='1.5rem'>
          As a FullStack developer, I am skilled in Javascript frameworks and libraries such as React, Vue, and Node.
        </ParaText>

        <ParaText>
          I have experience in using react for building scalable and maintainable applications.
        </ParaText>

      </div>


      </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills