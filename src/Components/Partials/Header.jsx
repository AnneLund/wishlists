import {Link} from 'react-router-dom'
import {StyledHeader} from '../StyledComponents/Header.Styled';
import { slide as Menu } from 'react-burger-menu'


const Header = () => {

    return(
        <StyledHeader>
     
            <Menu right>
                <nav className='bm-menu'>
                <ul className='bm-item-list'>
             <li>
               <Link to="/">
                 <p className='bm-item'>Forside</p> 
                   </Link>  
            </li> 

            <li>
              <Link to="/login">
                <p className='bm-item'>Ønskesedler</p>
              </Link>
            </li>
{/* 
            <li>
             <Link to="../wishlists">
                   <p className='bm-item'>  Ønskesedler  </p> 
                      </Link>    
            </li> */}

            <li>
             <Link to="/contact">
                   <p className='bm-item'> Kontakt  </p> 
                      </Link>    
            </li>
                      </ul>
                      </nav>
                      </Menu>
                     
 </StyledHeader>
                  
 



    )
}

export default Header;