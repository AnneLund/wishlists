import React from 'react'
import styled from 'styled-components'

const Loading_Container = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1em;
  position: absolute;
  left: 50%;
`

const Loader = styled.div`
  border: 16px solid rgba(0, 0, 0, 0.824); /* Light grey */
  border-top: 16px solid #348ddb; /* Blue */
  border-radius: 50%;
  width: 5em;
  height: 5em;
  display: block;
  justify-content: center;
  position: fixed;
  z-index: 999999;
  animation: spin 2s linear infinite;

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@media screen and (max-width: 600px) {
  .loader{
    left: 35%;
  }
}
`

const Loading = () => {
 
  return (
  <Loading_Container>
  <Loader/>  
  </Loading_Container> 
  )
}

export default Loading;
