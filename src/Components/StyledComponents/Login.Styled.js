import styled from "styled-components";

const StyledLogin = styled.div`
 background-color: black;
 height: 100vh;
 padding: 2em;
.form-inner {
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  margin: auto;
  color: black;

  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
 

  h5{
    font-size: 25px;
  }
}

input[type="text"],
input[type="password"] {
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

input[type="submit"] {
  margin-top: 10px;
  cursor: pointer;
  font-size: 25px;
  border: 1px solid #01d28e;
  color: black;
  padding: 10px 20px;
  &:hover{
     background: #6cf0c2; 
  }
}

.form-group {
  display: flex;
  justify-content: center;
}


.error {
  color: red;
  font-size: 12px;
}


.welcome{
  button{
    padding: 1em;
    color: black;
    font-size: 20px;
  }
}



`

export {StyledLogin};