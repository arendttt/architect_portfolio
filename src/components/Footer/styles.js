import styled from "styled-components";

export const Container = styled.div`
  grid-area: footer;

  background: ${({ theme }) => theme.COLORS.BLACK};
  color: ${({ theme }) => theme.COLORS.BACKGROUND};

  font-size: 0.6rem;

  padding: 1.5rem 0.8rem;

  display: flex;
  justify-content: space-between;

  > span {
    display: flex;
    align-items: center;
    gap: 0.1rem;
  }

  > span svg {
    font-size: 0.8rem;
  }

`;