import React from 'react'
import Card3 from '../Components/Partials/Card3'
import Grid from '../StyledComponents/Grid.Styled'
import { Page } from '../Components/Layout/Page'

const Anne = () => {

  return (
<Page title="Annes ønskeseddel">
<Grid as="section">
<Card3/>
</Grid>
</Page>
  )
}

export default Anne;