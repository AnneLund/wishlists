import styled from "styled-components";

export const MainNav = styled.ul`
  position: fixed;
  display: flex;
  width: 100%;
  height: 10vh;
  z-index: 800;
  flex-wrap: wrap;
  justify-content: space-between;

  li {
    list-style: none;
    &:last-of-type {
      margin-left: auto;
    }

    a {
      padding: 0.3em;
      cursor: pointer;
      text-align: center;
      text-decoration: none;
      color: white;
      transition: all 0.3s ease-in;
      font-size: 1.5em;
      &:hover {
        cursor: pointer;
        transition: 300ms;
      }

      @media (max-width: 768px) {
        display: block;
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    background-color: ${(props) => (props.shrinkHeader ? "rgba(0, 0, 0, 0.9)" : "rgba(0, 0, 0, 0.618)")};
    padding: 1rem;
    height: auto;
    margin: 0 auto;
    justify-content: flex-end;

    li {
      width: 100%;
    }
  }
`;
