import styled from "styled-components";

import { createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import PropTypes from "prop-types";

import { AiOutlineHolder } from "react-icons/ai";

import { useOutsideClick } from "../hooks/useOutsideClick";

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-orange-200);
  }

  & svg {
    width: 24px;
    height: 24px;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: fixed;

  background-color: var(--color-grey-0);

  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);

  right: ${(props) => props.position.x}px;
  top: ${(props) => props.position.y}px;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0.8rem 1.6rem;
  font-size: 1.1rem;
  transition: all 0.2s;
  color: var(--color-grey-700);
  display: flex;
  align-items: center;
  gap: 1rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 24px;
    height: 24px;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

//context
const MenuContext = createContext();

//Parent
function Menus({ children }) {
  const [isOpenId, setIsOpenId] = useState("");
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const close = () => setIsOpenId("");
  const open = setIsOpenId;

  return (
    <MenuContext.Provider
      value={{ isOpenId, setIsOpenId, open, close, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}
Menus.propTypes = {
  children: PropTypes.any,
};
//Children
function Toggle({ id }) {
  const { close, isOpenId, open, setPosition } = useContext(MenuContext);

  function handleClick(e) {
    e.stopPropagation();
    const btnInfo = e.target.closest("button").getBoundingClientRect();
    setPosition({
      x: window.innerWidth - btnInfo.width - btnInfo.x,
      y: btnInfo.y - btnInfo.height,
    });
    isOpenId === "" || id !== isOpenId ? open(id) : close();
  }
  return (
    <StyledToggle onClick={handleClick}>
      <AiOutlineHolder />
    </StyledToggle>
  );
}
Toggle.propTypes = {
  id: PropTypes.number,
};

function List({ children, id }) {
  const { position, isOpenId, close } = useContext(MenuContext);

  const ref = useOutsideClick(close, false);

  if (isOpenId !== id) return null;

  return createPortal(
    <StyledList ref={ref} position={position}>
      {children}
    </StyledList>,
    document.body
  );
}
List.propTypes = {
  id: PropTypes.number,
  children: PropTypes.any,
};

function Button({ children, icon, onClick, disabled }) {
  const { close } = useContext(MenuContext);
  function handleClick() {
    onClick?.();
    close();
  }
  return (
    <li>
      <StyledButton onClick={handleClick} disabled={disabled}>
        {icon} {children}
      </StyledButton>
    </li>
  );
}
Button.propTypes = {
  icon: PropTypes.any,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

//Connect

Menus.Toggle = Toggle;
Menus.Button = Button;
Menus.List = List;
Menus.Menu = Menu;

export default Menus;
