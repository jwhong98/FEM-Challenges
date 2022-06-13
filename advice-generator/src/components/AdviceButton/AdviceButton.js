import React from "react";
import classes from "./AdviceButton.module.css";
import dice from "../../images/icon-dice.svg";

const AdviceButton = (props) => {
  const onClickHandler = () => {
    fetch(`https://api.adviceslip.com/advice`).then((response) => {
      return response.json().then((actualData) => {
        props.onClick(actualData);
      });
    });
  };
  return (
    <button className={classes.button} onClick={onClickHandler}>
      <img src={dice} alt="dice icon" />
    </button>
  );
};

export default AdviceButton;
