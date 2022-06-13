import "./App.css";
import React, { useState } from "react";
import Card from "./components/Card/Card";
import SubmittedCard from "./components/SubmittedCard/SubmittedCard";

function App() {
  const [submit, setSubmit] = useState(false);
  const [score, setScore] = useState("");

  const submitHandler = () => {
    setSubmit(!submit);
  };

  const scoreHandler = (s) => {
    setScore(s);
  };

  return (
    <>
      {submit ? (
        <SubmittedCard score={score} />
      ) : (
        <Card submitHandler={submitHandler} scoreHandler={scoreHandler} />
      )}
    </>
  );
}

export default App;
