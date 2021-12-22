import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 30px auto;

  h1 {
    margin-bottom: 25px;
  }

  button {
    margin-left: 80%;
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
    width: 80px;
    margin-right: 15px;
  }

  p {
    margin-right: 75%;
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
    margin: 0 auto;

    &:hover {
      filter: brightness(0.90);
    }
  }
`;
