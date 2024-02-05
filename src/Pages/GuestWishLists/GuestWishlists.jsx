import React from "react";
import Transitions from "../../StyledComponents/Transition";
import { WishListsPage, StyledLink } from "../WishLists/Wishlists";
import { useMembers } from "../../Components/Members";
import { useLoginStore } from "../Login/useLoginStore";
import { Link } from "react-router-dom";

const GuestWishLists = () => {
  const members = useMembers();
  const { loggedIn, username, } = useLoginStore();

  return (
    <Transitions>
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
    </Transitions>
  );
};

export default GuestWishLists;
