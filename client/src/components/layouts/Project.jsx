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
import { Tilt } from 'react-tilt'


const Project = ({data}) => {

  
  return (
    <FlexContainer fullWidthChild  direction={data.reverse ? 'row-reverse' : false}>

      <motion.div variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant} initial='hidden' whileInView='visible'>
          <FlexContainer align='center' gap='1rem'>
            <Heading as='h3' size='h3' bottom='1rem'>
              {data.project_name}
            </Heading>
            <IconContainer as='a' href={data.github_url} color="blue" size='2rem'>
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
          <FlexContainer resJustify='center' responsiveFlex>
          <Button as='a' href={data.project_url}>Visit Website</Button>

          </FlexContainer>
      </motion.div>


      <ProjectImageContainer justify={data.reverse ? 'flex-start' : 'flex-end'}  as={motion.div} variants={data.reverse ?  fadeInLeftVariant : fadeInRightVariant } initial='hidden' whileInView='visible' >
        <Tilt options={{max: 35, scale: 1, speed: 1000, reverse: true}} >
          <FlexContainer as={motion.div} transition={{ type: "spring", stiffness: 500, damping: 15 }}
        whileTap={{ scale: 0.9 }} resJustify='center' responsiveFlex>
          <ProjectImage src={data.project_img} alt={data.project_name}/>
          </FlexContainer>

        </Tilt>
      </ProjectImageContainer>
    </FlexContainer>
  )
}

export default Project