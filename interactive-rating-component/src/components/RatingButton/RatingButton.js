import React, { useState } from "react";
import { Rating, RButton } from "./RatingButtonElements";

const RatingButton = (props) => {
  const [selectedButton, setSelectedButton] = useState("");
  const onClickHandler = (e) => {
    setSelectedButton(e.target.dataset.value);
    props.scoreHandler(e.target.dataset.value);
  };
  return (
    <Rating>
      <RButton
        className={selectedButton === "1" ? "selected" : ""}
        data-value="1"
        onClick={onClickHandler}
      >
        1
      </RButton>
      <RButton
        className={selectedButton === "2" ? "selected" : ""}
        data-value="2"
        onClick={onClickHandler}
      >
        2
      </RButton>
      <RButton
        className={selectedButton === "3" ? "selected" : ""}
        data-value="3"
        onClick={onClickHandler}
      >
        3
      </RButton>
      <RButton
        className={selectedButton === "4" ? "selected" : ""}
        data-value="4"
        onClick={onClickHandler}
      >
        4
      </RButton>
      <RButton
        className={selectedButton === "5" ? "selected" : ""}
        data-value="5"
        onClick={onClickHandler}
      >
        5
      </RButton>
    </Rating>
  );
};

export default RatingButton;
