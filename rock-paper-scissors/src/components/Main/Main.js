import React, { useState } from "react";
import Head from "../Head/Head";
import MoveSelect from "../MoveSelect/MoveSelect";
import Picks from "../Picks/Picks";
import RulesButton from "../RulesButton/RulesButton";
import { paper, scissors, rock } from "../MovesButton/moves";
import RulesModal from "../RulesModal/RulesModal";
import { MainContainer, MainWrapper } from "./MainElements";

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [didPick, setDidPick] = useState(false);
  const [move, setMove] = useState();
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const onButtonClick = () => {
    setIsOpen(true);
  };
  const onMoveHandler = (m) => {
    if (m === "paper") {
      setMove(paper);
    } else if (m === "scissors") {
      setMove(scissors);
    } else {
      setMove(rock);
    }
    setDidPick(true);
  };
  const onPlayAgain = () => {
    setDidPick(false);
  };
  return (
    <>
      {isOpen && <RulesModal onToggle={onToggle} />}
      <MainContainer>
        <MainWrapper>
          <Head />
          {didPick ? (
            <Picks selected={move} onClick={onPlayAgain} />
          ) : (
            <MoveSelect onClick={onMoveHandler} />
          )}
        </MainWrapper>
        <RulesButton onClick={onButtonClick} />
      </MainContainer>
    </>
  );
};

export default Main;
