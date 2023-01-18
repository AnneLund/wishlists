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

.burger{
overflow: hidden;
display: flex;
justify-content: space-between;
align-items: center;
gap: 1.5em;
position: relative;

@media (max-width: 768px){
  flex-direction: column;
  transition: max-height 0.3 ease-in;
  width: 100%;
  z-index: 50000;
  max-height: ${({isOpen}) => isOpen ? 'auto' : '0'};
}    
}

li{
    list-style: none;
    &:last-of-type{
        margin-left: auto;
    }

    a{
        padding: 0.3em;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  background-color: rgba(0, 0, 0, 0.618);
  font-size: 1.5em;
  &:hover{
      background-color: grey;
      cursor: pointer;
      transition: 300ms;
    }

  @media (max-width: 768px){
    display: block;
    width: 100%;
  }

  li{
    padding: .4rem 1.2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3s ease-in;
  background-color: #333;
  font-size: 1em;
  &:hover{
      background-color: grey;
      cursor: pointer;
      transition: 300ms;
    }

  @media (max-width: 768px){
    display: block;
    width: 100%;
  }
  }
    }
}

@media (max-width: 768px){
    background-color: black;
    padding: 1rem;
    height: auto;
    display: flex;
    justify-content: flex-end;

    li{
        width: 100%;
        background-color:  #fff7;
    }
}

`

