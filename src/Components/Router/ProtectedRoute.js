import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginStore } from "../../Pages/Login/useLoginStore";

const ProtectedRoute = ({ children, restrictedTo }) => {
  const navigate = useNavigate();
  const { role_id } = useLoginStore();

  useEffect(() => {
    if (role_id === 6 && restrictedTo === "wishlists") {
      navigate("/guest");
    } else if (role_id !== 6 && restrictedTo === "guest") {
      navigate("/wishlists");
    }
  }, [role_id, navigate, restrictedTo]);

  return (role_id === 6 && restrictedTo === "wishlists") ||
    (role_id !== 6 && restrictedTo === "guest")
    ? null
    : children;
};

export default ProtectedRoute;
