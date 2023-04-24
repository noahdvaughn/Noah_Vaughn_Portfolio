import React from 'react'
import {
  PaddingContainer, 
  Heading,
  BlueText,
  FlexContainer,
  Button
} from '../styles/Global.styled'


const Footer = () => {
  return (
    <PaddingContainer id='Contact' top='5%' bottom='5%'>
      <Heading as='h4' size='h4' align='center'>My Contact</Heading>

      <Heading as='h2' size='h2' align='center' top='0.5rem'
      >
        Contact <BlueText>Me here </BlueText>
      </Heading>
      <PaddingContainer top='3rem'>
      <FlexContainer justify='center'>
        <ContactForm></ContactForm>
      </FlexContainer>

      </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer