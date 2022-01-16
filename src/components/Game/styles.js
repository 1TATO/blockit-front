import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 30px auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;

  gap: 2rem;
`;

export const GameContent = styled.div`
  display: flex;
  flex-direction: column;

  box-shadow: 2px 2px 3px 1px black;

  height: 330px;
  width: 350px;

  &:hover {
    filter: brightness(0.9);
  }

  a {
    text-decoration: none;
    color: var(--white);
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;

  span {
    padding: 14px;
  }
`;

export const Icons = styled.div`
  margin-left: auto;

  svg {
    height: 25px;
    width: 30px;
    margin-right: 14px;
    cursor: pointer;
  }
`;
