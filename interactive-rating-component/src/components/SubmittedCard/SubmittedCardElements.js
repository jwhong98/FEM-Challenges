import styled from "styled-components";

export const SubmitContainer = styled.section`
  height: 400px;
  width: 400px;
  background: hsl(216, 12%, 8%);
  border-radius: 30px;
  z-index: 20;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const SubmitScore = styled.article`
  color: hsl(25, 97%, 53%);
  background-color: hsl(213, 19%, 18%);
  padding: 0.5rem 1.25rem;
  border-radius: 20px;
`;

export const SubmitText = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.75rem;

  h1 {
    color: #fff;
    font-size: 2rem;
  }

  p {
    color: hsl(217, 12%, 63%);
    line-height: 1.5;
  }
`;
