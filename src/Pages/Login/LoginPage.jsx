import { useLoginStore } from "./useLoginStore";
import { useState } from "react";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import { Navigate } from "react-router-dom";
import StyledAdmin from "../../StyledComponents/Admin_Styled";
import Transitions from "../../StyledComponents/Transition";
import Loading from "../../Components/Partials/Loading";

const LoginPage = () => {
  const { setLoggedIn, loggedIn } = useLoginStore((store) => ({
    setLoggedIn: store.setLoggedIn,
    loggedIn: store.loggedIn,
    userInfo: store.userInfo,
    userName: store.userName,
  }));

  const [isLoading, setIsLoading] = useState(false);
  const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();

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
    setIsLoading(true);
    e.preventDefault();

    const endPoint = "https://wishlists-api-annelund.vercel.app/login";
    const username = user.username;
    const password = user.password;

    const data = { username: username, password: password };

    fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())

      .then((data) => {
        const role_id = data.payload.role_id;
        const username = data.payload.username;
        const token = data.token;
        if (token) {
          setLoggedIn(true, role_id, username, token);
          setIsLoading(false);
          setSuccessMessage(`Velkommen ${data.payload.username}!`);
        } else {
          setErrorMessage("Ingen brugere med disse kriterier");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return !loggedIn ? (
    <Transitions>
      <StyledAdmin>
        <h2>Log ind for at få adgang</h2>
        <form onSubmit={LogMeIn}>
          {isLoading ? <Loading /> : null}
          <input type="text" placeholder="Brugernavn" name="username" onChange={(e) => handleChange(e)} />
          <input type="password" placeholder="Adgangskode" name="password" onChange={(e) => handleChange(e)} />
          <button>Log ind</button>
        </form>
      </StyledAdmin>
    </Transitions>
  ) : (
    <Navigate to="/" />
  );
};

export default LoginPage;
