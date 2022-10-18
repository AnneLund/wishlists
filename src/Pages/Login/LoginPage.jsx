import { useState, useEffect } from "react";
import Axios from 'axios'
import {useFlashMessageStore} from "../../Components/FlashMessages/useFlashMessageStore";
import {useLoginStore} from "./useLoginStore";
import {Navigate} from 'react-router-dom'
import Wishlists from "../Wishlists";
import StyledLoginPage from "../../StyledComponents/LoginPage.Styled";

const LoginPage = () => {

  const [username, setUername] = useState();
  const [password, setPassword] = useState ();
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

  const userName = data.user.map(use => {
    return use.username;
  })

  const passWord = data.user.map(pass => {
    return pass.password;
  })
    
  // console.log(userName)
  // console.log(passWord)
  // console.log(idx)

if(userName.includes(`${username}`) && passWord.includes(`${password}`)){
  setFlashMessage('Du er logget ind!')
  setLoggedIn()
  window.location.replace('/#/wishlists');
}
else{
  setFlashMessage('Forkert brugernavn eller password!')
}

   };
   
   return (
  <StyledLoginPage>
   {!loggedIn ? 
         <div className='login'>
             <h1>Log ind for at se ønskesedlerne</h1>
             <input
                type='text'
                placeholder='Brugernavn'
                onChange = { (e) => {
                   setUername (e.target.value);
                }}
                /> <br/>
             <input
                type='password'
                placeholder='Kodeord'
                onChange = { (e) => {
                   setPassword (e.target.value);
                }}
             />
         <button onClick={() => login()}>Log ind</button>
 </div>

:

<Wishlists/>

      }
      </StyledLoginPage>
   );

}

export default LoginPage;

