import React from "react";
import classes from "./Advice.module.css";

const Advice = (props) => {
  return <article className={classes.advice}>{props.advice}</article>;
};

export default Advice;
