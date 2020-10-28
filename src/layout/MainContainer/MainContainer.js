import React from "react";
import GetStarted from "../GetStarted";
import LifeStyle from "../LifeStyle";
import { Wrapper } from "./MainContainer.css";

const MainContainer = () => {
  return (
    <Wrapper>
      <GetStarted />
      <LifeStyle />
    </Wrapper>
  );
};

export default MainContainer;
