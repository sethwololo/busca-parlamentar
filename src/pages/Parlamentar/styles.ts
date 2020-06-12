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
    font-size: 18px;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #3d3d4d;
    transition: 0.2s;

    &:hover {
      color: ${shade(0.2, '#666')};
    }

    svg {
      margin-right: 4px;
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
  animation: ${appearFromLeft} 1.5s;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300, 1fr));
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
  }
`;
