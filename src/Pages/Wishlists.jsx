import {Link, Routes, Route, Outlet} from 'react-router-dom'
import { StyledGlobals } from '../Components/StyledComponents/Globals.Styled';
import stars from '../Assets/Images/stars.jpeg'
import styled from 'styled-components'
import {useLoginStore} from "./Login/useLoginStore";
import {Navigate} from 'react-router-dom'

const Wishlists = () => {
    const { setLoggedOut } = useLoginStore((store) => ({
        setLoggedOut: store.setLoggedOut,
      }));
    
      const handleLogOut = () => {
        setLoggedOut();
       <Navigate to="/login"/>
      };

    const Content = styled.section`
    background-image: url(${stars});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: darken;
    background-color: #000000c6;
    background-size: cover;
    min-height: 100vh;
    padding: 4em 0;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    
  .logout{
    position: absolute;
    top: 5%;
    right: 15%;
    padding: 0.5em;
    margin: 0.2em;
  } 
    
    .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;

     ul{
        display: flex;
        justify-content: center;
        gap: 4em;
     }

     li{
        list-style-type: none;
        font-size: 2em;
        font-weight: bold;
      

.reb_link{
   color: white;
  &:hover{
                 color: rgb(177, 97, 168);
                 transition: 300ms;
             }    
 }

 @media screen and (max-width: 600px) {
    .reb_link{
     font-size: 6vw;    
    }
   
 }

 .val_link{
    color: white;
  &:hover{
                 color: rgba(43, 16, 217, 0.575);
                 transition: 300ms;
             }    

        }

        @media screen and (max-width: 600px) {
    .val_link{
     font-size: 6vw;    
    }
   
 }
        
 }
     }
     
     @media screen and (max-width: 600px) {
        .nav{
            margin: 5vh 0 15vh 0;
        }
     }
    
a{
    text-decoration: none;
}
`

    return(
        <StyledGlobals>
            <Content>
     <section className='wishlists'>
     <button className='logout' onClick={() => handleLogOut()}>Log ud</button>
        <nav className='nav'>
            <ul>
                <li>
                    <Link to="/wishlists/rebecca">
                        <p className='reb_link'>
                        Rebeccas ønskeseddel
                        </p>
                        </Link>
                </li>
                <li>
                    <Link to="/wishlists/valdemar">
                        <p className='val_link'>
                            Valdemars ønskeseddel
                        </p>
                        </Link>
                </li>
            </ul>
        </nav>
       <Outlet/>  
       </section>
       </Content>
        </StyledGlobals>
      
    )
}

export default Wishlists;