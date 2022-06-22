import React, { useState } from "react";
import Head from "../Head/Head";
import MoveSelect from "../MoveSelect/MoveSelect";
import RulesButton from "../RulesButton/RulesButton";

import RulesModal from "../RulesModal/RulesModal";
import { MainContainer, MainWrapper } from "./MainElements";

const Main = () => {
  const [isOpen, setIsOpen] = useState(true);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };
  const onButtonClick = () => {
    setIsOpen(true);
  };
  return (
    <>
      {isOpen && <RulesModal onToggle={onToggle} />}
      <MainContainer>
        <MainWrapper>
          <Head />
          <MoveSelect />
        </MainWrapper>
        <RulesButton onClick={onButtonClick} />
      </MainContainer>
    </>
  );
};

export default Main;
