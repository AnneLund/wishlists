import styled from 'styled-components'


const StyledHeader = styled.header`

/* header{
background-color: black;
box-shadow: black 2px 5px 5px 5px;
position: relative;
z-index: 5;

    nav{
        display: flex;
        justify-content: flex-end;
        
      ul{
        display: flex;
        justify-content: flex-end;
        li{
          list-style-type: none;
          margin-left: 3vw;
          padding: 2vw 3vw 1vw 0;
         
      
          &:hover{
            background-color: rgba(162, 162, 162, 0.412);
            transition: 300ms;
          }
        
          a{
          text-decoration: none;  
          color: white;
          font-family: 'Aboreto', cursive;
          font-size: 1.5em;
          } 
        }
      }  
      }

  } */

  /* Position and sizing of burger button */
.bm-burger-button {
  position: fixed;
  width: 36px;
  height: 30px;
  right: 36px;
  top: 36px;
}

/* Color/shape of burger icon bars */
.bm-burger-bars {
  background: white;
}

li{
  list-style-type: none;
}

/* Color/shape of burger icon bars on hover*/
.bm-burger-bars-hover {
  background: #cccc;
  transition: 300ms;
}

/* Position and sizing of clickable cross button */
.bm-cross-button {
  height: 24px;
  width: 24px;
}

/* Color/shape of close button cross */
.bm-cross {
  background: white;
}

/*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
.bm-menu-wrap {
  position: fixed;
  height: 100%;
}

/* General sidebar styles */
.bm-menu {
  background: #373a47;
  padding: 2.5em 1.5em 0;
  font-size: 1.15em;
}

/* Morph shape necessary with bubble or elastic */
.bm-morph-shape {
  fill: #373a47;
}

/* Wrapper for item list */
.bm-item-list {
  padding: 0.8em;
 
}

/* Individual item */
.bm-item {
  display: inline-block;
  color: white;
  margin-bottom: 0.7em;

  &:hover{
    color: #cccc;
  }
}

/* Styling of overlay */
.bm-overlay {
  background: #cccc;
}


  @media screen and (max-width: 600px) {
    header{
      margin: auto;
    }
  }

`
export {StyledHeader}