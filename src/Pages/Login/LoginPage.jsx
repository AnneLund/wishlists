import React, { useState } from "react";
import { Navigate } from "react-router-dom";

// Costum hooks
import { useLoginStore } from "./useLoginStore";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import appService from "../../Appservices/App.service";

// Styles
import StyledAdmin from "../../StyledComponents/Admin_Styled";
import Transitions from "../../StyledComponents/Transition";
import Loading from "../../Components/Partials/Loading";

const LoginPage = () => {
  const { setLoggedIn, loggedIn } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
  }));
  const [user, setUser] = useState({ username: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const logInUser = async (username, password) => {
    setIsLoading(true);
  
    try {
      const response = await appService.login(username, password);
      console.log('DATA:', response.data); // Opdateret for at logge den faktiske data
      const data = response.data; // Opdateret for korrekt at tilgå dataen
      
      if (data.token) {
        const { role_id, username } = data.payload;
        setLoggedIn(true, role_id, username, data.token);
        setSuccessMessage(`Velkommen ${username}!`);
      } else {
        setErrorMessage("Ingen brugere med disse kriterier");
      }
    } catch (error) {
      console.error("Error:", error.response ? error.response.data : "Error under login");
      setErrorMessage("Der opstod en fejl under login");
    } finally {
      setIsLoading(false);
    }
};

  

  const handleLogin = (e) => {
    e.preventDefault();
    const { username, password } = user; // Ændret fra hashedPassword til password
    logInUser(username, password);
  };
  
  if (loggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Transitions>
      <StyledAdmin>
        <h2>Log ind for at få adgang</h2>
        <form onSubmit={handleLogin}>
          {isLoading && <Loading />}
          <input type="text" placeholder="Brugernavn" name="username" onChange={handleChange} />
          <input type="password" placeholder="Adgangskode" name="password" onChange={handleChange} />
          <button>Log ind</button>
        </form>
      </StyledAdmin>
    </Transitions>
  );
};

export default LoginPage;
