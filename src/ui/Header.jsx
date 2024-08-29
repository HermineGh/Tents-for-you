import styled from "styled-components";

import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/authentication/UserAvatar";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 0.8rem 2rem;
  height: 85px;
  border-bottom: 1px solid var(--color-grey-100);
  position: fixed;
  right: 0;
  display: flex;
  gap: 1.4rem;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  z-index: 5;
`;

function Header() {
  return (
    <StyledHeader>
      <UserAvatar /> <HeaderMenu /> <DarkModeToggle />
    </StyledHeader>
  );
}

export default Header;
