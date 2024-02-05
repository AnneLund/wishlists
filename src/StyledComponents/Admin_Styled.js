import styled from "styled-components";
import bg from "../Assets/Images/bg.jpg";

const AdminStyled = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-blend-mode: darken;
  background-color: #000000c6;
  background-size: cover;
  background-position: center;
  padding: 5em 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    gap: 1.5em;
    width: 300px;

    label {
      margin: -1em;
      padding: 0;
    }

    input {
      font-size: 1.5em;
      width: auto;
    }

    button {
      font-size: 1em;
      cursor: pointer;
    }
  }

  .newUser {
    color: white;
    font-size: 1em;
    cursor: pointer;
    margin: 1em 0;
    padding: 0.2em;
    transition: 300ms ease-in-out;

    &:hover {
      text-decoration: underline;
    }
  }

  header {
    h2 {
      margin: 2em 0;
    }

    h3 {
      margin: -1em 0 2em 0;
      font-size: 1.2em;
    }
  }
`;

export default AdminStyled;
