import styled from "styled-components";

export const Flashmessage = styled.span`
  .floating-alert {
    // Common styles for both success and error messages
    display: block;
    position: fixed;
    z-index: 999999;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    animation: floatingAlert ease-in-out 2s forwards;
    animation-fill-mode: forwards;
    text-align: center;
    padding: 10px;
    border-radius: 3px;
    font-weight: 400;
    font-size: 25px;
  }

  .alert-success {
    // Styles specific to success messages
    background-color: green;
    color: black;
    border: solid 2px black;
  }

  .alert-danger {
    // Styles specific to error messages
    background-color: #ff000b;
    color: black;
    border: solid 1px black;
  }

  .floating-alerts .floating-alert:last-of-type {
    display: block;
  }

  @keyframes floatingAlert {
    // Animation keyframes
    0% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1.2);
    }
    // ... (rest of the keyframes)
  }

  @-webkit-keyframes floatingAlert {
    // Webkit-specific animation keyframes
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
    // ... (rest of the keyframes)
  }
`;
