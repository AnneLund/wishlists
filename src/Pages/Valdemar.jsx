import React from 'react'
import Card2 from '../Components/Partials/Card2'
import Grid from '../StyledComponents/Grid.Styled'
import { Page } from '../Components/Layout/Page'


const Valdemar = () => {

  return (
<Page title="Valdemars ønskeseddel">
<Grid as="section">
<Card2 wishId={2}/>
</Grid>
</Page>
  )
}

export default Valdemar;