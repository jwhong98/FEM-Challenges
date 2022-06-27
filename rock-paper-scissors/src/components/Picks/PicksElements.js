import styled from "styled-components";

export const PicksContainer = styled.section`
  width: 100%;
  height: 100%;
  max-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const SelectedPick = styled.article`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const SelectedHead = styled.p`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 2px;
  font-size: 1.5rem;
  top: 0;
`;
