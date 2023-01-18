import React from 'react'
import Card1 from '../../Components/Cards/Card1'
import Grid from '../../StyledComponents/Grid.Styled'
import { useLoginStore } from '../Login/useLoginStore'
import AddButton from '../../Components/Partials/AddButton';
import { useNavigate, Link } from 'react-router-dom';
import WishList from '../WishLists/WishList.Styled';
import Transitions from '../../StyledComponents/Transition';

const Anne = () => {
const Navigate = useNavigate()
const { role_id } = useLoginStore();
  
return (
  <Transitions>
<WishList>
<header>
<h1>Annes ønskeseddel</h1> 
{role_id === 3 ?   
<span><Link to="/admintest"><AddButton/></Link></span> 
: null}  
</header>
<Grid as="section">
<Card1/>
</Grid>
</WishList>
</Transitions>
  )
}

export default Anne;