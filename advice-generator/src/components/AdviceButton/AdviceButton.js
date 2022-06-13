import React from "react";
import classes from "./AdviceButton.module.css";
import dice from "../../images/icon-dice.svg";

const AdviceButton = () => {
  //temporary solution
  const onClickHandler = () => {
    window.location.reload(false);
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <img src={dice} alt="dice icon" />
    </button>
  );
};

export default AdviceButton;
