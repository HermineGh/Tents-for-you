import styled from "styled-components";

import PropTypes from "prop-types";

const StyledSelect = styled.select`
  font-size: 1.2rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid
    ${(props) =>
      props.type === "white"
        ? "var(--color-grey-100)"
        : "var(--color-grey-300)"};
  border-radius: var(--border-radius-sm);
  background-color: #fff;
  font-weight: 500;
  box-shadow: var(--shadow-sm);
`;

function Select({ options, curValue, onChange }) {
  return (
    <StyledSelect value={curValue} onChange={onChange}>
      {options.map((curr) => (
        <option value={curr.value} key={curr.value}>
          {curr.label}
        </option>
      ))}
    </StyledSelect>
  );
}
Select.propTypes = {
  options: PropTypes.array,
  curValue: PropTypes.string,
  onChange: PropTypes.func,
};
export default Select;
