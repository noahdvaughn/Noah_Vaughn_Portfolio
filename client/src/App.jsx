import { useState } from 'react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import {Theme} from './utils/Theme'
import { Container, MainBody } from './styles/Global.styled'



function App() {
  

  return (
    <ThemeProvider theme={Theme}>
      <MainBody>
        <Container>
          
        </Container>
      </MainBody>
    </ThemeProvider>
  )
}

export default App
