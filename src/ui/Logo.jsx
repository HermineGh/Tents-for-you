import styled from "styled-components";

import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
  padding: 0;
`;

const Img = styled.img`
  height: 8rem;
  width: auto;
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  const src = isDarkMode ? "/logo.png" : "/logo.png";
  return <StyledLogo>{<Img src={src} alt="Logo" />}</StyledLogo>;
}

export default Logo;
