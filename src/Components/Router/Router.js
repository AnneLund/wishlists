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
import AnneAdmin from '../../Pages/Anne/AnneAdmin'
import MikkelAdmin from '../../Pages/Mikkel/MikkelAdmin'
import RebeccaAdmin from '../../Pages/Rebecca/RebeccaAdmin'
import ValdemarAdmin from '../../Pages/Valdemar/ValdemarAdmin'
import AnneUpdate from '../../Pages/Anne/AnneUpdate'
import MikkelUpdate from '../../Pages/Mikkel/MikkelUpdate'
import RebeccaUpdate from '../../Pages/Rebecca/RebeccaUpdate'
import ValdemarUpdate from '../../Pages/Valdemar/ValdemarUpdate'
import { useLoginStore } from '../../Pages/Login/useLoginStore'

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

        <Route path="/wishlists" element={<Wishlists/>}/>

        <Route path='/anne' element={<Anne/>}/>
        <Route path= "/anne/:id" element={<AnneUpdate/>}/> 
        <Route path="/adminanne" element={<AnneAdmin/>}/>

        <Route path='/mikkel' element={<Mikkel/>}/>  
        <Route path= "/mikkel/:id" element={<MikkelUpdate/>}/>
        <Route path= "/adminmikkel" element={<MikkelAdmin/>}/>
       
        <Route path='/rebecca' element={<Rebecca/>}/>
        <Route path= "/rebecca/:id" element={<RebeccaUpdate/>}/>
        <Route path= "/adminrebecca" element={<RebeccaAdmin/>}/>
        
        <Route path='/valdemar' element={<Valdemar/>}/>
        <Route path= "/valdemar/:id" element={<ValdemarUpdate/>}/>
        <Route path= "/adminvaldemar" element={<ValdemarAdmin/>}/>
      
          
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Notfound/>} />
    </Routes>
    </>
  )
}

export default Router;