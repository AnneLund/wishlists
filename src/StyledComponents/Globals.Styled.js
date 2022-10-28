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
color: white;
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

    header{
       h1{
      margin: 0;
    }

    h3{
      margin: -1em 0 2em 0;
      font-size: 1.5em;
    }   
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
display: flex;
flex-direction: column;
padding-bottom: 2em;
justify-content: center;
}

@media screen and (max-width: 600px) {
  .wish{
   
    h1{
      padding: 1em 0;
      font-size: 8vw;
    }
  }
}

.add{
width: 300px;
height: auto;
color: white;
display: flex;
justify-content: center;
position: relative;
align-items: center;
font-size: 1em;
margin: auto;
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

.update{
  display: flex;
  flex-direction: column;
}

`;
 
export default GlobalStyle;

