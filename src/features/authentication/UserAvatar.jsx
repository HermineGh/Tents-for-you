/* eslint-disable no-unused-vars */
import styled from "styled-components";

import { useUser } from "../authentication/useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: var(--color-grey-600);
`;

const Avatar = styled.img`
  display: block;
  width: 4rem;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-200);
`;
function UserAvatar() {
  //Couldn't update avatar if supabase added token for limited use
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;
  return (
    <StyledUserAvatar>
      {/* 
      <Avatar src={avatar || "default-user.jpg"} alt="Avatar" /> */}
      <Avatar src="default-user.jpg" alt="Avatar" />
      <span>{fullName}</span>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
