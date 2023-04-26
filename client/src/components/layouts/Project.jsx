import React from 'react'
import {
  PaddingContainer,
  Heading,
  FlexContainer,
  ParaText,
  IconContainer,
  Button
} from '../../styles/Global.styled'
import { FaGithub } from 'react-icons/fa'
import { TechStackCard, ProjectImageContainer, ProjectImage } from '../../styles/MyProjects.styled'
import { motion} from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from '../../utils/Variants'


const Project = ({data}) => {

  
  return (
    <FlexContainer fullWidthChild  direction={data.reverse ? 'row-reverse' : false}>

      <motion.div variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant} initial='hidden' whileInView='visible'>
          <FlexContainer align='center' gap='1rem' >
            <Heading as='h3' size='h3' bottom='1rem'>
              {data.project_name}
            </Heading>
            <IconContainer color="blue" size='2rem'>
              <FaGithub/>
            </IconContainer>
          </FlexContainer>

          <PaddingContainer top='1rem'>
            <FlexContainer gap='1.5rem' >
              {data.tech_stack.map((tech)=>(
                <TechStackCard>{tech}</TechStackCard>

              ))}
            </FlexContainer>

          </PaddingContainer>
          <ParaText top='1.5rem' bottom='0.5rem'>{data.project_desc}</ParaText>
          <Button>Visit Website</Button>
      </motion.div>


      <ProjectImageContainer justify={data.reverse ? 'flex-start' : 'flex-end'}  as={motion.div} variants={data.reverse ?  fadeInLeftVariant : fadeInRightVariant } initial='hidden' whileInView='visible'>
          <ProjectImage src={data.project_img} alt={data.project_name}/>
      </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project