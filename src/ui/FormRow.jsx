import styled from "styled-components";

import PropTypes from "prop-types";

const StyledFormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1.2fr 2fr 1.2fr;
  gap: 1rem;

  padding: 1rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1rem;
  color: var(--color-red-700);
`;

function FormRow({ label, children, error }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}
FormRow.propTypes = {
  label: PropTypes.string,
  children: PropTypes.any,
  error: PropTypes.string,
};
export default FormRow;
