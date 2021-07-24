import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 5px 0;
  & li {
    :not(:last-child) {
      margin-bottom: 10px;
    }
    & img {
      width: 150px;
    }
    & p {
      margin: 0;
      & span {
        font-weight: 500;
      }
    }
  }
`;
