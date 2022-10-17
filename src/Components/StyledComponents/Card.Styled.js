import styled from 'styled-components'

const StyledCard = styled.figure`
background-color: ${(props) => {return props.wishId === 2 ? "rgba(63, 113, 156, 0.432)": "rgba(128, 0, 128, 0.300)"}};
box-shadow: rgb(0, 0, 0) 10px 5px 10px;
width: 260px;
margin: 0 auto;
height: 70vh;


figcaption{
    width: 100%;
    margin: 0;
    font-size: 1em;

    .wishNumber{
        font-size: 1.5em;
        margin: 1.5vw;
        text-decoration: underline;
        font-weight: 600;
    }

    .title{
        font-size: 1.3em;
        font-weight: 600;
    }

    .link, a{
        font-size: 1.5em;
        a{
         &:hover{
        color: #cccc;
      }      
        }
     
    }
}

@media screen and (max-width: 600px) {
height: 65vh;
}

`
const StyledImage = styled.img`
width: 100%;
height: 35vh;

/* @media screen and (max-width: 600px) {
width: 100%;
height: 35vh;
} */
`

export {StyledCard, StyledImage};