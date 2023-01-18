import React from 'react'
import styled from 'styled-components'
import { IoIosAddCircle } from "@react-icons/all-files/io/IoIosAddCircle";

const Add = styled.div`
display: flex;
font-size: 3em;
display: flex;
justify-content: center;
align-items: center;
margin: auto;
cursor: pointer;

&:hover{
  color: #0080005a;
}
`
const AddButton = () => {
  return (
    <Add>
    <IoIosAddCircle />
    </Add>  
  )
}

export default AddButton