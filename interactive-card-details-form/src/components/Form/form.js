import React from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    props.setName(document.getElementById("name").value);
    props.setCvc(document.getElementById("cvc").value);
    props.setDate(
      `${document.getElementById("month").value}/${
        document.getElementById("year").value
      }`
    );
    props.setCardNum(document.getElementById("cardNumber").value);

    props.setSubmitted(true);
  };
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
        <label htmlFor="month">exp. date (mm/yy)</label>
        <label htmlFor="cvc">cvc</label>
        <div className={classes.dateInput}>
          <input type="text" id="month" placeholder="MM" />
          <input type="text" id="year" placeholder="YY" />
        </div>
        <input type="text" id="cvc" placeholder="e.g. 123" />
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
