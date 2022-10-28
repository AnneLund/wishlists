import React from 'react'
import star from '../../Assets/Images/star.png'
import styled from 'styled-components'

const Loader = styled.div`
 width: 20vw;
 height: 10vw;
 background-color: red;
 display: flex;
 justify-content: center;
 align-items: center;

 img{
  width: 50%;
 }
`

const Loading = () => {
  return (
    <Loader>
      <p>Loader.....</p>
<img src={star} alt="star"/>
    </Loader>
  )
}

export default Loading;
