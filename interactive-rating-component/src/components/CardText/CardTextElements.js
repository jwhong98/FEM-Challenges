import styled from "styled-components";

export const TextWrap = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    color: #fff;
    font-size: 1.5rem;
  }

  p {
    color: hsl(217, 12%, 63%);
    line-height: 1.5;
  }
`;
