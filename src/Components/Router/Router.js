import {Routes, Route} from 'react-router-dom'
import Notfound from '../../Pages/Notfound'
import Home from '../../Pages/Home'
import Wishlists from '../../Pages/Wishlists'
import { StyledGlobals} from '../StyledComponents/Globals.Styled'
import Rebecca from '../../Pages/Rebecca'
import Valdemar from '../../Pages/Valdemar'
import Contact from '../../Pages/Contact'
import Loginform from '../../Pages/Login/LoginPage'

const Router = () => {

  return (
    <StyledGlobals>

    <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/login" element={<Loginform/>} />
        <Route path="/wishlists" element={<Wishlists/>} />

  
      
          <Route path='/wishlists/rebecca' element={<Rebecca/>}/>
          <Route path='/wishlists/valdemar' element={<Valdemar/>}/>
      
       
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Notfound/>} />
    </Routes>
    </StyledGlobals>
  )
}

export default Router;