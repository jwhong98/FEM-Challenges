import React from "react";
import CardText from "../CardText/CardText";
import RatingButton from "../RatingButton/RatingButton";
import StarBadge from "../StarBadge/StarBadge";
import SubmitButton from "../SubmitButton/SubmitButton";
import { CardContainer } from "./CardElements";

const Card = (props) => {
  return (
    <CardContainer>
      <StarBadge />
      <CardText />
      <RatingButton scoreHandler={props.scoreHandler} />
      <SubmitButton onSubmit={props.submitHandler} />
    </CardContainer>
  );
};

export default Card;
