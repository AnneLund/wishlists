import React from 'react'
import Contactform from '../../Pages/Contact/Contactform'
import styled from 'styled-components'
import bg from '../../Assets/Images/webdevelopment.jpeg'

const Contact = () => {

const ContactPage = styled.section`
background-image: url(${bg});
background-repeat: no-repeat;
background-attachment: fixed;
background-blend-mode: darken;
background-color: #000000c6;
background-size: cover;
min-height: 100vh;
padding: 4em 0;
`
  return (
    <ContactPage>
    <h1>Send mig en besked og få et uforpligtende tilbud</h1>
        <Contactform/>
    </ContactPage>
  )
}

export default Contact;
