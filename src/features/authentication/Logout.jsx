import { AiOutlineLogout } from "react-icons/ai";

import ButtonIcon from "../../ui/ButtonIcon";
import { useSignout } from "./useSignout";

function Logout() {
  const { isLoading, signOut } = useSignout();
  isLoading;
  return (
    <ButtonIcon
      style={{ color: "#E39859", fontSize: "1.2rem" }}
      onClick={signOut}
      disabled={isLoading}
    >
      Logout <AiOutlineLogout />
    </ButtonIcon>
  );
}

export default Logout;
