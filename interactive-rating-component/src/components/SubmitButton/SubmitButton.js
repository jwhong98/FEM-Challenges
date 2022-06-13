import React from "react";
import { Submit } from "./SubmitButtonElements";

const SubmitButton = (props) => {
  return (
    <Submit type="button" onClick={props.onSubmit}>
      submit
    </Submit>
  );
};

export default SubmitButton;
