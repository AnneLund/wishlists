import React from "react";
import Grid from "../../StyledComponents/Grid.Styled";
import Card2 from "../../Components/Cards/Card2";
import { useLoginStore } from "../Login/useLoginStore";
import { Link } from "react-router-dom";
import AddButton from "../../Components/Partials/AddButton";
import WishList from "../WishLists/WishList.Styled";
import Transitions from "../../StyledComponents/Transition";

const Mikkel = () => {
  const { role_id } = useLoginStore();

  return (
    <Transitions>
      <WishList>
        <header>
          <h1>Mikkels ønskeseddel</h1>
          {role_id === 2 ? (
            <span>
              <Link to="/adminmikkel">
                <AddButton />
              </Link>
            </span>
          ) : null}
        </header>
        <Grid as="section">
          <Card2 />
        </Grid>
      </WishList>
    </Transitions>
  );
};

export default Mikkel;
