import { createGlobalStyle } from "styled-components";
import stars from "../Assets/Images/stars.jpeg";

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Dosis', sans-serif;
  font-weight: 100;
}

body {
  background-color: black;
}

.App{
min-height: 100vh; 
text-align: center;
display: flex;
flex-direction: column;
color: white;
background-color: black;

@media screen and (max-width: 768px) {
  min-height: auto;
}
  }

.container{
  min-height: 100vh;
  background-image: url(${stars});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: darken;
  background-color: #000000c6;
  background-size: cover;
  min-height: 110vh;
  padding: 5em 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
 
}  

h2{
  margin: 1em 0;
  font-size: 2em;
  width: 100%;
  text-shadow: black 5px 5px 5px;
}

input {
  width: 250px;
  height: 40px;
  color: black;
}

a{
  text-decoration: none;
}

.action_buttons {
  display: flex;
  justify-content: center;
margin: 1.5em;
}

`;

export default GlobalStyle;
