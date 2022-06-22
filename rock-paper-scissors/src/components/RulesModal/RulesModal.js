import React from "react";
import ReactDOM from "react-dom";
import ruleImg from "../../images/image-rules.svg";
import close from "../../images/icon-close.svg";
import {
  DropContainer,
  RulesContainer,
  RulesHead,
  RulesTitle,
  CloseIcon,
  RulesImg,
} from "./RulesModalElements";

const Drop = (props) => {
  return <DropContainer onClick={props.onToggle}></DropContainer>;
};

const RulesModal = (props) => {
  const portalElement = document.getElementById("overlay");
  return (
    <>
      {ReactDOM.createPortal(
        <>
          <Drop onToggle={props.onToggle} />
          <RulesContainer>
            <RulesHead>
              <RulesTitle>rules</RulesTitle>
              <CloseIcon src={close} onClick={props.onToggle} />
            </RulesHead>
            <RulesImg src={ruleImg} />
          </RulesContainer>
        </>,
        portalElement
      )}
    </>
  );
};

export default RulesModal;
