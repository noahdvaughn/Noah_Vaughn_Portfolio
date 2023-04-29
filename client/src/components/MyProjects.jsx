import React from 'react'

import {
  PaddingContainer, 
  Heading, 
  BlueText
} from '../styles/Global.styled'
import project1 from '../assets/SakugaConnectorThumbnail.png'
import project2 from '../assets/TurnTablesThumbnail.png'
import project3 from '../assets/OpeningPage.png'
import Project from './layouts/Project'


const projectDetails = [

  {
    id: 0,
    project_name: "SakugaConnector",
    project_desc: "Anime discussion and recommendation platform powered by the MyAnimeList API",
    tech_stack: ['React', 'Node', 'Express', 'Sequelize', 'PostgreSQL'],
    project_img: project1,
    project_url: 'https://sakugaconnector.surge.sh/',
    github_url: 'https://github.com/noahdvaughn/sakuga_connector',
    reverse: false

  },
  {
    id: 1,
    project_name: "TurnTables",
    project_desc: "Music Review and tracking app powered by the Last.FM album API",
    tech_stack: ['React', 'Node', 'Express', 'Sequelize', 'PostgreSQL'],
    project_img: project2,
    project_url: 'https://github.com/jonclindner/TurnTables',
    github_url: 'https://github.com/jonclindner/TurnTables',
    reverse: true

  },
  {
    id: 2,
    project_name: "Pawns101",
    project_desc: "Chess Database to create and store top players and openings",
    tech_stack: ['React', 'Node', 'Mongoose', 'MongoDB'],
    project_img: project3,
    project_url: 'https://pawns101.herokuapp.com/',
    github_url: 'https://github.com/noahdvaughn/Pawns101',
    reverse: false

  }
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
