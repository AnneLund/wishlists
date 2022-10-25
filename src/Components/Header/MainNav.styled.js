import styled from "styled-components";

export const MainNav = styled.ul`
position: absolute;
display: flex;
width: 100%;
height: 10vh;
z-index: 800;
background-color: rgba(0, 0, 0, 0.618);
flex-wrap: wrap;
justify-content: space-between;
padding: ${(props) => (props.shrinkHeader ? "0.2rem" : "1rem")} 4rem;
transition: padding 500ms ease;

li{
    list-style: none;
    &:last-of-type{
        margin-left: auto;
    }
}

@media (max-width: 768px){
    padding: 1rem;
    height: auto;
    display: flex;
    justify-content: flex-end;

    li{
        width: 100%;
    }
}
`