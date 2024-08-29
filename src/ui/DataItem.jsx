import styled from "styled-components";

import PropTypes from "prop-types";

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.3rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 1.2rem;
    height: 1.2rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}
DataItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  children: PropTypes.any,
};
export default DataItem;
