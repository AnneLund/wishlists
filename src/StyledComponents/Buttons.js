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

const AddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 100, 20, 0.3);
  color: black;
  font-size: 1.5em;
  font-weight: 600;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;
  box-shadow: black 3px 3px 3px;

  &:hover {
    background-color: rgba(0, 100, 20, 0.8);
    transition: 500ms;
  }

  .add {
    fill: white;
    display: inline-block;
  }
`;

const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(4, 0, 0, 0.4);
  color: black;
  font-size: 1.5em;
  font-weight: 600;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;
  box-shadow: black 3px 3px 3px;

  &:hover {
    background-color: rgba(300, 0, 20, 0.3);
    transition: 500ms;
  }

  .deleteWish {
    fill: white;
    display: inline-block;
  }
`;

const UpdateButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(4, 0, 0, 0.4);
  color: black;
  font-size: 1.5em;
  font-weight: 600;
  padding: 0.5em;
  margin: 0.5em;
  cursor: pointer;
  box-shadow: black 3px 3px 3px;

  &:hover {
    background-color: rgba(0, 100, 20, 0.3);
    transition: 500ms;
  }

  .edit {
    fill: white;
    display: inline-block;
  }
`;

export { YesButton, NoButton, AddButton, UpdateButton, DeleteButton };
