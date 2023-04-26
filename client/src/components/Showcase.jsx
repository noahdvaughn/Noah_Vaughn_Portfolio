import React from 'react'
import profilePic from '../assets/pfp2.png'
import BackgroundImg from '../assets/particle.png'


import {
  PaddingContainer,
  FlexContainer,
  Heading,
  ParaText,
  BlueText,
  IconContainer
} from '../styles/Global.styled'
import { ShowcaseParticleContainer, ShowcaseImageCard, Particle } from '../styles/Showcase.styled'

import {BsLinkedin, BsGithub} from "react-icons/bs"

import { motion} from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

const Showcase = () => {
  return (
    <PaddingContainer id="Home" left="3%" right="10%" top="15%" bottom="10%" resLeft='1rem' resRight='1rem' resTop='5rem'>
      <FlexContainer align="center" fullWidthChild resTextAlign='center'>
        <motion.div variants={fadeInLeftVariant} initial='hidden' whileInView='visible'>

          <Heading as='h1' size='h1'
          top='0.5rem'
          bottom='1rem'>
            Hello! I'm <BlueText>
            Noah Vaughn
            </BlueText>
          </Heading>

          <Heading size='h3'>
            I'm a <BlueText>Fullstack Developer </BlueText>
          </Heading>
          <ParaText as='p' top='2rem' bottom='4rem'>
         Hello, my name is Noah Vaughn and I'm a fullstack developer who creates intuitive solutions to modern problems.
          </ParaText>

          <FlexContainer gap='20px' responsiveFlex resJustify='center'>

            <IconContainer color='blue' size ='1.5rem'>
              <BsLinkedin/>
            </IconContainer>

            <IconContainer color='blue' size ='1.5rem'>
              <BsGithub/>
            </IconContainer>

          </FlexContainer>
        </motion.div>


        <FlexContainer justify='flex-end' responsiveFlex resJustify='center' as={motion.div} variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
          <ShowcaseParticleContainer>
            <ShowcaseImageCard>
              <img src={profilePic}/>
            </ShowcaseImageCard>
            <Particle
            src={BackgroundImg}
            top='-80px'
            left='20px'
            rotate='60deg'
            />
            <Particle
            src={BackgroundImg}
            top='50px'
            right='-70px'
            rotate='0deg'
            />
            <Particle
            src={BackgroundImg}
            bottom='10px'
            left='-70px'
            rotate='50deg'
            />
          </ShowcaseParticleContainer>

        </FlexContainer>

      </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase
