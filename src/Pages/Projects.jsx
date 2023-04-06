import React from "react";
import bg from "../Assets/Images/bg.jpg";
import Transitions from "../StyledComponents/Transition";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Project_Page = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  background-position: center;
  background-color: #000000d9;
  background-position: center;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: #ffffff3b;
  overflow: hidden;
  a {
    color: white;
    font-size: 2em;
  }

  h1 {
    font-weight: 100;
    font-size: 3vw;
    margin-top: 2em;
  }

  li {
    list-style: inside;
  }

  @media screen and (max-width: 768px) {
    justify-content: start;
    padding-top: 4em;

    h1 {
      margin-top: 0;
      font-size: 3em;
    }
  }
`;

const Projects = () => {
  return (
    <Transitions>
      <Project_Page>
        <h1>Projekter</h1>
        <ul>
          <li>
            <a href="https://www.bageriet.dinwebudvikler.dk/" target="_blank">
              Bageriet
            </a>
          </li>
          <li>
            <Link to="/test">Ønskeliste</Link>
          </li>
        </ul>
      </Project_Page>
    </Transitions>
  );
};

export default Projects;
