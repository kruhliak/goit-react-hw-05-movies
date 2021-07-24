import styled from '@emotion/styled';

export const ThumbMovieInfo = styled.div`
  display: flex;
  padding-bottom: 5px;

  border-bottom: 2px solid rgba(167, 167, 167, 0.74);

  & img {
    margin-right: 15px;
  }

  & ul {
    display: flex;

    & li {
      :not(:last-child) {
        margin-right: 10px;
      }
    }
  }
`;

export const ThumbInformation = styled.div`
  border-bottom: 2px solid rgba(167, 167, 167, 0.74);

  & a {
    font-weight: 500;
    color: #2a363b;
    font-size: 15px;

    :hover,
    :focus {
      color: #a58d07;
    }

    :not(:last-child) {
      margin-right: 10px;
    }
  }
`;
