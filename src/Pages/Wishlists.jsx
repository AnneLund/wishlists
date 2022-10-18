import {Link, Routes, Route, Outlet} from 'react-router-dom'
import {useLoginStore} from "./Login/useLoginStore";
import WishListsPage from '../StyledComponents/WishListsPage.Styled';

const Wishlists = () => {
    const { setLoggedOut } = useLoginStore((store) => ({
        setLoggedOut: store.setLoggedOut,
      }));
    
      const handleLogOut = () => {
        setLoggedOut();
        window.location.replace('/#/login');
      };

    

    return(
            <WishListsPage>
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
                <li>
                    <Link to="/wishlists/anne">
                        <p className='anne_link'>
                            Annes ønskeseddel
                        </p>
                        </Link>
                </li>
                <li>
                    <Link to="/wishlists/mikkel">
                        <p className='mikkel_link'>
                            Mikkels ønskeseddel
                        </p>
                        </Link>
                </li>
            </ul>
        </nav>
       <Outlet/>  
       </WishListsPage>
    )
}

export default Wishlists;