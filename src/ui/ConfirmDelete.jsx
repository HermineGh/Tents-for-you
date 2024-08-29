import styled from "styled-components";

import PropTypes from "prop-types";

import Button from "./Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resource, onConfirm, disabled, onClickModal }) {
  // function handleConfirmClick() {}

  return (
    <StyledConfirmDelete>
      <Heading type="h3">Delete {resource}</Heading>
      <p>
        Are you sure you want to delete this {resource} permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          onClick={onClickModal}
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button variation="danger" onClick={onConfirm} disabled={disabled}>
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}
ConfirmDelete.propTypes = {
  resource: PropTypes.string,
  onConfirm: PropTypes.func,
  disabled: PropTypes.bool,
  onClickModal: PropTypes.func,
};
export default ConfirmDelete;
