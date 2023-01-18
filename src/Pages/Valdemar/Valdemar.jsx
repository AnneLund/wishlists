import React from 'react'
import Card4 from '../../Components/Cards/Card4'
import Grid from '../../StyledComponents/Grid.Styled'
import { useLoginStore } from '../Login/useLoginStore'
import AddButton from '../../Components/Partials/AddButton'
import WishList from '../WishLists/WishList.Styled'
import {Link} from 'react-router-dom'

const Valdemar = () => {
const {role_id } = useLoginStore();

  return (
<WishList>
<header>
<h1>Valdemars ønskeseddel</h1> 
{role_id === 4 || role_id === 6 || role_id === 3 ?   
<span><Link to="/adminvaldemar"><AddButton/></Link></span> 
: null}  
</header>
<Grid as='section'>
<Card4/>
</Grid>
</WishList>
  )
}

export default Valdemar;