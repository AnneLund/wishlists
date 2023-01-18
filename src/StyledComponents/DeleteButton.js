import styled from 'styled-components'

const NoButton = styled.button`
background-color: rgba(255, 0, 0, 0.4);
color: black;
font-size: 1.5em;
font-weight: 600;
padding: 0.5em;
margin: 0.5em;
cursor: pointer;
box-shadow: black 3px 3px 3px;

&:hover{
background-color: red;
transition: 500ms;
}
`



export default NoButton