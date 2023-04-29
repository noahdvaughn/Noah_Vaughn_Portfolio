import React, {useRef} from 'react'
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
import emailjs from '@emailjs/browser';

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vqwicou', 'contact_form', form.current, 'YaivNhk7xkh_OPUlQ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }





  return (
    <PaddingContainer id='Contact' top='5%' bottom='5%' >

      <Heading as='h2' size='h2' align='center' top='0.5rem'
      >
        Hit me up <BlueText>Below </BlueText>
      </Heading>
      <PaddingContainer top='3rem' as={motion.div} variants={fadeInBottomVariant} initial='hidden' whileInView='visible'>
      <FlexContainer justify='center' resJustifyItems='center' responsiveFlex>


        <ContactForm ref={form}>
          <PaddingContainer bottom='2rem'>
            <FormLabel>Name:</FormLabel>
            <FormInput 
            type='text'
            name='user_name'
            placeholder='Enter your name'
            as={motion.input}
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
            whileTap={{ scale: 0.9 }}
            />

          </PaddingContainer>
          <PaddingContainer bottom='2rem'>
            <FormLabel>Email:</FormLabel>
            <FormInput 
            type='text'
            name='user_email'
            placeholder='Enter your Email' 
            as={motion.input} 
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
            whileTap={{ scale: 0.9 }}/>
          </PaddingContainer>
          <PaddingContainer bottom='2rem'>
            <FormLabel>Message:</FormLabel>
            <FormInput 
            as={motion.textarea} 
            name='message'
            transition={{ type: "spring", stiffness: 500, damping: 50 }}
            whileTap={{ scale: 0.9 }}
            type='text'
            placeholder='Enter your Message'/>
          </PaddingContainer>

          <FlexContainer >
            <Button onClick={sendEmail}>Send Message</Button>
          </FlexContainer>

        </ContactForm>
      </FlexContainer>

      </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer