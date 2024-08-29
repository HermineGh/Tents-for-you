import styled from "styled-components";

import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader.jsx";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 1rem 16px;
  border-right: 1px solid var(--color-grey-100);
  width: 25%;
  min-width: 300px;
  height: 100vh;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  left: 0;
  z-index: 6;
`;

function Sidebar() {
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}

export default Sidebar;
