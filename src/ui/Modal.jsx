import styled from "styled-components";

import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";

import { AiOutlineClose } from "react-icons/ai";

import PropTypes from "prop-types";

import { useOutsideClick } from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey-0);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
  padding: 3rem 3.4rem;
  transition: all 0.5s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--backdrop-color);
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 16px;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 32px;
    height: 32px;
    color: var(--color-grey-500);
  }
`;
//Create Context
const ModalContext = createContext();

//create Parent
function Modal({ children }) {
  const [openedModalName, setOpenedModalName] = useState("");

  const close = () => setOpenedModalName("");
  const open = setOpenedModalName;
  return (
    <ModalContext.Provider value={{ close, open, openedModalName }}>
      {children}
    </ModalContext.Provider>
  );
}
Modal.propTypes = {
  children: PropTypes.any,
};

//create children
function Open({ children, opens: openWindName }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, {
    onClick: () => open(openWindName),
  });
}

function Window({ children, name }) {
  const { close, openedModalName } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (name !== openedModalName) return null;
  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <AiOutlineClose />
        </Button>
        <div>{cloneElement(children, { onClickModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}
Window.propTypes = {
  children: PropTypes.any,
  name: PropTypes.string,
};

//connect children with parent
Modal.Open = Open;
Modal.Window = Window;

export default Modal;
