import styled from "styled-components";

import { createContext, useContext } from "react";

import PropTypes from "prop-types";

const StyledTable = styled.div`
  border: 1px solid var(--color-grey-200);

  font-size: 1.1rem;
  background-color: var(--color-grey-0);
  border-radius: 7px;
  overflow: hidden;
`;

const CommonRow = styled.header`
  display: grid;
  grid-template-columns: ${(props) => props.columns};
  column-gap: 2.2rem;
  align-items: center;
  transition: none;
  font-size: 1rem;
`;

const StyledHeader = styled(CommonRow)`
  padding: 1.6rem 2rem;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-orange-400);
`;

const StyledBody = styled.section`
  margin: 0.4rem 0;
`;

const StyledRow = styled(CommonRow)`
  padding: 1.2rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Footer = styled.footer`
  background-color: var(--color-grey-50);
  display: flex;
  justify-content: center;
  padding: 1.2rem;

  &:not(:has(*)) {
    display: none;
  }
`;

const Empty = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  margin: 2.2rem;
`;

//context
const TableContext = createContext();

//parent
function Table({ children, columns }) {
  return (
    <TableContext.Provider value={{ columns }}>
      <StyledTable>{children}</StyledTable>
    </TableContext.Provider>
  );
}
Table.propTypes = {
  children: PropTypes.any,
  columns: PropTypes.string,
};

//children
function Header({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledHeader role="row" columns={columns} as="header">
      {children}
    </StyledHeader>
  );
}
Header.propTypes = {
  children: PropTypes.array,
};

function Row({ children }) {
  const { columns } = useContext(TableContext);
  return (
    <StyledRow role="row" columns={columns} as="div">
      {children}
    </StyledRow>
  );
}
Row.propTypes = {
  children: PropTypes.any,
};

function Body({ data, render }) {
  if (!data.length) return <Empty>There is no data to show</Empty>;
  return <StyledBody>{data.map(render)}</StyledBody>;
}
Body.propTypes = {
  data: PropTypes.array,
  render: PropTypes.any,
};

//connect
Table.Header = Header;
Table.Row = Row;
Table.Body = Body;
Table.Footer = Footer;

export default Table;
