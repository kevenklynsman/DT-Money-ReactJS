import styled from "styled-components";
import { darken } from "polished";

export const TransictionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

export const RadioBox = styled.button`
  height: 4rem;
  border: 1px solid var(--secondary-shape);
  border-radius: 0.25rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: ${darken(0.1, "#202024")};
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`;
