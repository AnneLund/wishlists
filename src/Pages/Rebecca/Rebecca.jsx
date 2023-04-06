import React from "react";
import Card3 from "../../Components/Cards/Card3";
import { useLoginStore } from "../Login/useLoginStore";
import WishList from "../WishLists/WishList.Styled";
import AddButton from "../../Components/Partials/AddButton";
import { Link } from "react-router-dom";
import Grid from "../../StyledComponents/Grid.Styled";
import Transitions from "../../StyledComponents/Transition";

const Rebecca = () => {
  const { role_id } = useLoginStore();

  return (
    <Transitions>
      <WishList>
        <header>
          <h1>Rebeccas ønskeseddel</h1>
          {role_id === 1 || role_id === 2 || role_id === 3 ? (
            <span>
              <Link to="/adminrebecca">
                <AddButton />
              </Link>
            </span>
          ) : null}
        </header>
        <Grid as="section">
          <Card3 />
        </Grid>
      </WishList>
    </Transitions>
  );
};

export default Rebecca;
