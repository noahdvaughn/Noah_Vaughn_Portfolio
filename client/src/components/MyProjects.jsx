import React from 'react'

import {
  PaddingContainer, 
  Heading, 
  BlueText
} from '../styles/Global.styled'
import project1 from '../assets/SakugaConnectorThumbnail.png'
import project2 from '../assets/TurnTablesThumbnail.png'
import Project from './layouts/Project'

import { motion} from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant } from '../utils/Variants'
import { Tilt } from 'react-tilt'


const projectDetails = [

  {
    id: 0,
    project_name: "SakugaConnector",
    project_desc: "Anime discussion and recommendation platform",
    tech_stack: ['React', 'Node', 'Express', 'Sequelize', 'PostgreSQL'],
    project_img: project1,
    project_url: 'https://sakugaconnector.surge.sh/',
    reverse: false

  },
  {
    id: 1,
    project_name: "TurnTables",
    project_desc: "Music Review and tracking app",
    tech_stack: ['React', 'Node', 'Express', 'Sequelize', 'PostgreSQL'],
    project_img: project2,
    project_url: 'https://github.com/jonclindner/TurnTables',
    reverse: true

  },
]


const MyProjects = () => {
  return <PaddingContainer id='Projects' top='5%' bottom='5%'>
    <Heading as='h4' size='h4'>
      My Projects
    </Heading>

    <Heading as='h2' size='h2'>
      What <BlueText>I have built</BlueText>
    </Heading>

    {projectDetails.map((project)=>(
      <PaddingContainer key={project.id}top='5rem' bottom='5rem' >
        <Project data={project}/>
      </PaddingContainer>
    ))}

  </PaddingContainer>
}

export default MyProjects
