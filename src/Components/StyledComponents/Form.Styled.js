import styled from 'styled-components'

const StyledForm = styled.form`
fieldset{
display: flex;
flex-direction: column;
position: relative;
color: black;
border-radius: 5px;
border-style: solid 3px black;
box-shadow: black 5px 5px 5px;
margin: 1em auto;
width: 30%;
padding: 1%;  
}

div{
  padding: 0 2em;
  
    input{
    padding: 7px;
    font-size: 1.5em;
    border: white solid 2px;
    color: black;
    margin: 0.5em 0;
    }

    textarea{
      font-size: 1.5em;
      height: 10vh;
      padding: 7px;
      margin-top: 0.5em;
      color: black;
    }

  button{
    display: block;
    margin: 1em auto;
    padding: 8px;
    border: white solid 1px;
    color: black;
    font-size: 1.5em;

    &:hover{
      background-color: grey;
      cursor: pointer;
      transition: 300ms;
    }
  }      


@media screen and (max-width: 600px){
fieldset{
width: 60%;
position: fixed;
margin: auto;
top: 34vh; 
right: 20vw;

}

}
}
`
export {StyledForm}