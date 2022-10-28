import {Link} from 'react-router-dom'
import {useLoginStore} from "../Login/useLoginStore";
import styled from 'styled-components';
import React from 'react';
import stars from '../../Assets/Images/stars.jpeg'
import {Nav, DropDown, DropDown2} from './WishNav.Styled'

const Wishlists = () => {

      const { loggedIn, userInfo } = useLoginStore((store) => ({
        setLoggedIn: store.setLoggedIn,
        loggedIn: store.loggedIn,
        userInfo: store.userInfo,
        userName: store.userName,
      }));

      const [open, setOpen] = React.useState(false);

      const handleOpen = () => {
        setOpen(!open);
      };

    const WishListsPage = styled.section`
    background-image: url(${stars});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-blend-mode: darken;
    background-color: #000000c6;
    background-size: cover;
    min-height: 100vh;
    padding: 4em 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    margin: 0;
`
    return(
<WishListsPage>
    <Nav>
            {loggedIn ?  <>   
            <DropDown>
              <button onClick={handleOpen}>Vælg en ønskeseddel</button>
{open ? 

<ul onClick={handleOpen}>
         <li>
             <Link to="/wishlists/rebecca">
                 <p>
                 Rebeccas ønskeseddel
                 </p>
              </Link>
         </li>

         <li>
             <Link to="/wishlists/valdemar">
                 <p>
                     Valdemars ønskeseddel
                 </p>
                 </Link>
         </li>

    
        <li>
             <Link to="/wishlists/anne">
                 <p>
                     Annes ønskeseddel
                 </p>
                 </Link>
         </li> 

        <li>
             <Link to="/wishlists/mikkel">
                 <p>
                     Mikkels ønskeseddel
                 </p>
                 </Link>
         </li>
     </ul> 
     
     : null}
     
 </DropDown>

       </>   
  : null}

</Nav>
       </WishListsPage>       
    )
}

export default Wishlists;