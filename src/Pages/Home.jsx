// import { StyledGlobals } from "../Components/StyledComponents/Globals.Styled";
import bg from '../Assets/Images/webdevelopment.jpeg'
import styled from 'styled-components'

const Home = () => {

const Content = styled.section`
background-image: url(${bg});
background-repeat: no-repeat;
background-attachment: fixed;
background-blend-mode: darken;
background-color: #000000c6;
background-size: cover;
min-height: 100vh;
display: flex;
width: 100%;
flex-direction: column;
justify-content: center;
padding: 4em 0;

h1{
color: white;
font-family: 'Aboreto', cursive;  
margin-top:2em;
}

h2{
color: white;
font-family: 'Aboreto', cursive; 
font-size: 1em;
margin-top: 0.5em;
}

@media screen and (max-width: 768px) {
    margin: auto;
    h1{
        font-size: 8vw;
    }
}

`

return (
<Content>
 <section>
<h1>Din webudvikler</h1>
<h2>- Udvikling og design efter dine behov og ønsker</h2>
 </section>
 </Content>
    )
}


export default Home;