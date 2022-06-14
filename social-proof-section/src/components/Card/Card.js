import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <article className={classes.cardContainer}>
      <section className={classes.reviewer}>
        <img src={props.img} alt="" />
        <article className={classes.reviewerInfo}>
          <p className={classes.name}>{props.name}</p>
          <p className={classes.verified}>Verified Buyer</p>
        </article>
      </section>
      <section className={classes.review}>" {props.review} "</section>
    </article>
  );
};

export default Card;
