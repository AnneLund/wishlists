import styled from 'styled-components'

const StyledCard = styled.figure`
background-color: #ffffff3b;
box-shadow: rgb(0, 0, 0) 10px 5px 10px;
width: 15vw;
height: auto;
color: white;
display: flex;
flex-direction: column;
align-items: center;
font-size: 1em;
position: relative;

img{
    height: 35vh;
    width: 90%;
    margin-top: 20px;
}
   
figcaption{
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    width: 100%;
    
    .link, a{
        font-size: 1.5em;
        margin-bottom: 1em;
        a{
        color: white;
         &:hover{
        color: green;
      }      
        }
     
    }

    button{
      padding: 0.2em;
      a{
        font-size: 1em;
        color: black;
      }
    }
}

.deleteWish{
  color: red;
}

@media screen and (max-width: 600px) {
height: auto;
width: 90%;
margin: auto;
}

.title{
        font-size: 1.3em;
        font-weight: 600;
    }

.bought{
    background-color: rgba(255, 0, 0, 0.534);
    font-size: 25px;
    padding: 1em 0;
    margin-top: 1em;
   
  }

  .status{
    background-color: rgba(14, 255, 14, 0.49); 
    padding: 10px;
    margin: 1em 0;
    font-size: 25px;
  }
`

export {StyledCard};