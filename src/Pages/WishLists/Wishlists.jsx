import { useLoginStore } from "../Login/useLoginStore";
import styled from "styled-components";
import React from "react";
import LoginPage from "../Login/LoginPage";
import bg from "../../Assets/Images/bg.jpg";
import { Link } from "react-router-dom";
import Transitions from "../../StyledComponents/Transition";
import { useMembers } from "../../Components/Members";

export const WishListsPage = styled.section`
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

export const StyledLink = styled.figure`
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
  const members = useMembers();
  const { loggedIn, username, } = useLoginStore();

  return (
    <Transitions>
      {loggedIn ? (
        <WishListsPage>
          <div>
            {members.map((wishlist, i) => {
              return (
                <StyledLink key={i} style={{ backgroundImage: `url(${wishlist.image})` }}>
                  <Link to={{ pathname: `/${wishlist.username}` }}>
                    <li>{wishlist.name === username ? <p>Min ønskeseddel</p> : <p>{wishlist.name}'s ønskeseddel</p>}</li>
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
