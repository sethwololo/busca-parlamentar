import styled, { keyframes } from 'styled-components';

const appearFromDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  animation: ${appearFromDown} 0.75s;
  background: #fff;
  border-radius: 5px;
  padding: 24px;
  display: flex;
  text-decoration: none;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
    padding: 5px auto;
    margin-top: auto;
    p {
      font-size: 16px;
      color: #a8a8b3;

      strong {
        font-size: 18px;
        color: #3d3d4d;
      }
    }

    & + div {
      margin-top: 0;
    }
  }
`;
