import styled from "styled-components";

export const Rating = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .selected {
    color: #fff;
    background: hsl(217, 12%, 63%);
  }
`;

export const RButton = styled.button`
  background: hsl(213, 19%, 18%);
  color: hsl(217, 12%, 63%);
  border-radius: 100%;
  height: 50px;
  width: 50px;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: hsl(25, 97%, 53%);
  }
`;
