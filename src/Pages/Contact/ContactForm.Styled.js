import styled from 'styled-components'

const StyledForm = styled.form`
padding: 2em;
width: 50%;
margin: 0 auto;

@media screen and (max-width: 600px){
padding: 0;
width: 100%;
}

div{
  padding: 0 2em;
  
    input{
    width: 80%;
    padding: 7px;
    font-size: 1.5em;
    border: white solid 2px;
    color: black;
    margin: 0.5em 0;
    }

    textarea{
      width: 80%;
      font-size: 1.5em;
      height: 10vh;
      padding: 7px;
      margin-top: 0.5em;
      color: black;
    }

  button{
    display: block;
    margin: 1em auto;
    padding: 0 .5em;
    border: white solid 1px;
    color: black;
    font-size: 1.5em;

    &:hover{
      background-color: grey;
      cursor: pointer;
      transition: 300ms;
    }
  }      



}
`
export {StyledForm}