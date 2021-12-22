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
`;

export const Information = styled.div`
  max-width: 500px;
  padding: 15px;
  max-height: 700px;

  p {
      span {
        display: flex;
        flex-direction: column;
        margin-top: 40px;

        & + span {
          margin-top: 10px;
        }
      }
    }

  button {
    margin-top: 300px;
    margin-right: 15px;
  }
`;