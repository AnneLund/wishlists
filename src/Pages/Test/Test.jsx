import React from 'react'
import { useLoginStore } from '../Login/useLoginStore'
import { Link} from 'react-router-dom';
import AddButton from '../../Components/Partials/AddButton';
import WishList from '../WishLists/WishList.Styled';
import CardTest from '../../Components/Cards/CardTest';
import Grid from '../../StyledComponents/Grid.Styled';
import Transitions from '../../StyledComponents/Transition';

const Test = () => {
const { role_id, loggedIn } = useLoginStore();
  return (
<Transitions>
<WishList>
<header>    
<h1>Ønskeseddel</h1> 
{loggedIn && role_id === 7 ? 
<span><Link to="/admintest"><AddButton/></Link></span> : <h2><Link to='/login'>Log ind</Link> for at teste ønskesedlen</h2>}
</header>
<Grid as='section'>
<CardTest/>
</Grid>
</WishList>
</Transitions>

  )
}

export default Test;