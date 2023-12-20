import styled from "styled-components";

const YesButton = styled.button`
  padding: 0.5em;
  font-size: 1.5em;
  margin: 0.5em;
  cursor: pointer;
  box-shadow: black 3px 3px 3px;

  &:hover {
    background-color: rgba(0, 128, 0, 0.346);
    transition: 500ms;
    color: white;
  }
`;

const NoButton = styled.button`
  padding: 0.5em;
  font-size: 1.5em;
  margin: 0.5em;
  cursor: pointer;
  box-shadow: black 3px 3px 3px;

  &:hover {
    background-color: #ff3333;
    transition: 500ms;
    color: white;
  }
`;

const DeleteButton = styled.button`
  background-color: rgba(255, 0, 0, 0.4);
  color: black;
  font-size: 1.5em;
  font-weight: 600;
  padding: 0.5em;

  cursor: pointer;
  box-shadow: black 3px 3px 3px;

  &:hover {
    background-color: red;
    transition: 500ms;
  }
`;

const UpdateButton = styled.button`
  background-color: rgba(255, 0, 0, 0.4);
  color: black;
  font-size: 1.5em;
  font-weight: 600;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;
  box-shadow: black 3px 3px 3px;

  &:hover {
    background-color: red;
    transition: 500ms;
  }
`;

export { YesButton, NoButton, UpdateButton, DeleteButton };
