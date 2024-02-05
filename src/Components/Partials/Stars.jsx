import React from 'react'
import styled from 'styled-components'
import stars from '../../Assets/Images/stars.svg'
import stars2 from '../../Assets/Images/stars2.svg'
import stars3 from '../../Assets/Images/stars3.svg'

const Twinkle = styled.div`
position: relative;
display: flex;
flex-direction: row;
width: 100%;
overflow: hidden;
img{
    width: 50%;
    height: 100vh;
}

@media screen and (max-width: 600px) {
    img{
        width: 100%;
    }
    .stars2, .stars3 {
        display: none;
    }
}
        
`

const Stars = () => {
  return (
    <Twinkle> 
        <img alt='star' className='stars' src={stars}/>
        <img alt='star' className='stars2' src={stars2}/>
        <img alt='star' className='stars3' src={stars3}/>
    </Twinkle>
  )
}

export default Stars