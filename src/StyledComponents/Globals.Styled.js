import { createGlobalStyle } from 'styled-components';
import stars from '../Assets/Images/stars.jpeg' 

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Cormorant', serif;
}

.App{
min-height: 100vh; 
text-align: center;
display: flex;
flex-direction: column;
  }

.container{
  min-height: 100vh;
  padding: 1em;
  background-image: url(${stars});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: darken;
    background-color: #000000c6;
    background-size: cover;
    min-height: 110vh;
    padding: 4em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
   margin: 0;


}  

h1{
font-size: 3em;
padding: 1em;
margin-top: 2em;
color: white;
}

a{
  background-color: none;
  text-decoration: none;
}

h2{
  margin: 1em 0;
  font-size: 2em;
  width: 100%;
  border-bottom: green solid 3px;

}

  button{
    padding: 0.em;
    margin: 0.5em;
    font-size: 20px;
  }

.admin{
    background-image: url(${stars});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: darken;
    background-color: #000000c6;
    background-size: cover;
    min-height: 100vh;
    padding: 4em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    form{
      display: flex;
      flex-direction: column;
      gap: 1.5em;
    }
}

.wish{
background-image: url(${stars});
background-repeat: no-repeat;
background-attachment: fixed;
background-blend-mode: darken;
background-color: #000000c6;
background-size: cover;
min-height: 110vh;
}

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: black;
}

input {
  width: 250px;
  height: 40px;
  color: black;
}

`;
 
export default GlobalStyle;

