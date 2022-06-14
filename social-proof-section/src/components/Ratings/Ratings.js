import React from "react";
import classes from "./Ratings.module.css";
import RatingsCard from "./RatingsCard";

const Ratings = () => {
  return (
    <article className={classes.ratings}>
      <RatingsCard source="Reviews" />
      <RatingsCard source="Report Guru" />
      <RatingsCard source="BestTech" />
    </article>
  );
};

export default Ratings;
