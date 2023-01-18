import React from 'react'
import Contactform from '../../Pages/Contact/Contactform'
import styled from 'styled-components'
import bg from '../../Assets/Images/bg.jpg'
import Transitions from '../../StyledComponents/Transition'

const Contact = () => {

const ContactPage = styled.section`
background-image: url(${bg});
background-repeat: no-repeat;
background-attachment: fixed;
background-blend-mode: darken;
background-position: center;
background-color: #000000c6;
background-size: cover;
min-height: 100vh;
padding: 10em 0;

h1{
  font-size: 2em;
  margin: 0;
  padding: 0;
  font-weight: 100;
}

@media screen and (max-width: 600px) {

h1{
  font-size: 1.5em;  
  margin-bottom: 1em;
}

}
`
  return (
    <Transitions>
    <ContactPage>
    <h1>Send mig en besked og få et uforpligtende tilbud</h1>
        <Contactform/>
    </ContactPage>
    </Transitions>
  )
}

export default Contact;
