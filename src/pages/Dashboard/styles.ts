import styled, { keyframes } from 'styled-components';
import FiChevronDown from '../../assets/chevron-down.svg';

const appearFromRight = keyframes`
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
  animation: ${appearFromRight} 1s;

  header {
    width: 100%;
    margin-bottom: 48px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #3a3a3a;
  max-width: 600px;
  line-height: 56px;
  margin-bottom: 20px;
`;

export const Filters = styled.div`
  margin-top: 40px;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45%, 1fr));
  grid-gap: 10px;

  div {
    flex: 1;
    height: 70px;
    padding: 0 15px;
    border-radius: 5px;
    color: #3a3a3a;
    background: #fff url(${FiChevronDown}) no-repeat 95% 55%;
  }

  select {
    border: 0;
    height: 70px;
    width: 100%;
    background: transparent;
    overflow: hidden;
  }
`;

export const Searchbar = styled.input`
  margin-top: 10px;
  max-width: 960px;
  min-width: 100%;
  height: 70px;
  padding: 0 15px;
  border: 0;
  border-radius: 5px;
  color: #3a3a3a;
  background: #fff;

  &::placeholder {
    color: #a8a8b3;
  }
`;

export const Senators = styled.div`
  animation: ${appearFromRight} 1.5s;
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 0.5fr));
  }

  h3 {
    animation: ${appearFromRight} 2s;
  }
`;
