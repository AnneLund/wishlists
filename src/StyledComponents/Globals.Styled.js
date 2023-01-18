import { createGlobalStyle } from 'styled-components';
import stars from '../Assets/Images/stars.jpeg' 

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Bad Script', cursive;
  font-weight: 100;
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
  padding: 0 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 0;
}  

h1{
font-size: 3em;
padding: 1em;
margin-top: 1em;
color: white;
text-shadow: black 5px 5px 5px;
}

@media screen and (max-width: 600px) {
  h1{
    font-size: 1.5em;
    padding-top: 2em;
  }
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

svg{
  fill: green;
}

a{
  text-decoration: none;
}

`;
 
export default GlobalStyle;

