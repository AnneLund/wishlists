import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {StyledForm} from '../StyledComponents/Form.Styled';
import { useFlashMessageStore } from "../Components/FlashMessages/useFlashMessageStore";


const Contact = () => {

  const { setFlashMessage } = useFlashMessageStore((store) => ({
    setFlashMessage: store.setFlashMessage,
  }));


  const sendEmail = (e) => {
    e.preventDefault();
  
   
    setFlashMessage("Tak for din besked!");
   
    emailjs.sendForm('service_ocjtbnq', 'template_j77yrne', e.target, '3fkWKlIXOTJ-6HhgN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };



  return (
<>  
    <StyledForm onSubmit={sendEmail}>

      <fieldset>

        <legend>Dine informationer</legend>

        <div>
 
      <input type="text" placeholder='Navn:' id="first" name="user_name" required />

      <input type="email" placeholder='Email:' id="email" name="user_email" required />

      <textarea name="message" placeholder='Besked:' required/>

      <button type="submit" id="submit" name="submit"value="Send">Send</button>
      
      </div>

      </fieldset>
      
    </StyledForm>

    </> 
  );
};

export default Contact;