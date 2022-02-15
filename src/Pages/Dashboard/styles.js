import styled from 'styled-components';

export const Container = styled.div`
  height: 90vh;
  align-items: center;
  justify-content: center;
  padding: 2rem 2rem;

  button {
    margin-left: 350px;
  }
`;

export const List = styled.div`
  max-width: 1120px;
  margin: 30px auto;

  h1 {
    margin-bottom: 25px;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;

  border: 2px solid rgba(0,0,0,0.59);
  padding:12px;

  width: 100%;
  height: 125px;

  margin-bottom: 15px;

  img {
    width: 220px;
    margin-right: 15px;
  }

  p {
    width: 400px;
    margin-right: 35%;
  }
`;

export const Option = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 0;

  span {
    margin-bottom: 15px;
  }

  svg {
    cursor: pointer;
    margin: 0;

    &:hover {
      filter: brightness(0.90);
    }

    & + svg {
      margin-left: 15px;
    }
  }
`;