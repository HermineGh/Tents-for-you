import styled from "styled-components";

import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Header from "./Header";

const StyledAppLayout = styled.div`
  display: flex;
  justify-content: flex-end;
  min-height: 100vh;
  width: 100%;
  margin: 0 auto;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  width: 75%;
  padding: 32px 40px;
  margin-left: auto;
  margin-top: 85px;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
