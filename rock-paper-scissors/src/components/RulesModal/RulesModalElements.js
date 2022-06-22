import styled from "styled-components";

export const DropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 30;
  background-color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
`;

export const RulesContainer = styled.article`
  max-width: 400px;
  max-height: 420px;
  border-radius: 10px;
  background: #fff;
  z-index: 31;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  margin-bottom: auto;
  padding: 30px;
`;

export const RulesHead = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const RulesTitle = styled.h2`
  font-size: 2.25rem;
  color: hsl(229, 25%, 31%);
  text-transform: uppercase;
  line-height: 1;
`;

export const CloseIcon = styled.img`
  cursor: pointer;
`;

export const RulesImg = styled.img``;
