import styled from 'styled-components'


const StyledGlobals = styled.div`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Cormorant', serif;
}

.container{
  background-color: black;
  min-height: 80vh;
  padding: 1em;
}  

h1{
font-size: 3em;
padding: 1em;
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

.App{
min-height: 100vh; 
text-align: center;
  }

`
export {StyledGlobals}