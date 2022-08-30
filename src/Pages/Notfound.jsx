import React from 'react'
import {Page} from '../Components/App/Layout/Page'

const Notfound = () => {

const path = window.location.href;

const url =  path.substring(path.lastIndexOf("/") + 1)

return <Page title={`Siden ${url} blev ikke fundet`} description={`Siden ${url} blev ikke fundet`}/>

}

export default Notfound;
