import React from "react";
import Ratings from "../Ratings/Ratings";
import Text from "../Text/Text";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main className={classes.main}>
      <section className={classes.top}>
        <Text />
        <Ratings />
      </section>
      <section className={classes.bottom}></section>
    </main>
  );
};

export default Main;
