import styled from 'styled-components';

export const Container = styled.div`
  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);

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
        font-size: 24px;
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
