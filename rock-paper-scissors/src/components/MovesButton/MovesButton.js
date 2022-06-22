import React from "react";
import { ButtonContainer, ButtonWrap, ButtonImg } from "./MovesButtonElements";

const MovesButton = (props) => {
  return (
    <ButtonContainer color={props.color}>
      <ButtonWrap>
        <ButtonImg src={props.img} />
      </ButtonWrap>
    </ButtonContainer>
  );
};

export default MovesButton;