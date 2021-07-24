import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  :hover,
  :focus {
    transform: scale(1.05);
  }

  &.link {
    display: inline-block;
    font-weight: 500;
    color: #2a363b;
    font-size: 18px;

    :not(:last-child) {
      margin-right: 20px;
    }
  }

  &.activeLink {
    color: #2196f3;
  }
`;

export const StaledNav = styled.nav`
  margin-bottom: 5px;
  border-bottom: 4px solid rgba(167, 167, 167, 0.74);
`;
