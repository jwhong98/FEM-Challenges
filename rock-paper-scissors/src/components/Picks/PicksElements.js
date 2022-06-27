import styled from "styled-components";

export const PicksContainer = styled.section`
  width: 100%;
  height: 100%;
  max-height: 500px;
  max-width: 1000px;
  /* display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-content: center; */
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const Winner = styled.article`
  width: 250px;
  color: #fff;
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const PlayAgainBtn = styled.button`
  width: 100%;
  font-size: 1rem;
  letter-spacing: 2px;
  padding: 17px 0;
  border: none;
  outline: none;
  border-radius: 10px;
  text-transform: uppercase;
  background: #fff;
  color: hsl(229, 25%, 31%);
  line-height: 1;
  cursor: pointer;

  &:hover {
    color: hsl(349, 71%, 52%);
  }
`;
