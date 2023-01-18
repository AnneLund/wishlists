import bg from '../Assets/Images/bg.jpg'
import styled from 'styled-components'

const StyledLoginPage = styled.section`
background-image: url(${bg});
background-repeat: no-repeat;
background-attachment: fixed;
background-blend-mode: darken;
background-color: #000000c6;
background-size: cover;
min-height: 100vh;
padding-top: 10em;
display: flex;
justify-content: center;

h1{
color: white;
font-size: 1.3em;
margin-top: 0.5em;
}

input{
  font-size: 25px;
  display: block;
  margin: 0.2em;
}

button{
  padding: 0.5em;
  display: block;
  margin: 1em auto;

}
`

export default StyledLoginPage;