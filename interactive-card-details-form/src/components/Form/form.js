import React from "react";
import classes from "./Form.module.css";

const Form = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form className={classes.form}>
      <div className={classes.info}>
        <label htmlFor="name">cardholder name</label>
        <input
          type="text"
          id="name"
          placeholder="e.g. Jane Appleseed"
          required
        />
      </div>
      <div className={classes.info}>
        <label htmlFor="cardNumber">card number</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          required
        />
      </div>

      <div className={classes.cardInfo}>
        <label htmlFor="date">exp. date (mm/yy)</label>
        <label htmlFor="cvc">cvc</label>
        <div className={classes.dateInput}>
          <input type="text" id="date" placeholder="MM" required />
          <input type="text" id="date" placeholder="YY" required />
        </div>
        <input type="text" id="cvc" placeholder="e.g. 123" required />
      </div>
      <button
        type="submit"
        className={classes.submit}
        onClick={onSubmitHandler}
      >
        Confirm
      </button>
    </form>
  );
};

export default Form;
