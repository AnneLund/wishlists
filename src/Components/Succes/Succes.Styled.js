import styled from "styled-components";

export const SuccesStyled = styled.div`
  display: ${(props) => props.showSucces}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 20; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.8); /* Black w/ opacity */
 

  main {
    position: relative;
    width: 100%;
    min-height: 100vh;
    img{
      width: 100%;
      animation: falling 5s forwards;
    }

  }

  @keyframes spinner {
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (max-width: 600px) {
    main{
      margin: auto;
    }
  }


`;
