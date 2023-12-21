import { useModalStore } from "../Modal/useModalStore";
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import { YesButton, NoButton } from "../../StyledComponents/Buttons";
import axios from "axios";
import Loading from "../Partials/Loading";
import { useFlashMessageStore } from "../FlashMessages/useFlashMessageStore";
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NonMember = ({ wish, handleConfirm }) => {
  const { setModalPayload, setToggleModal } = useModalStore();
  const [isLoading, setIsLoading] = useState(false);
  const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();
  const { role_id, token } = useLoginStore();
  const [data, setData] = useState([]);
  const [reservedWishId, setReservedWishId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [reservedByToken, setReservedByToken] = useState([]);

  const members = useMemo(
    () => ({
      1: { member: "member1", name: "Anne", loggedInId: 1, route: "/anne" },
      2: { member: "member2", name: "Mikkel", loggedInId: 2, route: "/mikkel" },
      3: { member: "member3", name: "Rebecca", loggedInId: 3, route: "/rebecca" },
      4: { member: "member4", name: "Valdemar", loggedInId: 4, route: "/valdemar" },
      5: { member: "allmembers", name: "Vores allesammen", loggedInId: 6, route: "/allmembers" },
    }),
    []
  );

  const defaultMember = { member: "", name: "", loggedInId: null, route: "" };

  const routeData = Object.values(members).find((m) => m.route === location.pathname) || defaultMember;

  const { member, name, loggedInId, route } = routeData;

  console.log("role_id:", role_id, "loggedinid:", loggedInId);

  const isRouteValid = Object.values(members).some((m) => m.route === location.pathname);

  const openModal = (wish) => {
    setModalPayload(
      <div>
        <h4>Er du sikker på at du vil reservere dette ønske?</h4>
        <YesButton
          onClick={() => {
            setToggleModal("none");
            handleConfirm(wish);
          }}>
          Ja
        </YesButton>
        <NoButton
          onClick={() => {
            setToggleModal("none");
          }}>
          Nej
        </NoButton>
      </div>
    );
  };

  const handleUndo = (wish) => {
    const undoPayload = { id: wish.id, købt: 0 };

    axios
      .put(`https://wishlists-api-annelund.vercel.app/${member}`, undoPayload)
      .then((res) => {
        if (res.data.message === "Product Updated") {
          setSuccessMessage("Reservation fortrudt");
          setData((prevData) => prevData.map((item) => (item.id === wish.id ? { ...item, købt: 0 } : item)));
          setReservedWishId(wish.id);
          setReservedByToken("");
          setIsLoading(false);
        } else {
          setErrorMessage("Der skete en fejl.. Prøv igen!");
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("Der skete en fejl.. Prøv igen!");
        setIsLoading(false);
      });
  };
  return (
    <div style={role_id === loggedInId && route.pathname === "/allmembers" ? { display: "none" } : { display: "block" }}>
      {wish.købt === 1 && <p className="bought">Gaven er reserveret</p>}

      {reservedByToken === token && reservedWishId === wish.id && <NoButton onClick={() => handleUndo(wish)}>Fortryd</NoButton>}

      {wish.købt === 0 && (
        <>
          <p className="status">Gaven er ikke reserveret endnu..</p>
          <YesButton onClick={() => openModal(wish)}>Reservér</YesButton>
        </>
      )}

      {isLoading && <Loading />}
    </div>
  );
};

export default NonMember;
