import styled from 'styled-components'
import stars from '../../Assets/Images/stars.jpeg'

const WishList = styled.section`
background-image: url(${stars});
background-repeat: no-repeat;
background-attachment: fixed;
background-blend-mode: darken;
background-color: #000000c6;
background-size: cover;
min-height: 100vh;
display: flex;
flex-direction: column;
padding: 5em 0;

header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  margin: 0 auto;
  position: relative;

  h2, h1 {
    font-size: 3em;
    margin: 1.5em 0;
  }

  h2 {
    position: absolute;
    bottom: 0;
    font-size: 1.5em;
  }

  a {
      color: white;
      text-decoration: underline;
    
      &:hover{
      color: grey;
      cursor: pointer;
      transition: 300ms;
    }
    }

@media screen and (max-width: 600px) {
  width: 100%;
  margin: 5em auto;
  
    h1{
      margin: 1em;
      font-size: 8vw;
    }

    h2{
      font-size: 6vw;
    }
}

}

  
article{
display: grid;
width: 80%;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 3em;
margin: auto;
padding: 0;
position: relative;

@media screen and (max-width: 600px) {
        display: grid;
        grid-template-columns: auto;
        justify-content: center;
        width: 100%;
        margin: auto;

        header {
          width: 100%;
          padding: 0;
        }
}
}
`

export default WishList;