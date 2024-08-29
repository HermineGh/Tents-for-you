import styled from "styled-components";

import { Link } from "react-router-dom";

import PropType from "prop-types";

import { Flag } from "../../ui/Flag";
import Tag from "../../ui/Tag";
import Button from "../../ui/Button";
import CheckoutButton from "./CheckoutButton";

const StyledTodayItem = styled.li`
  display: grid;
  grid-template-columns: 4.5rem 1.1rem 5rem 3.5rem 5rem;
  gap: 1rem;
  align-items: center;

  font-size: 0.8rem;
  padding: 0.7rem 0;
  border-bottom: 1px solid var(--color-grey-100);

  &:first-child {
    border-top: 1px solid var(--color-grey-100);
  }
`;

const Guest = styled.div`
  font-weight: 500;
`;
function TodayItem({ activity }) {
  const { id, status, guests, numbNight } = activity;
  return (
    <StyledTodayItem>
      {status === "unconfirmed" && <Tag type="green">Arrived</Tag>}
      {status === "checked-in" && <Tag type="blue">Departed</Tag>}
      <Flag src={guests.countryFlag} alt={`Flag of ${guests.countryFlag}`} />
      <Guest>{guests.fullName}</Guest>
      <div>{numbNight} nights</div>
      {status === "unconfirmed" && (
        <Button
          size="small"
          variations="primary"
          as={Link}
          to={`/checkin/${id}`}
        >
          check in
        </Button>
      )}
      {status === "checked-in" && (
        <CheckoutButton bookingId={id}></CheckoutButton>
      )}
    </StyledTodayItem>
  );
}
TodayItem.propTypes = {
  activity: PropType.object,
  id: PropType.number,
  status: PropType.string,
  guests: PropType.object,
  numbNight: PropType.number,
};
export default TodayItem;
