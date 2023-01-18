import {Routes, Route} from 'react-router-dom'
import Notfound from '../../Pages/Notfound'
import Wishlists from '../../Pages/WishLists/Wishlists'
import Rebecca from '../../Pages/Rebecca/Rebecca'
import Valdemar from '../../Pages/Valdemar/Valdemar'
import Contact from '../../Pages/Contact/Contact'
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
import LoginPage from '../../Pages/Login/LoginPage'
import AllMembersUpdate from '../../Pages/AllMembers/AllMembersUpdate'
import AllMembersAdmin from '../../Pages/AllMembers/AllMembersAdmin'
import AllMembers from '../../Pages/AllMembers/AllMembers'
import { AnimatePresence } from "framer-motion";
import Test from '../../Pages/Test/Test'
import TestUpdate from '../../Pages/Test/TestUpdate'
import TestAdmin from '../../Pages/Test/TestAdmin'


const Router = () => {

  const { loggedIn } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
    userInfo: store.userInfo,
    userName: store.username,
  }));

  // console.log(userInfo)

  return (
    <>
    <AnimatePresence mode='wait'>
    <Routes>
    
        <Route index path="/" element={<Wishlists/>} />
  
        <Route path="/login" element={<LoginPage/>}/>
        
        <Route path='/anne' element={<Anne/>}/>
        <Route path= "/anne/:id" element={<AnneUpdate/>}/> 
        <Route path="/adminanne" element={<AnneAdmin/>}/>

        <Route path='/mikkel' element={<Mikkel/>}/>  
        <Route path= "/mikkel/:id" element={<MikkelUpdate/>}/>
        <Route path= "/adminmikkel" element={<MikkelAdmin/>}/>
       
        <Route path='/rebecca' element={<Rebecca/>}/>
        <Route path= "/member1/:id" element={<RebeccaUpdate/>}/>
        <Route path= "/adminrebecca" element={<RebeccaAdmin/>}/>
        
        <Route path='/valdemar' element={<Valdemar/>}/>
        <Route path= "/valdemar/:id" element={<ValdemarUpdate/>}/>
        <Route path= "/adminvaldemar" element={<ValdemarAdmin/>}/>

        <Route path='/allmembers' element={<AllMembers/>}/>
        <Route path= "/allmembers/:id" element={<AllMembersUpdate/>}/>
        <Route path= "/adminallmembers" element={<AllMembersAdmin/>}/>

        <Route path='/test' element={<Test/>}/>
        <Route path= "/test/:id" element={<TestUpdate/>}/>
        <Route path= "/admintest" element={<TestAdmin/>}/>

      
        <Route path='/contact' element={<Contact/>}/>
        <Route path="*" element={<Notfound/>} />

        {loggedIn ? 
        <>
       {/* <Route path='/games' element={<Games/>}/> 
       <Route path='/flipgame' element={<FlipGame/>}/> */}
        </>
         
        
        : null}
    </Routes>
    </AnimatePresence>
    </>
  )
}

export default Router;