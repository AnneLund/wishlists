import React from 'react'
import Grid from '../../StyledComponents/Grid.Styled'
import Card4 from '../../Components/Cards/Card4'
import { useLoginStore } from '../Login/useLoginStore'
import { IoIosAddCircle } from "@react-icons/all-files/io/IoIosAddCircle";
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Mikkel = () => {
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
<h1>Mikkels ønskeseddel</h1> 
<Grid as="section">
<Card4/>
{userInfo === 'Mikkel' ? 
<div className='add'>
     <Link to="/adminmikkel">
      <Add><IoIosAddCircle/></Add>  
      </Link> 
 
</div>
       
: null}
</Grid>
</section>


  )
}

export default Mikkel;