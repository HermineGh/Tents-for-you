import styled from "styled-components";

import PropTypes from "prop-types";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.3rem;

  & input[type="checkbox"] {
    height: 1.6rem;
    width: 1.6rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-orange-400);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-orange-400);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.6rem;
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}
Checkbox.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  children: PropTypes.array,
};
export default Checkbox;
