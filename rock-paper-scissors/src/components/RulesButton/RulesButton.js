import React from "react";
import { RulesBtn } from "./RulesButtonElements";

const RulesButton = (props) => {
  return <RulesBtn onClick={props.onClick}>rules</RulesBtn>;
};

export default RulesButton;
