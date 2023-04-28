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

import { motion} from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'
import { Tilt } from 'react-tilt'

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

      <FlexContainer fullWidthChild responsiveFlex responsiveDirection='column-reverse'>

      

      <SkillsCardContainer as={motion.div} variants={fadeInLeftVariant} initial='hidden' whileInView='visible'>
      {Skills.map((skill)=>(
        <Tilt options={{max: 35, scale: 1, speed: 1000, reverse: true}} >
        <SkillsCard as={motion.div} transition={{ type: "spring", stiffness: 500, damping: 15 }}
        whileTap={{ scale: 0.9 }}>
          <IconContainer size='5rem' color='blue'>
            {skill.icon}
          </IconContainer>

          <Heading as='h4'>
          {skill.tech}
          </Heading>
        </SkillsCard>

        </Tilt>
      ))}
      </SkillsCardContainer>



      <motion.div variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
        <Heading as='h3'>
          My Skills:
        </Heading>
        <Heading as='h2' size='h2' top='0.5rem'>
          This is <BlueText>My Jam</BlueText>
        </Heading>

        <ParaText top='2rem' bottom='1.5rem'>
          As a FullStack developer, I am skilled in Javascript frameworks and libraries such as React, Vue, and Node.
        </ParaText>

        <ParaText>
          I have experience in using react for building scalable and maintainable applications.
        </ParaText>

      </motion.div>


      </FlexContainer>

    </PaddingContainer>
  )
}

export default MySkills