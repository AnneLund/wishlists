import styled from 'styled-components'

const StyledCard = styled.figure`
background-color: #ffffff3b;
box-shadow: rgb(0, 0, 0) 10px 5px 10px;
width: 350px;
color: white;
display: flex;
flex-direction: column;
align-items: center;
font-size: 1em;
position: relative;

picture {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
        aspect-ratio: 1/1;
      }
    }
   
figcaption{
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    width: 100%;

    h3{
      font-size: 1.5em;
      font-weight: 200;
      padding: 0.5em;
    }
    
    .link, a{
        font-size: 1.5em;
        a{
        color: white;
         &:hover{
        color: green;
      }      
        }
    }
}

.description{
  padding: 0.5em;
  margin-bottom: 1em;
  background-color: rgba(0, 0, 0, 0.598);
}

@media screen and (max-width: 600px) {
height: auto;
width: 90%;
margin: auto;
flex: 25%;
max-width: 100%;

img{
  width: 100%;
  vertical-align: middle;
  height: auto;
  margin: 0;
}
}

.bought{
    background-color: rgba(255, 0, 0, 0.534);
    font-size: 25px;
    padding: 1em 0; 
  }

  .status{
    background-color: rgba(14, 255, 14, 0.49); 
    padding: 10px;
    margin: 0.5em 0;
    font-size: 25px;
  }
`

export {StyledCard};