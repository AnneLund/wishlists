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
      const [open2, setOpen2] = React.useState(false);

      const handleOpen = () => {
        setOpen(!open);
      };

      const handleOpen2 = () => {
        setOpen2(!open2);
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


{userInfo === 'Anne' || 'Mikkel' ? 
<DropDown2>
<button onClick={handleOpen2}>Rediger ønskesedler</button>
{open2 ? <ul onClick={handleOpen2}>
         <li>
             <Link to="/adminrebecca">
                 <p className='reb_link'>
                 Redigér Rebeccas ønskeseddel
                 </p>
                 </Link>
         </li>

         <li>
             <Link to="/adminvaldemar">
                 <p className='val_link'>
                    Redigér Valdemars ønskeseddel
                 </p>
                 </Link>
         </li>

         {userInfo === 'Anne' ?
<li>
<Link to="/adminanne">
               <p>Redigér din egen ønskeseddel</p> 
      </Link>  
</li>
    
            
        : null 
        }
         {userInfo === 'Mikkel' ?  
            <Link to="/adminmikkel">
              <p> Redigér din egen ønskeseddel</p> 
            </Link>
      
        : null 
        }

     </ul> : null}
     
 </DropDown2>
 
: null}

</Nav>
       </WishListsPage>       
    )
}

export default Wishlists;