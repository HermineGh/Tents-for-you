import { AiOutlineMoon, AiOutlineSun } from "react-icons/ai";

import { useDarkMode } from "../context/DarkModeContext";
import ButtonIcon from "./ButtonIcon";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <span>
      <ButtonIcon onClick={toggleDarkMode}>
        {isDarkMode ? <AiOutlineSun /> : <AiOutlineMoon />}
      </ButtonIcon>
    </span>
  );
}

export default DarkModeToggle;
