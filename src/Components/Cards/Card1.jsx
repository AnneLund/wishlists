import { useState, useEffect } from "react";
import { StyledCard } from "./Card.Styled";
import NoButton from "../../StyledComponents/DeleteButton";
import YesButton from "../../StyledComponents/YesButton";
import { useForm } from "react-hook-form";
import { useLoginStore } from "../../Pages/Login/useLoginStore";
import { useFlashMessageStore } from "../FlashMessages/useFlashMessageStore";
import Loading from "../Partials/Loading";
import axios from "axios";
import { useModalStore } from "../Modal/useModalStore";
import { useSuccesStore } from "../Succes/useSuccesStore";

const Card1 = () => {
  const { reset } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const { setFlashMessage } = useFlashMessageStore();
  const { role_id } = useLoginStore();
  const { setModalPayload, setToggleModal } = useModalStore();
  const { setSuccesPayload, setToggleSucces } = useSuccesStore();

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://wishlists-api-annelund.vercel.app/member1").then((res) => {
      setData(res.data);
    });
  }, []);

  // const message = () => {
  //   setModalPayload(<div>Hej</div>)
  // }

  return (
    <>
      {isLoading ? <Loading /> : null}

      {data?.map((wish) => {
        return (
          <StyledCard key={wish.id} style={role_id !== 1 && wish.købt === 1 ? { opacity: "30%" } : null}>
            <picture>
              <img src={wish.image} alt="Wish" />
            </picture>
            <figcaption>
              <h3>{wish.title.substring(0, 25) + "..."}</h3>
              <p className="description" style={wish.description === null || wish.description === "" ? { display: "none" } : { display: "block" }}>
                {wish.description}
              </p>

              <div style={role_id === 1 ? { display: "none" } : { display: "block" }}>
                {wish.købt === 1 ? (
                  <div className="bought">Gaven er købt</div>
                ) : (
                  <>
                    <p className="status">Gaven er ikke købt endnu..</p>
                    <YesButton
                      value={wish.id}
                      id="id"
                      onClick={() => {
                        setModalPayload(
                          <div>
                            <h4>Er du sikker på at du vil opfylde dette ønske?</h4>

                            <button
                              onClick={() => {
                                setIsLoading(true);
                                setSuccesPayload();
                                setToggleModal("none");

                                const payload = { id: wish.id, købt: 1 };
                                axios.put(`https://wishlists-api-annelund.vercel.app/member1`, payload).then((res) => {
                                  console.log(res);

                                  if (res.data.message === "Product Updated") {
                                    setFlashMessage("Tak - den bliver hun glad for!");
                                    setIsLoading(false);

                                    setTimeout(() => {
                                      setToggleSucces("none");
                                      window.location.reload();
                                    }, 2000);
                                  } else {
                                    setFlashMessage("Der skete en fejl.. Prøv igen!");
                                  }
                                });
                              }}>
                              Ja
                            </button>

                            <button
                              onClick={() => {
                                setToggleModal("none");
                              }}>
                              Nej
                            </button>
                          </div>
                        );
                      }}>
                      Denne gave vil jeg købe
                    </YesButton>
                    <p className="link">
                      Køb gaven{" "}
                      <a href={wish.url} target="_blank" rel="noopener noreferrer">
                        her
                      </a>
                    </p>
                  </>
                )}
              </div>

              {role_id === 1 ? (
                <div className="update">
                  <NoButton
                    className="deleteWish"
                    id="id"
                    onClick={() => {
                      setIsLoading(true);

                      const payload = {
                        data: {
                          id: wish.id,
                        },
                      };

                      axios.delete(`https://wishlists-api-annelund.vercel.app/member1`, payload).then((res) => {
                        console.log(res);
                        if (res.data.message === "Ønske slettet!") {
                          reset();
                          setFlashMessage("Ønsket er slettet!");
                          setIsLoading(false);
                          window.location.reload();
                        }
                      });
                    }}
                    value={wish.id}>
                    Slet ønske
                  </NoButton>
                </div>
              ) : null}
            </figcaption>
          </StyledCard>
        );
      })}
    </>
  );
};

export default Card1;
