import React, { useState, useEffect } from "react";
import Advice from "../Advice/Advice";
import classes from "./Card.module.css";
import divider from "../../images/pattern-divider-desktop.svg";
import AdviceButton from "../AdviceButton/AdviceButton";

const Card = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) => {
        setData(actualData);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      });
  }, []);
  return (
    <>
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {data && (
        <section className={classes.card}>
          <h2>advice #{data.slip.id}</h2>
          <Advice advice={data.slip.advice} />
          <img src={divider} alt="" />
          <AdviceButton />
        </section>
      )}
    </>
  );
};

export default Card;
