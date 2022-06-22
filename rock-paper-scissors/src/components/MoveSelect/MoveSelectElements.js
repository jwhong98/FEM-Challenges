import styled from "styled-components";
import bg from "../../images/bg-triangle.svg";

export const MovesContainer = styled.article`
  width: 100%;
  height: 100%;
  max-height: 500px;
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-position: center;
`;

export const MovesWrap = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 1fr;
`;

export const MovesTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MovesBottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
