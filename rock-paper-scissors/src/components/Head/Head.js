import React from "react";
import logo from "../../images/logo.svg";
import { HeadContainer } from "./HeadElements";
import ScoreCounter from "../ScoreCounter/ScoreCounter";

const Head = () => {
  return (
    <HeadContainer>
      <img src={logo} alt="rock paper scissors" />
      <ScoreCounter />
    </HeadContainer>
  );
};

export default Head;
