import React from 'react'
import Card2 from '../../Components/Cards/Card2'
import Grid from '../../StyledComponents/Grid.Styled'
import { useLoginStore } from '../Login/useLoginStore'
import { IoIosAddCircle } from "@react-icons/all-files/io/IoIosAddCircle";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Valdemar = () => {
  const { loggedIn, userInfo } = useLoginStore((store) => ({
    loggedIn: store.loggedIn,
    userInfo: store.userInfo
  }));

  const Add = styled.figure`
    display: flex; 
    color: white;
    font-size: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  `

  return (
<section className='wish'>
  <h1>Valdemars ønskeseddel</h1>
<Grid as="section">
<Card2/>
{userInfo === 'Anne' || 'Mikkel' ? 
<div className='add'>
     <Link to="/adminvaldemar">
      <Add><IoIosAddCircle/></Add>  
      </Link> 
</div>
       
: null}
</Grid>
</section>
  )
}

export default Valdemar;