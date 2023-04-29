import React from 'react'
import {useRef} from 'react'
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
  const constraintsRef = useRef(null)
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
            I'm a <BlueText>Fullstack Developer, </BlueText>
          </Heading>
          <Heading size='h3'>
          <BlueText textDecoration='underline'>Ready to work</BlueText>
          </Heading>
          <ParaText as='p' top='2rem' bottom='4rem'>
         Hello, my name is Noah Vaughn and I'm a fullstack developer who creates intuitive solutions to modern problems. I specialize in Javascript frameworks and libraries such as React, Vue, and Node. I have 5+ years experience customer service, detail-oriented workspaces and connection with stakeholders of all levels in the business. <BlueText>Leave a message below and get to know me!</BlueText> 
          </ParaText>

          <FlexContainer gap='20px' responsiveFlex resJustify='center'>

            <IconContainer color='blue' size ='3.5rem' href='https://www.linkedin.com/in/noahvaughn/'
            as={motion.a} 
            whileHover={{ scale: 1.05 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <BsLinkedin/>
            </IconContainer>

            <IconContainer color='blue' size ='3.5rem' href='https://github.com/noahdvaughn' 
              as={motion.a} 
              whileHover={{ scale: 1.05 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}>
              <BsGithub/>
            </IconContainer>

          </FlexContainer>
        </motion.div>


        <FlexContainer justify='flex-end' responsiveFlex resJustify='center' as={motion.div} variants={fadeInRightVariant} initial='hidden' whileInView='visible'>
          <ShowcaseParticleContainer>
            <ShowcaseImageCard 
              as={motion.div} 
              whileHover={{ scale: 1.05 }}
              onHoverStart={e => {}}
              onHoverEnd={e => {}}
              transition={{ type: "spring", stiffness: 500, damping: 15 }}
              whileTap={{ scale: 1 }}
              >
                
                <img src={profilePic}/>
            </ShowcaseImageCard>
          </ShowcaseParticleContainer>

        </FlexContainer>

      </FlexContainer>
    </PaddingContainer>
  )
}

export default Showcase
