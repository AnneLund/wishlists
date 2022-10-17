import React, { useState } from 'react'
import Form from '../Components/Partials/form'
import Card2 from '../Components/Partials/Card2'
import {Grid} from '../Components/StyledComponents/Grid.Styled'


const Valdemar = () => {

  return (
    <>
   
<h2>Valdemars ønskeseddel</h2>
<Grid as="section">
<Card2 wishId={2}/>
<Form formId={2}/>
</Grid>
</>
  )
}

export default Valdemar;