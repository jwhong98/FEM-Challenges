import React from "react";
import MovesButton from "../MovesButton/MovesButton";
import {
  MovesContainer,
  MovesWrap,
  MovesTopRow,
  MovesBottomRow,
} from "./MoveSelectElements";
import { rock, paper, scissors } from "../MovesButton/moves";

const MoveSelect = () => {
  return (
    <MovesContainer>
      <MovesWrap>
        <MovesTopRow>
          <MovesButton {...paper} />
          <MovesButton {...scissors} />
        </MovesTopRow>
        <MovesBottomRow>
          <MovesButton {...rock} />
        </MovesBottomRow>
      </MovesWrap>
    </MovesContainer>
  );
};

export default MoveSelect;
