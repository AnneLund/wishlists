import { useLoginStore } from "../Login/useLoginStore";
import styled from "styled-components";
import React from "react";
import LoginPage from "../Login/LoginPage";
import bg from "../../Assets/Images/bg.jpg";
import rebecca from "../../Assets/Images/rebecca.JPG";
import valdemar from "../../Assets/Images/valdemar.jpg";
import mikkel from "../../Assets/Images/mikkel.PNG";
import anne from "../../Assets/Images/anne.JPG";
import family from "../../Assets/Images/family.jpg";
import { Link } from "react-router-dom";
import Transitions from "../../StyledComponents/Transition";

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
`;

const StyledLink = styled.figure`
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: darken;
  background-color: #000000c6;
  background-size: cover;
  background-position: 20% 15%;
  box-shadow: 5px 5px 5px black;
  height: 5vh;
  padding: 4em 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  margin: 30px auto;
  width: 40%;

  li {
    list-style: none;
    font-size: 20px;
  }

  a {
    color: white;
    text-decoration: underline;
    &:hover {
      color: grey;
      transition: 500ms;
    }
  }

  @media (max-width: 600px) {
    width: 60%;
  }
`;

const Wishlists = () => {
  const { loggedIn, username } = useLoginStore();
  const wishlists = [
    {
      id: 1,
      image: rebecca,
      title: "Rebecca",
      username: "rebecca",
      loggedInUser: username,
    },
    {
      id: 2,
      image: valdemar,
      title: "Valdemar",
      username: "valdemar",
      loggedInUser: username,
    },
    {
      id: 3,
      image: mikkel,
      title: "Mikkel",
      username: "mikkel",
      loggedInUser: username,
    },
    {
      id: 4,
      image: anne,
      title: "Anne",
      username: "anne",
      loggedInUser: username,
    },
    {
      id: 5,
      image: family,
      title: "Vores allesammen",
      username: "allmembers",
      loggedInUser: username,
    },
  ];

  return (
    <Transitions>
      {loggedIn ? (
        <WishListsPage>
          <div>
            {wishlists.map((wishlist) => {
              return (
                <StyledLink style={{ backgroundImage: `url(${wishlist.image})` }} key={wishlist.id}>
                  <Link to={{ pathname: `/${wishlist.username}` }}>
                    <li>{wishlist.loggedInUser === wishlist.title ? <p>Min ønskeseddel</p> : <p>{wishlist.title}'s ønskeseddel</p>}</li>
                  </Link>
                </StyledLink>
              );
            })}
          </div>
        </WishListsPage>
      ) : (
        <LoginPage />
      )}
    </Transitions>
  );
};

export default Wishlists;
