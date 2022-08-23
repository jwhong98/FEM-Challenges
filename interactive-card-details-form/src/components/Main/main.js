import React, { useState } from "react";
import Form from "../Form/Form";
import logo from "../../images/card-logo.svg";
import classes from "./Main.module.css";
import ThankYou from "../ThankYou/ThankYou";

const Main = () => {
  const [submitted, setSubmitted] = useState(true);
  return (
    <main>
      <header>
        <div className={classes.cardBack}>
          <p className={classes.cvc}>000</p>
        </div>
        <div className={classes.cardFront}>
          <img className={classes.cardLogo} src={logo} alt="" />
          <div className={classes.cardFrontInfo}>
            <p className={classes.cardNum}>0000 0000 0000 0000</p>
            <div className={classes.sub}>
              <p className={classes.cardName}>jane appleseed</p>
              <p className={classes.cardExp}>00/00</p>
            </div>
          </div>
        </div>
      </header>
      {submitted ? <ThankYou /> : <Form />}
    </main>
  );
};

export default Main;
