import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
  max-width: 600px;
  line-height: 56px;
  margin-top: 48px;
  margin-bottom: 20px;
`;

export const Filters = styled.div`
  margin-top: 40px;
  max-width: 100%;
  display: flex;

  select {
    flex: 1;
    height: 70px;
    padding: 0 15px;
    border: 0;
    border-radius: 5px;
    max-width: 50%;
    color: #3a3a3a;
    border: 2px solid #fff;

    & + select {
      margin-left: 10px;
    }

    option {
      text-align: center;
    }
  }
`;

export const Searchbar = styled.div`
  margin-top: 10px;
  max-width: 100%;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 15px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    background: #3e6892;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#3e6892')};
    }
  }
`;

export const Senators = styled.div`
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 20px;
  a {
    max-width: 50%;
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;

    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }

    div {
      margin: 0 16px;

      > strong {
        font-size: 26px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;

        strong {
          color: #3a3a3a;
        }
      }
    }
    p + svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
