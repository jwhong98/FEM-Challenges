import React from "react";
import MovesButton from "../MovesButton/MovesButton";
import {
  PicksContainer,
  SelectedPick,
  SelectedHead,
  Winner,
  PlayAgainBtn,
} from "./PicksElements";
import { rock, paper, scissors } from "../MovesButton/moves";

const Picks = (props) => {
  let winner = "you win";
  const makeMove = () => {
    const move = [rock, paper, scissors];
    const made = Math.floor(Math.random() * 3);
    return move[made];
  };

  const playerMove = props.selected.id;
  const computerMove = makeMove();

  const checkWinner = (player, computer) => {
    console.log("player move:" + player);
    console.log("computer move:" + computer);

    if (computer === player) {
      winner = "draw";
    }
    if (player === "paper" && computer === "scissors") {
      winner = "you lose";
    }
    if (player === "scissors" && computer === "rock") {
      winner = "you lose";
    }

    if (player === "rock" && computer === "paper") {
      winner = "you lose";
    }
    return winner;
  };

  checkWinner(playerMove, computerMove.id);

  return (
    <PicksContainer>
      <SelectedPick>
        <SelectedHead>you picked </SelectedHead>
        <MovesButton {...props.selected} size="300px" />
      </SelectedPick>
      <Winner>
        {winner}
        <PlayAgainBtn onClick={props.onClick}>play again</PlayAgainBtn>
      </Winner>
      <SelectedPick>
        <SelectedHead>the house picked</SelectedHead>
        <MovesButton {...computerMove} size="300px" />
      </SelectedPick>
    </PicksContainer>
  );
};

export default Picks;
