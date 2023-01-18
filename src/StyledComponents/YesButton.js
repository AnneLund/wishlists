import React from 'react'
import styled from 'styled-components'

const YesButton = styled.button`
padding: 0.5em; 
font-size: 1.5em;
margin: 0.5em;
cursor: pointer; 
box-shadow: black 3px 3px 3px;

&:hover{
  background-color: rgba(0, 128, 0, 0.346);
  transition: 500ms;
  color: white;
}
`

export default YesButton