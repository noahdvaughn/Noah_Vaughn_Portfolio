import React from 'react'
import {
  PaddingContainer, 
  Heading,
  BlueText,
  FlexContainer,
  Button
} from '../styles/Global.styled'
import { ContactForm, FormInput, FormLabel } from '../styles/Footer.styled'
import { motion} from 'framer-motion'
import { fadeInLeftVariant, fadeInRightVariant, fadeInTopVariant, fadeInBottomVariant } from '../utils/Variants'

const Footer = () => {
  return (
    <PaddingContainer id='Contact' top='5%' bottom='5%' as={motion.div} variants={fadeInBottomVariant} initial='hidden' whileInView='visible'>

      <Heading as='h2' size='h2' align='center' top='0.5rem'
      >
        Contact <BlueText>Me here </BlueText>
      </Heading>
      <PaddingContainer top='3rem'>
      <FlexContainer justify='center'>
        <ContactForm>
          <PaddingContainer bottom='2rem'>
            <FormLabel>Name:</FormLabel>
            <FormInput type='text'
            placeholder='Enter your name' />

          </PaddingContainer>
          <PaddingContainer bottom='2rem'>
            <FormLabel>Email:</FormLabel>
            <FormInput type='text'
            placeholder='Enter your Email' />

          </PaddingContainer>
          <PaddingContainer bottom='2rem'>
            <FormLabel>Message:</FormLabel>
            <FormInput type='text'
            placeholder='Enter your Message'
            as='textarea' />

          </PaddingContainer>

          <FlexContainer justify='center'>
            <Button>Send Message</Button>
          </FlexContainer>

        </ContactForm>
      </FlexContainer>

      </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer