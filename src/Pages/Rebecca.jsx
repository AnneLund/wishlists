import React, { useState } from 'react'
import Form from '../Components/Partials/form'
import Card from '../Components/Partials/Card'
import {Grid} from '../Components/StyledComponents/Grid.Styled'
import { StyledGlobals } from '../Components/StyledComponents/Globals.Styled'

const Rebecca = () => {

  return (
    <StyledGlobals>
   
<h2>Rebeccas ønskeseddel</h2>
<Grid as="section">
<Card/>
<Form/>
</Grid>
</StyledGlobals>
  )
}

export default Rebecca;
