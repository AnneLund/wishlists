import React from "react";
import { Page } from "../Components/Layout/Page";
import Transitions from "../StyledComponents/Transition";

const Denied = () => {
  return (
    <Transitions>
      <Page>
        <h2>Du har ikke tilladelse til at se denne side.</h2>
        </Page>;
    </Transitions>
  );
};

export default Denied;
