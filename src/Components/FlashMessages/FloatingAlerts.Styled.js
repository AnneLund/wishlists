import styled from "styled-components";

export const Flashmessage = styled.span`
  .floating-alert {
    display: block;
    position: fixed;
    z-index: 999999;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    animation: floatingAlert ease-in-out 2s forwards;
    animation-fill-mode: forwards;
    background-color:  #00ff4885;
    text-align: center;
    color:  black;
    padding: 10px;
    border: solid 2px black;
    border-radius: 3px;
    font-weight: 400;
    font-size: 25px;

  }

  .floating-alerts .floating-alert:last-of-type {
    display: block;
  }
  @keyframes floatingAlert {
    0% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1.2);
    }
    9% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }
    91% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }
    100% {
      opacity: 1;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
  }
  @-webkit-keyframes floatingAlert {
    0% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
    9% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }
    91% {
      opacity: 1;
      visibility: visible;
      transform: translateX(-50%) scale(1);
    }
    100% {
      opacity: 0;
      visibility: hidden;
      transform: translateX(-50%) scale(1.2);
    }
  }
`;