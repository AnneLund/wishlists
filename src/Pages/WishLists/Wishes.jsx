import { useState, useEffect, useMemo, useCallback } from "react";
import { YesButton, NoButton, DeleteButton, UpdateButton } from "../../StyledComponents/Buttons";
import { useForm } from "react-hook-form";
import { useLoginStore } from "../Login/useLoginStore";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import Loading from "../../Components/Partials/Loading";
import axios from "axios";
import { useModalStore } from "../../Components/Modal/useModalStore";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { StyledCard } from "../../StyledComponents/Wishlist.Styled";
import { Page } from "../../Components/Layout/Page";
import Grid from "../../StyledComponents/Grid.Styled";
import Transitions from "../../StyledComponents/Transition";
import AddButton from "../../Components/Partials/AddButton";
import NonMember from "../../Components/Wishlist/NotAmember";

// ØNSKESEDLER

const Wishes = () => {
  const { reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();
  const { role_id, token } = useLoginStore();
  const { setModalPayload, setToggleModal } = useModalStore();
  const [data, setData] = useState([]);
  const [reservedByToken, setReservedByToken] = useState([]);
  const [reservedWishId, setReservedWishId] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

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

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Check if the route exists in members
      if (!isRouteValid) {
        navigate("/notfound");
        return;
      }

      const response = await axios.get(`https://wishlists-api-annelund.vercel.app/${member}`);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isRouteValid, member, navigate]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleConfirm = (wish) => {
    setIsLoading(true);

    const payload = { id: wish.id, købt: 1 };

    axios
      .put(`https://wishlists-api-annelund.vercel.app/${member}`, payload)
      .then((res) => {
        if (res.data.message === "Product Updated") {
          setData((prevData) => prevData.map((item) => (item.id === wish.id ? { ...item, købt: 1 } : item)));
          setSuccessMessage("Gaven er nu reserveret!");
          setReservedByToken(token);
          setReservedWishId(wish.id);
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

  return isLoading ? (
    <Loading />
  ) : (
    <Transitions>
      <Page title={role_id === loggedInId ? "Min ønskeseddel" : `${name}'s ønskeseddel`}>
        <Link to="/admin">
          <AddButton />
        </Link>
        <Grid>
          {isLoading && <Loading />}
          {data?.map((wish) => {
            return (
              <StyledCard key={wish.id} style={role_id !== loggedInId && wish.købt === 1 ? { opacity: "30%" } : null}>
                <picture>
                  <img src={wish.image} alt="Wish" />
                </picture>
                <figcaption>
                  <h3>{wish.title.substring(0, 25) + "..."}</h3>
                  <p
                    className="description"
                    style={wish.description === null || wish.description === "" ? { display: "none" } : { display: "block" }}>
                    {wish.description}
                  </p>
                  <NonMember
                    wish={wish}
                    handleConfirm={handleConfirm}
                    members={members}
                    route={route}
                    routeData={routeData}
                    member={member}
                    name={name}
                    loggedInId={loggedInId}
                  />

                  {/* <div style={role_id === loggedInId && route.pathname === "/allmembers" ? { display: "none" } : { display: "block" }}>
                    {wish.købt === 1 && <p className="bought">Gaven er reserveret</p>}

                    {reservedByToken === token && reservedWishId === wish.id && <NoButton onClick={() => handleUndo(wish)}>Fortryd</NoButton>}

                    {wish.købt === 0 && (
                      <>
                        <p className="status">Gaven er ikke reserveret endnu..</p>
                        <YesButton onClick={() => openModal(wish)}>Reservér</YesButton>
                      </>
                    )}

                    {isLoading && <Loading />}
                  </div> */}

                  {wish.url && wish.købt === 0 && (
                    <p className="link">
                      Køb gaven{" "}
                      <a href={wish.url} target="_blank" rel="noopener noreferrer">
                        her
                      </a>
                    </p>
                  )}

                  {role_id === member.loggedInId && route.pathname === "/allmembers" ? (
                    <div className="update">
                      <DeleteButton
                        className="deleteWish"
                        id="id"
                        onClick={() => {
                          setIsLoading(true);
                          const payload = {
                            data: {
                              id: wish.id,
                            },
                          };

                          axios.delete(`https://wishlists-api-annelund.vercel.app/${member}`, payload).then((res) => {
                            if (res.data.message === "Ønske slettet!") {
                              reset();
                              setSuccessMessage("Ønsket er slettet!");
                              setIsLoading(false);
                              window.location.reload();
                            }
                          });
                        }}
                        value={wish.id}>
                        Slet ønske
                      </DeleteButton>
                      <UpdateButton
                        id={wish.id}
                        onClick={() => {
                          navigate(`/admin/${wish.id}`);
                        }}>
                        Redigér
                      </UpdateButton>
                    </div>
                  ) : null}
                </figcaption>
              </StyledCard>
            );
          })}
          <Link to="/admin">
            <AddButton />
          </Link>
        </Grid>
      </Page>

      <div></div>
    </Transitions>
  );
};

export default Wishes;
