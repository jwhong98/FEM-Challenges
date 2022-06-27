import React from "react";
import { ButtonContainer, ButtonWrap, ButtonImg } from "./MovesButtonElements";

const MovesButton = (props) => {
  return (
    <ButtonContainer
      id={props.id}
      color={props.color}
      size={props.size}
      onClick={props.onClick}
    >
      <ButtonWrap>
        <ButtonImg src={props.img} />
      </ButtonWrap>
    </ButtonContainer>
  );
};

export default MovesButton;
