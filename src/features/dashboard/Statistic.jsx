import styled from "styled-components";

import PropTypes from "prop-types";

const StyledStat = styled.div`
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 16px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
  row-gap: 0.4rem;
`;

const Icon = styled.div`
  width: 56px;
  grid-row: 1/2;
  grid-column: 1/2;
  aspect-ratio: 1/1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Make these dynamic, based on the received prop */
  background-color: var(--color-${(props) => props.color}-50);

  & svg {
    width: 24px;
    height: 24px;
    color: var(--color-${(props) => props.color}-700);
  }
`;

const Title = styled.h5`
  margin: 8px 0;
  align-self: start;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-500);
  grid-column: 2/3;
  grid-row: 1/2;
`;

const Value = styled.p`
  margin-bottom: 8px;
  align-self: end;
  font-size: 1rem;
  line-height: 1;
  font-weight: 600;
  grid-row: 1/-1;
  grid-column: 2/3;
`;

function Statistic({ icon, title, color, value }) {
  return (
    <StyledStat>
      <Icon color={color}>{icon}</Icon>
      <Title>{title}</Title>
      <Value>{value}</Value>
    </StyledStat>
  );
}
Statistic.propTypes = {
  icon: PropTypes.object,
  title: PropTypes.string,
  color: PropTypes.string,
  value: PropTypes.any,
};
export default Statistic;
