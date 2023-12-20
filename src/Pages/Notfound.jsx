import React from "react";
import { Page } from "../Components/Layout/Page";
import Transitions from "../StyledComponents/Transition";

const Notfound = () => {
  return (
    <Transitions>
      <Page title={`Siden blev ikke fundet`} />;
    </Transitions>
  );
};

export default Notfound;
