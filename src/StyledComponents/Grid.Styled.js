import styled from 'styled-components'

const Grid = styled.section`
display: grid;
grid-template-columns: auto auto auto auto;
gap: 5em;
margin: auto;
padding: 0;
position: relative;

@media screen and (max-width: 600px) {
        display: grid;
       grid-template-columns: auto;
        justify-content: center;
        margin: 0;
        padding: 0;
}
`
export default Grid;