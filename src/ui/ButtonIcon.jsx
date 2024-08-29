import styled from "styled-components";

const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-orange-200);
  }

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-orange-600);
  }
`;

export default ButtonIcon;
