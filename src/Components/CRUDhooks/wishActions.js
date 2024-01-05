// useWishActions.js
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMembers } from "../Members";
import { useLocation } from "react-router-dom";
import { useFlashMessageStore } from "../FlashMessages/useFlashMessageStore";
import { useLoginStore } from "../../Pages/Login/useLoginStore";

const useWishActions = () => {
  const members = useMembers();
  const { reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [reservedByToken, setReservedByToken] = useState([]);
  const [reservedWishId, setReservedWishId] = useState(null);
  const [wishData, setWishData] = useState(null);
  const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();
  const { token } = useLoginStore();
  const [error, setError] = useState(null);
  const location = useLocation();
  const defaultMember = { member: "", name: "", loggedInId: null, route: "" };
  const memberData = Object.values(members).find((m) => m.route === location.pathname) || defaultMember;
  const { url } = memberData;

  const fetchWishData = async () => {
    try {
      const res = await axios.get(url);

      setWishData(res.data);
    } catch (err) {
      setError(err);
      console.error("Error fetching wish data:", err);
    }
  };

  const handleConfirm = async (wish) => {
    setIsLoading(true);
    const payload = { id: wish.id, købt: 1 };

    try {
      const res = await axios.put(url, payload);
      if (res.data.message === "Product Updated") {
        setWishData((prevWishData) => prevWishData.map((item) => (item.id === wish.id ? { ...item, købt: 1 } : item)));
        setSuccessMessage("Gaven er nu reserveret!");
        setReservedByToken(token);
        setReservedWishId(wish.id);
      } else {
        setErrorMessage("Der skete en fejl.. Prøv igen!");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Der skete en fejl.. Prøv igen!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUndo = async (wish) => {
    setIsLoading(true);
    const payload = { id: wish.id, købt: 0 };
    try {
      const res = await axios.put(url, payload);
      if (res.data.message === "Product Updated") {
        setSuccessMessage("Reservation fortrudt");
        setReservedWishId(wish.id);
        setReservedByToken("");
      } else {
        setErrorMessage("Der skete en fejl.. Prøv igen!");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Der skete en fejl.. Prøv igen!");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteWish = async (wish) => {
    setIsLoading(true);
    const payload = {
      data: {
        id: wish,
      },
    };

    try {
      const res = await axios.delete(`${url}`, payload);

      if (res.data.message === "Ønske slettet!") {
        setWishData((prevWishData) => prevWishData.filter((item) => item.id !== wish));
        reset();
        setSuccessMessage("Ønsket er slettet!");
      } else {
        setErrorMessage("Ønsket kunne ikke slettes. Prøv igen!");
      }
    } catch (error) {
      console.error(error);
      setErrorMessage("Der skete en fejl.. Prøv igen!");
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchWishData, handleConfirm, handleUndo, deleteWish, isLoading, reservedByToken, reservedWishId, wishData, error };
};

export default useWishActions;
