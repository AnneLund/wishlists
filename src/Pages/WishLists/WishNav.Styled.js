import styled from 'styled-components'

const DropDown = styled.div`
position: relative;
  button{
    padding: 1em;
    cursor: pointer;
  }
 
ul {
  position: absolute;
  z-index: 20000;
  list-style-type: none;
  margin: auto;
  padding: 1.5em;
  background-color: #000000ce;
  animation: open ease-in 500ms forwards;

  @keyframes open {
    from{
        opacity: 0%;
        transform: translateY(-15%)
    }

    to{
        opacity: 100%;
        transform: translateY(0%);
    }
  }
  
p {
  margin: 1em auto;
  color: white;
  font-size: 1.5em;

&:hover {
  background-color: #d3d3d3cc;
  color: black;
}
}
}
`

const DropDown2 = styled.div`
position: relative;
  button{
    padding: 1em;
    cursor: pointer;
  }
 
ul {
  position: absolute;
  z-index: 20000;
  list-style-type: none;
  margin: auto;
  padding: 1.5em;
  background-color: #000000ce;
  animation: open2 ease-in 500ms forwards;

  @keyframes open2 {
    from{
        opacity: 0%;
        transform: translateY(-15%)
    }

    to{
        opacity: 100%;
        transform: translateY(0%);
    }
  }
  
p {
  margin-top: 1em;
  color: white;
  font-size: 1.5em;

&:hover {
  background-color: #d3d3d3cc;
  color: black;
}
}
}
`

const Nav = styled.nav`
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: -10em;
      gap: 2em;
@media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
}
`

export {Nav, DropDown, DropDown2}