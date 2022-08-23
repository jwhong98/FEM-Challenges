import React from "react";
import Form from "../Form/Form";
import cardBack from "../../images/bg-card-back.png";
import cardFrom from "../../images/bg-card-front.png";
import classes from "./Main.module.css";

const Main = () => {
  return (
    <main>
      <header>
        {/* <img src={cardBack} alt="" className="headerImg" /> */}
      </header>
      <Form />
    </main>
  );
};

export default Main;
