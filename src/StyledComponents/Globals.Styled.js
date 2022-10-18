import { createGlobalStyle } from 'styled-components';
 
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
}  

h1{
font-size: 3em;
padding: 1em;
color: white;
}

h2{
  margin: 1em 0;
  font-size: 2em;
  width: 100%;
  border-bottom: green solid 3px;

}

.section{
  position:relative;
}

  button{
    padding: 0.5em;
    margin: 0.5em;
    font-size: 20px;
  }



`;
 
export default GlobalStyle;

