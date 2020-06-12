import styled from 'styled-components';

export const Container = styled.section`
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
