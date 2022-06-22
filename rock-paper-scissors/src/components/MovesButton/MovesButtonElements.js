import styled from "styled-components";

export const ButtonContainer = styled.article`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  padding: 25px;
  background-image: ${(props) => props.color};
`;

export const ButtonWrap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonImg = styled.img`
  width: 45%;
  height: auto;
`;
