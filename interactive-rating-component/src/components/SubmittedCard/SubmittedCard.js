import React from "react";
import img from "../../images/illustration-thank-you.svg";
import {
  SubmitContainer,
  SubmitScore,
  SubmitText,
} from "./SubmittedCardElements";

const SubmittedCard = (props) => {
  return (
    <SubmitContainer>
      <img src={img} alt="" />
      <SubmitScore>You selected out {props.score} of 5</SubmitScore>
      <SubmitText>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </SubmitText>
    </SubmitContainer>
  );
};

export default SubmittedCard;
