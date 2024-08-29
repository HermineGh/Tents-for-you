import styled from "styled-components";

import { NavLink } from "react-router-dom";

import {
  AiOutlineSetting,
  AiOutlineHome,
  AiOutlineCarryOut,
  AiOutlineUser,
  AiOutlineLineChart,
} from "react-icons/ai";

const NavList = styled.ul``;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1rem;

    color: var(--color-orange-300);
    font-size: 1.1rem;
    font-weight: 500;
    padding: 8px 16px;

    margin: 0 16px;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-orange-400);
    background-color: var(--color-orange-200);
    border-radius: var(--border-radius-sm);
    border-bottom: 1px solid var(--color-orange-100);
  }

  & svg {
    width: 24px;
    height: 24px;
    color: var(--color-orange-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
  }
`;

function MainNav() {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/tents">
            <AiOutlineHome />
            <span>Tents</span>
          </StyledNavLink>
        </li>

        <li>
          <StyledNavLink to="/bookings">
            <AiOutlineCarryOut />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/dashboard">
            <AiOutlineLineChart />
            <span>Statistics</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users">
            <AiOutlineUser />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings">
            <AiOutlineSetting />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
