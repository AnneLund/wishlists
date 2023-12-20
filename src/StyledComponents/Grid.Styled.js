import styled from "styled-components";

const Grid = styled.section`
  width: 90%;
  margin: 5em auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2em;

  a {
    margin: auto;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    grid-template-columns: auto;
    justify-content: center;
    width: 100%;
    margin: auto;
  }
`;
export default Grid;
