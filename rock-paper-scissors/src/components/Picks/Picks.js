import React from "react";
import MovesButton from "../MovesButton/MovesButton";
import { PicksContainer, SelectedPick, SelectedHead } from "./PicksElements";
import { rock } from "../MovesButton/moves";

const Picks = (props) => {
  const playerMove = props.selected.id;
  console.log(playerMove);
  return (
    <PicksContainer>
      <SelectedPick>
        <SelectedHead>you picked </SelectedHead>
        <MovesButton {...props.selected} size="300px" />
      </SelectedPick>
      <SelectedPick>
        <SelectedHead>the house picked</SelectedHead>
        <MovesButton {...rock} size="300px" />
      </SelectedPick>
    </PicksContainer>
  );
};

export default Picks;
