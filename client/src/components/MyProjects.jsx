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
    project_desc: "Anime discussion and recommendation platform powered by the MyAnimeList API. User-authenticated with JWT and Bcrypt. Users can register and login to create reviews and recommendations of their favorite anime. Deployed using Heroku PostgreSQL cloud database and Surge for the React frontend.",
    tech_stack: ['React', 'Node', 'Express', 'Sequelize', 'PostgreSQL'],
    project_img: project1,
    project_url: 'https://sakugaconnector.surge.sh/',
    github_url: 'https://github.com/noahdvaughn/sakuga_connector',
    reverse: false
  },
  {
    id: 1,
    project_name: "TurnTables",
    project_desc: "Music Review and tracking app powered by the Last.FM album API. Users can search for albums and view details such as songs, release date, artist, and tags. Users can create an account and keep a list of listened to albums and give scores to albums. Frontend built with React and backend built with Express, Sequelize and SQL.",
    tech_stack: ['React', 'Node', 'Express', 'Sequelize', 'PostgreSQL'],
    project_img: project2,
    project_url: 'https://github.com/jonclindner/TurnTables',
    github_url: 'https://github.com/jonclindner/TurnTables',
    reverse: true
  },
  {
    id: 2,
    project_name: "Pawns101",
    project_desc: "Chess Database to create and store top players and openings. Users can add their favorite players with info such as elo, age, nationality and favorite opening. Users can also add openings of up to 10 moves with information such as winrate. Created openings have a link to Chess.com where users can view the next best moves. Data is hosted on Atlas' MongoDB cloud server. React frontend and Express backend are deployed in a monorepo to Heroku",
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
