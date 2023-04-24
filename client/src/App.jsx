
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Theme } from './utils/Theme'
import { Container, MainBody } from './styles/Global.styled'
import Showcase from './components/Showcase'
import MySkills from './components/MySkills'
import MyProjects from './components/MyProjects'
import Footer from './components/Footer'



function App() {
  

  return (
    <ThemeProvider theme={Theme}>
      <MainBody>
        <Container>
          <Showcase />
          <MySkills />
          <MyProjects />
          <Footer />
        </Container>
      </MainBody>
    </ThemeProvider>
  )
}

export default App
