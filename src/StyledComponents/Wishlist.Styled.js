import styled from "styled-components";

const StyledCard = styled.figure`
  background-color: #ffffff3b;
  box-shadow: black 10px 10px 20px;
  width: 350px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
  position: relative;
  border-radius: 10px;

  picture {
    width: 100%;
    position: relative;
    img {
      width: 100%;
      object-fit: contain;
      margin: 10px auto;
      aspect-ratio: 1/1;
    }
  }

  figcaption {
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
      font-size: 1.5em;
      font-weight: 200;
      padding: 0.5em;
    }

    .link,
    a {
      font-size: 1.5em;
      a {
        color: white;
        &:hover {
          color: green;
        }
      }
    }
  }

  .description {
    padding: 0.5em;
    margin-bottom: 1em;
    background-color: rgba(0, 0, 0, 0.598);
  }

  @media screen and (max-width: 600px) {
    height: auto;
    width: 300px;
    margin: auto;
    flex: 25%;
    max-width: 100%;

    img {
      width: 100%;
      vertical-align: middle;
      height: auto;
      margin: 0;
    }
  }

  .bought {
    background-color: rgba(255, 0, 0, 0.534);
    font-size: 25px;
    padding: 1em 0;
  }

  .status {
    background-color: rgba(14, 255, 14, 0.49);
    padding: 10px;
    margin: 0.5em 0;
    font-size: 25px;
  }
`;

const StyledCardUpdate = styled.figure`
  box-shadow: black 10px 10px 20px;
  width: 200px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1em;
  border-radius: 10px;
  margin: 0 auto;

  ${({ isUpdateMode }) => {
    return isUpdateMode ? "update-mode-styles" : "normal-mode-styles";
  }};

  picture {
    width: 50%;
    margin: 0 auto;
    position: relative;
    img {
      width: 100%;
      object-fit: contain;
      margin: 0 auto;
      aspect-ratio: 1/1;
    }
  }

  figcaption {
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
      font-size: auto;
      font-weight: 200;
      padding: 0.5em;
    }

    .link,
    a {
      a {
        font-size: 10px;
        color: white;
        &:hover {
          color: green;
        }
      }
    }
  }

  .description {
    padding: 0.5em;
    margin-bottom: 1em;
    background-color: rgba(0, 0, 0, 0.598);
  }

  @media screen and (max-width: 600px) {
    height: auto;
    width: 90%;
    margin: auto;
    flex: 25%;
    max-width: 100%;

    img {
      width: 100%;
      vertical-align: middle;
      height: auto;
      margin: 0;
    }
  }

  .bought {
    background-color: rgba(255, 0, 0, 0.534);
    font-size: 25px;
    padding: 1em 0;
  }

  .status {
    background-color: rgba(14, 255, 14, 0.49);
    padding: 10px;
    margin: 0.5em 0;
    font-size: 25px;
  }
`;

export { StyledCard, StyledCardUpdate };
