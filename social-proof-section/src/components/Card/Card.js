import React from "react";
import classes from "./Card.module.css";
import img from "../../images/image-colton.jpg";

const Card = (props) => {
  return (
    <article className={classes.cardContainer}>
      <section className={classes.reviewer}>
        <img src={img} alt="" />
        <article className={classes.reviewerInfo}>
          <p className={classes.name}>Colton Smith</p>
          <p className={classes.verified}>Verified Buyer</p>
        </article>
      </section>
      <section className={classes.review}>
        " We needed the same printed design as the one we had ordered a week
        prior. Not only did they find the original orderm but we also received
        it in time. Excellent! "
      </section>
    </article>
  );
};

export default Card;
