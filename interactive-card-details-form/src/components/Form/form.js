import React from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  const onChange = (e) => {
    const cardNumInput = e.currentTarget;
    if (cardNumInput.value.length < 19) {
      cardNumInput.value = cardNumInput.value
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1 ");
      return true;
    } else {
      return false;
    }
  };

  let count = 0;

  const onSubmitHandler = (e) => {
    const name = document.getElementById("name").value;
    const cvc = document.getElementById("cvc").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const cardNumber = document.getElementById("cardNumber").value;
    e.preventDefault();
    validateName(name);
    validateCard(cardNumber);
    validateCvc(cvc);
    validateDate(month, year);

    props.setName(name);
    props.setCardNum(cardNumber);
    props.setDate(`${month}/${year}`);
    props.setCvc(cvc);

    count === 4 && props.setSubmitted(true);
  };
  const validateName = (n) => {
    if (n === "") {
      document.getElementById("name").setCustomValidity("Invalid");
      document.getElementById("nameError").style.display = "block";
      return false;
    }
    count++;
    return true;
  };

  const validateCard = (cardNum) => {
    if (/^\d{16}$/.test(cardNum.replace(/\s/g, ""))) {
      count++;
      return true;
    }
    document.getElementById("cardNumber").setCustomValidity("Invalid");
    document.getElementById("cardNumError").style.display = "block";
    return false;
  };

  const validateDate = (m, y) => {
    if (/^\d{2}$/.test(m) && /^\d{2}$/.test(y)) {
      count++;
      return true;
    }
    if (!m) {
      document.getElementById("month").setCustomValidity("Invalid");
    }
    document.getElementById("year").setCustomValidity("Invalid");
    document.getElementById("dateError").style.display = "block";
    return false;
  };

  const validateCvc = (cvc) => {
    if (/^\d{3}$/.test(cvc)) {
      count++;
      return true;
    }
    document.getElementById("cvc").setCustomValidity("Invalid");
    document.getElementById("cvcError").style.display = "block";
    return false;
  };
  return (
    <form className={classes.form}>
      <div className={classes.info}>
        <label htmlFor="name">cardholder name</label>
        <input type="text" id="name" placeholder="e.g. Jane Appleseed" />
        <p className={classes.cardError} id="nameError">
          Please enter your name
        </p>
      </div>
      <div className={classes.info}>
        <label htmlFor="cardNumber">card number</label>
        <input
          type="text"
          id="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          onKeyPress={onChange}
        />
        <p className={classes.cardError} id="cardNumError">
          Wrong format, numbers only
        </p>
      </div>

      <div className={classes.cardInfo}>
        <label htmlFor="month">exp. date (mm/yy)</label>
        <label htmlFor="cvc">cvc</label>
        <div className={classes.dateInput}>
          <input type="text" id="month" placeholder="MM" maxLength="2" />
          <input type="text" id="year" placeholder="YY" maxLength="2" />
        </div>
        <input type="text" id="cvc" placeholder="e.g. 123" maxLength="3" />
        <p className={classes.cardError} id="dateError">
          Can't be blank
        </p>
        <p className={classes.cardError} id="cvcError">
          Can't be blank
        </p>
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
