import { Link, Navigate } from "react-router-dom";
import { useLoginStore } from "../Login/useLoginStore";
import styled from "styled-components";
import React from "react";
import bg from "../../Assets/Images/bg.jpg";
import rebecca from "../../Assets/Images/rebecca.jpg";
import valdemar from "../../Assets/Images/valdemar.jpg";
import mikkel from "../../Assets/Images/mikkel.PNG";
import anne from "../../Assets/Images/anne.JPG";
import family from "../../Assets/Images/family.jpg";

const WishListsPage = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: darken;
  background-color: #000000c6;
  background-size: cover;
  min-height: 100vh;
  padding: 4em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 0;

  a {
    color: white;
    text-decoration: underline;
    &:hover {
      color: grey;
      transition: 500ms;
    }
  }

  .rebecca {
    margin: 4em auto 0 auto;
    width: 100%;
    display: flex;
    padding: 1em;
    flex-direction: column;
    align-items: center;
    background-color: #0000005b;

    div {
      background-color: #000000d3;
      background-image: url(${rebecca});
      background-blend-mode: darken;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30vw;
      height: 25vh;
      position: relative;
      color: white;

      &:hover {
        background-color: #2e2e2e9d;
      }
    }

    li {
      list-style: none;
      font-size: 2em;
      font-weight: 600;
      margin: auto;
    }
  }

  .valdemar {
    margin: 2em auto 0 auto;
    width: 100%;
    display: flex;
    padding: 1em;
    flex-direction: column;
    align-items: center;
    background-color: #0000005b;

    div {
      background-color: #000000d3;
      background-image: url(${valdemar});
      background-blend-mode: darken;
      background-position: center 20%;
      background-size: 120%;
      background-size: cover;
      background-repeat: no-repeat;
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30vw;
      height: 25vh;
      position: relative;
      color: white;

      &:hover {
        background-color: #2e2e2e9d;
      }
    }

    li {
      list-style: none;
      font-size: 2em;
      font-weight: 600;
      margin: auto;
    }
  }

  .mikkel {
    margin: 2em auto 0 auto;
    width: 100%;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000005b;

    div {
      background-color: #000000d3;
      background-image: url(${mikkel});
      background-blend-mode: darken;
      background-size: 120%;
      background-position: center 45%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 25vh;
      position: relative;
      color: white;
      width: 30vw;

      &:hover {
        background-color: #2e2e2e9d;
      }
    }

    li {
      list-style: none;
      font-size: 2em;
      font-weight: 600;
      margin: auto;
    }
  }

  .anne {
    padding: 1em;
    margin: 2em auto 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000005b;

    div {
      background-color: #000000d3;
      background-image: url(${anne});
      background-blend-mode: darken;
      background-size: 100%;
      background-position: center 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 25vh;
      position: relative;
      color: white;
      width: 30vw;

      &:hover {
        background-color: #2e2e2e9d;
      }
    }

    li {
      list-style: none;
      font-size: 2em;
      font-weight: 600;
      margin: auto;
    }
  }

  .allmembers {
    padding: 1em;
    margin: 2em auto 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #0000005b;

    div {
      background-color: #000000d3;
      background-image: url(${family});
      background-blend-mode: darken;
      background-size: 100%;
      background-position: center 20%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 25vh;
      position: relative;
      color: white;
      width: 30vw;

      &:hover {
        background-color: #2e2e2e9d;
      }
    }

    li {
      list-style: none;
      font-size: 2em;
      font-weight: 600;
      margin: auto;
    }
  }

  .test {
    margin: 4em auto 0 auto;
    width: 100%;
    display: flex;
    padding: 1em;
    flex-direction: column;
    align-items: center;
    background-color: #0000005b;

    div {
      margin: auto;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30vw;
      height: 25vh;
      position: relative;
      color: white;

      &:hover {
        background-color: #2e2e2e9d;
      }
    }

    li {
      list-style: none;
      font-size: 2em;
      font-weight: 600;
      margin: auto;
    }
  }

  @media screen and (max-width: 600px) {
    .mikkel,
    .anne,
    .valdemar,
    .rebecca,
    .allmembers {
      width: 90vw;
      div {
        height: 15vh;
        width: 80vw;
        text-align: center;
        padding: 0 2em;
      }

      li {
        font-size: 1.5em;
        margin: auto;
      }
    }
  }
`;

const Wishlists = () => {
  const { role_id, loggedIn } = useLoginStore();

  return (
    <>
      {loggedIn ? (
        <WishListsPage>
          {role_id !== 7 ? (
            <>
              <section className="rebecca">
                <Link to="/rebecca">
                  <div>
                    <li>
                      {role_id === 5 ? (
                        <p>Min ønskeseddel</p>
                      ) : (
                        <p>Rebeccas ønskeseddel</p>
                      )}
                    </li>
                  </div>
                </Link>
              </section>
              <section className="valdemar">
                <Link to="/valdemar">
                  <div>
                    <li>
                      {role_id === 6 ? (
                        <p>Min ønskeseddel</p>
                      ) : (
                        <p>Valdemars ønskeseddel</p>
                      )}
                    </li>
                  </div>
                </Link>
              </section>

              <section className="mikkel">
                <Link to="/mikkel">
                  <div>
                    <li>
                      {role_id === 4 ? (
                        <p>Min ønskeseddel</p>
                      ) : (
                        <p>Mikkels ønskeseddel</p>
                      )}
                    </li>
                  </div>
                </Link>
              </section>

              <section className="anne">
                <Link to="/anne">
                  <div>
                    <li>
                      {role_id === 3 ? (
                        <p>Min ønskeseddel</p>
                      ) : (
                        <p>Annes ønskeseddel</p>
                      )}
                    </li>
                  </div>
                </Link>
              </section>

              <section className="allmembers">
                <Link to="/allmembers">
                  <div>
                    <li>
                      {role_id === 5 ? (
                        <p>Vores ønskeseddel</p>
                      ) : (
                        <p>Fælles ønskeseddel</p>
                      )}
                    </li>
                  </div>
                </Link>
              </section>
            </>
          ) : (
            <Navigate to="/test" />
          )}
        </WishListsPage>
      ) : (
        <WishListsPage>
          <h1>
            <Link to="/login">Log ind</Link> med brugernavn "Test" og kode
            "Test321" for at se denne side
          </h1>
        </WishListsPage>
      )}
    </>
  );
};

export default Wishlists;
