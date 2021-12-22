import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  margin: 30px auto;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  img {
    width: 50%;
    height: 700px;
    margin-right: 15px;
  }

  p {
    max-width: 500px;
    padding: 15px;

    span {
      display: flex;
      flex-direction: column;
      margin-top: 40px;

      & + span {
        margin-top: 10px;
      }
    }
  }
`;