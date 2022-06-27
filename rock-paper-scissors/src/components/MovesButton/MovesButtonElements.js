import styled from "styled-components";

export const ButtonContainer = styled.article`
  border-radius: 50%;
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  padding: calc(${(props) => props.size} * 0.125);
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
