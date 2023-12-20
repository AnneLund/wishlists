import React from "react";
import styled from "styled-components";

const LoadingContainer = styled.div`
  position: fixed;
  z-index: 999999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Loader = styled.div`
  border: 16px solid rgba(0, 0, 0, 0.824); /* Light grey */
  border-top: 16px solid #348ddb; /* Blue */
  border-radius: 50%;
  width: 5em;
  height: 5em;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingContainer>
      <Loader />
    </LoadingContainer>
  );
};

export default Loading;
