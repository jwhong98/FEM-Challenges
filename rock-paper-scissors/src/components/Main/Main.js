import React from "react";
import Head from "../Head/Head";
import MoveSelect from "../MoveSelect/MoveSelect";
import { MainContainer, MainWrapper } from "./MainElements";

const Main = () => {
  return (
    <MainContainer>
      <MainWrapper>
        <Head />
        <MoveSelect />
      </MainWrapper>
    </MainContainer>
  );
};

export default Main;
