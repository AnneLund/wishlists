import React from 'react'
import Card3 from '../../Components/Cards/Card3'
import Grid from '../../StyledComponents/Grid.Styled'
import { useLoginStore } from '../Login/useLoginStore'
import { IoIosAddCircle } from "@react-icons/all-files/io/IoIosAddCircle";
import styled from 'styled-components';
import { Link } from 'react-router-dom';



const Anne = () => {

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
<h1>Annes ønskeseddel</h1> 
<Grid as="section">
<Card3/>
{userInfo === 'Anne' ? 
<div className='add'>
     <Link to="/adminanne">
      <Add><IoIosAddCircle/></Add>  
      </Link> 
</div>
       
: null}
</Grid>
</section>


  )
}

export default Anne;