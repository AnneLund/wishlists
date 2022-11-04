import { useState, useEffect } from "react";
import Axios from 'axios'
import {useFlashMessageStore} from "../../Components/FlashMessages/useFlashMessageStore";
import {useLoginStore} from "./useLoginStore";
import {Navigate} from 'react-router-dom'
import StyledLoginPage from "./LoginPage.Styled";

const LoginPage = () => {
  const { setLoggedIn, loggedIn } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
    userInfo: store.userInfo,
    userName: store.username,
  }));

  const [data, setData] = useState([]);
  const { setFlashMessage } = useFlashMessageStore();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (evt) => {
    const value = evt.target.value;
    setUser({
      ...user,
      [evt.target.name]: value,
    });
  };

  useEffect(()=> {
      const fetchData = async () => {
      const result = await Axios('https://my-wish-api.vercel.app/api/users');
        setData(result.data);
      };
  
       fetchData();
  
      }, []);

const login = () => {
  const username = user.username;
  const password = user.password;
 
  const userName = data.user.map(use => {
    return use.username;
  })

  const passWord = data.user.map(pass => {
    return pass.password;
  })

if(userName.includes(`${username}`) && passWord.includes(`${password}`)){
  setFlashMessage(`Velkommen ${username}!`)
  setLoggedIn(true, username, data.userInfo, data.userName)
  window.location.replace('/#/wishlists');
}
else{
  setFlashMessage('Forkert brugernavn eller password!')
}
};

   return (
  <StyledLoginPage>
   {!loggedIn ? 
         <form className='login' onSubmit={login}>
             <h1>Log ind for at få adgang</h1>
             <input type="text" name="username" placeholder="Brugernavn" onChange={(e) => handleChange(e)} />
      <input type="password" name="password" placeholder="Password" onChange={(e) => handleChange(e)} />
      <button>Log ind</button>
 </form>
:
<Navigate to="/wishlists" />
}

</StyledLoginPage>
   );
}

export default LoginPage;

