import {Routes, Route} from 'react-router-dom'
import Notfound from '../../../Pages/Notfound'
import Home from '../../../Pages/Home'
import Wishlists from '../../../Pages/Ønskesedler'
import Rebecca from '../../../Pages/Rebecca'
import Valdemar from '../../../Pages/Valdemar'

const Router = () => {
  return (
    <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="wishlists" element={<Wishlists/>}/>
        <Route path="valdemar" element={<Valdemar/>}/>
        <Route path="rebecca" element={<Rebecca/>}/>
        {/* <Route path="goals" element={<GoalList/>}>
            <Route path=":id" element={<GoalDetails/>} />
        </Route> */}

        <Route path="*" element={<Notfound/>} />
    </Routes>
  )
}

export default Router;