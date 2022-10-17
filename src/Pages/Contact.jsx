import React from 'react'
import { Page } from '../Components/Layout/Page';
import Contactform from '../Components/Contactform'
import styled from 'styled-components'
import bg from '../Assets/Images/webdevelopment.jpeg'

const Contact = () => {

const Content = styled.section`
background-image: url(${bg});
background-repeat: no-repeat;
background-attachment: fixed;
background-blend-mode: darken;
background-color: #000000c6;
background-size: cover;
min-height: 100vh;
padding: 4em 0;


h1{
color: white;
font-family: 'Aboreto', cursive;  
margin-top:2em;
font-size: 3vw;

}

h2{
color: white;
font-family: 'Aboreto', cursive; 
font-size: 1em;
margin-top: 0.5em;
}

`
  return (
    <Content>
    <section>
    <h1>Send mig en besked og få et uforpligtende tilbud</h1>

        <Contactform/>
       
    </section>
    </Content>
  )
}

export default Contact;
