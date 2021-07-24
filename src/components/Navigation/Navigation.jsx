import { StaledNav, StyledNavLink } from './Navigation.styles';

function Navigation() {
  return (
    <StaledNav>
      <StyledNavLink exact to="/" className="link" activeClassName="activeLink">
        Home
      </StyledNavLink>

      <StyledNavLink to="/movies" className="link" activeClassName="activeLink">
        Movies
      </StyledNavLink>
    </StaledNav>
  );
}

export default Navigation;
