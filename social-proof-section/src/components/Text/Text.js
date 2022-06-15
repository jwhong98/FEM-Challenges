import React from "react";
import classes from "./Text.module.css";

const Text = () => {
  return (
    <article className={classes.textContainer}>
      <h1>10,000+ of our users love our products.</h1>
      <p className={classes.textP}>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </article>
  );
};

export default Text;
