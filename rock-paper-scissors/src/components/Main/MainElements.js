import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%));
  position: relative;
`;

export const MainWrapper = styled.section`
  width: 100%;
  max-width: 800px;
  height: 100%;
  margin: auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
`;
