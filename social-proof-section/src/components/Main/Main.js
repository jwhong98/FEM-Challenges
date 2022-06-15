import React from "react";
import Ratings from "../Ratings/Ratings";
import Text from "../Text/Text";
import classes from "./Main.module.css";
import { data } from "../../data";
import Card from "../Card/Card";

const Main = () => {
  const createCard = (info) => {
    return <Card img={info.img} name={info.name} review={info.review} />;
  };
  return (
    <main className={classes.main}>
      <section className={classes.mainWrap}>
        <section className={classes.top}>
          <Text />
          <Ratings />
        </section>
        <section className={classes.bottom}>{data.map(createCard)}</section>
      </section>
    </main>
  );
};

export default Main;
