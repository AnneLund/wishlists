import React from "react";
import CardAll from "../../Components/Cards/CardAll";
import { useLoginStore } from "../Login/useLoginStore";
import AddButton from "../../Components/Partials/AddButton";
import { Link } from "react-router-dom";
import WishList from "../WishLists/WishList.Styled";
import Grid from "../../StyledComponents/Grid.Styled";
import Transitions from "../../StyledComponents/Transition";

const AllMembers = () => {
  const { role_id } = useLoginStore();

  return (
    <Transitions>
      <WishList>
        <header>
          <h1>Fælles ønskeseddel</h1>
          {role_id < 5 ? (
            <span>
              <Link to="/adminallmembers">
                <AddButton />
              </Link>
            </span>
          ) : null}
        </header>
        <Grid as="section">
          <CardAll />
        </Grid>
      </WishList>
    </Transitions>
  );
};

export default AllMembers;
