import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

// Custom Hooks
import { useLoginStore } from "../Login/useLoginStore";
import useWishActions from "../../Components/CRUDhooks/wishActions";
import { useFlashMessageStore } from "../../Components/FlashMessages/useFlashMessageStore";
import Loading from "../../Components/Partials/Loading";
import { useModalStore } from "../../Components/Modal/useModalStore";
import { useMembers } from "../../Components/Members";
import { Page } from "../../Components/Layout/Page";

// Styles
import { StyledCard } from "../../StyledComponents/Wishlist.Styled";
import { YesButton, NoButton, AddButton, DeleteButton, UpdateButton } from "../../StyledComponents/Buttons";
import Grid from "../../StyledComponents/Grid.Styled";
import Transitions from "../../StyledComponents/Transition";

// Icons
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IoMdAdd } from "react-icons/io";

// ØNSKESEDLER

const Wishes = () => {
  const [isLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { setSuccessMessage, setErrorMessage } = useFlashMessageStore();
  const { role_id, token } = useLoginStore();
  const { setModalPayload, setToggleModal } = useModalStore();

  const members = useMembers();
  const defaultMember = { member: "", name: "", loggedInId: null, route: "" };
  const memberData = Object.values(members).find((m) => m.route === location.pathname) || defaultMember;
  const { name, loggedInId, url } = memberData;

  const {
    fetchWishData,
    wishData,
    handleConfirm,
    deleteWish,
    reservedByToken,
    reservedWishId,
    handleUndo,
    isLoading: isActionLoading,
  } = useWishActions(url, token, setSuccessMessage, setErrorMessage);

  useEffect(() => {
    fetchWishData();
  }, [fetchWishData, url]);

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

  return isActionLoading ? (
    <Loading />
  ) : wishData && wishData.length === 0 ? (
    <Page title={role_id === loggedInId ? "Min ønskeseddel" : `${name}'s ønskeseddel`}>
      {role_id <= 4 ? (
        <>
          <h2>Tilføj det første ønske til ønskelisten!</h2>
          <div className="action_buttons">
            <Link to={`/admin?from=${encodeURIComponent(location.pathname)}`}>
              <AddButton>
                <IoMdAdd className="add" />
              </AddButton>
            </Link>
          </div>
        </>
      ) : (
        <h2>Ønskelisten er tom..</h2>
      )}
    </Page>
  ) : (
    <Transitions>
      <Page title={role_id === loggedInId ? "Min ønskeseddel" : `${name}'s ønskeseddel`}>
        {role_id === loggedInId && (
          <div className="action_buttons">
            <Link to={`/admin?from=${encodeURIComponent(location.pathname)}`}>
              <AddButton>
                <IoMdAdd className="add" />
              </AddButton>
            </Link>
          </div>
        )}

        <Grid>
          {wishData?.map((wish) => {
            const isAllMembersPage = location.pathname === "/allmembers";
            const isOwnWishlist = role_id === loggedInId;
            const canViewReservation = !(isOwnWishlist || isAllMembersPage) || role_id >= 5;
            const isReserved = canViewReservation && wish.købt === 1;
            const isReservedByUser = reservedByToken === token && reservedWishId === wish.id;
            const isAvailableForReservation = wish.købt === 0;
            const canEditOrDelete = isOwnWishlist || !canViewReservation;

            return (
              <StyledCard key={wish.id} style={isReserved && !isOwnWishlist ? { opacity: "30%" } : null}>
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

                  <div>
                    {isReserved && !isOwnWishlist && <p className="bought">Gaven er reserveret</p>}

                    {isReservedByUser && <NoButton onClick={() => handleUndo(wish)}>Fortryd</NoButton>}

                    {canViewReservation && isAvailableForReservation && (
                      <>
                        <p className="status">Gaven er ikke reserveret endnu..</p>
                        <YesButton onClick={() => openModal(wish)}>Reservér</YesButton>
                      </>
                    )}

                    {isLoading && <Loading />}
                  </div>

                  {wish.url && wish.købt === 0 && (
                    <p className="link">
                      Køb gaven{" "}
                      <a href={wish.url} target="_blank" rel="noopener noreferrer">
                        her
                      </a>
                    </p>
                  )}

                  {canEditOrDelete && (
                    <div className="action_buttons">
                      <DeleteButton id="id" onClick={() => deleteWish(wish.id)} value={wish.id}>
                        <RiDeleteBin5Fill className="deleteWish" />
                      </DeleteButton>

                      <UpdateButton
                        id={wish.id}
                        onClick={() => {
                          navigate(`/admin/${wish.id}?from=${encodeURIComponent(location.pathname)}`);
                        }}>
                        <FaRegEdit className="edit" />
                      </UpdateButton>
                    </div>
                  )}
                </figcaption>
              </StyledCard>
            );
          })}
          {role_id === loggedInId && (
            <div className="action_buttons">
              <Link to={`/admin?from=${encodeURIComponent(location.pathname)}`}>
                <AddButton>
                  <IoMdAdd className="add" />
                </AddButton>
              </Link>
            </div>
          )}
        </Grid>
      </Page>
    </Transitions>
  );
};

export default Wishes;
