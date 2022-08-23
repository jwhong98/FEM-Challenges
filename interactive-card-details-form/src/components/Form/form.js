import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  return (
    <form className={classes.form}>
      <div className={classes.info}>
        <label htmlFor="name">cardholder name</label>
        <input type="text" id="name" placeholder="e.g. Jane Appleseed" />
      </div>
      <div className={classes.info}>
        <label htmlFor="cardNumber">card number</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
        />
      </div>

      <div className={classes.cardInfo}>
        <label htmlFor="date">exp. date (mm/yy)</label>
        <label htmlFor="cvc">cvc</label>
        <div className={classes.dateInput}>
          <input type="text" id="date" placeholder="MM" />
          <input type="text" id="date" placeholder="YY" />
        </div>
        <input type="text" id="cvc" placeholder="e.g. 123" />
      </div>
      <button type="submit" className={classes.submit}>
        Confirm
      </button>
    </form>
  );
};

export default Form;
