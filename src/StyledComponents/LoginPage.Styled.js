import bg from '../Assets/Images/webdevelopment.jpeg'
import styled from 'styled-components'


const StyledLoginPage = styled.section`
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
font-size: 1.3em;
margin-top: 0.5em;
}

input{
  font-size: 25px;
}

button{
  padding: 1em;
  margin: 1em;
}
`

export default StyledLoginPage;