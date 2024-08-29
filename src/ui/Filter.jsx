import { useSearchParams } from "react-router-dom";

import styled, { css } from "styled-components";

import PropTypes from "prop-types";

const StyledFilter = styled.div`
  border: 1px solid var(--color-grey-0);
  border-bottom: var(--color-orange-400);
  background-color: var(--color-orange-100);
  border-radius: var(--border-radius-sm);
  padding: 0.4rem;
  display: flex;
  gap: 0.4rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-50);
  border-color: var(--color-orange-200);
  border-bottom: var(--color-orange-400);
  color: var(--color-orange-700);

  ${(props) =>
    props.active &&
    css`
      background-color: var(--color-orange-500);
      color: var(--color-orange-100);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1rem;
  /* To give the same height as select */
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;

  &:hover:not(:disabled) {
    background-color: var(--color-orange-400);
    color: var(--color-orange-100);
  }
`;
function Filter({ type, values }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currFilter = searchParams.get(type);
  function handleClick(val) {
    searchParams.set(type, val);
    if (searchParams.get("page")) searchParams.set("page", 1);
    setSearchParams(searchParams);
  }
  return (
    <StyledFilter>
      {values.map((curr) => (
        <FilterButton
          onClick={() => handleClick(curr.value)}
          key={curr.value}
          active={curr.value === currFilter ? "active" : ""}
          disabled={curr.value === currFilter}
        >
          {curr.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}
Filter.propTypes = {
  type: PropTypes.string,
  values: PropTypes.array,
};
export default Filter;
