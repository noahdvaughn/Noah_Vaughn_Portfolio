import React, {useRef, useState} from 'react'
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
  const [sent, setSent] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs.sendForm('service_vqwicou', 'contact_form', form.current, 'YaivNhk7xkh_OPUlQ')
    //   .then((result) => {
    //       console.log(result.text);
    //   }, (error) => {
    //       console.log(error.text);
    //   });

      form.current[0].value = ''
      form.current[1].value = ''
      form.current[2].value = ''
      setSent(true)
      console.log(sent)
    }





  return (
    <PaddingContainer id='Contact' top='5%' bottom='5%' >

      <Heading as='h2' size='h2' align='center' top='0.5rem'
      >
        Hit me up <BlueText>Below </BlueText>
      </Heading>
      <Heading as='h2' size='h4' align='center' top='0.5rem'><BlueText>(727)-557-6615 | noahdvaughn@gmail.com</BlueText></Heading>
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

            {sent === true ? 
              <Heading as='h3' size='h3' align='center'> <BlueText>Message Sent!</BlueText></Heading> 
            : <Button onClick={sendEmail}>Send Message</Button>}
  

        </ContactForm>
      </FlexContainer>

      </PaddingContainer>

    </PaddingContainer>
  )
}

export default Footer