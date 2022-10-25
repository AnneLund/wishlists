import styled from 'styled-components'

const Grid = styled.section`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap: 4em;
margin: 2em;
padding: 4em 0;

padding: 4em 0;
justify-content: center;
position: relative;
margin: 0;

@media screen and (max-width: 600px) {
        display: flex;
        flex-direction: column;
}

`
export default Grid;