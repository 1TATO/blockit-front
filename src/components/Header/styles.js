import styled from 'styled-components';

export const Container = styled.header`
  background: var(--header-color);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 2rem;
  display: flex;
  align-items: center;

  > img {
    width: 100px;
    height: 75px;
    margin-right: 10rem;
  }

  button {
    font-size: 1rem;
    color: var(--gray);
    background: none;
    border: 0;
    margin-right: 5rem;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
