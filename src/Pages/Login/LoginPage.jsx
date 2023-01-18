import { useLoginStore } from "./useLoginStore";
import { useState } from "react";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { Navigate } from "react-router-dom";
import Admin from "../../StyledComponents/Admin_Styled";
import Transitions from "../../StyledComponents/Transition";

const LoginPage = () => {
    const { setLoggedIn, loggedIn } = useLoginStore((store) => ({
        setLoggedIn: store.setLoggedIn,
        loggedIn: store.loggedIn,
        userInfo: store.userInfo,
        userName: store.userName,
      }));

      const { setFlashMessage } = useFlashMessageStore((store) => ({
        setFlashMessage: store.setFlashMessage,
      }));
    
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
    
      const LogMeIn = (e) => {
        e.preventDefault();
    
        const endPoint = "https://wishlists-api-annelund.vercel.app/login";
        const username = user.username;
        const password = user.password;
 
        const data = { username: username, password: password};
      
        fetch(endPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          
        })
          .then((response) => response.json())
   
          .then((data) => {
            console.log(data)
            const role_id = data.payload.role_id;
            const username = data.payload.username;
            const token = data.payload.token;
            if (data.token) {
              setLoggedIn(true, role_id, username, token);
              console.log(data)
              setFlashMessage(`Velkommen ${data.payload.username}!`);
            } else {
              setFlashMessage("Ingen brugere med disse kriterier");
            }

          })
          .catch((error) => {
            console.error("Error:", error);
            setFlashMessage("Ingen brugere med disse kriterier");
          });
      };

      return !loggedIn ? (
        <Transitions>
        <Admin>
          <h1>Log ind for at få adgang</h1>
        <form onSubmit={LogMeIn}>
          <input type="text" placeholder="Brugernavn" name="username" onChange={(e) => handleChange(e)} />
          <input type="password" placeholder="Adgangskode" name="password" onChange={(e) => handleChange(e)} />
          <button>Log ind</button>
        </form>
        </Admin>
        </Transitions>
      ) : (
        <Navigate to="/"/>
      );
};

export default LoginPage;

