import styled from 'styled-components'

const Grid = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 4em;
margin: 2em;

@media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
}

`
export default Grid;