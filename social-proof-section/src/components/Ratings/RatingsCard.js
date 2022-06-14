import React from "react";
import classes from "./RatingsCard.module.css";
import star from "../../images/icon-star.svg";

const RatingsCard = (props) => {
  return (
    <article className={classes.ratingsCardContainer}>
      <div className={classes.stars}>
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
        <img src={star} alt="" />
      </div>
      <p className={classes.rated}>Rated 5 stars in {props.source}</p>
    </article>
  );
};

export default RatingsCard;
