import styled from "styled-components";

import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useSearchParams } from "react-router-dom";

import PropTypes from "prop-types";

const StyledPagination = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const P = styled.p`
  font-size: 1.1rem;
  margin-left: 0.8rem;

  & span {
    font-weight: 500;
  }
`;

const PaginationButton = styled.button`
  background-color: ${(props) =>
    props.active ? " var(--color-orange-500)" : "var(--color-orange-100)"};
  color: ${(props) =>
    props.active ? " var(--color-orange-100)" : "var(--color-orange-500)"};
  border: none;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  font-size: 1.1rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  padding: 0.6rem 1rem;
  transition: all 0.3s;

  &:has(span:last-child) {
    padding-left: 0.4rem;
  }

  &:has(span:first-child) {
    padding-right: 0.4rem;
  }

  & svg {
    height: 24px;
    width: 24px;
  }

  &:hover:not(:disabled) {
    background-color: var(--color-orange-400);
    color: var(--color-orange-100);
  }
`;
export const pageSteps = 5;

function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  if (count <= 1) return null;
  const currPage = Number(searchParams.get("page")) || 1;

  // const currRange = (Math.trunc((currPage - 1) / 10) + 1) * pageSteps;
  // const curPages = currRange > count ? count : currRange;

  const curResultFrom = Math.ceil((currPage - 1) * pageSteps + 1);
  const resultTo = pageSteps * currPage;
  const curResultTo = resultTo > count ? count : resultTo;

  function prevPage() {
    if (currPage !== 1) searchParams.set("page", currPage - 1);
    setSearchParams(searchParams);

    setSearchParams(searchParams);
  }
  function nextPage() {
    if (currPage !== count) searchParams.set("page", currPage + 1);
    setSearchParams(searchParams);
  }
  return (
    <StyledPagination>
      <PaginationButton onClick={prevPage} disabled={currPage === 1}>
        <AiOutlineDoubleLeft />
        <span>Preview</span>
      </PaginationButton>

      <P>
        Results <span> {curResultFrom} </span> to <span> {curResultTo} </span>{" "}
        of <span> {count} </span>
      </P>
      <PaginationButton onClick={nextPage} disabled={curResultTo === count}>
        <span>Next</span>
        <AiOutlineDoubleRight />
      </PaginationButton>
    </StyledPagination>
  );
}
Pagination.propTypes = {
  count: PropTypes.number,
};
export default Pagination;
