import { useState, useEffect } from "react";
import {Page} from "../../Components/Layout/Page";
import Axios from 'axios'
import {useFlashMessageStore} from "../../Components/FlashMessages/useFlashMessageStore";
import {useLoginStore} from "./useLoginStore";
import {Navigate} from 'react-router-dom'
import Wishlists from "../Wishlists";


const LoginPage = () => {
  const [username, setUername] = useState();
  const [password, setPassword] = useState ();
  const [loginStatus, setLoginStatus] = useState("");
  const [data, setData] = useState([]);
  const { setFlashMessage } = useFlashMessageStore();

  
const { setLoggedIn } = useLoginStore((store) => ({
   setLoggedIn: store.setLoggedIn,
 }));

 const { loggedIn } = useLoginStore((store) => ({
   loggedIn: store.loggedIn,
 }));

  useEffect(()=> {
      const fetchData = async () => {
      const result = await Axios('https://next-database.vercel.app/api/users');
  
        setData(result.data);
      };
  
       fetchData();
  
      }, []);

  const login = () => {

if(data.data[0].username === username && data.data[0].password === password){
  setFlashMessage('Du er logget ind!')
  setLoggedIn
(<Navigate to="/wishlists" />)
}
else{
  setFlashMessage('Forkert brugernavn eller password!')
}

   };
   
   return (
  <>
   {!loggedIn ? 
         <div className='login'>
             <h1>Log ind for at se ønskesedlerne</h1>
             <input
                type='text'
                placeholder='Username'
                onChange = { (e) => {
                   setUername (e.target.value);
                }}
                /> <br/>
             <input
                type='password'
                placeholder='Password…'
                onChange = { (e) => {
                   setPassword (e.target.value);
                }}
             />
         <button onClick={() => login()}>Log ind</button>
 </div>

:

<Wishlists/>

      }
      </>
   );

}

export default LoginPage;

