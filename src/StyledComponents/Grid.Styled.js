import styled from 'styled-components'

const Grid = styled.section`
    width: 80%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2em;

@media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        width: 100%;
        margin: auto;
}
`
export default Grid;