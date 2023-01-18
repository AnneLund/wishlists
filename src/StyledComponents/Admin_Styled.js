import styled from "styled-components";
import bg from '../Assets/Images/bg.jpg'

const Admin = styled.section`
   background-image: url(${bg});
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-color: #000000c6;
    background-size: cover;
    background-position: center;
    padding: 5em 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    form{
      display: flex;
      flex-direction: column;
      gap: 0.5em;
      gap: 1.5em;

      label{
    margin: -1em;
    padding: 0;
  }

  input{
    font-size: 1.5em;
  }

  button{
    font-size: 1em;
    cursor: pointer;
  }
    }

    header{
       h1{
      margin: 0;
    }

    h3{
      margin: -1em 0 2em 0;
      font-size: 1.2em;
    }   
    }

`

export default Admin;