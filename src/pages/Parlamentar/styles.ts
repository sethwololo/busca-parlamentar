import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  animation: ${appearFromLeft} 1s;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: 0.2s;

    &:hover {
      color: ${shade(0.2, '#666')};
    }

    svg {
      margin-right: 4px;
    }
  }
`;

export const SenatorInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;
    justify-content: left;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      > strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
      }

      a {
        font-size: 16px;
        text-decoration: none;
        color: #3d3d4d;
      }
    }
  }

  ul {
    display: grid;
    list-style: none;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap: 5px;
    margin-top: 40px;
    display: grid;

    li {
      /* & + li {
        margin-left: 80px;
      } */

      strong {
        display: block;
        font-size: 26px;
        color: #3d3d4d;
      }

      span {
        display: block;
        margin-top: 4px;
        color: #6c6c80;
      }
    }
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
  max-width: 600px;
  line-height: 56px;
  margin-top: 20px;
`;

export const Comissions = styled.div`
  margin-top: 20px;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
  }
`;

export const ComissionCard = styled.div`
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

    p {
      font-size: 16px;
      color: #a8a8b3;
      margin-top: 4px;

      strong {
        font-size: 18px;
        color: #3d3d4d;
      }
    }
  }
`;
