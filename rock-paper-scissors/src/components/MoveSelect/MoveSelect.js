import React from "react";
import MovesButton from "../MovesButton/MovesButton";
import {
  MovesContainer,
  MovesWrap,
  MovesTopRow,
  MovesBottomRow,
} from "./MoveSelectElements";
import { rock, paper, scissors } from "../MovesButton/moves";

const MoveSelect = (props) => {
  const onClickHandler = (e) => {
    props.onClick(e.currentTarget.id);
  };
  return (
    <MovesContainer>
      <MovesWrap>
        <MovesTopRow>
          <MovesButton {...paper} size="200px" onClick={onClickHandler} />
          <MovesButton {...scissors} size="200px" onClick={onClickHandler} />
        </MovesTopRow>
        <MovesBottomRow>
          <MovesButton {...rock} size="200px" onClick={onClickHandler} />
        </MovesBottomRow>
      </MovesWrap>
    </MovesContainer>
  );
};

export default MoveSelect;
