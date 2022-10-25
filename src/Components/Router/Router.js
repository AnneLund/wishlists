import {Routes, Route} from 'react-router-dom'
import Notfound from '../../Pages/Notfound'
import Home from '../../Pages/Home'
import Wishlists from '../../Pages/WishLists/Wishlists'
import Rebecca from '../../Pages/Rebecca/Rebecca'
import Valdemar from '../../Pages/Valdemar/Valdemar'
import Contact from '../../Pages/Contact/Contact'
import Loginform from '../../Pages/Login/LoginPage'
import Anne from '../../Pages/Anne/Anne'
import Mikkel from '../../Pages/Mikkel/Mikkel'
import { useLoginStore } from '../../Pages/Login/useLoginStore'
import AnneAdmin from '../../Pages/Anne/AnneAdmin'
import MikkelAdmin from '../../Pages/Mikkel/MikkelAdmin'
import RebeccaAdmin from '../../Pages/Rebecca/RebeccaAdmin'
import ValdemarAdmin from '../../Pages/Valdemar/ValdemarAdmin'

const Router = () => {

  const { setLoggedIn, loggedIn, userInfo, userName } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
    userInfo: store.userInfo,
    userName: store.username,
  }));

  return (
    <>
    <Routes>
    
        <Route index path="/" element={<Home/>} />
        <Route path="/login" element={<Loginform/>} />

        <Route path= "/adminanne" element={<AnneAdmin/>}/>
        <Route path= "/adminmikkel" element={<MikkelAdmin/>}/>
        <Route path= "/adminrebecca" element={<RebeccaAdmin/>}/>
        <Route path= "/adminvaldemar" element={<ValdemarAdmin/>}/>
   
        <Route path="/wishlists" element={<Wishlists/>}/>

          <Route path='/wishlists/rebecca' element={<Rebecca/>}/>
          <Route path='/wishlists/valdemar' element={<Valdemar/>}/>
          <Route path='/wishlists/anne' element={<Anne/>}/>
          <Route path='/wishlists/mikkel' element={<Mikkel/>}/>
          
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Notfound/>} />
    </Routes>
    </>
  )
}

export default Router;