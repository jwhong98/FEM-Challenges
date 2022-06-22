import React from "react";
import { ScoreContainer, ScoreTitle, ScoreCount } from "./ScoreCounterElements";

const ScoreCounter = () => {
  return (
    <ScoreContainer>
      <ScoreTitle>score</ScoreTitle>
      <ScoreCount>12</ScoreCount>
    </ScoreContainer>
  );
};

export default ScoreCounter;
