import styled from '@emotion/styled';

export const List = styled.ul`
  margin: 5px 0;
  & li {
    :not(:last-child) {
      margin-bottom: 5px;
    }
    & a {
      font-weight: 500;
      color: #2a363b;
      font-size: 15px;

      :hover,
      :focus {
        color: #a58d07;
      }
    }
  }
`;
