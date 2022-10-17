import {useLoginStore} from "./useLoginStore";
import {Navigate} from 'react-router-dom'

const LogOut = () => {
  const { setLoggedOut } = useLoginStore((store) => ({
    setLoggedOut: store.setLoggedOut,
  }));

  const handleLogOut = () => {
    setLoggedOut;
   <Navigate to="/login"/>
  };

  return <button onClick={() => handleLogOut()}>Log ud</button>;
};

export default LogOut;
